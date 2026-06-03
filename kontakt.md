---
layout: null
title: Kontakt
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - M-Fleger</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="index.html" class="flex items-center gap-3 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-16 h-14 md:w-24 md:h-20 rounded-xl md:rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-2xl md:text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold text-gray-600 text-base md:text-lg">
                <a href="index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="kontakt.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HEADER -->
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 md:py-16 px-4 text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">Lass uns connecten!</h1>
            <p class="text-base md:text-lg text-blue-100 max-w-xl mx-auto">Du hast Fragen oder möchtest mich erreichen? Melde dich unkompliziert per E-Mail oder Social Media.</p>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="max-w-3xl mx-auto px-4 py-10 md:py-16 flex-grow w-full">
        <div class="bg-white border border-gray-100 p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xs text-center">
            <h2 class="text-2xl md:text-3xl font-black text-gray-950 tracking-tight mb-2">Direktkontakt</h2>
            <p class="text-gray-500 font-medium text-sm md:text-base mb-8">Hier findest du meine offiziellen Erreichbarkeiten:</p>

            <div class="space-y-4 max-w-md mx-auto">
                <!-- E-Mail Button - Jetzt mit julian(at)m-fleger.de geschützt gegen Bots -->
                <a href="mailto:julian@m-fleger.de" class="flex flex-col items-center justify-center bg-blue-600 text-white font-bold p-4 rounded-xl shadow-xs hover:bg-blue-700 transition-all no-underline w-full">
                    <span class="text-xs uppercase tracking-wider opacity-75 mb-0.5">E-Mail schreiben</span>
                    <span class="text-base md:text-lg tracking-wide">julian(at)m-fleger.de</span>
                </a>

                <!-- Instagram Button -->
                <a href="https://www.instagram.com/zfd.julian_official" target="_blank" class="flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-bold p-4 rounded-xl shadow-xs hover:opacity-90 transition-all no-underline w-full">
                    <span class="text-xs uppercase tracking-wider opacity-75 mb-0.5">Auf Instagram folgen</span>
                    <span class="text-base md:text-lg">julian_official</span>
                </a>
            </div>

            <div class="mt-12 border-t border-gray-100 pt-8">
                <p class="text-gray-400 text-xs md:text-sm">Ich versuche in der Regel innerhalb von 24 Stunden zu antworten. Freue mich auf deine Nachricht!</p>
            </div>
        </div>
    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-4 text-center text-gray-500 font-medium mt-auto">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 transition-colors no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors no-underline">Kontakt</a>
            </div>
        </div>
    </footer>
{% include cookie-banner.html %}
</body>
</html>
