---
layout: default
title: "Startseite"
---

<!-- TAILWIND DESIGN-BOOSTER -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="max-w-6xl mx-auto py-6">
    
    <!-- 1. HERO / BLAUES LEITBILD-BANNER MIT DEINEM BILD -->
    <div class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 px-6 rounded-3xl my-6 shadow-xl flex flex-col md:flex-row items-center gap-8">
        <img src="/ich.jpeg" alt="Julian" class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white/20 shrink-0">
        <div class="text-center md:text-left">
            <span class="bg-blue-500/30 text-blue-200 font-bold tracking-wider uppercase text-xs px-3 py-1 rounded-full inline-block mb-3">🎯 Mein Leitbild</span>
            <h1 class="text-3xl md:text-4xl font-black tracking-tight mb-3 text-white">Willkommen bei M-Fleger</h1>
            <p class="text-base font-medium text-blue-100 max-w-2xl leading-relaxed mb-4">
                Diese Website ist eine Plattform für ehrlichen Austausch, kreative Entfaltung und den Fokus auf Werte, die im Leben wirklich zählen: **Kinderrechte, Respekt, Mitbestimmung, Offenheit und Ehrlichkeit**.
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-2 font-semibold text-xs text-white">
                <span class="bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">🤝 Respekt</span>
                <span class="bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">📢 Mitbestimmung</span>
                <span class="bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">❤️ Kinderrechte</span>
                <span class="bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">✨ Offenheit</span>
            </div>
        </div>
    </div>

    <!-- 2. ZWEI-SPALTEN-LAYOUT -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        <!-- LINKE SPALTE: ARTIKEL (2 Spalten breit) -->
        <div class="lg:col-span-2 space-y-6">
            <h2 class="text-2xl font-black text-gray-950 tracking-tight border-b border-gray-100 pb-2 mb-4">✍️ Neueste Blogposts</h2>
            
            {% for post in site.posts %}
                <article class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all mb-4">
                    <span class="text-sm font-bold text-blue-600 block mb-1">{{ post.date | date: "%d.%m.%Y" }}</span>
                    <h3 class="text-xl font-black text-gray-950 mb-2">
                        <a href="{{ post.url }}" class="hover:text-blue-600 transition-colors no-underline text-gray-950">{{ post.title }}</a>
                    </h3>
                    <p class="text-gray-500 font-medium text-sm leading-relaxed mb-4">
                        {{ post.excerpt | strip_html | truncatewords: 30 }}
                    </p>
                    <a href="{{ post.url }}" class="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 no-underline">
                        Weiterlesen →
                    </a>
                </article>
            {% endfor %}
        </div>

        <!-- RECHTE SPALTE: SIDEBAR MIT URLAUB (1 Spalte breit) -->
        <div class="space-y-6">
            <h2 class="text-2xl font-black text-gray-950 tracking-tight border-b border-gray-100 pb-2 mb-4">📅 Termine & Status</h2>
            
            <!-- Gelbe Urlaubsbox -->
            <div class="bg-amber-50 border border-amber-200/60 p-6 rounded-2xl shadow-xs">
                <div class="flex items-center gap-2 text-amber-800 font-bold mb-3">
                    <span class="text-xl">☀️</span>
                    <h3 class="text-amber-800 font-bold m-0 text-lg">Aktueller Status / Urlaub</h3>
                </div>
                <p class="text-amber-900/80 font-medium text-sm leading-relaxed mb-4">
                    Hier halte ich dich über meine kommenden Urlaubszeiten auf dem Laufenden.
                </p>
                <div class="bg-white/80 border border-amber-200 p-3 rounded-xl text-xs font-semibold text-amber-900">
                    📌 **Nächster Urlaub:**<br> Vom 23.07.2026 bis 26.07.2026 🌊
                </div>
            </div>

            <!-- Zusätzliche Spenden-Info -->
            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-xs">
                <h3 class="font-bold text-gray-950 mb-2 m-0 text-base">❤️ Herzenssache</h3>
                <p class="text-gray-500 font-medium text-xs leading-relaxed mb-3">
                    Meine neue Spendenseite für Kinder in Not ist online. Jeder Blick darauf hilft!
                </p>
                <a href="/spenden.html" class="text-xs font-bold text-blue-600 hover:underline no-underline">Zur Spendenseite →</a>
            </div>
        </div>

    </div>
</div>
