---
layout: null
title: Contact
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - M-Fleger</title>
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

    <header class="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 text-white py-16 px-6 text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Lass uns connecten!</h1>
            <p class="text-lg text-blue-100 max-w-lg mx-auto">Du hast Fragen oder möchtest mich erreichen? Melde dich unkompliziert per E-Mail oder Social Media.</p>
        </div>
    </header>

    <main class="max-w-2xl mx-auto px-6 py-16 flex-grow w-full">
        <div class="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-sm space-y-6">
            <h2 class="text-3xl font-black text-gray-950 mb-2 text-center md:text-left">Direktkontakt</h2>
            <p class="text-gray-500 mb-8 text-center md:text-left">Hier findest du meine offiziellen Erreichbarkeiten:</p>

            <div class="grid gap-4">
                <div class="flex items-center gap-5 bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-xs">
                    <div class="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl">@</div>
                    <div>
                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">E-Mail</p>
                        <a href="mailto:julian@fleger.de" class="text-gray-900 font-extrabold text-xl hover:text-blue-600 transition-colors no-underline">julian@fleger.de</a>
                    </div>
                </div>

                <div class="flex items-center gap-5 bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-xs">
                    <div class="bg-yellow-400 text-black w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl">👻</div>
                    <div>
                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">Snapchat</p>
                        <p class="text-gray-900 font-extrabold text-xl">zfd.julian</p>
                    </div>
                </div>
            </div>
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
