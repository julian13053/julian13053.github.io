---
layout: null
title: Blog
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Blog - M-Fleger | Alle Blogartikel & Gedanken</title>
    <meta name="description" content="Stöbere durch den offiziellen M-Fleger Blog. Hier findest du alle Artikel, kreative Ideen und Gedanken von Julian Fleger punktgenau festgehalten.">
    <meta name="keywords" content="Julian Fleger, M-Fleger Blog, Blogartikel, Gedanken, Ideen, Texte lesen">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://julian13053.github.io/blog.html">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Blog - M-Fleger | Alle Blogartikel & Gedanken">
    <meta property="og:description" content="Stöbere durch den offiziellen M-Fleger Blog. Gedanken, Projekte und creative Ideen punktgenau festgehalten.">
    <meta property="og:image" content="https://julian13053.github.io/auge-logo.jpg">
    <meta property="og:url" content="https://julian13053.github.io/blog.html">

    <link rel="stylesheet" href="/style.css">

    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body class="text-gray-900 font-sans antialiased flex flex-col min-h-screen relative">

    <div id="custom-banner" class="fixed top-24 right-4 z-50 transform translate-x-full opacity-0 transition-all duration-300 ease-out max-w-sm w-full bg-white border shadow-xl rounded-2xl p-4 flex items-start gap-3">
        <span id="banner-icon" class="text-xl"></span>
        <div class="flex-grow">
            <h4 id="banner-title" class="font-bold text-sm text-gray-900"></h4>
            <p id="banner-message" class="text-xs text-gray-600 mt-0.5"></p>
        </div>
    </div>

    <nav class="sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 md:py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">📰 Mein Blog</h1>
            <p class="text-base md:text-lg text-blue-100">Gedanken, Projekte und creative Ideen punktgenau festgehalten.</p>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-10 md:py-12 flex-grow w-full">
        
        <div class="max-w-md mx-auto mb-10 md:mb-16">
            <div class="relative">
                <input type="text" id="blogSearch" onkeyup="filterBlogPosts()" placeholder="🔍 Artikel nach Titel durchsuchen..." class="w-full px-4 py-3 rounded-xl md:rounded-2xl shadow-xs focus:outline-none focus:border-blue-500 font-medium transition-all text-base" style="background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.5); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="blogGrid">
            {% for post in site.posts %}
            {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
            
            <div class="blog-card p-6 flex flex-col justify-between hover:shadow-lg hover:scale-102 transition-all duration-300 liquid-glass" data-post-id="{{ numeric_id }}">
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase border-0">{{ post.date | date: "%d.%m.%Y" }}</span>
                        {% assign words = post.content | strip_html | number_of_words %}
                        {% assign read_time = words | divided_by: 180 | plus: 1 %}
                        <span class="text-xs text-gray-500 font-semibold">📖 {{ read_time }} Min.</span>
                    </div>
                    
                    <h2 class="post-title text-xl font-black mt-1 mb-3 line-clamp-2" style="color: #0f172a;">{{ post.title }}</h2>
                    <p class="text-sm mb-4 line-clamp-4" style="color: #334155;">{{ post.excerpt | strip_html }}</p>
                </div>
                
                <div class="flex flex-col gap-3 mt-2">
                    <div class="flex justify-between items-center">
                        <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline inline-block">
                            Artikel lesen →
                        </a>
                        
                        <button onclick="likeUmschalten('{{ numeric_id }}', this)" class="like-btn text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer flex items-center gap-1">
                            🤍 <span class="like-counter">0</span> Likes
                        </button>
                    </div>
                    
                    <div class="flex justify-end">
                        <button onclick="favoritUmschalten('{{ numeric_id }}', this)" class="fav-btn text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer w-full md:w-auto text-center">
                            ⭐ Favorit
                        </button>
                    </div>
                </div>
            </div>
            {% else %}
            <div class="col-span-1 md:col-span-3 text-center py-12 liquid-glass">
                <p class="text-lg font-medium" style="color: #475569;">Bisher wurden noch keine Artikel veröffentlicht.</p>
            </div>
            {% endfor %}
        </div>

        <p id="noResultsMessage" class="text-gray-500 text-center py-12 text-lg hidden">Keine passenden Artikel gefunden.</p>

    </main>

    {% include footer.html %}

    <script>
        const SUPABASE_URL = "https://xxuanzhrrpwurkyjfjky.supabase.co";
        const SUPABASE_ANON_KEY = "sb_publishable_WdzN1r5HkdnqrfIN2phV1g_-GdLlknq"; 
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        function zeigeBanner(type, title, message) {
            const banner = document.getElementById('custom-banner');
            const icon = document.getElementById('banner-icon');
            const titleEl = document.getElementById('banner-title');
            const msgEl = document.getElementById('banner-message');

            if(type === 'success') {
                banner.className = "fixed top-24 right-4 z-50 transform transition-all duration-300 ease-out max-w-sm w-full bg-white border border-green-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 text-green-800";
                icon.innerText = "❤️";
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

        async function datenLaden() {
            try {
                // 1. Alle Likes zählen und auf den Cards anzeigen
                const { data: alleLikes, error: likeError } = await supabaseClient
                    .from('likes')
                    .select('blog_id');

                if (!likeError && alleLikes) {
                    const likeCounts = {};
                    alleLikes.forEach(l => {
                        likeCounts[l.blog_id] = (likeCounts[l.blog_id] || 0) + 1;
                    });

                    const cards = document.getElementsByClassName('blog-card');
                    for (let card of cards) {
                        const postId = card.getAttribute('data-post-id');
                        const counter = card.querySelector('.like-counter');
                        if (counter) {
                            counter.innerText = likeCounts[postId] || 0;
                        }
                    }
                }

                // 2. Nutzer-spezifische Daten laden (wenn eingeloggt)
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (user) {
                    // Favoriten prüfen
                    const { data: favoriten } = await supabaseClient.from('favoriten').select('blog_id').eq('user_id', user.id);
                    if (favoriten) {
                        const favIds = new Set(favoriten.map(f => f.blog_id.toString()));
                        const cards = document.getElementsByClassName('blog-card');
                        for (let card of cards) {
                            const postId = card.getAttribute('data-post-id');
                            if (favIds.has(postId)) {
                                const btn = card.querySelector('.fav-btn');
                                if (btn) {
                                    btn.innerHTML = "❤️ Favorisiert";
                                    btn.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
                                    btn.classList.add('bg-red-500', 'text-white', 'border-red-500');
                                }
                            }
                        }
                    }

                    // Eigene Likes prüfen
                    const { data: meineLikes } = await supabaseClient.from('likes').select('blog_id').eq('user_id', user.id);
                    if (meineLikes) {
                        const likedIds = new Set(meineLikes.map(l => l.blog_id.toString()));
                        const cards = document.getElementsByClassName('blog-card');
                        for (let card of cards) {
                            const postId = card.getAttribute('data-post-id');
                            if (likedIds.has(postId)) {
                                const btn = card.querySelector('.like-btn');
                                if (btn) {
                                    btn.innerHTML = `💖 <span class="like-counter">${btn.querySelector('.like-counter').innerText}</span> Likes`;
                                    btn.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
                                    btn.classList.add('bg-pink-500', 'text-white', 'border-pink-500');
                                }
                            }
                        }
                    }
                }
            } catch (err) { console.error(err); }
        }

        async function favoritUmschalten(blogId, button) {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (!user) { window.location.href = "/anmeldung-erforderlich.html"; return; }

                const { data: existiert } = await supabaseClient.from('favoriten').select('*').eq('user_id', user.id).eq('blog_id', blogId);

                if (existiert && existiert.length > 0) {
                    const { error } = await supabaseClient.from('favoriten').delete().eq('user_id', user.id).eq('blog_id', blogId);
                    if (!error) {
                        button.innerHTML = "⭐ Favorit";
                        button.classList.remove('bg-red-500', 'text-white', 'border-red-500');
                        button.classList.add('bg-white', 'text-gray-900', 'border-gray-200');
                        zeigeBanner('info', 'Entfernt', 'Der Artikel wurde aus deinen Favoriten gelöscht.');
                    }
                } else {
                    const { error } = await supabaseClient.from('favoriten').insert([{ user_id: user.id, blog_id: blogId }]);
                    if (!error) {
                        button.innerHTML = "❤️ Favorisiert";
                        button.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
                        button.classList.add('bg-red-500', 'text-white', 'border-red-500');
                        zeigeBanner('success', 'Favorisiert!', 'Gespeichert in deinem Profil unter Favoriten.');
                    }
                }
            } catch (err) { zeigeBanner('error', 'Fehler', err.message); }
        }

        async function likeUmschalten(blogId, button) {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (!user) { window.location.href = "/anmeldung-erforderlich.html"; return; }

                const counterEl = button.querySelector('.like-counter');
                let aktuellerStand = parseInt(counterEl.innerText);

                const { data: existiert } = await supabaseClient.from('likes').select('*').eq('user_id', user.id).eq('blog_id', blogId);

                if (existiert && existiert.length > 0) {
                    const { error } = await supabaseClient.from('likes').delete().eq('user_id', user.id).eq('blog_id', blogId);
                    if (!error) {
                        counterEl.innerText = aktuellerStand - 1;
                        button.innerHTML = `🤍 <span class="like-counter">${counterEl.innerText}</span> Likes`;
                        button.classList.remove('bg-pink-500', 'text-white', 'border-pink-500');
                        button.classList.add('bg-white', 'text-gray-900', 'border-gray-200');
                        zeigeBanner('info', 'Like entfernt', 'Schade, dir gefällt dieser Beitrag nicht mehr.');
                    }
                } else {
                    const { error } = await supabaseClient.from('likes').insert([{ user_id: user.id, blog_id: blogId }]);
                    if (!error) {
                        counterEl.innerText = aktuellerStand + 1;
                        button.innerHTML = `💖 <span class="like-counter">${counterEl.innerText}</span> Likes`;
                        button.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
                        button.classList.add('bg-pink-500', 'text-white', 'border-pink-500');
                        zeigeBanner('success', 'Geliked!', 'Danke für dein Feedback zu diesem Beitrag!');
                    }
                }
            } catch (err) { zeigeBanner('error', 'Fehler', err.message); }
        }

        function filterBlogPosts() {
            const input = document.getElementById('blogSearch');
            const filter = input.value.toLowerCase();
            const cards = document.getElementsByClassName('blog-card');
            let hasResults = false;

            for (let i = 0; i < cards.length; i++) {
                const title = cards[i].querySelector('.post-title').innerText.toLowerCase();
                if (title.includes(filter)) {
                    cards[i].style.display = "flex";
                    hasResults = true;
                } else {
                    cards[i].style.display = "none";
                }
            }

            const noResults = document.getElementById('noResultsMessage');
            if (hasResults) { noResults.classList.add('hidden'); } else { noResults.classList.remove('hidden'); }
        }

        document.addEventListener("DOMContentLoaded", datenLaden);
    </script>

    {% include cookie-banner.html %}
</body>
</html>
