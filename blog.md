---
layout: null
title: Blog
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - M-Fleger</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="{{ '/' | relative_url }}" class="flex items-center gap-4 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-20 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="{{ '/' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Startseite</a>
                <a href="{{ '/ueber-mich.html' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Über mich</a>
                <a href="{{ '/blog.html' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="{{ '/kontakt.html' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- BLOG HEADER -->
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Mein Blog</h1>
            <p class="text-lg text-blue-100">Hier findest du meine neuesten Beiträge und Gedanken.</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        
        <!-- SUCHLEISTE & KATEGORIEN-FILTER -->
        <div class="mb-12 space-y-6">
            <!-- Die neue Suchfunktion -->
            <div class="relative max-w-md mx-auto md:mx-0">
                <input type="text" id="blogSearch" onkeyup="filterPosts()" placeholder="🔍 Artikel durchsuchen..." class="w-full pl-5 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium transition-all">
            </div>

            <!-- Die interaktiven Kategorien-Filter -->
            <div class="flex flex-wrap gap-2 items-center text-sm">
                <span class="text-gray-400 font-bold uppercase text-xs mr-2">Kategorien:</span>
                <button onclick="filterCategory('all')" class="cat-btn bg-blue-600 text-white font-bold px-4 py-1.5 rounded-full shadow-xs cursor-pointer transition-all">Alle</button>
                <button onclick="filterCategory('Kinderrechte')" class="cat-btn bg-white border border-gray-200 text-gray-600 font-bold px-4 py-1.5 rounded-full hover:border-gray-300 cursor-pointer transition-all">Kinderrechte</button>
                <button onclick="filterCategory('Wohngruppen')" class="cat-btn bg-white border border-gray-200 text-gray-600 font-bold px-4 py-1.5 rounded-full hover:border-gray-300 cursor-pointer transition-all">Wohngruppen</button>
                <button onclick="filterCategory('Persönliches')" class="cat-btn bg-white border border-gray-200 text-gray-600 font-bold px-4 py-1.5 rounded-full hover:border-gray-300 cursor-pointer transition-all">Persönliches</button>
                <button onclick="filterCategory('Projekte')" class="cat-btn bg-white border border-gray-200 text-gray-600 font-bold px-4 py-1.5 rounded-full hover:border-gray-300 cursor-pointer transition-all">Projekte</button>
            </div>
        </div>

        <!-- BEITRAGS-LISTE -->
        <div class="space-y-6" id="postsContainer">
            {% for post in site.posts %}
                <!-- Berechne die Lesezeit -->
                {% assign words = post.content | strip_html | number_of_words %}
                {% assign read_time = words | divided_by: 180 | plus: 1 %}
                
                <!-- Wir speichern den Titel und die Kategorie unsichtbar im HTML, damit die Suche sie findet -->
                <article class="blog-post bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md hover:scale-101 transition-all duration-300" data-category="{{ post.category | default: 'all' }}">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">{{ post.date | date: "%d.%m.%Y" }}</span>
                        <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min. Lesezeit</span>
                    </div>
                    
                    <h2 class="text-2xl font-black text-gray-950 mt-1 mb-2">
                        <a href="{{ post.url | relative_url }}" class="post-title hover:text-blue-600 transition-colors no-underline">{{ post.title }}</a>
                    </h2>
                    
                    {% if post.category %}
                    <span class="inline-block bg-blue-50 text-blue-600 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md mb-4"># {{ post.category }}</span>
                    {% endif %}
                    
                    <p class="text-gray-600 leading-relaxed text-base mb-4">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold hover:text-blue-800 no-underline text-sm inline-block">Weiterlesen →</a>
                </article>
            {% else %}
                <p class="text-gray-500 text-center py-8">Noch keine Beiträge vorhanden.</p>
            {% endfor %}
            
            <!-- Nachricht falls die Suche ins Leere läuft -->
            <p id="noResults" class="text-gray-500 text-center py-8 hidden">Keine passenden Artikel gefunden.</p>
        </div>
    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-6 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors no-underline">Kontakt</a>
            </div>
        </div>
    </footer>

    <!-- INTERAKTIVES JAVASCRIPT FÜR DIE SUCHE & FILTER -->
    <script>
        let currentCategory = 'all';

        function filterPosts() {
            const query = document.getElementById('blogSearch').value.toLowerCase();
            const posts = document.querySelectorAll('.blog-post');
            let visibleCount = 0;

            posts.forEach(post => {
                const title = post.querySelector('.post-title').innerText.toLowerCase();
                const category = post.getAttribute('data-category');
                
                const matchesSearch = title.includes(query);
                const matchesCategory = (currentCategory === 'all' || category === currentCategory);

                if (matchesSearch && matchesCategory) {
                    post.style.display = 'block';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            const noResults = document.getElementById('noResults');
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }

        function filterCategory(catName) {
            currentCategory = catName;
            
            // Design der Filter-Buttons anpassen
            const buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(btn => {
                if(btn.innerText === catName || (catName === 'all' && btn.innerText === 'Alle')) {
                    btn.className = "cat-btn bg-blue-600 text-white font-bold px-4 py-1.5 rounded-full shadow-xs cursor-pointer transition-all";
                } else {
                    btn.className = "cat-btn bg-white border border-gray-200 text-gray-600 font-bold px-4 py-1.5 rounded-full hover:border-gray-300 cursor-pointer transition-all";
                }
            });

            filterPosts();
        }
    </script>

</body>
</html>
