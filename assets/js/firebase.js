/* ==========================================================
   M-FLEGER · firebase.js
   Gemeinsamer Firebase-Kern für alle Seiten (ES-Modul).
   Startet Firebase genau einmal und stellt Login-Status,
   Favoriten und Likes bereit. Läuft komplett im kostenlosen
   Spark-Plan: nur Authentication + Cloud Firestore, kein
   Server, keine Cloud Functions.

   Datenmodell in Firestore
   ------------------------
   users/{uid}/favoriten/{postId}   { postId, createdAt }
   likes/{postId}_{uid}             { postId, uid, createdAt }
   likeCounts/{postId}              { count }

   postId = Datum des Artikels als JJJJMMTTHHMM (wie bisher).
   Die Regeln dazu stehen in /firestore.rules.
   ========================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    deleteUser
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    writeBatch,
    serverTimestamp,
    increment
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
auth.languageCode = "de";

/* ---------- Login-Status ---------- */

// Löst auf, sobald Firebase weiß, ob jemand eingeloggt ist (einmalig)
export const authReady = new Promise((resolve) => {
    const stop = onAuthStateChanged(auth, (user) => { stop(); resolve(user); });
});

export function onUser(callback) {
    return onAuthStateChanged(auth, callback);
}

export async function currentUser() {
    await authReady;
    return auth.currentUser;
}

// Schreiben dürfen nur bestätigte Konten (Google-Konten gelten als bestätigt)
export function isVerified(user) {
    return !!(user && user.emailVerified);
}

export function logout() {
    return signOut(auth);
}

/* ---------- Favoriten ---------- */

const favRef = (uid, postId) => doc(db, "users", uid, "favoriten", String(postId));

export async function getFavoriteIds(uid) {
    const snap = await getDocs(collection(db, "users", uid, "favoriten"));
    return new Set(snap.docs.map((d) => d.id));
}

export async function isFavorite(uid, postId) {
    return (await getDoc(favRef(uid, postId))).exists();
}

export async function setFavorite(uid, postId, on) {
    const batch = writeBatch(db);
    if (on) batch.set(favRef(uid, postId), { postId: String(postId), createdAt: serverTimestamp() });
    else batch.delete(favRef(uid, postId));
    await batch.commit();
}

/* ---------- Likes ---------- */

const likeRef = (uid, postId) => doc(db, "likes", `${postId}_${uid}`);
const countRef = (postId) => doc(db, "likeCounts", String(postId));

// Alle Like-Zahlen mit einer Abfrage (nur Artikel mit mindestens einem Like haben ein Dokument)
export async function getLikeCounts() {
    const snap = await getDocs(collection(db, "likeCounts"));
    const counts = new Map();
    snap.forEach((d) => counts.set(d.id, Math.max(0, d.data().count || 0)));
    return counts;
}

export async function getMyLikeIds(uid) {
    const snap = await getDocs(query(collection(db, "likes"), where("uid", "==", uid)));
    return new Set(snap.docs.map((d) => d.data().postId));
}

export async function hasLiked(uid, postId) {
    return (await getDoc(likeRef(uid, postId))).exists();
}

// Like-Dokument und Zähler werden immer gemeinsam (atomar) geändert –
// die Regeln lassen den Zähler nur zusammen mit dem passenden Like-Dokument zu.
export async function setLike(uid, postId, on) {
    const batch = writeBatch(db);
    if (on) {
        batch.set(likeRef(uid, postId), { postId: String(postId), uid, createdAt: serverTimestamp() });
        batch.set(countRef(postId), { count: increment(1) }, { merge: true });
    } else {
        batch.delete(likeRef(uid, postId));
        batch.update(countRef(postId), { count: increment(-1) });
    }
    await batch.commit();
}

/* ---------- Konto löschen ---------- */

// Firebase verlangt für das Löschen einen frischen Login (ca. 5 Minuten)
export function needsFreshLogin(user) {
    const last = Date.parse(user?.metadata?.lastSignInTime || 0);
    return !last || Date.now() - last > 4.5 * 60 * 1000;
}

export async function deleteAccountAndData(user) {
    const uid = user.uid;

    // 1. Favoriten löschen
    const favs = await getDocs(collection(db, "users", uid, "favoriten"));
    for (let i = 0; i < favs.docs.length; i += 400) {
        const batch = writeBatch(db);
        favs.docs.slice(i, i + 400).forEach((d) => batch.delete(d.ref));
        await batch.commit();
    }

    // 2. Likes zurücknehmen (jeweils mit Zähler, damit die Zahlen stimmen)
    const likes = await getMyLikeIds(uid);
    for (const postId of likes) await setLike(uid, postId, false);

    // 3. Konto selbst löschen
    await deleteUser(user);
}

/* ---------- Verständliche Fehlermeldungen ---------- */

const MESSAGES = {
    "auth/invalid-email": "Diese E-Mail-Adresse ist ungültig.",
    "auth/missing-password": "Bitte gib ein Passwort ein.",
    "auth/weak-password": "Das Passwort ist zu schwach – bitte mindestens 6 Zeichen.",
    "auth/email-already-in-use": "Für diese E-Mail-Adresse gibt es bereits ein Konto.",
    "auth/invalid-credential": "E-Mail-Adresse oder Passwort ist falsch.",
    "auth/wrong-password": "E-Mail-Adresse oder Passwort ist falsch.",
    "auth/user-not-found": "E-Mail-Adresse oder Passwort ist falsch.",
    "auth/user-disabled": "Dieses Konto wurde deaktiviert.",
    "auth/too-many-requests": "Zu viele Versuche. Bitte warte kurz und versuche es dann erneut.",
    "auth/network-request-failed": "Keine Verbindung zum Server. Bitte prüfe deine Internetverbindung.",
    "auth/popup-closed-by-user": "Das Google-Fenster wurde geschlossen, bevor die Anmeldung fertig war.",
    "auth/cancelled-popup-request": "Das Google-Fenster wurde geschlossen, bevor die Anmeldung fertig war.",
    "auth/popup-blocked": "Dein Browser hat das Google-Fenster blockiert. Bitte erlaube Pop-ups für diese Seite.",
    "auth/unauthorized-domain": "Diese Domain ist in Firebase noch nicht freigegeben (Authentication → Einstellungen → Autorisierte Domains).",
    "auth/operation-not-allowed": "Diese Anmeldemethode ist in Firebase noch nicht aktiviert.",
    "auth/requires-recent-login": "Bitte melde dich aus Sicherheitsgründen kurz neu an und versuche es dann erneut.",
    "permission-denied": "Keine Berechtigung. Bitte melde dich (erneut) an und bestätige deine E-Mail-Adresse.",
    "unavailable": "Der Server ist gerade nicht erreichbar. Bitte versuche es gleich noch einmal."
};

export function fehlertext(err) {
    return MESSAGES[err?.code] || err?.message || "Unbekannter Fehler.";
}
