---
layout: null
title: "Impressum"
permalink: /impressum
---
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impressum - M-Fleger</title>
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        .liquid-glass {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen text-gray-900 font-sans antialiased flex flex-col justify-between relative">

    <!-- Navigationsleiste aus _includes/navigation.html -->
    {% include navigation.html %}

    <!-- Hauptinhalt -->
    <main class="max-w-3xl mx-auto px-4 py-12 flex-grow w-full">
        
        <div class="p-8 md:p-12 rounded-3xl liquid-glass shadow-xs space-y-6">
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Impressum</h1>
            
            <section>
                <h2 class="text-xl font-bold mb-2 text-slate-900">Angaben gemäß § 5 DDG</h2>
                <p class="leading-relaxed text-slate-600">
                    Julian Maximilian Fleger<br>
                    Rüdickenstr. 30<br>
                    13053 Berlin
                </p>
            </section>

            <section>
                <h2 class="text-xl font-bold mb-3 text-slate-900">Kontakt & E-Mail-Postfächer</h2>
                <ul class="space-y-2 leading-relaxed text-slate-600 font-medium">
                    <li><strong class="text-slate-900">Allgemeiner Kontakt:</strong> <a href="mailto:kontakt@m-fleger.de" class="text-blue-600 hover:underline">kontakt@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Allgemeine Fragen:</strong> <a href="mailto:info@m-fleger.de" class="text-blue-600 hover:underline">info@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Artikel, Korrekturen & Themen:</strong> <a href="mailto:redaktion@m-fleger.de" class="text-blue-600 hover:underline">redaktion@m-fleger.de</a></li>
                    <li><strong class="text-slate-900">Presse & Quellen:</strong> <a href="mailto:presse@m-fleger.de" class="text-blue-600 hover:underline">presse@m-fleger.de</a></li>
                </ul>
            </section>

            <section>
                <h2 class="text-xl font-bold mb-2 text-slate-900">Redaktionell verantwortlich</h2>
                <p class="leading-relaxed text-slate-600">
                    Julian Maximilian Fleger<br>
                    Rüdickenstr. 30<br>
                    13053 Berlin<br>
                    E-Mail: <a href="mailto:redaktion@m-fleger.de" class="text-blue-600 hover:underline">redaktion@m-fleger.de</a>
                </p>
            </section>

            <section class="pt-4 border-t border-slate-200/60">
                <h2 class="text-xl font-bold mb-2 text-slate-900">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
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
