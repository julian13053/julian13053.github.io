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
        {% include navigation.html %}
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
                <!-- E-Mail Button -->
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
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
