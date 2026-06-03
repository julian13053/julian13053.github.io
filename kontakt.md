---
layout: null
title: Kontakt
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
            <div class="flex items-center gap-4">
                <img src="auge-logo.jpg" alt="M-Fleger Logo" class="w-24 h-20 rounded-2xl object-contain">
                <span class="text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </div>
            <div class="flex gap-6 font-semibold text-gray-600 text-lg">
                <a href="index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all">Blog</a>
                <a href="kontakt.html" class="text-blue-600 border-b-2 border-blue-600 pb-1">Kontakt</a>
            </div>
        </div>
    </nav>

    <!-- KONTAKT HEADER -->
    <header class="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 text-white py-16 px-6 text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Lass uns connecten!</h1>
            <p class="text-lg text-blue-100 max-w-lg mx-auto">Du hast Fragen zu meinen Brandings, willst zusammenarbeiten oder einfach nur Hallo sagen? Schreib mir!</p>
        </div>
    </header>

    <!-- KONTAKT FORMULAR & INFO -->
    <main class="max-w-4xl mx-auto px-6 py-16 flex-grow w-full grid md:grid-cols-2 gap-12">
        
        <!-- Linke Seite: Infos -->
        <div class="space-y-8">
            <div>
                <h2 class="text-2xl font-black text-gray-950 mb-3">Direkte Verbindung</h2>
                <p class="text-gray-600 leading-relaxed">Ich versuche in der Regel, innerhalb von 24 Stunden auf alle Nachrichten zu antworten. Lass uns gerne etwas Großartiges zusammen aufbauen.</p>
            </div>

            <div class="space-y-4">
                <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <div class="bg-blue-100 text-blue-600 p-3 rounded-lg font-bold">@</div>
                    <div>
                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">E-Mail</p>
                        <p class="text-gray-900 font-semibold">deine-email@beispiel.de</p>
                    </div>
                </div>

                <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <div class="bg-cyan-100 text-cyan-700 p-3 rounded-lg font-bold">#</div>
                    <div>
                        <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">Social Media</p>
                        <p class="text-gray-900 font-semibold">GitHub: julian13053</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rechte Seite: Formular-Layout -->
        <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
            <form action="#" method="POST" class="space-y-6">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Dein Name</label>
                    <input type="text" placeholder="Julian" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Deine E-Mail-Adresse</label>
                    <input type="email" placeholder="name@beispiel.de" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Nachricht</label>
                    <textarea rows="4" placeholder="Schreib hier deine Nachricht rein..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"></textarea>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                    Nachricht senden
                </button>
            </form>
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 py-8 px-6 text-center text-gray-500 font-medium">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 M-Fleger. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
                <a href="index.html" class="hover:text-blue-600 transition-colors">Startseite</a>
                <a href="blog.html" class="hover:text-blue-600 transition-colors">Blog</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
        </div>
    </footer>

</body>
</html>
