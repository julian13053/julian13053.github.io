---
layout: null
title: Blog
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - M-Fleger</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
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
                <input type="text" id="blogSearch" onkeyup="filterBlogPosts()" placeholder="🔍 Artikel nach Titel durchsuchen..." class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-xs focus:outline-none focus:border-blue-600 font-medium transition-all text-base">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="blogGrid">
            {% for post in site.posts %}
            {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
            <div class="blog-card bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-105 transition-all duration-300" data-post-id="{{ numeric_id }}">
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                        {% assign words = post.content | strip_html | number_of_words %}
                        {% assign read_time = words | divided_by: 180 | plus: 1 %}
                        <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min.</span>
                    </div>
                    
                    <h2 class="post-title text-xl font-black text-gray-950 mt-1 mb-3 line-clamp-2">{{ post.title }}</h2>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-4">{{ post.excerpt | strip_html }}</p>
                </div>
                
                <div class="flex justify-between items-center mt-2">
                    <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline inline-block">
                        Artikel lesen →
                    </a>
                    
                    <button onclick="favoritUmschalten('{{ numeric_id }}', this)" class="fav-btn text-sm font-bold px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer">
                        ⭐ Favorit
                    </button>
                </div>
            </div>
            {% else %}
            <div class="col-span-1 md:col-span-3 text-center py-12 bg-gray-100 rounded-2xl">
                <p class="text-gray-500 text-lg font-medium">Bisher wurden noch keine Artikel veröffentlicht.</p>
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

        async function checkFavoritesOnLoad() {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();
                if (user) {
                    const { data: favoriten, error } = await supabaseClient
                        .from('favoriten')
                        .select('blog_id')
                        .eq('user_id', user.id);

                    if (!error && favoriten) {
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
                }
            } catch (err) { console.error(err); }
        }

        async function favoritUmschalten(blogId, button) {
            try {
                const { data: { user } } = await supabaseClient.auth.getUser();

                if (!user) {
                    window.location.href = "/anmeldung-erforderlich.html";
                    return; 
                }

                const { data: existiert } = await supabaseClient
                    .from('favoriten')
                    .select('*')
                    .eq('user_id', user.id)
                    .eq('blog_id', blogId);

                if (existiert && existiert.length > 0) {
                    const { error } = await supabaseClient
                        .from('favoriten')
                        .delete()
                        .eq('user_id', user.id)
                        .eq('blog_id', blogId);

                    if (!error) {
                        button.innerHTML = "⭐ Favorit";
                        button.classList.remove('bg-red-500', 'text-white', 'border-red-500');
                        button.classList.add('bg-white', 'text-gray-900', 'border-gray-200');
                    } else {
                        alert("Löschen fehlgeschlagen: " + error.message);
                    }
                } else {
                    const { error } = await supabaseClient
                        .from('favoriten')
                        .insert([{ user_id: user.id, blog_id: blogId }]);

                    if (!error) {
                        button.innerHTML = "❤️ Favorisiert";
                        button.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
                        button.classList.add('bg-red-500', 'text-white', 'border-red-500');
                        alert("Dieser Artikel wurde favorisiert! Du findest diesen Artikel in deinem Profil unter Favoriten.");
                    } else {
                        alert("Speichern fehlgeschlagen (Bitte RLS Regeln prüfen!): " + error.message);
                    }
                }
            } catch (err) { alert("Fehler: " + err.message); }
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
            if (hasResults) {
                noResults.classList.add('hidden');
            } else {
                noResults.classList.remove('hidden');
            }
        }

        document.addEventListener("DOMContentLoaded", checkFavoritesOnLoad);
    </script>

    {% include cookie-banner.html %}
</body>
</html>
