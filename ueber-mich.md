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
        {% include navigation.html %}
    </nav>

    <!-- HEADER -->
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 md:py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">👤 Über mich</h1>
            <p class="text-base md:text-lg text-blue-100">Wer ich bin, was mich antreibt und die Geschichte hinter meinen Brandings.</p>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="max-w-4xl mx-auto px-4 py-10 md:py-16 flex-grow w-full">
        
        <div class="bg-white border border-gray-100 p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xs mb-12 md:mem-16">
            <h2 class="text-2xl md:text-3xl font-black text-gray-950 tracking-tight mb-6">Moin, ich bin Julian!</h2>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Ich liebe es, kreative Ideen zu entwickeln, Strukturen aufzubauen und Content zu teilen. Auf dieser Website halte ich meine Projekte fest und schreibe im Blog über alles, was mich bewegt und inspiriert. Schon von klein auf hat mich die Frage fasziniert, wie man Dinge so ausdrücken und gestalten kann, dass sie im Gedächtnis bleiben.
            </p>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed">
                Egal ob in der Arbeit mit Menschen, bei der Konzeption neuer Ideen oder beim Schreiben – für mich zählt immer der Fokus und die echte, punktgenaue Verbindung. Schön, dass du den Weg auf meine Seite gefunden hast!
            </p>
        </div>

        <div class="border-t border-gray-200 pt-12 md:pt-16">
            <div class="text-center md:text-left mb-8">
                <h2 class="text-3xl md:text-4xl font-black text-gray-950 tracking-tight">Eigene Brandings</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                <!-- Brand 1 -->
                <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xs hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-4 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="jmf-logo.jpg" alt="JMF Scribble" class="w-full max-w-[280px] h-48 md:h-64 object-contain">
                        </div>
                        <h3 class="text-xl md:text-2xl font-black text-gray-950 mb-3">JMF-Scribble</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo basiert auf meinen Initialen und ist in einem klaren, geometrischen Anthrazit-Grau gehalten. Der lebendige blaue Akzent im Hintergrund, der an eine schnelle Skizze oder einen Pinselstrich erinnert, steht für Kreativität, frische Ideen und die nötige Portion „Scribble“ vor jedem großen Entwurf. Es symbolisiert die Balance zwischen Struktur und kreativer Energie.
                        </p>
                    </div>
                </div>

                <!-- Brand 2 -->
                <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xs hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="w-full bg-white border border-gray-200 rounded-2xl p-4 flex justify-center mb-6 shadow-xs transition-colors group-hover:border-blue-200">
                            <img src="auge-logo.jpg" alt="Blue Vision" class="w-full max-w-[280px] h-48 md:h-64 object-contain">
                        </div>
                        <h3 class="text-xl md:text-2xl font-black text-gray-950 mb-3">Blue Vision</h3>
                        <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                            Das Logo zeigt ein stilisierte, waches Auge, das von einem kräftigen, leuchtenden Blau umrandet ist. Der grafische, fast handgezeichnete Stil der Wimpern verleiht ihm eine besondere Note. Es steht für die Fähigkeit, das Wesentliche klar zu erkennen, Visionen zu haben, Achtsamkeit zu zeigen und über den Tellerrand hinauszuschauen. Das Auge symbolisiert Erkenntnis und den unermüdlichen Willen, die eigenen Ziele nicht aus den Augen zu vergessen.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Quote/Focus Section -->
            <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gray-100/60 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/50">
                <div class="flex justify-center w-full md:w-auto">
                    <img src="fokus.png" alt="Klarer Fokus" class="w-40 md:w-56 h-auto object-contain">
                </div>
                <div class="space-y-4 text-center md:text-left flex-1">
                    <div class="border-b border-gray-300 pb-2">
                        <h3 class="text-2xl md:text-4xl font-black text-blue-900 tracking-tight leading-tight">
                            Klarer Fokus.<br>Punktgenau verbunden.
                        </h3>
                    </div>
                    <p class="text-gray-700 italic text-sm md:text-lg leading-relaxed">
                        „Als ich das erstellt habe, war mir echt wichtig, dass sofort klar ist: Hier verbinden sich klare Strukturen mit kreativer Freiheit. Es geht nicht nur um ein Bild, sondern um den Moment, in dem eine Idee Gestalt annimmt. Für mich ist das JMF-Scribble der Anfang jeder kreativen Schöpfung und das Blue Vision Auge der Fokus, den man braucht, um etwas Neues in die Welt zu bringen.“
                    </p>
                </div>
            </div>
        </div>

    </main>

    <!-- FOOTER -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
