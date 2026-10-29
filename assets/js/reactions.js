/* ==========================================================
   M-FLEGER · reactions.js  (ES-Modul, Firebase)
   Likes, Favoriten und Toast-Meldungen – gemeinsam für
   Startseite, Blog-Übersicht und Artikelseiten.

   Einbinden mit:
     {% include toast.html %}
     <script type="module" src="/assets/js/reactions.js"></script>

   Markup: Elemente mit data-post-id, darin .like-btn / .fav-btn
   mit onclick="likeUmschalten(id, this)" bzw. favoritUmschalten(...)
   ========================================================== */
import {
    authReady, currentUser, isVerified,
    getLikeCounts, getMyLikeIds, setLike, hasLiked,
    getFavoriteIds, setFavorite, isFavorite,
    fehlertext
} from "./firebase.js";

/* ---------- Darstellung ---------- */
function setLikeState(btn, liked, count) {
    btn.classList.toggle('is-on', liked);
    btn.setAttribute('aria-pressed', String(liked));
    btn.innerHTML = (liked ? '💖' : '🤍') + ' <span class="like-counter">' + count + '</span> Likes';
}

function setFavState(btn, fav) {
    btn.classList.toggle('is-on', fav);
    btn.setAttribute('aria-pressed', String(fav));
    btn.innerHTML = fav ? '❤️ Favorisiert' : '⭐ Favorit';
}

function pop(btn) {
    if (window.MFMotion) window.MFMotion.pop(btn);
}

/* ---------- Toast ---------- */
let bannerTimer;
function zeigeBanner(type, title, message) {
    const banner = document.getElementById('custom-banner');
    if (!banner) return;
    const icons = { success: '❤️', info: 'ℹ️', error: '❌' };
    const tints = {
        success: 'rgba(74, 222, 128, 0.6)',
        info: 'rgba(96, 165, 250, 0.6)',
        error: 'rgba(248, 113, 113, 0.65)'
    };
    document.getElementById('banner-icon').innerText = icons[type] || icons.error;
    document.getElementById('banner-title').innerText = title;
    document.getElementById('banner-message').innerText = message;
    banner.style.borderColor = tints[type] || tints.error;
    banner.classList.add('is-shown');
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => banner.classList.remove('is-shown'), 4000);
}

/* ---------- Anmeldung prüfen ---------- */
// Gibt den Nutzer zurück oder leitet zur Hinweisseite weiter
async function requireUser() {
    const user = await currentUser();
    if (!user) {
        window.location.href = "/anmeldung-erforderlich.html";
        return null;
    }
    if (!isVerified(user)) {
        zeigeBanner('error', 'E-Mail nicht bestätigt', 'Bitte bestätige zuerst deine E-Mail-Adresse über den Link in deinem Postfach.');
        return null;
    }
    return user;
}

/* ---------- Daten beim Laden ---------- */
async function datenLaden() {
    const holders = document.querySelectorAll('[data-post-id]');
    if (!holders.length) return;
    const hasLikes = !!document.querySelector('.like-btn');

    // Like-Zahlen sind öffentlich – auch ohne Login
    if (hasLikes) {
        try {
            const counts = await getLikeCounts();
            holders.forEach((h) => {
                const c = h.querySelector('.like-counter');
                if (c) c.innerText = counts.get(h.getAttribute('data-post-id')) || 0;
            });
        } catch (err) { console.error('Like-Zahlen:', err); }
    }

    const user = await authReady;
    if (!user) return;

    try {
        const favIds = await getFavoriteIds(user.uid);
        holders.forEach((h) => {
            const btn = h.querySelector('.fav-btn');
            if (btn && favIds.has(h.getAttribute('data-post-id'))) setFavState(btn, true);
        });

        if (hasLikes) {
            const likedIds = await getMyLikeIds(user.uid);
            holders.forEach((h) => {
                const btn = h.querySelector('.like-btn');
                if (btn && likedIds.has(h.getAttribute('data-post-id'))) {
                    const c = btn.querySelector('.like-counter');
                    setLikeState(btn, true, c ? c.innerText : '0');
                }
            });
        }
    } catch (err) { console.error('Nutzerdaten:', err); }
}

/* ---------- Umschalten ---------- */
const busy = new WeakSet(); // verhindert Doppelklicks während der Speicherung

async function favoritUmschalten(blogId, button) {
    if (busy.has(button)) return;
    const user = await requireUser();
    if (!user) return;
    busy.add(button);
    try {
        const war = await isFavorite(user.uid, blogId);
        await setFavorite(user.uid, blogId, !war);
        setFavState(button, !war);
        if (war) {
            zeigeBanner('info', 'Entfernt', 'Der Artikel wurde aus deinen Favoriten gelöscht.');
        } else {
            pop(button);
            zeigeBanner('success', 'Favorisiert!', 'Gespeichert in deinem Profil unter Favoriten.');
        }
    } catch (err) {
        zeigeBanner('error', 'Fehler', fehlertext(err));
    } finally {
        busy.delete(button);
    }
}

async function likeUmschalten(blogId, button) {
    if (busy.has(button)) return;
    const user = await requireUser();
    if (!user) return;
    busy.add(button);
    try {
        const counterEl = button.querySelector('.like-counter');
        const stand = parseInt(counterEl && counterEl.innerText, 10) || 0;
        const war = await hasLiked(user.uid, blogId);
        await setLike(user.uid, blogId, !war);
        if (war) {
            setLikeState(button, false, Math.max(0, stand - 1));
            zeigeBanner('info', 'Like entfernt', 'Schade, dir gefällt dieser Beitrag nicht mehr.');
        } else {
            setLikeState(button, true, stand + 1);
            pop(button);
            zeigeBanner('success', 'Geliked!', 'Danke für dein Feedback zu diesem Beitrag!');
        }
    } catch (err) {
        zeigeBanner('error', 'Fehler', fehlertext(err));
    } finally {
        busy.delete(button);
    }
}

// Global verfügbar für die onclick-Attribute im Markup
window.zeigeBanner = zeigeBanner;
window.likeUmschalten = likeUmschalten;
window.favoritUmschalten = favoritUmschalten;
window.datenLaden = datenLaden;

datenLaden();
