---
layout: null
title: Startseite
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M-Fleger | Portfolio & Blog</title>
    <link rel="icon" type="image/jpeg" href="auge-logo.jpg">
    <meta property="og:type" content="website">
    <meta property="og:title" content="M-Fleger | Portfolio & Blog">
    <meta property="og:description" content="Willkommen auf M-Fleger. Entdecke meine Projekte, kreativen Ideen und neuesten Blogartikel!">
    <meta property="og:image" content="https://julian13053.github.io/auge-logo.jpg">
    <meta property="og:url" content="https://julian13053.github.io/index.html">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">

    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center animate-fade-in">
            <div class="md:col-span-7 text-center md:text-left">
                <span class="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Design & Development</span>
                <h1 class="text-4xl md:text-6xl font-black tracking-tight mt-5 mb-6 leading-tight">
                    Julian Fleger.<br><span class="text-cyan-300">Punktgenau verbunden.</span>
                </h1>
                <p class="text-base md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                    Ich teile hier meine Projekte, Gedanken und kreativen Ideas. Außerdem findest du Einblicke in meine Brandings, meine Arbeit und neue Blogartikel.
                </p>
                <span class="bg-cyan-400 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg inline-block w-full md:w-auto text-center cursor-default select-none">
                    Direkt zum Blog →
                </span>
            </div>
            
            <div class="md:col-span-5 flex justify-center">
                <div class="relative group">
                    <div class="absolute inset-0 bg-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xs transition-transform duration-300 group-hover:rotate-1"></div>
                    <img src="ich.jpeg" alt="Julian Fleger" class="relative w-72 h-80 md:w-[26rem] md:h-[32rem] object-cover rounded-3xl shadow-2xl border-4 border-white/10 transition-transform duration-300 group-hover:scale-105">
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20 flex-grow w-full">
        <div class="mb-12">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-10 gap-4 text-center md:text-left">
                <div>
                    <h2 class="text-3xl md:text-4xl font-black text-gray-950 tracking-tight">📰 Neueste Artikel</h2>
                    <p class="text-gray-500 text-base md:text-lg mt-2">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group no-underline">
                    Alle Artikel ansehen <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {% for post in site.posts limit:3 %}
                {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
                <div class="blog-card bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-105 transition-all duration-300" data-post-id="{{ numeric_id }}">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                            {% assign words = post.content | strip_html | number_of_words %}
                            {% assign read_time = words | divided_by: 180 | plus: 1 %}
                            <span class="text-xs text-gray-400 font-semibold">📖 {{ read_time }} Min.</span>
                        </div>
                        <h3 class="text-xl font-black text-gray-950 mt-1 mb-2 line-clamp-2">{{ post.title }}</h3>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ post.excerpt | strip_html }}</p>
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
                    <p class="text-gray-500 text-lg font-medium">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
                </div>
                {% endfor %}
            </div>
        </div>

        <hr class="border-gray-200/60 my-12">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex items-center gap-4 hover:shadow-md transition-all">
                <div class="bg-blue-50 text-blue-600 text-3xl p-4 rounded-xl">
                    📰
                </div>
                <div>
                    <span class="block text-2xl md:text-3xl font-black text-gray-950">{{ site.posts.size }}</span>
                    <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">Artikel veröffentlicht</span>
                </div>
            </div>

            {% assign total_words = 0 %}
            {% for post in site.posts %}
                {% assign words = post.content | strip_html | number_of_words %}
                {% assign total_words = total_words | plus: words %}
            {% endfor %}
            <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex items-center gap-4 hover:shadow-md transition-all">
                <div class="bg-cyan-50 text-cyan-600 text-3xl p-4 rounded-xl">
                    ✍️
                </div>
                <div>
                    <span class="block text-2xl md:text-3xl font-black text-gray-950">{{ total_words }}</span>
                    <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">Wörter geschrieben</span>
                </div>
            </div>

        </div>
    </main>

    {% include footer.html %}
    {% include cookie-banner.html %}

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

        document.addEventListener("DOMContentLoaded", checkFavoritesOnLoad);
    </script>
</body>
</html>
