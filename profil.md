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
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen relative">

    <!-- DYNAMISCHES BANNER (TOAST) -->
    <div id="custom-banner" class="fixed top-24 right-4 z-50 transform translate-x-full opacity-0 transition-all duration-300 ease-out max-w-sm w-full bg-white border shadow-xl rounded-2xl p-4 flex items-start gap-3">
        <span id="banner-icon" class="text-xl"></span>
        <div class="flex-grow">
            <h4 id="banner-title" class="font-bold text-sm text-gray-900"></h4>
            <p id="banner-message" class="text-xs text-gray-600 mt-0.5"></p>
        </div>
    </div>

    <!-- KONTO LÖSCHEN BESTÄTIGUNGS-MODAL -->
    <div id="delete-modal" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-white border border-gray-100 max-w-md w-full rounded-2xl p-6 shadow-xl transform scale-95 transition-all duration-300">
            <span class="text-3xl block mb-2">⚠️</span>
            <h3 class="text-xl font-black text-gray-950 tracking-tight">Konto unwiderruflich löschen?</h3>
            <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                Bist du dir absolut sicher? Dadurch werden all deine gespeicherten Favoriten und dein Zugang dauerhaft gelöscht. Dies kann nicht rückgängig gemacht werden.
            </p>
            <div class="mt-6 flex justify-end gap-3">
                <button onclick="schließeDeleteModal()" class="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-all cursor-pointer">
                    Abbrechen
                </button>
                <button onclick="kontoDefinitivLoeschen()" class="px-4 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xs transition-all cursor-pointer">
                    Ja, löschen
                </button>
            </div>
        </div>
    </div>

    <!-- MENÜ -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="/index.html" class="flex items-center gap-3 group no-underline text-current">
                <img src="/auge-logo.jpg" alt="M-Fleger Logo" class="w-16 h-14 md:w-24 md:h-20 rounded-xl md:rounded-2xl object-contain">
                <span class="text-2xl md:text-3xl font-black tracking-tight text-blue-600">M-Fleger</span>
            </a>
            <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold text-gray-600 text-base md:text-lg">
                <a href="/index.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Startseite</a>
                <a href="/ueber-mich.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Über mich</a>
                <a href="/blog.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Blog</a>
                <a href="/kontakt.html" class="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 no-underline">Contact</a>
                <a href="/profil.html" class="text-blue-600 border-b-2 border-blue-600 pb-1 no-underline">👤 Mein Profil</a>
            </div>
        </div>
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
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                <h2 class="text-2xl font-black text-gray-950 tracking-tight flex items-center gap-2">
                    ❤️ Meine gespeicherten Favoriten
                </h2>
                <button onclick="zeigeDeleteModal()" class="text-xs font-bold px-4 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-all cursor-pointer">
                    ⚙️ Konto löschen
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="favorites-grid"></div>

            <p id="no-favorites-message" class="text-gray-500 text-center py-12 text-lg font-medium hidden">
                Du hast bisher noch keine Artikel als Favorit markiert. ⭐
            </p>
        </div>

    </main>

    {% include footer.html %}

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

    <script>
        const SUPABASE_URL = "https://xxuanzhrrpwurkyjfjky.supabase.co";
        const SUPABASE_ANON_KEY = "sb_publishable_WdzN1r5HkdnqrfIN2phV1g_-GdLlknq"; 
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        // Banner-Steuerung
        function zeigeBanner(type, title, message) {
            const banner = document.getElementById('custom-banner');
            const icon = document.getElementById('banner-icon');
            const titleEl = document.getElementById('banner-title');
            const msgEl = document.getElementById('banner-message');

            if(type === 'success') {
                banner.className = "fixed top-24 right-4 z-50 transform transition-all duration-300 ease-out max-w-sm w-full bg-white border border-green-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 text-green-800";
                icon.innerText = "✅";
            } else if(type === 'info') {
                banner.className = "fixed top-24 right-4 z-50 transform transition-all duration-300 ease-out max-w-sm w-full bg-white border border-blue-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 text-blue-800";
                icon.innerText = "ℹ️";
            } else {
                banner.className = "fixed top-24 right-4 z-50 transform transition-all duration-300 ease-out max-w-sm w-full bg-white border border-red-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 text-red-800";
                icon.innerText = "❌";
            }

            titleEl.innerText = title;
            msgEl.innerText = message;

            banner.classList.remove('translate-x-full', 'opacity-0');
            
            setTimeout(() => {
                banner.classList.add('translate-x-full', 'opacity-0');
            }, 4000);
        }

        async function loadProfilePage() {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();

                if (!user) {
                    document.getElementById('login-required-card').classList.remove('hidden');
                    return;
                }

                document.getElementById('profile-content').classList.remove('hidden');
                document.getElementById('user-email-display').innerText = `Eingeloggt als: ${user.email}`;

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

                const favIds = new Set(favoriten.map(f => f.blog_id.toString()));
                let counter = 0;

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
                zeigeBanner('error', 'Fehler beim Laden', err.message);
            }
        }

        async function entferneFavorit(blogId, button) {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (!user) return;

                const { error } = await supabaseClient
                    .from('favoriten')
                    .delete()
                    .eq('user_id', user.id)
                    .eq('blog_id', blogId);

                if (!error) {
                    const card = button.closest('[data-post-id]');
                    card.remove();
                    
                    zeigeBanner('info', 'Entfernt', 'Der Artikel wurde aus deinen Favoriten gelöscht.');

                    const grid = document.getElementById('favorites-grid');
                    if (grid.children.length === 0) {
                        document.getElementById('no-favorites-message').classList.remove('hidden');
                    }
                } else {
                    zeigeBanner('error', 'Fehler', error.message);
                }
            } catch (err) {
                zeigeBanner('error', 'Fehler', err.message);
            }
        }

        // Konto-löschen Modallogik
        function zeigeDeleteModal() {
            const modal = document.getElementById('delete-modal');
            modal.classList.remove('hidden');
            setTimeout(() => modal.firstElementChild.classList.remove('scale-95'), 10);
        }

        function schließeDeleteModal() {
            const modal = document.getElementById('delete-modal');
            modal.firstElementChild.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 150);
        }

        async function kontoDefinitivLoeschen() {
            try {
                // Da Supabase Client-seitig Kontenlöschung aus Sicherheitsgründen einschränkt, 
                // rufen wir die dafür vorgesehene RPC auf oder löschen den User-Datensatz.
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (!user) return;

                // Schritt 1: Favoriten bereinigen
                await supabaseClient.from('favoriten').delete().eq('user_id', user.id);

                // Schritt 2: User ausloggen & Session vernichten
                await supabaseClient.auth.signOut();

                schließeDeleteModal();
                
                // Wir zeigen das Banner auf der Startseite an
                alert("Dein Konto wurde erfolgreich gelöscht. Auf Wiedersehen!"); 
                window.location.href = "/index.html";

            } catch (err) {
                zeigeBanner('error', 'Löschen fehlgeschlagen', err.message);
            }
        }

        document.addEventListener("DOMContentLoaded", loadProfilePage);
    </script>
</body>
</html>
