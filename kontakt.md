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
    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen relative">

    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 px-4 md:px-6 overflow-hidden">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <span class="bg-blue-200/20 text-blue-200 border border-blue-300/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Get in Touch</span>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-6 leading-tight">
                👋 Lass uns connecten!<br><span class="text-blue-200">Fragen, Feedback oder Austausch.</span>
            </h1>
            <p class="text-base md:text-lg text-blue-50 max-w-xl mx-auto leading-relaxed">
                Du hast Fragen oder möchtest mich erreichen? Melde dich unkompliziert per E-Mail oder über Social Media.
            </p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 flex-grow w-full">
        <div class="bg-white border border-gray-100 p-8 md:p-16 rounded-3xl shadow-xs text-center max-w-2xl mx-auto transition-all hover:border-blue-100">
            <h2 class="text-3xl font-black text-gray-950 tracking-tight mb-2">Direktkontakt</h2>
            <p class="text-gray-500 font-medium text-base mb-10">Hier findest du meine offiziellen Erreichbarkeiten:</p>

            <div class="space-y-4 max-w-md mx-auto">
                <a href="mailto:julian@m-fleger.de" class="flex flex-col items-center justify-center bg-blue-600 text-white font-bold p-5 rounded-2xl shadow-xs hover:bg-blue-700 transition-all no-underline w-full group">
                    <span class="text-xs uppercase tracking-wider opacity-75 mb-1 transition-transform group-hover:scale-105">E-Mail schreiben</span>
                    <span class="text-base md:text-lg tracking-wide">julian@m-fleger.de</span>
                </a>

                <a href="https://www.instagram.com/zfd.julian_official" target="_blank" class="flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-bold p-5 rounded-2xl shadow-xs hover:opacity-95 transition-all no-underline w-full group">
                    <span class="text-xs uppercase tracking-wider opacity-75 mb-1 transition-transform group-hover:scale-105">Auf Instagram folgen</span>
                    <span class="text-base md:text-lg tracking-wide">@zfd.julian_official</span>
                </a>
            </div>

            <div class="mt-12 border-t border-gray-100 pt-8">
                <p class="text-gray-400 text-xs md:text-sm leading-relaxed">
                    Ich versuche in der Regel innerhalb von 24 Stunden zu antworten.<br class="hidden sm:inline"> Ich freue mich auf deine Nachricht!
                </p>
            </div>
        </div>
    </main>

    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
