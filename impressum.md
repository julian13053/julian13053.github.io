---
layout: null
title: "Impressum"
permalink: /impressum
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impressum - M-Fleger</title>
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="text-slate-900 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

    <!-- Navigationsleiste aus _includes/navigation.html -->
    {% include navigation.html %}

    <!-- Seitenkopf -->
    <header class="page-hero page-hero--slate text-center">
        <div class="max-w-3xl mx-auto animate-fade-in">
            <span class="hero-badge">Rechtliches</span>
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mt-6">Impressum</h1>
        </div>
    </header>

    <!-- Hauptinhalt -->
    <main class="max-w-3xl mx-auto px-5 pb-16 md:pb-24 flex-grow w-full page-overlap">

        <div class="liquid-glass legal-text p-8 md:p-12 space-y-8">
            
            <section>
                <h2 class="text-xl md:text-2xl font-extrabold mb-3">Angaben gemäß § 5 DDG</h2>
                <p class="leading-relaxed text-slate-600">
                    Julian Maximilian Fleger<br>
                    Rüdickenstr. 30<br>
                    13053 Berlin
                </p>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-extrabold mb-3">Kontakt & E-Mail-Postfächer</h2>
                <ul class="space-y-2 leading-relaxed text-slate-600 font-medium">
                    <li><strong class="text-slate-900">Allgemeiner Kontakt:</strong> <a href="mailto:kontakt@m-fleger.de" class="text-blue-600 hover:underline">kontakt@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Allgemeine Fragen:</strong> <a href="mailto:info@m-fleger.de" class="text-blue-600 hover:underline">info@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Artikel, Korrekturen & Themen:</strong> <a href="mailto:redaktion@m-fleger.de" class="text-blue-600 hover:underline">redaktion@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Presse & Quellen:</strong> <a href="mailto:presse@m-fleger.de" class="text-blue-600 hover:underline">presse@m-fleger.de</a></li>
                </ul>
            </section>

            <section>
                <h2 class="text-xl md:text-2xl font-extrabold mb-3">Redaktionell verantwortlich</h2>
                <p class="leading-relaxed text-slate-600">
                    Julian Maximilian Fleger<br>
                    Rüdickenstr. 30<br>
                    13053 Berlin<br>
                    E-Mail: <a href="mailto:redaktion@m-fleger.de" class="text-blue-600 hover:underline">redaktion@m-fleger.de</a>
                </p>
            </section>

            <section class="pt-6 border-t border-slate-900/10">
                <h2 class="text-xl md:text-2xl font-extrabold mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p class="text-sm leading-relaxed text-slate-500 font-medium">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </div>
        
    </main>

    <!-- Fußzeile aus _includes/footer.html -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
