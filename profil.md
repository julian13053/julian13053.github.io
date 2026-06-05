---
layout: null
title: Mein Profil
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Profil - M-Fleger</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <!-- MENÜ -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <!-- HEADER -->
    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 md:py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">👤 Mein Profil</h1>
            <p id="user-email-display" class="text-base md:text-lg text-blue-100 font-medium">Lade Profil...</p>
        </div>
    </header>

    <!-- INHALT -->
    <main class="max-w-6xl mx-auto px-4 py-10 md:py-12 flex-grow w-full">
        
        <!-- Bereich wenn nicht angemeldet -->
        <div id="login-required-card" class="max-w-md mx-auto bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center hidden">
            <span class="text-4xl block mb-4">🔒</span>
            <h2 class="text-xl font-bold mb-2">Anmeldung erforderlich</h2>
            <p class="text-gray-600 text-sm mb-6">Du musst eingeloggt sein, um deine Merkliste und dein Profil zu sehen.</p>
            <a href="/anmeldung-erforderlich.html" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all inline-block no-underline">
                Jetzt anmelden
            </a>
        </div>

        <!-- Profil-Bereich (Favoriten-Liste) -->
        <div id="profile-content" class="hidden">
            <h2 class="text-2xl font-black text-gray-950 tracking-tight mb-8 flex items-center gap-2">
                ❤️ Meine gespeicherten Favoriten
            </h2>
            
            <!-- Hier landen dynamisch die favorisierten Karten -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="favorites-grid"></div>

            <!-- Platzhalter wenn die Liste leer ist -->
            <p id="no-favorites-message" class="text-gray-500 text-center py-12 text-lg font-medium hidden">
                Du hast bisher noch keine Artikel als Favorit markiert. ⭐
            </p>
        </div>

    </main>

    {% include footer.html %}

    <!-- UNSICHTBARER JEKYLL-SPEICHER: Lädt alle Posts als JavaScript-Objekt, damit wir sie matchen können -->
    <script>
        const ALL_JEKYLL_POSTS = [
            {% for post in site.posts %}
            {
                id: "{{ post.date | date: '%Y%m%d%H%M' }}",
                title: {{ post.title | jsonify }},
                url: "{{ post.url | relative_url }}",
                date: "{{ post.date | date: '%d.%m.%Y' }}",
                excerpt: {{ post.excerpt | strip_html | truncatewords: 25 | jsonify }}
            }{% unless forloop.last %},{% endunless %}
            {% endfor %}
        ];
    </script>

    <!-- SUPABASE LOGIK -->
    <script>
        const SUPABASE_URL = "https://xxuanzhrrpwurkyjfjky.supabase.co";
        const SUPABASE_ANON_KEY = "sb_publishable_WdzN1r5HkdnqrfIN2phV1g_-GdLlknq"; 
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        async function loadProfilePage() {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();

                // 1. Prüfen ob User eingeloggt ist
                if (!user) {
                    document.getElementById('login-required-card').classList.remove('hidden');
                    return;
                }

                // 2. Ansicht umschalten & E-Mail anzeigen
                document.getElementById('profile-content').classList.remove('hidden');
                document.getElementById('user-email-display').innerText = `Eingeloggt als: ${user.email}`;

                // 3. Favoriten aus der neu erstellten Datenbank-Tabelle abrufen
                const { data: favoriten, error } = await supabaseClient
                    .from('favoriten')
                    .select('blog_id')
                    .eq('user_id', user.id);

                if (error) throw error;

                const grid = document.getElementById('favorites-grid');
                const noFavsMessage = document.getElementById('no-favorites-message');

                if (!favoriten || favoriten.length === 0) {
                    noFavsMessage.classList.remove('hidden');
                    return;
                }

                // Set aus IDs bauen für schnelleren Abgleich
                const favIds = new Set(favoriten.map(f => f.blog_id.toString()));
                let counter = 0;

                // 4. Jekyll-Beiträge filtern und HTML-Karten generieren
                ALL_JEKYLL_POSTS.forEach(post => {
                    if (favIds.has(post.id)) {
                        counter++;
                        const card = document.createElement('div');
                        card.className = "bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300";
                        card.setAttribute('data-post-id', post.id);
                        
                        card.innerHTML = `
                            <div>
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">${post.date}</span>
                                </div>
                                <h3 class="text-xl font-black text-gray-950 mt-1 mb-3 line-clamp-2">${post.title}</h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-3">${post.excerpt}</p>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <a href="${post.url}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline">
                                    Artikel lesen →
                                </a>
                                <button onclick="entferneFavorit('${post.id}', this)" class="text-xs font-bold px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-all cursor-pointer">
                                    ❌ Entfernen
                                </button>
                            </div>
                        `;
                        grid.appendChild(card);
                    }
                });

                if (counter === 0) {
                    noFavsMessage.classList.remove('hidden');
                }

            } catch (err) {
                console.error("Fehler beim Laden des Profils:", err);
                alert("Profil-Fehler: " + err.message);
            }
        }

        // Favorit direkt aus der Profil-Übersicht löschen
        async function entferneFavorit(blogId, button) {
            if (!confirm("Möchtest du diesen Artikel aus deinen Favoriten entfernen?")) return;
            
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (!user) return;

                const { error } = await supabaseClient
                    .from('favoriten')
                    .delete()
                    .eq('user_id', user.id)
                    .eq('blog_id', blogId);

                if (!error) {
                    // Karte flüssig aus dem DOM entfernen
                    const card = button.closest('[data-post-id]');
                    card.remove();
                    
                    // Prüfen ob jetzt leer
                    const grid = document.getElementById('favorites-grid');
                    if (grid.children.length === 0) {
                        document.getElementById('no-favorites-message').classList.remove('hidden');
                    }
                } else {
                    alert("Entfernen fehlgeschlagen: " + error.message);
                }
            } catch (err) {
                alert("Fehler: " + err.message);
            }
        }

        document.addEventListener("DOMContentLoaded", loadProfilePage);
    </script>

    {% include cookie-banner.html %}
</body>
</html>
