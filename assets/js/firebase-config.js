/* ==========================================================
   M-FLEGER · Firebase-Konfiguration
   ----------------------------------------------------------
   Die EINZIGE Stelle, an der die Projektdaten stehen.
   Alle Seiten (Login, Navigation, Profil, Likes, Favoriten)
   lesen von hier.

   Woher kommen die Werte?
   Firebase Console → Projekteinstellungen (Zahnrad) → Allgemein
   → "Meine Apps" → Web-App → "SDK-Einrichtung und -Konfiguration"
   → Option "Config".

   Diese Werte sind KEIN Geheimnis: Sie stehen bei jeder
   Firebase-Website öffentlich im Browser. Geschützt werden
   deine Daten durch die Firestore-Regeln (firestore.rules).

   Unten stehen die Werte deines bestehenden Projekts
   "m-fleger-web", die bisher schon in login.html eingetragen
   waren. Bitte einmal mit der Console abgleichen.
   ========================================================== */

export const firebaseConfig = {
    apiKey: "AIzaSyBccpK7f0yed4wCOvvDrzZaSIRuIz7DaIE",
    authDomain: "m-fleger-web.firebaseapp.com",
    projectId: "m-fleger-web",
    storageBucket: "m-fleger-web.firebasestorage.app",
    messagingSenderId: "714771931411",
    appId: "1:714771931411:web:b9ffa44c25e3af0e2c3ae6",
    measurementId: "G-2CXLWPY5L9"
};
