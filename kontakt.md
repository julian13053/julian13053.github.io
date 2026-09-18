---
layout: null
title: Kontakt
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - M-Fleger</title>
    
    <link rel="stylesheet" href="/style.css">
    <link rel="icon" type="image/jpeg" href="/auge-logo.jpg">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        .liquid-glass {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen text-gray-900 font-sans antialiased flex flex-col justify-between relative">

    <!-- Navigationsleiste aus _includes/navigation.html -->
    {% include navigation.html %}

    <!-- Header Section -->
    <header class="py-12 md:py-16 px-4 md:px-6 overflow-hidden text-center">
        <div class="max-w-4xl mx-auto animate-fade-in space-y-4">
            <span class="bg-blue-100 text-blue-700 border border-blue-200 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-xs inline-block">
                Get in Touch
            </span>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                👋 Lass uns connecten!<br><span class="text-blue-600">Fragen, Feedback oder Austausch.</span>
            </h1>
            <p class="text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
                Du hast Fragen oder möchtest mich erreichen? Melde dich unkompliziert per E-Mail oder über Social Media.
            </p>
        </div>
    </header>

    <!-- Hauptinhalt -->
    <main class="max-w-4xl mx-auto px-4 md:px-6 pb-12 md:pb-16 flex-grow w-full">
        <div class="p-8 md:p-12 rounded-3xl liquid-glass shadow-xs text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-2">Direktkontakt</h2>
            <p class="text-slate-600 font-medium text-base mb-10">Hier findest du meine offiziellen Erreichbarkeiten:</p>

            <div class="space-y-4 max-w-md mx-auto">
                <a href="mailto:julian@m-fleger.de" class="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold p-5 rounded-2xl shadow-lg transition-all duration-200 no-underline w-full group">
                    <span class="text-xs uppercase tracking-wider opacity-90 mb-1 transition-transform group-hover:scale-105">E-Mail schreiben</span>
                    <span class="text-base md:text-lg tracking-wide">julian@m-fleger.de</span>
                </a>

                <a href="https://www.instagram.com/zfd.julian" target="_blank" class="flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-bold p-5 rounded-2xl shadow-lg hover:opacity-95 transition-all duration-200 no-underline w-full group">
                    <span class="text-xs uppercase tracking-wider opacity-90 mb-1 transition-transform group-hover:scale-105">Auf Instagram folgen</span>
                    <span class="text-base md:text-lg tracking-wide">@zfd.julian</span>
                </a>
            </div>

            <div class="mt-12 border-t border-slate-200/60 pt-8">
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    Ich versuche in der Regel innerhalb von 24 Stunden zu antworten.<br class="hidden sm:inline"> Ich freue mich auf deine Nachricht!
                </p>
            </div>
        </div>
    </main>

    <!-- Fußzeile aus _includes/footer.html -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
