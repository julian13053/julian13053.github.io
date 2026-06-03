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

    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="index.html" class="flex items-center gap-3 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-16 h-14 md:w-24 md:h-20 rounded-xl md:rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-2xl md:text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold text-gray-600 text-base md:text-lg">
                <a href="index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Über mich</a>
                <a href="blog.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 md:py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">📰 Mein Blog</h1>
            <p class="text-base md:text-lg text-blue-100">Gedanken, Projekte und kreative Ideen punktgenau festgehalten.</p>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-10 md:py-12 flex-grow w-full">
        
        <div class="max-w-md mx-auto mb-10 md:mb-16">
            <div class="relative">
                <input type="text" id="blogSearch" onkeyup="filterBlogPosts()" placeholder="🔍 Artikel nach Titel durchsuchen..." class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-xs focus:outline-none focus:border-blue-600 font-medium transition-all text-base">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="blogGrid">
            {% for post in site.posts %}
            <div class="blog-card bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-105 transition-all duration-300">
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                        {% assign words = post.content | strip_html | number_of_words %}
                        {% assign read_time = words | divided_by: 180 | plus: 1 %}
                        <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min.</span>
                    </div>
                    
                    <h2 class="post-title text-xl font-black text-gray-950 mt-1 mb-3 line-clamp-2">{{ post.title }}</h2>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-4">{{ post.excerpt | strip_html }}</p>
                </div>
                <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline inline-block mt-2">
                    Artikel lesen →
                </a>
            </div>
            {% else %}
            <div class="col-span-1 md:col-span-3 text-center py-12 bg-gray-100 rounded-2xl">
                <p class="text-gray-500 text-lg font-medium">Bisher wurden noch keine Artikel veröffentlicht.</p>
            </div>
            {% endfor %}
        </div>

        <p id="noResultsMessage" class="text-gray-500 text-center py-12 text-lg hidden">Keine passenden Artikel gefunden.</p>

    </main>

    <footer class="bg-white border-t border-gray-100 py-8 px-4 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 transition-colors no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors no-underline">Kontakt</a>
                <a href="impressum.html" class="hover:text-blue-600 transition-colors no-underline">Impressum</a>
                <a href="datenschutz.html" class="hover:text-blue-600 transition-colors no-underline">Datenschutz</a>
            </div>
        </div>
    </footer>

    <script>
        function filterBlogPosts() {
            const input = document.getElementById('blogSearch');
            const filter = input.value.toLowerCase();
            const cards = document.getElementsByClassName('blog-card');
            let hasResults = false;

            for (let i = 0; i < cards.length; i++) {
                const title = cards[i].querySelector('.post-title').innerText.toLowerCase();
                if (title.includes(filter)) {
                    cards[i].style.display = "flex";
                    hasResults = true;
                } else {
                    cards[i].style.display = "none";
                }
            }

            const noResults = document.getElementById('noResultsMessage');
            if (hasResults) {
                noResults.classList.add('hidden');
            } else {
                noResults.classList.remove('hidden');
            }
        }
    </script>
{% include cookie-banner.html %}
</body>
</html>
