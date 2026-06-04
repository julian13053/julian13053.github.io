---
layout: null
title: "Startseite"
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M-Fleger - Startseite</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link class="rounded-xl" rel="icon" type="image/jpeg" href="/auge-logo.jpg">
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="/index.html" class="flex items-center gap-3 group no-underline text-current">
                <img src="/auge-logo.jpg" alt="M-Fleger Logo" class="w-16 h-14 md:w-24 md:h-20 rounded-xl md:rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105">
                <span class="text-2xl md:text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold text-gray-600 text-base md:text-lg">
                <a href="/index.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 transition-all no-underline">Startseite</a>
                <a href="/ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Über mich</a>
                <a href="/blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="/spenden.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Spenden</a>
                <a href="/kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HERO BANNER -->
    <section class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 px-4 md:px-12 w-full">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <!-- Text Links -->
            <div class="max-w-xl text-center md:text-left">
                <span class="bg-cyan-400 text-[#1e3a8a] font-bold tracking-wider uppercase text-xs px-3 py-1 rounded-md inline-block mb-4">Portfolio & Blog</span>
                <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6 text-white">
                    Julian Fleger.<br><span class="text-cyan-400">Punktgenau<br>verbunden.</span>
                </h1>
                <p class="text-lg md:text-xl font-medium text-blue-100 leading-relaxed mb-8">
                    Willkommen auf meiner Website! Hier erfährst du mehr über meine Arbeit, mein Branding und kannst meine neuesten Artikel lesen.
                </p>
                <!-- Button ohne Verlinkung -->
                <span class="inline-block bg-cyan-400 text-[#1e3a8a] font-bold px-6 py-3 rounded-xl shadow-md cursor-default select-none">
                    Direkt zum Blog →
                </span>
            </div>
            <!-- Bild Rechts (15% größer) -->
            <div class="relative shrink-0 p-3 bg-blue-500/20 rounded-3xl border border-white/10 shadow-2xl max-w-md w-full md:w-auto">
                <img src="/ich.jpeg" alt="Julian Fleger" class="w-full md:w-92 h-auto rounded-2xl object-cover">
            </div>
        </div>
    </section>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-grow max-w-4xl w-full mx-auto px-4 py-12">
        
        <!-- BLOGPOSTS -->
        <div class="space-y-6">
            <h2 class="text-3xl font-black text-gray-950 tracking-tight border-b border-gray-100 pb-2 mb-4">✍️ Neueste Blogposts</h2>
            
            {% for post in site.posts %}
                <article class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all mb-4">
                    <span class="text-sm font-bold text-blue-600 block mb-1">{{ post.date | date: "%d.%m.%Y" }}</span>
                    <h3 class="text-xl font-black text-gray-950 mb-2">
                        <a href="{{ post.url }}" class="hover:text-blue-600 transition-colors no-underline text-gray-950">{{ post.title }}</a>
                    </h3>
                    <p class="text-gray-500 font-medium text-sm leading-relaxed mb-4">
                        {{ post.excerpt | strip_html | truncatewords: 30 }}
                    </p>
                    <a href="{{ post.url }}" class="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 no-underline">
                        Weiterlesen →
                    </a>
                </article>
            {% endfor %}
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-4 text-center text-gray-500 font-medium mt-auto">
        <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
    </footer>

</body>
</html>
