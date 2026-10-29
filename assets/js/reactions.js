/* ==========================================================
   M-FLEGER · reactions.js
   Likes, Favoriten und Toast-Meldungen – gemeinsam für
   Startseite, Blog-Übersicht und Artikelseiten.

   Voraussetzungen auf der Seite:
   - Supabase-CDN vor dieser Datei geladen
   - Toast-Markup über {% include toast.html %}
   - Elemente mit data-post-id, darin .like-btn / .fav-btn
     mit onclick="likeUmschalten(id, this)" bzw. favoritUmschalten(...)
   ========================================================== */
(function () {
    'use strict';

    var SUPABASE_URL = "https://xxuanzhrrpwurkyjfjky.supabase.co";
    var SUPABASE_ANON_KEY = "sb_publishable_WdzN1r5HkdnqrfIN2phV1g_-GdLlknq";

    // Falls das Supabase-CDN einmal nicht lädt, bleibt der Rest der Seite funktionsfähig
    var client = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
    window.supabaseClient = window.supabaseClient || client;

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
    var bannerTimer;
    function zeigeBanner(type, title, message) {
        var banner = document.getElementById('custom-banner');
        if (!banner) return;
        var icons = { success: '❤️', info: 'ℹ️', error: '❌' };
        var tints = {
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
        bannerTimer = setTimeout(function () { banner.classList.remove('is-shown'); }, 4000);
    }

    function offline() {
        zeigeBanner('error', 'Fehler', 'Verbindung zum Server fehlgeschlagen.');
    }

    /* ---------- Daten beim Laden ---------- */
    async function datenLaden() {
        if (!client) return;
        var holders = document.querySelectorAll('[data-post-id]');
        if (!holders.length) return;
        var hasLikes = document.querySelector('.like-btn');

        try {
            if (hasLikes) {
                var res = await client.from('likes').select('blog_id');
                if (!res.error && res.data) {
                    var counts = {};
                    res.data.forEach(function (l) { counts[l.blog_id] = (counts[l.blog_id] || 0) + 1; });
                    holders.forEach(function (h) {
                        var c = h.querySelector('.like-counter');
                        if (c) c.innerText = counts[h.getAttribute('data-post-id')] || 0;
                    });
                }
            }

            var auth = await client.auth.getUser();
            var user = auth.data && auth.data.user;
            if (!user) return;

            var fav = await client.from('favoriten').select('blog_id').eq('user_id', user.id);
            if (fav.data) {
                var favIds = new Set(fav.data.map(function (f) { return f.blog_id.toString(); }));
                holders.forEach(function (h) {
                    var btn = h.querySelector('.fav-btn');
                    if (btn && favIds.has(h.getAttribute('data-post-id'))) setFavState(btn, true);
                });
            }

            if (hasLikes) {
                var mine = await client.from('likes').select('blog_id').eq('user_id', user.id);
                if (mine.data) {
                    var likedIds = new Set(mine.data.map(function (l) { return l.blog_id.toString(); }));
                    holders.forEach(function (h) {
                        var btn = h.querySelector('.like-btn');
                        if (btn && likedIds.has(h.getAttribute('data-post-id'))) {
                            var c = btn.querySelector('.like-counter');
                            setLikeState(btn, true, c ? c.innerText : '0');
                        }
                    });
                }
            }
        } catch (err) { console.error(err); }
    }

    /* ---------- Umschalten ---------- */
    async function favoritUmschalten(blogId, button) {
        if (!client) return offline();
        try {
            var auth = await client.auth.getUser();
            var user = auth.data && auth.data.user;
            if (!user) { window.location.href = "/anmeldung-erforderlich.html"; return; }

            var existiert = (await client.from('favoriten').select('*').eq('user_id', user.id).eq('blog_id', blogId)).data;

            if (existiert && existiert.length > 0) {
                var del = await client.from('favoriten').delete().eq('user_id', user.id).eq('blog_id', blogId);
                if (del.error) return zeigeBanner('error', 'Fehler', del.error.message);
                setFavState(button, false);
                zeigeBanner('info', 'Entfernt', 'Der Artikel wurde aus deinen Favoriten gelöscht.');
            } else {
                var ins = await client.from('favoriten').insert([{ user_id: user.id, blog_id: blogId }]);
                if (ins.error) return zeigeBanner('error', 'Fehler beim Speichern', ins.error.message);
                setFavState(button, true);
                pop(button);
                zeigeBanner('success', 'Favorisiert!', 'Gespeichert in deinem Profil unter Favoriten.');
            }
        } catch (err) { zeigeBanner('error', 'Fehler', err.message); }
    }

    async function likeUmschalten(blogId, button) {
        if (!client) return offline();
        try {
            var auth = await client.auth.getUser();
            var user = auth.data && auth.data.user;
            if (!user) { window.location.href = "/anmeldung-erforderlich.html"; return; }

            var counterEl = button.querySelector('.like-counter');
            var stand = parseInt(counterEl && counterEl.innerText, 10) || 0;

            var existiert = (await client.from('likes').select('*').eq('user_id', user.id).eq('blog_id', blogId)).data;

            if (existiert && existiert.length > 0) {
                var del = await client.from('likes').delete().eq('user_id', user.id).eq('blog_id', blogId);
                if (del.error) return zeigeBanner('error', 'Fehler', del.error.message);
                setLikeState(button, false, Math.max(0, stand - 1));
                zeigeBanner('info', 'Like entfernt', 'Schade, dir gefällt dieser Beitrag nicht mehr.');
            } else {
                var ins = await client.from('likes').insert([{ user_id: user.id, blog_id: blogId }]);
                if (ins.error) return zeigeBanner('error', 'Fehler', ins.error.message);
                setLikeState(button, true, stand + 1);
                pop(button);
                zeigeBanner('success', 'Geliked!', 'Danke für dein Feedback zu diesem Beitrag!');
            }
        } catch (err) { zeigeBanner('error', 'Fehler', err.message); }
    }

    // Global verfügbar für die onclick-Attribute im Markup
    window.zeigeBanner = zeigeBanner;
    window.likeUmschalten = likeUmschalten;
    window.favoritUmschalten = favoritUmschalten;
    window.datenLaden = datenLaden;

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', datenLaden);
    else datenLaden();
})();
