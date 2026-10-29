/* ==========================================================
   M-FLEGER · motion.js
   Gemeinsame Animationen für alle Seiten (wird über
   _includes/navigation.html geladen). Kein Framework nötig.

   - Scroll-Reveal für Glas-Karten & Sections (automatisch)
   - Lichtreflex, der dem Mauszeiger über das Glas folgt
   - Sanfter 3D-Tilt für Elemente mit [data-tilt]
   - Hochzählende Zahlen für Elemente mit [data-count]
   - Große Glas-Container heben beim Hovern nicht ab
   Respektiert "Bewegung reduzieren" im Betriebssystem.
   ========================================================== */
(function () {
    'use strict';
    if (window.MFMotion) return; // nicht doppelt starten

    var root = document.documentElement;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    var AUTO_REVEAL = [
        '.liquid-glass',
        '.glass-panel',
        '.blog-card',
        'main section',
        'main article',
        '[data-reveal]'
    ].join(',');

    function isExcluded(el) {
        if (el.closest('nav, footer, #cookie-overlay, #accessibility-menu, #custom-banner')) return true;
        var pos = getComputedStyle(el).position;
        if (pos === 'fixed' || pos === 'sticky') return true;
        // Nur das äußerste Element animieren, sonst bewegt sich Inhalt doppelt
        var parent = el.parentElement && el.parentElement.closest('[data-reveal]');
        return !!parent;
    }

    function inViewport(el) {
        var r = el.getBoundingClientRect();
        return r.top < window.innerHeight * 0.95 && r.bottom > 0;
    }

    /* ---------- Große Glas-Flächen als "statisch" markieren ---------- */
    function markStaticGlass() {
        document.querySelectorAll('.liquid-glass').forEach(function (el) {
            if (el.offsetHeight > 560) el.setAttribute('data-glass', 'static');
            else if (el.getAttribute('data-glass') === 'static') el.removeAttribute('data-glass');
        });
    }

    /* ---------- Scroll-Reveal ---------- */
    var observer = null;
    var pending = new Set();   // noch nicht eingeblendete Elemente
    var sweepQueued = false;

    // Sicherheitsnetz: Wird schnell an einem Element vorbeigescrollt (Taste "Ende",
    // Sprunglink), meldet der IntersectionObserver es nie – dann hier einblenden.
    function sweepPassed() {
        sweepQueued = false;
        pending.forEach(function (el) {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                reveal(el);
                if (observer) observer.unobserve(el);
            }
        });
    }
    function queueSweep() {
        if (!sweepQueued && pending.size) { sweepQueued = true; requestAnimationFrame(sweepPassed); }
    }

    function reveal(el) {
        pending.delete(el);
        el.classList.add('is-visible');
        // Verzögerung nach dem Einblenden entfernen, damit Hover sofort reagiert
        var delay = parseFloat(el.style.transitionDelay) || 0;
        setTimeout(function () { el.style.transitionDelay = ''; }, delay * 1000 + 950);
    }

    function setupReveal(scope) {
        var candidates = Array.prototype.slice.call((scope || document).querySelectorAll(AUTO_REVEAL));
        var fresh = [];
        candidates.forEach(function (el) {
            if (el.hasAttribute('data-reveal-done') || isExcluded(el)) return;
            if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
            el.setAttribute('data-reveal-done', '');
            fresh.push(el);
        });

        if (reduceMotion || !('IntersectionObserver' in window)) {
            fresh.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }

        // Was beim Laden schon sichtbar ist, bleibt einfach stehen (kein Flackern)
        fresh.forEach(function (el) {
            if (inViewport(el)) el.classList.add('is-visible');
        });

        if (!observer) {
            observer = new IntersectionObserver(function (entries) {
                // Gleichzeitig sichtbare Elemente leicht versetzt einblenden
                var batch = entries.filter(function (e) { return e.isIntersecting; });
                batch.forEach(function (entry, i) {
                    var el = entry.target;
                    if (!el.style.transitionDelay) el.style.transitionDelay = Math.min(i * 0.08, 0.4) + 's';
                    reveal(el);
                    observer.unobserve(el);
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        }
        fresh.forEach(function (el) {
            if (!el.classList.contains('is-visible')) { pending.add(el); observer.observe(el); }
        });
    }

    /* ---------- Lichtreflex folgt dem Zeiger ---------- */
    function setupSpotlight() {
        if (!finePointer || reduceMotion) return;
        document.addEventListener('pointermove', function (e) {
            var el = e.target.closest && e.target.closest('.liquid-glass, .glass-panel');
            if (!el) return;
            var r = el.getBoundingClientRect();
            el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            el.style.setProperty('--my', (e.clientY - r.top) + 'px');
        }, { passive: true });
    }

    /* ---------- 3D-Tilt ---------- */
    function setupTilt() {
        if (!finePointer || reduceMotion) return;
        document.querySelectorAll('[data-tilt]').forEach(function (el) {
            var max = parseFloat(el.getAttribute('data-tilt')) || 6;
            el.addEventListener('pointermove', function (e) {
                var r = el.getBoundingClientRect();
                var x = (e.clientX - r.left) / r.width - 0.5;
                var y = (e.clientY - r.top) / r.height - 0.5;
                el.style.setProperty('--ry', (x * max * 2).toFixed(2) + 'deg');
                el.style.setProperty('--rx', (-y * max * 2).toFixed(2) + 'deg');
            });
            el.addEventListener('pointerleave', function () {
                el.style.setProperty('--rx', '0deg');
                el.style.setProperty('--ry', '0deg');
            });
        });
    }

    /* ---------- Hochzählende Zahlen ---------- */
    function animateCount(el) {
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        if (reduceMotion || target === 0) { el.textContent = target.toLocaleString('de-DE'); return; }
        var duration = Math.min(2200, 900 + target / 20);
        var start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
            el.textContent = Math.round(target * eased).toLocaleString('de-DE');
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function setupCounters() {
        var counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;
        if (!('IntersectionObserver' in window)) { counters.forEach(animateCount); return; }
        // Zähler unterhalb des sichtbaren Bereichs starten bei 0
        if (!reduceMotion) counters.forEach(function (el) { if (!inViewport(el)) el.textContent = '0'; });
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                animateCount(entry.target);
                io.unobserve(entry.target);
            });
        }, { threshold: 0.6 });
        counters.forEach(function (el) { io.observe(el); });
    }

    /* ---------- Kleiner "Pop" für Like/Favorit ---------- */
    function pop(el) {
        if (!el || reduceMotion) return;
        el.classList.remove('is-popping');
        void el.offsetWidth; // Animation neu starten
        el.classList.add('is-popping');
    }

    /* ---------- Treibende Farbflächen im Hintergrund ---------- */
    function setupLiquidBackground() {
        if (document.querySelector('.liquid-bg')) return;
        var bg = document.createElement('div');
        bg.className = 'liquid-bg';
        bg.setAttribute('aria-hidden', 'true');
        bg.innerHTML = '<span></span><span></span><span></span>';
        document.body.insertBefore(bg, document.body.firstChild);
    }

    function init() {
        setupLiquidBackground();
        markStaticGlass();
        setupReveal(document);
        root.classList.add('motion-ready');
        setupSpotlight();
        setupTilt();
        setupCounters();
        // Inhalte, die per JS nachgeladen werden, später noch einmal prüfen
        window.addEventListener('load', function () { markStaticGlass(); setupReveal(document); });
        window.addEventListener('scroll', queueSweep, { passive: true });
        var t;
        window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(markStaticGlass, 200); });
    }

    window.MFMotion = { refresh: function (scope) { markStaticGlass(); setupReveal(scope || document); }, pop: pop };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
