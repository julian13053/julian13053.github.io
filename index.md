---
layout: default
title: "Startseite"
---

<div class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 px-4 rounded-3xl my-8 shadow-xl">
    <div class="max-w-4xl mx-auto text-center">
        <span class="bg-blue-500/30 text-blue-200 font-bold tracking-wider uppercase text-xs px-3 py-1 rounded-full inline-block mb-4">🎯 Mein Leitbild</span>
        <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-6">Willkommen bei M-Fleger</h1>
        <p class="text-lg md:text-xl font-medium text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Diese Website ist mehr als nur ein Blog. Sie ist eine Plattform für ehrlichen Austausch, kreative Entfaltung und den Fokus auf Werte, die im Leben wirklich zählen: **Kinderrechte, Respekt, Mitbestimmung, Offenheit und Ehrlichkeit**.
        </p>
        <div class="flex flex-wrap justify-center gap-3 font-semibold text-sm">
            <span class="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">🤝 Respekt</span>
            <span class="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">📢 Mitbestimmung</span>
            <span class="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">❤️ Kinderrechte</span>
            <span class="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">✨ Offenheit & Ehrlichkeit</span>
        </div>
    </div>
</div>

<div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    <div class="lg:col-span-2 space-y-6">
        <h2 class="text-2xl font-black text-gray-950 tracking-tight border-b border-gray-100 pb-2 mb-4">✍️ Neueste Blogposts</h2>
        
        {% for post in site.posts %}
            <article class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all">
                <span class="text-sm font-bold text-blue-600 block mb-1">{{ post.date | date: "%d.%m.%Y" }}</span>
                <h3 class="text-xl font-black text-gray-950 mb-2">
                    <a href="{{ post.url }}" class="hover:text-blue-600 transition-colors no-underline">{{ post.title }}</a>
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

    <div class="space-y-6">
        <h2 class="text-2xl font-black text-gray-950 tracking-tight border-b border-gray-100 pb-2 mb-4">📅 Termine & Status</h2>
        
        <div class="bg-amber-50 border border-amber-200/60 p-6 rounded-2xl shadow-xs">
            <div class="flex items-center gap-2 text-amber-800 font-bold mb-3">
                <span class="text-xl">☀️</span>
                <h3>Aktueller Status / Urlaub</h3>
            </div>
            <p class="text-amber-900/80 font-medium text-sm leading-relaxed mb-4">
                Hier halte ich dich über meine kommenden Urlaubszeiten oder Termine auf dem Laufenden, an denen es etwas ruhiger auf dem Blog wird.
            </p>
            <div class="bg-white/80 border border-amber-200 p-3 rounded-xl text-xs font-semibold text-amber-900">
                📌 **Nächster Urlaub:**<br> Vom 23.07.2026 bis 26.07.2026 🌊
            </div>
        </div>

        <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-xs">
            <h3 class="font-bold text-gray-950 mb-2">❤️ Herzenssache</h3>
            <p class="text-gray-500 font-medium text-xs leading-relaxed mb-3">
                Meine neue Spendenseite für Kinder in Not ist ab jetzt online. Jeder Blick darauf hilft!
            </p>
            <a href="/spenden.html" class="text-xs font-bold text-blue-600 hover:underline no-underline">Zur Spendenseite →</a>
        </div>
    </div>

</div>
