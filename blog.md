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
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-4 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-20 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Startseite</a>
                <a href="blog.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <header class="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-12 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Mein Blog</h1>
            <p class="text-lg text-blue-100">Hier findest du meine neuesten Beiträge und Gedanken.</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12 flex-grow">
        <div class="space-y-8">
            {% for post in site.posts %}
            <article class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all">
                <span class="text-sm text-gray-400 font-semibold">{{ post.date | date: "%d.%m.%Y" }}</span>
                <h2 class="text-2xl font-bold text-gray-900 mt-1 mb-3">
                    <a href="{{ post.url | relative_url }}" class="hover:text-blue-600 transition-colors no-underline">{{ post.title }}</a>
                </h2>
                <p class="text-gray-600 mb-4">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold hover:underline no-underline">Weiterlesen →</a>
            </article>
            {% else %}
            <p class="text-gray-500 text-center">Noch keine Beiträge vorhanden.</p>
            {% endfor %}
        </div>
    </main>

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

</body>
</html>
