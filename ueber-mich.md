---
layout: null
title: Über mich
---
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Über mich - M-Fleger</title>
    <!-- Wir laden Tailwind CSS direkt, damit das Design garantiert überall funktioniert -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        .liquid-glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen text-gray-900 font-sans">

    <!-- Feste Navigationsleiste direkt auf der Seite -->
    <nav class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex-shrink-0">
            <a href="/" class="flex items-center gap-4 no-underline text-2xl font-black tracking-tight text-gray-900">
                <img src="/auge-logo.jpg" alt="M-Fleger Logo" class="h-12 w-12 object-cover rounded-full shadow-md border border-white/40">
                <span>M-Fleger</span>
            </a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline">Startseite</a>
            <a href="/ueber-mich.html" class="text-sm font-semibold text-blue-600 no-underline">Über mich</a>
            <a href="/unsere-rechte.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline">Rechte-Hub</a>
            <a href="/spenden.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline">Spenden</a>
            <a href="/blog.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline">Blog</a>
            <a href="/kontakt.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline">Kontakt</a>
            <a href="/login.html" class="text-sm font-bold text-white bg-blue-600 px-5 py-2.5 rounded-xl no-underline shadow-sm">Login</a>
        </div>
    </nav>

    <!-- Hauptinhalt -->
    <main class="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div class="liquid-glass p-8 rounded-3xl text-center space-y-4 border border-white/30 shadow-lg">
            <div class="w-28 h-28 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-black shadow-inner">
                JF
            </div>
            <h1 class="text-3xl font-black tracking-tight text-gray-900">Hallo, ich bin Julian Fleger</h1>
            <p class="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full inline-block">Gründer & Entwickler von M-Fleger</p>
        </div>

        <div class="liquid-glass p-8 rounded-3xl border border-white/20 shadow-md space-y-6 text-gray-700 leading-relaxed text-base">
            <h2 class="text-2xl font-bold text-gray-900">Wer steht hinter M-Fleger?</h2>
            <p>
                Ich habe M-Fleger ins Leben gerufen, um eine transparente, moderne und leicht zugängliche Plattform für wichtige gesellschaftliche Themen zu schaffen. Was als kleines Bastelprojekt begann, wächst mittlerweile von Tag zu Tag – sowohl beim Code als auch bei den Lesern.
            </p>
            <h3 class="text-xl font-bold text-gray-900 mt-6">Meine Vision</h3>
            <p>
                Egal ob es um unseren interaktiven Rechte-Hub, transparente Spendenmöglichkeiten für wichtige Kinderhilfswerke oder einfach um den täglichen Austausch im Blog geht: Gutes Design und nützliche Informationen gehören für mich zusammen.
            </p>
        </div>
    </main>

</body>
</html>
