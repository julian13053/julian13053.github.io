---
layout: null
title: "Datenschutzerklärung"
permalink: /datenschutz.html
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datenschutz - M-Fleger</title>
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
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-950 mb-6">Datenschutzerklärung</h1>
            
            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">1. Datenschutz auf einen Blick</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
                Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf dieser Webseite werden von GitHub automatisch Informationen erhoben und in sogenannten Server-Log-Files gespeichert. Dies dient dem technischen Betrieb der Seite.
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">2. Verantwortlicher</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
                Julian Fleger<br>
                Rüdickenstr. 30<br>
                13053 Berlin<br>
                E-Mail: julian(at)m-fleger.de
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">3. Hosting durch GitHub Pages</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
                Wir hosten unsere Website bei GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA („GitHub“). Wenn Sie unsere Website besuchen, erfasst GitHub u.a. Ihre IP-Adresse. Die Verwendung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und schnellen Bereitstellung unserer Website). Weitere Details finden Sie in der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" class="text-blue-600 underline hover:text-blue-800" target="_blank">GitHub Privacy Statement</a>.
            </p>

            <h2 class="text-xl font-bold text-gray-950 mt-6 mb-2">4. Ihre Rechte</h2>
            <p class="text-gray-600 leading-relaxed">
                Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenden Sie sich hierzu einfach an die oben angegebene Kontaktadresse.
            </p>
        </div>
    </main>

    <!-- FOOTER -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
