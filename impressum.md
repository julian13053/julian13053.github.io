---
layout: null
title: "Impressum"
permalink: /impressum.html
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impressum - M-Fleger</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="index.html" class="flex items-center gap-3 group no-underline text-current">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-16 h-14 md:w-24 md:h-20 rounded-xl md:rounded-2xl object-contain">
                <span class="text-2xl md:text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold text-gray-600 text-base md:text-lg">
                <a href="index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <main class="max-w-3xl mx-auto px-4 py-12 flex-grow w-full">
        <div class="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xs">
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-950 mb-6">Impressum</h1>
            
            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
            <p class="text-gray-600 leading-relaxed">
                [Dein vollständiger Vor- und Nachname]<br>
                [Deine Straße und Hausnummer]<br>
                [Deine PLZ und Wohnort]
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Kontakt</h2>
            <p class="text-gray-600 leading-relaxed">
                E-Mail: [Deine E-Mail-Adresse]
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Redaktionell verantwortlich</h2>
            <p class="text-gray-600 leading-relaxed">
                [Dein vollständiger Vor- und Nachname]<br>
                [Deine Straße und Hausnummer]<br>
                [Deine PLZ und Wohnort]
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p class="text-gray-600 text-sm leading-relaxed mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    </main>

    <footer class="bg-white border-t border-gray-100 py-8 px-4 text-center text-gray-500 font-medium">
        <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
    </footer>

    {% include cookie-banner.html %}
</body>
</html>
