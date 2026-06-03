---
layout: null
title: Über mich
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Über mich - M-Fleger</title>
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
                <a href="{{ '/ueber-mich.html' | relative_url }}" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">Über mich</a>
                <a href="{{ '/blog.html' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Blog</a>
                <a href="{{ '/kontakt.html' | relative_url }}" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all no-underline">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- HEADER -->
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">👤 Über mich</h1>
            <p class="text-lg text-blue-100">Wer ich bin, was mich antreibt und die Geschichte hinter meinen Brandings.</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16 flex-grow w-full">
        
        <!-- PERSÖNLICHE VORSTELLUNG -->
        <div class="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xs mb-16">
            <h2 class="text-3xl font-black text-gray-950 tracking-tight mb-6">Moin, ich bin Julian!</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
                Ich liebe es, kreative Ideen zu entwickeln, Strukturen aufzubauen und Content zu teilen. Auf dieser Website halte ich meine Projekte fest und schreibe im Blog über alles, was mich bewegt und inspiriert. Schon von klein auf hat mich die Frage fasziniert, wie man Dinge so ausdrücken und gestalten kann, dass sie im Gedächtnis bleiben.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
                Egal ob in der Arbeit mit Menschen, bei der Konzeption neuer Ideen oder beim Schreiben – für mich zählt immer der Fokus und die echte, punktgenaue Verbindung. Schön, dass du den Weg auf meine Seite gefunden hast!
            </p>
        </div>

        <!-- BRANDINGS SEKTION -->
        <div class="border-t border-gray-200 pt-16">
            <div class="text-center md:text-left mb-8">
                <h2 class="text-4xl font-black text-gray-950 tracking-tight flex items-center justify-center md:justify-start gap-3">
                    Eigene Brandings 
                    <img src="fokus.png" alt="Auge Fokus Icon" class="w-8 h-8 object-contain">
                </h2>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <!-- JMF Scribble Kachel -->
                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="jmf-logo.jpg" alt="JMF Scribble" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">JMF-Scribble</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo basiert auf meinen Initialen und ist in einem klaren, geometrischen Anthrazit-Grau gehalten. Der lebendige blaue Akzent im Hintergrund, der an eine schnelle Skizze oder einen Pinselstrich erinnert, steht für Kreativität, frische Ideen und die nötige Portion „Scribble“ vor jedem großen Entwurf. Es symbolisiert die Balance zwischen Struktur und kreativer Energie.
                        </p>
                    </div>
                </div>

                <!-- Blue Vision Kachel -->
                <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xs hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-6 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="auge-logo.jpg" alt="Blue Vision" class="w-full max-w-[320px] h-64 object-contain">
                        </div>
                        <h3 class="text-2xl font-black text-gray-950 mb-3">Blue Vision</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo zeigt ein stilisiertes, waches Auge, das von einem kräftigen, leuchtenden Blau umrandet ist. Der grafische, fast handgezeichnete Stil der Wimpern verleiht ihm eine besondere Note. Es steht für die Fähigkeit, das Wesentliche klar zu erkennen, Visionen zu haben, Achtsamkeit zu zeigen und über den Tellerrand hinauszuschauen. Das Auge symbolisiert Erkenntnis und den unermüdlichen Willen, die eigenen Ziele nicht aus den Augen zu verlieren.
                        </p>
                    </div>
                </div>
            </div>

            <!-- VISUELLER SLOGAN & TEXTBEREICH -->
            <div class="grid md:grid-cols-12 gap-8 items-center bg-gray-100/60 p-8 rounded-3xl border border-gray-200/50">
                <!-- Links: Die Kamera-Illustration -->
                <div class="md:col-span-4 flex justify-center">
                    <img src="image_d8f8c4.png" alt="Kamera Illustration" class="w-56 h-auto object-contain mix-blend-multiply">
                </div>
                <!-- Rechts: Slogan & Dein Statement -->
                <div class="md:col-span-8 space-y-4">
                    <div class="border-b border-gray-300 pb-2">
                        <h3 class="text-3xl md:text-4xl font-black text-blue-900 tracking-tight leading-tight">
                            Klarer Fokus.<br>Punktgenau verbunden.
                        </h3>
                    </div>
                    <p class="text-gray-700 italic text-base md:text-lg leading-relaxed">
                        „Als ich das erstellt habe, war mir echt wichtig, dass sofort klar ist: Hier verbinden sich klare Strukturen mit kreativer Freiheit. Es geht nicht nur um ein Bild, sondern um den Moment, in dem eine Idee Gestalt annimmt. Für mich ist das JMF-Scribble der Anfang jeder kreativen Schöpfung und das Blue Vision Auge der Fokus, den man braucht, um etwas Neues in die Welt zu bringen.“
                    </p>
                </div>
            </div>
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-6 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
                <a href="{{ '/' | relative_url }}" class="hover:text-blue-600 transition-colors no-underline">Startseite</a>
                <a href="{{ '/ueber-mich.html' | relative_url }}" class="hover:text-blue-600 transition-colors no-underline">Über mich</a>
                <a href="{{ '/blog.html' | relative_url }}" class="hover:text-blue-600 transition-colors no-underline">Blog</a>
                <a href="{{ '/kontakt.html' | relative_url }}" class="hover:text-blue-600 transition-colors no-underline">Kontakt</a>
            </div>
        </div>
    </footer>

</body>
</html>
