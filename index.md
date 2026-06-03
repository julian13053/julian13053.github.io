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

    <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-4 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-20 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-24 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center animate-fade-in">
            <div class="md:col-span-7 text-center md:text-left">
                <span class="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Design & Development</span>
                <h1 class="text-5xl md:text-6xl font-black tracking-tight mt-5 mb-6 leading-tight">
                    Julian Fleger.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
                </h1>
                <p class="text-lg md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                    Ich teile hier meine Projekte, Gedanken und kreativen Ideas. Außerdem findest du Einblicke in meine Brandings, meine Arbeit und neue Blogartikel.
                </p>
                <a href="blog.html" class="bg-cyan-400 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-300 transform hover:-translate-y-1 transition-all duration-300 inline-block no-underline">
                    Direkt zum Blog →
                </a>
            </div>
            <div class="md:col-span-5 flex justify-center">
                <div class="relative group">
                    <div class="absolute inset-0 bg-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xs transition-transform duration-300 group-hover:rotate-1"></div>
                    <img src="ich.jpeg" alt="Julian Fleger" class="relative w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-white/10 transition-transform duration-300 group-hover:scale-105">
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-20 flex-grow w-full">
        <div class="mb-12">
            <div class="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
                <div>
                    <h2 class="text-4xl font-black text-gray-950 tracking-tight">📰 Neueste Artikel</h2>
                    <p class="text-gray-500 text-lg mt-2">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group no-underline">
                    Alle Artikel ansehen <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                {% for post in site.posts limit:3 %}
                <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-105 transition-all duration-300">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                            {% assign words = post.content | strip_html | number_of_words %}
                            {% assign read_time = words | divided_by: 180 | plus: 1 %}
                            <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min.</span>
                        </div>
                        
                        <h3 class="text-xl font-black text-gray-950 mt-1 mb-2 line-clamp-2">{{ post.title }}</h3>
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
        </div>
    </main>

    <footer class="bg-white border-t border-gray-100 py-8 px-6 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 transition-colors no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors no-underline">Kontakt</a>
            </div>
        </div>
    </footer>

</body>
</html>
