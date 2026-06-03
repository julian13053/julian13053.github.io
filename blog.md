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
<body class="bg-gray-50 text-gray-900 font-sans antialiased">

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-28 h-24 rounded-2xl object-contain">
                <span class="text-4xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </div>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="hover:text-blue-600 transition-colors">Startseite</a>
                <a href="blog.html" class="text-blue-600">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- BLOG HEADER -->
    <header class="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-12 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Mein Blog</h1>
            <p class="text-lg text-blue-100">Hier findest du meine neuesten Beiträge und Gedanken.</p>
        </div>
    </header>

    <!-- BEITRAGS-LISTE -->
    <main class="max-w-4xl mx-auto px-6 py-12">
        <div class="space-y-8">
            {% for post in site.posts %}
            <article class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all">
                <span class="text-sm text-gray-400 font-semibold">{{ post.date | date: "%d.%m.%Y" }}</span>
                <h2 class="text-2xl font-bold text-gray-900 mt-1 mb-3">
                    <a href="{{ post.url | relative_url }}" class="hover:text-blue-600 transition-colors">{{ post.title }}</a>
                </h2>
                <p class="text-gray-600 mb-4">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold hover:underline">Weiterlesen →</a>
            </article>
            {% else %}
            <p class="text-gray-500 text-center">Noch keine Beiträge vorhanden.</p>
            {% endfor %}
        </div>
    </main>

</body>
</html>
