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
                <a href="impressum.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Impressum</a>
                <a href="datenschutz.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Datenschutz</a>
            </div>
        </div>
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
    <footer class="bg-white border-t border-gray-100 py-8 px-4 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="index.html" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="ueber-mich.html" class="hover:text-blue-600 transition-colors no-underline">Über mich</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors no-underline">Contact</a>
                <a href="impressum.html" class="hover:text-blue-600 transition-colors no-underline">Impressum</a>
                <a href="datenschutz.html" class="hover:text-blue-600 transition-colors no-underline">Datenschutz</a>
            </div>
        </div>
    </footer>

    {% include cookie-banner.html %}
</body>
</html>
