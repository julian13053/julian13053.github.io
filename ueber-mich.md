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
    <style>
        .liquid-glass {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen text-gray-900 font-sans antialiased flex flex-col justify-between">

    <!-- Navigationsleiste -->
    {% include navigation.html %}

    <!-- Hauptinhalt -->
    <main class="max-w-4xl mx-auto px-4 py-12 space-y-8 flex-grow">
        
        <!-- Profil-Kopf -->
        <div class="liquid-glass p-8 rounded-3xl text-center space-y-4 shadow-md">
            <div class="w-28 h-28 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-black shadow-inner">
                JM
            </div>
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Hallo, ich bin Julian Maximilian! 👋</h1>
            <p class="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full inline-block">Gründer & Entwickler von M-Fleger</p>
        </div>

        <!-- Text-Inhalt -->
        <div class="liquid-glass p-8 md:p-10 rounded-3xl shadow-md space-y-6 text-gray-700 leading-relaxed text-base">
            
            <p class="text-lg font-semibold text-gray-900">
                Schön, dass du auf meiner Website vorbeischaust!
            </p>

            <p>
                Ich interessiere mich leidenschaftlich für Programmierung, Webdesign und digitale Projekte. Ich probiere gerne neue Dinge aus, entwickle eigene Ideen und setze sie kreativ um.
            </p>

            <p>
                Außerdem bin ich Teil der <strong>Jugendpresse Berlin-Brandenburg</strong> und interessiere mich für Journalismus und aktuelle Themen.
            </p>

            <p>
                Auf meiner Website findest du neben meinem persönlichen Blog, auf dem ich regelmäßig neue Beiträge veröffentliche, auch eine Übersicht über meine bisherigen Projekte.
            </p>

            <div class="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-800 bg-blue-50/60 py-3 rounded-r-xl font-medium">
                Schau dich gerne um und entdecke, woran ich gerade arbeite! ⚡️
            </div>
        </div>
    </main>

    <!-- Fußzeile & Cookie Banner -->
    {% include footer.html %}
    {% include cookie-banner.html %}

</body>
</html>
