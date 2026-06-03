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
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-24 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center animate-fade-in">
            <div class="md:col-span-7 text-center md:text-left">
                <span class="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Design & Development</span>
                <h1 class="text-5xl md:text-6xl font-black tracking-tight mt-5 mb-6 leading-tight">
                    Julian Fleger.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
                </h1>
                <p class="text-lg md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                    Willkommen auf meiner Website! Hier erfährst du mehr über meine Arbeit, mein Branding und kannst meine neuesten Artikel lesen.
                </p>
                <a href="blog.html" class="bg-cyan-400 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-300 transform hover:-translate-y-1 transition-all duration-300 inline-block no-underline">
                    Direkt zum Blog →
                </a>
            </div>
            <div class="md:col-span-5 flex justify-center">
                <div class="relative group">
                    <div class="absolute inset-0 bg-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xs transition-transform duration-300 group-hover:rotate-1"></div>
                    <img src="ich.jpeg" alt="Julian Fleger" class="relative w-80 h-104 md:w-96 md:h-112 object-cover rounded-3xl shadow-2xl border-4 border-white/10 transition-transform duration-300 group-hover:scale-102">
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-20 flex-grow w-full">
        
        <!-- ÜBER MICH SEKTION -->
        <div class="mb-24 bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xs">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-black text-gray-950 tracking-tight mb-4">👤 Über mich</h2>
                <p class="text-gray-600 text-lg leading-relaxed">
                    Hi, ich bin Julian. Ich liebe es, kreative Ideen zu entwickeln, Strukturen aufzubauen und Content zu teilen. Auf dieser Seite halte ich meine Projekte fest und schreibe im Blog über alles, was mich bewegt und inspiriert. Schön, dass du hier bist!
                </p>
            </div>
        </div>
        
        <!-- NEUESTE ARTIKEL + SUCHE -->
        <div class="mb-24">
            <div class="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
                <div>
                    <h2 class="text-4xl font-black text-gray-950 tracking-tight">📰 Neueste Artikel</h2>
                    <p class="text-gray-500 text-lg mt-2">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                
                <!-- Neue integrierte Suchleiste direkt auf der Startseite -->
                <div class="w-full md:w-72">
                    <input type="text" id="homeSearch" onkeyup="searchHomePosts()" placeholder="🔍 Artikel durchsuchen..." class="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-xs focus:outline-none focus:border-blue-600 text-sm font-medium transition-all">
                </div>
            </div>

            <!-- Artikel Grid -->
            <div class="grid md:grid-cols-3 gap-8" id="homePostsGrid">
                {% for post in site.posts limit:3 %}
                <div class="home-post bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-102 transition-all duration-300">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                            {% assign words = post.content | strip_html | number_of_words %}
                            {% assign read_time = words | divided_by: 180 | plus: 1 %}
                            <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min.</span>
                        </div>
                        
                        <h3 class="post-title text-xl font-black text-gray-950 mt-1 mb-2 line-clamp-2">{{ post.title }}</h3>
                        
                        {% if post.category %}
                        <span class="inline-block bg-gray-100 text-gray-600 text-[11px] font-bold px-2 py-0.5 rounded-md mb-3"># {{ post.category }}</span>
                        {% endif %}

                        <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ post.excerpt | strip_html }}</p>
                    </div>
                    <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline inline-block mt-2">
                        Artikel lesen →
                    </a>
                </div>
                {% else %}
                <div class="col-span-3 text-center py-12 bg-gray-100 rounded-2xl">
                    <p class="text-gray-500 text-lg font-medium">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
                </div>
                {% endfor %}
            </div>
            
            <!-- Info falls Suche ergebnislos ist -->
            <p id="noHomeResults" class="text-gray-500 text-center py-8 hidden">Keine passenden Artikel auf der Startseite gefunden.</p>
        </div>

        <!-- BRANDINGS (Ganz normal wieder unten) -->
        <div class="border-t border-gray-200 pt-16">
            <div class="text-center md:text-left mb-8">
                <h2 class="text-4xl font-black text-gray-950 tracking-tight">Eigene Brandings</h2>
            </div>

            <!-- Grid für JMF-Scribble und Blue Vision -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl hover:scale-102 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="jmf-logo.jpg" alt="JMF Scribble" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">JMF-Scribble</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo basiert auf meinen Initialen und ist in einem klaren, geometrischen Anthrazit-Grau gehalten. Der lebendige blaue Akzent im Hintergrund, der an eine schnelle Skizze oder einen Pinselstrich erinnert, steht für Kreativität, frische Ideen und die nötige Portion „Scribble“ vor jedem großen Entwurf. Es symbolisiert die Balance zwischen Struktur und kreativer Energie.
                        </p>
                    </div>
                </div>

                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl hover:scale-102 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="auge-logo.jpg" alt="Blue Vision" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">Blue Vision</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo zeigt ein stilisiertes, waches Auge, das von einem kräftigen, leuchtenden Blau umrandet ist. Der grafische, fast handgezeichnete Stil der Wimpern verleiht ihm eine besondere Note. Es steht für die Fähigkeit, das Wesentliche klar zu erkennen, Visionen zu haben, Achtsamkeit zu zeigen und über den Tellerrand hinauszuschauen. Das Auge symbolisiert Erkenntnis und den unermüdlichen Willen, die eigenen Ziele nicht aus den Augen zu verlieren.
                        </p>
                    </div>
                </div>
            </div>

            <!-- VISUELLER SLOGAN & TEXTBEREICH (Stil getreu wie in image_d8f8c4.png) -->
            <div class="grid md:grid-cols-12 gap-8 items-center bg-gray-100/60 p-8 rounded-3xl border border-gray-200/50">
                <!-- Links: Die charmante Kamera-Illustration -->
                <div class="md:col-span-4 flex justify-center">
                    <img src="image_d8f8c4.png" alt="Kamera Illustration" class="w-56 h-auto object-contain mix-blend-multiply">
                </div>
                <!-- Rechts: Slogan & Dein Statement -->
                <div class="md:col-span-8 space-y-4">
                    <div class="border-b border-gray-300 pb-2">
                        <h3 class="text-3xl md:text-4xl font-black text-blue-900 tracking-tight leading-tight">
                            Klarer Fokus.<br>Punktgenau verbunden.
                        </h3>
                    </div>
                    <p class="text-gray-700 italic text-base md:text-lg leading-relaxed">
                        „Als ich das erstellt habe, war mir echt wichtig, dass sofort klar ist: Hier verbinden sich klare Strukturen mit kreativer Freiheit. Es geht nicht nur um ein Bild, sondern um den Moment, in dem eine Idee Gestalt annimmt. Für mich ist das JMF-Scribble der Anfang jeder kreativen Schöpfung und das Blue Vision Auge der Fokus, den man braucht, um etwas Neues in die Welt zu bringen.“
                    </p>
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

    <!-- INTERAKTIVES SKRIPT FÜR DIE STARTSEITEN-SUCHE -->
    <script>
        function searchHomePosts() {
            const query = document.getElementById('homeSearch').value.toLowerCase();
            const posts = document.querySelectorAll('.home-post');
            let visibleCount = 0;

            posts.forEach(post => {
                const title = post.querySelector('.post-title').innerText.toLowerCase();
                if (title.includes(query)) {
                    post.style.display = 'flex';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            const noResults = document.getElementById('noHomeResults');
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
    </script>

</body>
</html>
