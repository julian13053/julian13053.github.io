---
layout: null
title: Kontakt
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - M-Fleger</title>
    
    <link rel="stylesheet" href="/style.css">
    <link rel="icon" type="image/jpeg" href="/auge-logo.jpg">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="text-slate-900 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

    <!-- Navigationsleiste aus _includes/navigation.html -->
    {% include navigation.html %}

    <!-- Header Section -->
    <header class="page-hero text-center">
        <div class="max-w-4xl mx-auto animate-fade-in space-y-4">
            <span class="hero-badge shimmer">Get in Touch</span>
            <h1 class="text-[2.3rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mt-6 mb-6">
                👋 Lass uns connecten!<br><span class="block mt-3 text-2xl md:text-3xl text-gradient-brand">Fragen, Feedback oder Kostenlose Terminvereinbarung.</span>
            </h1>
            <p class="text-base md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed">
                Du hast Fragen, möchtest mich erreichen oder direkt einen kostenlosen Termin vereinbaren? Melde dich unkompliziert per Formular, E-Mail oder Social Media.
            </p>
        </div>
    </header>

    <!-- Hauptinhalt -->
    <main class="max-w-4xl mx-auto px-5 md:px-6 pb-16 md:pb-24 flex-grow w-full space-y-10 page-overlap">

        <!-- Termin buchen Formular -->
        <div class="liquid-glass p-8 md:p-12 max-w-2xl mx-auto">
            <div class="text-center mb-8">
                <span class="shimmer bg-emerald-100/90 !text-emerald-700 border border-emerald-200 font-bold px-3.5 py-1 rounded-full text-[11px] uppercase tracking-[0.14em] inline-block mb-4">
                    100% Kostenlos
                </span>
                <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">📅 Termin vereinbaren</h2>
                <p class="text-slate-600 font-medium text-base mt-2">Wähle deinen Wunschtermin (von 12:00 bis 20:00 Uhr) und gib deine Daten ein.</p>
            </div>

            <form action="https://formspree.io/f/mppqnypq" method="POST" class="space-y-5 text-left">
                
                <div>
                    <label for="art" class="block text-sm font-bold text-slate-700 mb-2">Art des Termins *</label>
                    <select id="art" name="Termin-Art" required class="glass-input font-medium">
                        <option value="Persönliches Treffen">Persönliches Treffen</option>
                        <option value="Online / Telefon Gespräch">Gespräch (Online / Telefon)</option>
                        <option value="Sonstiges Anliegen">Sonstiges Anliegen</option>
                    </select>
                </div>

                <div>
                    <label for="name" class="block text-sm font-bold text-slate-700 mb-2">Vollständiger Name *</label>
                    <input type="text" id="name" name="Name" required placeholder="z. B. Max Mustermann" class="glass-input font-medium">
                </div>

                <div>
                    <label for="email" class="block text-sm font-bold text-slate-700 mb-2">E-Mail-Adresse *</label>
                    <input type="email" id="email" name="E-Mail" required placeholder="name@beispiel.de" class="glass-input font-medium">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label for="dob" class="block text-sm font-bold text-slate-700 mb-2">Geburtsdatum *</label>
                        <input type="date" id="dob" name="Geburtsdatum" required class="glass-input font-medium">
                    </div>

                    <div>
                        <label for="date" class="block text-sm font-bold text-slate-700 mb-2">Wunsch-Datum *</label>
                        <input type="date" id="date" name="Termin-Datum" required class="glass-input font-medium">
                    </div>

                    <div>
                        <label for="time" class="block text-sm font-bold text-slate-700 mb-2">Uhrzeit (12–20 Uhr) *</label>
                        <input type="time" id="time" name="Termin-Uhrzeit" min="12:00" max="20:00" required class="glass-input font-medium">
                    </div>
                </div>

                <div>
                    <label for="reason" class="block text-sm font-bold text-slate-700 mb-2">Anliegen / Grund des Gesprächs *</label>
                    <textarea id="reason" name="Grund" rows="4" required placeholder="Worüber möchtest du sprechen?" class="glass-input font-medium"></textarea>
                </div>

                <button type="submit" class="btn-brand w-full py-4 !rounded-2xl text-lg cursor-pointer">
                    Termin jetzt kostenlos anfragen
                </button>
            </form>
        </div>

        <!-- Direktkontakt & Postfächer -->
        <div class="liquid-glass p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">E-Mail-Postfächer</h2>
            <p class="text-slate-600 font-medium text-base mb-8">Wähle die passende Adresse für dein Anliegen:</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                <a href="mailto:kontakt@m-fleger.de" class="law-card group block no-underline">
                    <span class="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Allgemeiner Kontakt</span>
                    <span class="block text-base font-bold text-slate-900 group-hover:!text-blue-600 transition-colors">kontakt@m-fleger.de</span>
                </a>

                <a href="mailto:info@m-fleger.de" class="law-card group block no-underline">
                    <span class="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Allgemeine Fragen</span>
                    <span class="block text-base font-bold text-slate-900 group-hover:!text-blue-600 transition-colors">info@m-fleger.de</span>
                </a>

                <a href="mailto:redaktion@m-fleger.de" class="law-card group block no-underline">
                    <span class="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Artikel & Themen</span>
                    <span class="block text-base font-bold text-slate-900 group-hover:!text-blue-600 transition-colors">redaktion@m-fleger.de</span>
                </a>

                <a href="mailto:presse@m-fleger.de" class="law-card group block no-underline">
                    <span class="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Presse & Quellen</span>
                    <span class="block text-base font-bold text-slate-900 group-hover:!text-blue-600 transition-colors">presse@m-fleger.de</span>
                </a>
            </div>

            <div class="space-y-4 max-w-md mx-auto">
                <a href="https://www.instagram.com/zfd.julian" target="_blank" rel="noopener noreferrer" class="btn-shine flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-bold p-5 rounded-2xl shadow-lg hover:opacity-95 transition-all duration-200 no-underline w-full group">
                    <span class="text-xs uppercase tracking-wider opacity-90 mb-1 transition-transform group-hover:scale-105">Auf Instagram folgen</span>
                    <span class="text-base md:text-lg tracking-wide">@zfd.julian</span>
                </a>
            </div>

            <div class="mt-12 border-t border-slate-900/10 pt-8">
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    Ich versuche in der Regel innerhalb von 24 Stunden zu antworten.<br class="hidden sm:inline"> Ich freue mich auf deine Nachricht!
                </p>
            </div>
        </div>
    </main>

    <!-- Fußzeile aus _includes/footer.html -->
    {% include footer.html %}

    {% include cookie-banner.html %}
</body>
</html>
