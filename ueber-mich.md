---
layout: null
title: Über mich
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Über mich - M-Fleger</title>
    <meta name="description" content="Erfahre mehr über Julian Maximilian, Gründer von M-Fleger, Webentwickler und Mitglied der Jugendpresse Berlin-Brandenburg.">
    
    <link rel="stylesheet" href="/style.css">
    <link rel="icon" type="image/jpeg" href="/auge-logo.jpg">

    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="text-slate-900 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

    <!-- Navigationsleiste -->
    {% include navigation.html %}

    <!-- Profil-Kopf -->
    <header class="page-hero text-center">
        <div class="max-w-3xl mx-auto animate-fade-in">
            <div class="relative w-32 h-32 mx-auto mb-8 animate-float" data-tilt="10">
                <div class="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-300/60 via-blue-400/30 to-indigo-400/60 blur-xl"></div>
                <div class="relative w-full h-full rounded-full p-1.5 bg-white/15 border border-white/30 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_40px_-16px_rgba(15,23,42,0.7)]">
                    <div class="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-extrabold shadow-inner" style="font-family: var(--font-display);">
                        JM
                    </div>
                </div>
            </div>
            <h1 class="text-[2.3rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">Hallo, ich bin Julian Maximilian! 👋</h1>
            <p class="mt-7"><span class="hero-badge shimmer">Gründer &amp; Entwickler von M-Fleger</span></p>
        </div>
    </header>

    <!-- Hauptinhalt -->
    <main class="max-w-3xl mx-auto px-5 pb-16 md:pb-24 flex-grow w-full page-overlap">

        <!-- Text-Inhalt -->
        <div class="liquid-glass p-8 md:p-12 space-y-6 text-base md:text-lg">

            <p class="text-xl md:text-2xl font-bold !text-slate-900" style="font-family: var(--font-display);">
                Schön, dass du auf meiner Website vorbeischaust!
            </p>

            <p>
                Ich interessiere mich leidenschaftlich für Programmierung, Webdesign und digitale Projekte. Ich probiere gerne neue Dinge aus, entwickle eigene Ideen und setze sie kreativ um.
            </p>

            <p>
                Außerdem bin ich Teil der <strong class="text-slate-900">Jugendpresse Berlin-Brandenburg</strong> und interessiere mich für Journalismus und aktuelle Themen.
            </p>

            <p>
                Auf meiner Website findest du neben meinem persönlichen Blog, auf dem ich regelmäßig neue Beiträge veröffentliche, auch eine Übersicht über meine bisherigen Projekte.
            </p>

            <div class="callout !p-6 !rounded-2xl mt-8 italic font-medium text-blue-950">
                Schau dich gerne um und entdecke, woran ich gerade arbeite! ⚡️
            </div>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-3">
            <a href="/blog.html" class="btn-brand group px-6 py-3.5">Zum Blog <span class="arrow-nudge">→</span></a>
            <a href="/kontakt.html" class="btn-glass group px-6 py-3.5">Kontakt aufnehmen <span class="arrow-nudge">→</span></a>
        </div>
    </main>

    <!-- Fußzeile & Cookie Banner -->
    {% include footer.html %}
    {% include cookie-banner.html %}

</body>
</html>
