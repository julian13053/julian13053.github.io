---
layout: null
title: Startseite
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M-Fleger | Portfolio & Blog</title>
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
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <!-- NAVIGATION -->
    <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-4 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-20 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HERO SEKTION -->
    <header class="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 text-white py-20 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center animate-fade-in">
            
            <div class="md:col-span-7 text-center md:text-left">
                <span class="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Design & Development</span>
                <h1 class="text-5xl md:text-6xl font-black tracking-tight mt-5 mb-6 leading-tight">
                    Julian Fleger.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
                </h1>
                <p class="text-lg md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                    Willkommen auf meiner Website! Hier erfährst du mehr über meine Arbeit, mein Branding und kannst meine neuesten Artikel lesen.
                </p>
                <a href="blog.html" class="bg-cyan-400 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-300 transform hover:-translate-y-0.5 transition-all inline-block no-underline">
                    Direkt zum Blog →
                </a>
            </div>

            <div class="md:col-span-5 flex justify-center">
                <div class="relative">
                    <div class="absolute inset-0 bg-cyan-400 rounded-3xl transform rotate-3 scale-102 opacity-20 blur-xs"></div>
                    <img src="ich.jpeg" alt="Julian Fleger" class="relative w-72 h-96 md:w-80 md:h-104 object-cover rounded-3xl shadow-2xl border-4 border-white/10">
                </div>
            </div>

        </div>
    </header>

    <!-- INHALT -->
    <main class="max-w-6xl mx-auto px-6 py-20 flex-grow w-full">
        
        <!-- SEKTION 1: NEUESTER BLOGPOST -->
        <div class="mb-24">
            <div class="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
                <div>
                    <h2 class="text-4xl font-black text-gray-950 tracking-tight">Aktuellster Artikel</h2>
                    <p class="text-gray-500 text-lg mt-2">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group no-underline">
                    Alle Artikel ansehen <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            {% assign latest_post = site.posts.first %}
            {% if latest_post %}
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 p-8 md:p-10 rounded-3xl shadow-xs flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-all">
                <div class="flex-grow">
                    <span class="text-sm bg-blue-600 text-white px-3 py-1 rounded-md font-bold tracking-wide uppercase">{{ latest_post.date | date: "%d.%m.%Y" }}</span>
                    <h3 class="text-3xl font-black text-gray-950 mt-4 mb-3">{{ latest_post.title }}</h3>
                    <p class="text-gray-600 text-lg mb-6 leading-relaxed">{{ latest_post.excerpt | strip_html | truncatewords: 35 }}</p>
                    <a href="{{ latest_post.url | relative_url }}" class="bg-white border border-gray-200 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-xs hover:bg-gray-50 hover:border-gray-300 transition inline-block no-underline">
                        Artikel lesen →
                    </a>
                </div>
            </div>
            {% else %}
            <div class="text-center py-12 bg-gray-100 rounded-2xl">
                <p class="text-gray-500 text-lg font-medium">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
            </div>
            {% endif %}
        </div>

        <!-- SEKTION 2: MEINE LOGOS -->
        <div class="border-t border-gray-200 pt-16">
            <div class="text-center md:text-left mb-8">
                <h2 class="text-4xl font-black text-gray-950 tracking-tight">Eigene Brandings</h2>
                <p class="text-blue-600 font-extrabold text-xl mt-3 tracking-wide">Klarer Fokus. &nbsp;&bull;&nbsp; Punktgenau verbunden.</p>
            </div>
            
            <!-- Dein persönlicher Einleitungstext schön hervorgehoben -->
            <div class="max-w-4xl bg-gray-100/60 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-12">
                <p class="text-gray-700 italic text-lg leading-relaxed">
                    „Als ich das erstellt habe, war mir echt wichtig, dass sofort klar ist: Hier verbinden sich klare Strukturen mit kreativer Freiheit. Es geht nicht nur um ein Bild, sondern um den Moment, in dem eine eine Idee Gestalt annimmt. Für mich ist das JMF-Scribble der Anfang jeder kreativen Schöpfung und das Blue Vision Auge der Fokus, den man braucht, um etwas Neues in die Welt zu bringen.“
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- JMF Scribble Kachel -->
                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="jmf-logo.jpg" alt="JMF Scribble" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">JMF-Scribble</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Das Logo basiert auf meinen Initialen und ist in einem klaren, geometrischen Anthrazit-Grau gehalten. Der lebendige blaue Akzent im Hintergrund, der an eine schnelle Skizze oder einen Pinselstrich erinnert, steht für Kreativität, frische Ideen und die nötige Portion „Scribble“ vor jedem großen Entwurf. Es symbolisiert die Balance zwischen Struktur und kreativer Energie.
                        </p>
                    </div>
                </div>

                <!-- Blue Vision Kachel -->
                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="auge-logo.jpg" alt="Blue Vision" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">Blue Vision</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Das Logo zeigt ein stilisiertes, waches Auge, das von einem kräftigen, leuchtenden Blau umrandet ist. Der grafische, fast handgezeichnete Stil der Wimpern verleiht ihm eine besondere Note. Es steht für die Fähigkeit, das Wesentliche klar zu erkennen, Visionen zu haben, Achtsamkeit zu zeigen und über den Tellerrand hinauszuschauen. Das Auge symbolisiert Erkenntnis und den unermüdlichen Willen, die eigenen Ziele nicht aus den Augen zu verlieren.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-6 mt-12 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
        </div>
    </footer>

</body>
</html>
