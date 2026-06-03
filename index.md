---
layout: null
title: Startseite
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M-Fleger</title>
    <!-- Tailwind CSS laden -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased">

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
                <!-- Oben das Auge-Logo nochmals deutlich vergrößert (w-24 h-24 statt w-16 h-16) -->
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-24 rounded-2xl object-cover shadow-md">
                <span class="text-4xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </div>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="text-blue-600">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HERO SEKTION -->
    <header class="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-16 md:py-24 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center animate-fade-in">
            
            <!-- Linke Text-Spalte -->
            <div class="md:col-span-7 text-center md:text-left">
                <span class="bg-cyan-400 text-blue-950 font-extrabold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Portfolio & Blog</span>
                <h1 class="text-5xl md:text-6xl font-black tracking-tight mt-4 mb-6 leading-tight">
                    Julian Fleger.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
                </h1>
                <p class="text-lg md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                    Willkommen auf meiner Website! Hier erfährst du mehr über meine Arbeit, mein Branding und kannst meine neuesten Artikel lesen.
                </p>
                <a href="blog.html" class="bg-cyan-400 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-300 transform hover:-translate-y-0.5 transition inline-block">
                    Direkt zum Blog →
                </a>
            </div>

            <!-- Rechte Bild-Spalte -->
            <div class="md:col-span-5 flex justify-center">
                <div class="relative">
                    <div class="absolute inset-0 bg-cyan-400 rounded-3xl transform rotate-3 scale-102 opacity-30"></div>
                    <img src="ich.jpeg" alt="Julian Fleger" class="relative w-72 h-96 md:w-80 md:h-104 object-cover rounded-3xl shadow-2xl border-4 border-white/10">
                </div>
            </div>

        </div>
    </header>

    <!-- KACHELN (Jetzt im stylischen Dark-Mode, damit die Logos perfekt verschmelzen) -->
    <main class="max-w-6xl mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Linke Kachel (JMF-Scribble) -->
            <div class="bg-black text-white p-8 rounded-3xl shadow-xl border border-gray-850 flex flex-col justify-between transition-all duration-300 hover:scale-102">
                <div>
                    <!-- Das Logo füllt jetzt die gesamte Breite aus und verschmilzt mit dem schwarzen Hintergrund -->
                    <div class="w-full flex justify-center mb-6">
                        <img src="jmf-logo.jpg" alt="JMF Scribble" class="w-full max-w-[280px] h-64 object-contain">
                    </div>
                    <h2 class="text-3xl font-black text-white mb-4">JMF-Scribble</h2>
                    <p class="text-gray-400 leading-relaxed">
                        Das Logo basiert auf meinen Initialen und ist in einem klaren, geometrischen Anthrazit-Grau gehalten. Der lebendige blaue Akzent im Hintergrund erinnert an eine schnelle Skizze.
                    </p>
                </div>
            </div>

            <!-- Rechte Kachel (Blue Vision) -->
            <div class="bg-black text-white p-8 rounded-3xl shadow-xl border border-gray-850 flex flex-col justify-between transition-all duration-300 hover:scale-102">
                <div>
                    <!-- Das Logo füllt jetzt die gesamte Breite aus und verschmilzt mit dem schwarzen Hintergrund -->
                    <div class="w-full flex justify-center mb-6">
                        <img src="auge-logo.jpg" alt="Blue Vision" class="w-full max-w-[280px] h-64 object-contain">
                    </div>
                    <h2 class="text-3xl font-black text-white mb-4">Blue Vision</h2>
                    <p class="text-gray-600 leading-relaxed text-gray-400">
                        Das Logo zeigt ein stilisiertes, waches Auge, das von einem kräftigen, leuchtenden Blau umrandet ist. Es symbolisiert die Fähigkeit, Visionen zu haben und über den Tellerrand hinauszuschauen.
                    </p>
                </div>
            </div>

        </div>
    </main>

</body>
</html>
