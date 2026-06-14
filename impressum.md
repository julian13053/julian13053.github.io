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
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="font-sans antialiased flex flex-col min-h-screen relative">

    <nav class="sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <main class="max-w-3xl mx-auto px-4 py-12 flex-grow w-full">
        
        <div class="p-8 md:p-12 rounded-3xl liquid-glass">
            <h1 class="text-3xl md:text-4xl font-black tracking-tight mb-6" style="color: #0f172a;">Impressum</h1>
            
            <h2 class="text-xl font-bold mt-6 mb-2" style="color: #0f172a;">Angaben gemäß § 5 TMG</h2>
            <p class="leading-relaxed" style="color: #334155;">
                Julian Fleger<br>
                Rüdickenstr. 30<br>
                13053 Berlin
            </p>

            <h2 class="text-xl font-bold mt-6 mb-2" style="color: #0f172a;">Kontakt</h2>
            <p class="leading-relaxed" style="color: #334155;">
                E-Mail: julian(at)m-fleger.de
            </p>

            <h2 class="text-xl font-bold mt-6 mb-2" style="color: #0f172a;">Redaktionell verantwortlich</h2>
            <p class="leading-relaxed" style="color: #334155;">
                Julian Fleger<br>
                Rüdickenstr. 30<br>
                13053 Berlin
            </p>

            <h2 class="text-xl font-bold mt-6 mb-2" style="color: #0f172a;">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p class="text-sm leading-relaxed mt-2" style="color: #475569;">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    </main>

    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
