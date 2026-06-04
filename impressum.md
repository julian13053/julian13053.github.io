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

    <!-- NAVIGATION -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <!-- INHALT -->
    <main class="max-w-3xl mx-auto px-4 py-12 flex-grow w-full">
        <div class="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xs">
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-950 mb-6">Impressum</h1>
            
            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
            <p class="text-gray-600 leading-relaxed">
                Julian Fleger<br>
                Rüdickenstr. 30<br>
                13053 Berlin
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Kontakt</h2>
            <p class="text-gray-600 leading-relaxed">
                E-Mail: julian(at)m-fleger.de
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Redaktionell verantwortlich</h2>
            <p class="text-gray-600 leading-relaxed">
                Julian Fleger<br>
                Rüdickenstr. 30<br>
                13053 Berlin
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p class="text-gray-600 text-sm leading-relaxed mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    </main>

    <!-- FOOTER -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
