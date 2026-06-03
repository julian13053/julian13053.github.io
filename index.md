---
layout: null
title: Startseite
---
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M-Fleger</title>
    <!-- Das hier lädt das moderne Design-System -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans">

    <!-- NAVIGATION (Oben) -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-black tracking-tight text-blue-600 flex items-center gap-2">
                <!-- Hier kommt später dein Auge-Logo hin -->
                <span>M-Fleger</span>
            </div>
            <div class="flex gap-6 font-semibold text-gray-600">
                <a href="/" class="text-blue-600">Startseite</a>
                <a href="/blog/" class="hover:text-blue-600 transition">Blog</a>
                <a href="/kontakt/" class="hover:text-blue-600 transition">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HERO SEKTION (Das große blaue Banner wie bei der IU) -->
    <header class="bg-gradient-to-r db bg-blue-700 text-white py-20 px-4">
        <div class="max-w-4xl mx-auto text-center md:text-left">
            <span class="bg-cyan-400 text-blue-900 font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">Fokus 2026</span>
            <h1 class="text-5xl md:text-6xl font-black tracking-tight mt-4 mb-6 leading-tight">
                Klarer Fokus.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
            </h1>
            <p class="text-xl text-blue-100 max-w-2xl mb-8">
                Willkommen bei M-Fleger. Hier verbindet sich Struktur mit kreativer Freiheit. Entdecke meine neuesten Artikel und Projekte.
            </p>
            <a href="/blog/" class="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition inline-block">
                Zum Blog →
            </a>
        </div>
    </header>

    <!-- KACHELN (Wie bei Gumroad / IU unten) -->
    <main class="max-w-6xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Linke Kachel -->
            <div class="bg-cyan-50 border-2 border-cyan-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <h2 class="text-2xl font-extrabold text-cyan-900 mb-4">Das JMF-Scribble</h2>
                <p class="text-gray-700 leading-relaxed">
                    Mein Logo basiert auf meinen Initialen, gehalten in klarem Anthrazit-Grau mit einem lebendigen blauen Akzent. Es steht für die perfekte Balance zwischen Struktur und kreativer Energie.
                </p>
            </div>

            <!-- Rechte Kachel -->
            <div class="bg-blue-50 border-2 border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <h2 class="text-2xl font-extrabold text-blue-900 mb-4">Blue Vision</h2>
                <p class="text-gray-700 leading-relaxed">
                    Das stilisierte Auge symbolisiert den Blick über den Tellerrand. Es steht für die Fähigkeit, das Wesentliche klar zu erkennen und die eigenen Ziele niemals aus den Augen zu verlieren.
                </p>
            </div>

        </div>
    </main>

</body>
</html>
