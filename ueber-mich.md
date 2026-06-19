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

    <!-- Navigationsleiste -->
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
        
        <!-- Profil-Kopf -->
        <div class="liquid-glass p-8 rounded-3xl text-center space-y-4 border border-white/30 shadow-lg">
            <div class="w-28 h-28 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-black shadow-inner">
                JF
            </div>
            <h1 class="text-3xl font-black tracking-tight text-gray-900">Hallo, ich bin Julian Fleger</h1>
            <p class="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full inline-block">Gründer & Entwickler von M-Fleger</p>
        </div>

        <!-- Text-Inhalt -->
        <div class="liquid-glass p-8 rounded-3xl border border-white/20 shadow-md space-y-8 text-gray-700 leading-relaxed text-base">
            
            <div class="space-y-3">
                <h2 class="text-2xl font-bold text-gray-900">Meine Geschichte</h2>
                <p>
                    Mein Name ist Julian Fleger und ich engagiere mich besonders für Kinder, Jugendliche und Menschen, die Unterstützung benötigen. Als Gründer von M-Fleger möchte ich Informationen verständlich, transparent und für jeden zugänglich machen.
                </p>
                <p>
                    Was als kleines Projekt begann, entwickelte sich mit der Zeit zu einer Plattform, die Menschen informiert, vernetzt und auf wichtige gesellschaftliche Themen aufmerksam macht. Dabei stehen Respekt, Offenheit und Hilfsbereitschaft immer im Mittelpunkt.
                </p>
            </div>

            <div class="space-y-3">
                <h2 class="text-2xl font-bold text-gray-900">Warum M-Fleger?</h2>
                <p>
                    Viele Menschen suchen nach verständlichen Informationen und Möglichkeiten, sich sozial zu engagieren. Genau hier setzt M-Fleger an. Die Plattform verbindet moderne Technik mit sozialem Engagement und macht wichtige Themen für alle zugänglich.
                </p>
                <p>
                    Mein Ziel ist es, Menschen zu informieren, zu inspirieren und gemeinsam positive Veränderungen zu fördern.
                </p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600 bg-blue-50/50 py-3 rounded-r-xl">
                "M-Fleger ist kein fertiges Produkt, sondern ein lebendiges Projekt, das jeden Tag gemeinsam mit der Community wächst."
            </div>
        </div>
    </main>

</body>
</html>
