---
layout: null
title: Julian Fleger | Portfolio & Web-Projekte
description: Entdecke das kreative Portfolio und den Blog von Julian Fleger. Moderne Web-Projekte, Brandings und digitale Lösungen.
keywords: Julian Fleger, Julian Fleger Portfolio, M-Fleger, Webentwickler Berlin, Blog, Branding
robots: index, follow
---
<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>{{ page.title }}</title>
    <meta name="description" content="{{ page.description }}">
    <meta name="keywords" content="{{ page.keywords }}">
    <meta name="robots" content="{{ page.robots }}">
    <link rel="icon" type="image/jpeg" href="auge-logo.jpg">
    <link rel="canonical" href="https://julian13053.github.io/index.html">

    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ page.title }}">
    <meta property="og:description" content="{{ page.description }}">
    <meta property="og:image" content="https://julian13053.github.io/auge-logo.jpg">
    <meta property="og:url" content="https://julian13053.github.io/index.html">
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        /* CSS-Keyframes für Animationen */
        
        /* 1. Header Pop-up Animation */
        @keyframes headerPopUp {
            0% { opacity: 0; transform: translateY(50px) scale(0.99); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* 2. Text/Element Jump Animation */
        @keyframes textJumpUp {
            0% { opacity: 0; transform: translateY(25px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        /* 3. Stift-Unterstreichung */
        @keyframes drawLine {
            to { stroke-dashoffset: 0; }
        }

        .animate-header { animation: headerPopUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .reveal-item-1 { opacity: 0; animation: textJumpUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.3s; }
        .reveal-item-2 { opacity: 0; animation: textJumpUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.5s; }
        .reveal-item-3 { opacity: 0; animation: textJumpUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.7s; }
        
        .animate-draw { 
            stroke-dasharray: 600; 
            stroke-dashoffset: 600; 
            animation: drawLine 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards; 
            animation-delay: 1.1s; 
        }
    </style>
</head>
<body class="bg-slate-100 text-gray-900 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

    <!-- Toast Banner -->
    <div id="custom-banner" class="fixed top-24 right-4 z-50 transform translate-x-full opacity-0 transition-all duration-300 ease-out max-w-sm w-full backdrop-blur-xl shadow-xl rounded-2xl p-4 flex items-start gap-3" style="background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(255, 255, 255, 0.5);">
        <span id="banner-icon" class="text-xl"></span>
        <div class="flex-grow">
            <h4 id="banner-title" class="font-bold text-sm text-gray-900"></h4>
            <p id="banner-message" class="text-xs text-gray-600 mt-0.5"></p>
        </div>
    </div>

    <!-- Navigation -->
    <div class="w-full max-w-5xl mx-auto px-4 sticky top-6 z-50">
        <nav class="backdrop-blur-xl bg-slate-900/85 text-white shadow-2xl rounded-2xl border border-white/10 transition-all duration-300 hover:bg-slate-900/90">
            {% include navigation.html %}
        </nav>
    </div>

    <!-- Hero Header -->
    <header class="animate-header bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white mx-4 mt-[-4rem] pt-32 pb-24 md:pb-32 px-6 md:px-12 rounded-b-[50px] md:rounded-b-[80px] shadow-2xl relative overflow-hidden">
        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
            
            <div class="md:col-span-7 text-center md:text-left">
                <div class="reveal-item-1">
                    <span class="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Design & Development für Pflege-Agenturen</span>
                </div>
                
                <div class="reveal-item-2 mt-5 mb-6">
                    <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight relative inline-block pb-4">
                        Julian Fleger.
                        <span class="absolute left-0 bottom-0 w-full h-4 text-cyan-400">
                            <svg viewBox="0 0 500 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="none">
                                <path d="M5 15C130 5 370 4 495 15" stroke="currentColor" stroke-width="5" stroke-linecap="round" class="animate-draw"/>
                            </svg>
                        </span>
                    </h1>
                    <span class="text-cyan-300 block text-3xl md:text-5xl font-black mt-2">Punktgenau verbunden.</span>
                </div>
                
                <div class="reveal-item-3">
                    <p class="text-base md:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                        Ich bin Julian Fleger. Auf diesem Portfolio teile ich meine kreativen Ideen, Brandings und Web-Projekte rund um das Thema digitale Pflege-Agenturen sowie neue, spannende Blogartikel.
                    </p>
                    <a href="blog.html" class="bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-black px-8 py-4 rounded-xl shadow-lg inline-block w-full md:w-auto text-center no-underline transition-all transform hover:-translate-y-1 hover:shadow-cyan-400/20">
                        Direkt zum Blog →
                    </a>
                </div>
            </div>
            
            <div class="md:col-span-5 flex justify-center reveal-item-2">
                <div class="relative group">
                    <div class="absolute inset-0 bg-cyan-400 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xs transition-transform duration-300 group-hover:rotate-1"></div>
                    
                    <div class="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
                        <img src="mein-bild-1.jpg" alt="Julian Fleger Portfolio - Webentwicklung" 
                             class="slideshow-img absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100">
                        
                        <img src="mein-bild-2.jpg" alt="Julian Fleger - Digitale Lösungen für die Pflege" 
                             class="slideshow-img absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0">
                    </div>
                </div>
            </div>
            
        </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 md:px-6 pt-16 flex-grow w-full relative z-20">
        
        <!-- Neueste Artikel -->
        <div class="mb-12">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-10 gap-4 text-center md:text-left">
                <div>
                    <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900">📰 Neueste Artikel</h2>
                    <p class="text-base md:text-lg mt-2 text-slate-600">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group no-underline">
                    Alle Artikel ansehen <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {% for post in site.posts limit:3 %}
                {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
                
                <div class="blog-card p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-slate-200/60 shadow-md" data-post-id="{{ numeric_id }}">
                    <div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                            {% assign words = post.content | strip_html | number_of_words %}
                            {% assign read_time = words | divided_by: 180 | plus: 1 %}
                            <span class="text-xs font-semibold text-slate-500">📖 {{ read_time }} Min.</span>
                        </div>
                        <h3 class="text-xl font-black mt-1 mb-2 line-clamp-2 text-slate-900">{{ post.title }}</h3>
                        <p class="text-sm mb-4 line-clamp-3 text-slate-700">{{ post.excerpt | strip_html }}</p>
                    </div>
                    
                    <div class="flex flex-col gap-3 mt-4">
                        <div class="flex justify-between items-center">
                            <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm hover:text-blue-800 no-underline inline-block">
                                Artikel lesen →
                            </a>
                            
                            <button onclick="likeUmschalten('{{ numeric_id }}', this)" class="like-btn text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1 text-slate-900 bg-white/40 border-black/10">
                                🤍 <span class="like-counter">0</span> Likes
                            </button>
                        </div>
                        
                        <div class="flex justify-end">
                            <button onclick="favoritUmschalten('{{ numeric_id }}', this)" class="fav-btn text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer w-full md:w-auto text-center text-slate-900 bg-white/40 border-black/10">
                                ⭐ Favorit
                            </button>
                        </div>
                    </div>
                </div>
                {% else %}
                <div class="col-span-1 md:col-span-3 text-center py-12 rounded-2xl bg-white border border-slate-200">
                    <p class="text-lg font-medium text-slate-600">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
                </div>
                {% endfor %}
            </div>
        </div>

        <!-- Rechte-Hub Section -->
        <section class="my-16 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/60 shadow-xl relative overflow-hidden">
            <div class="max-w-3xl mx-auto text-center mb-10">
                <span class="bg-blue-100 text-blue-800 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Neu auf M-Fleger</span>
                <h2 class="text-3xl md:text-4xl font-black tracking-tight mt-3 text-slate-900">🌍 Das große Rechte-Hub</h2>
                <p class="text-base md:text-lg mt-2 text-slate-700">Rechte gehen uns alle an – egal wie alt wir sind. Entdecke unser neues Portal, das Rechte für jeden verständlich erklärt.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="kinderrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-50 border border-slate-200">
                    <div>
                        <span class="text-3xl block mb-3">🎒</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-blue-600 text-slate-900">Kinderrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-700">Schutz, Bildung und Freizeit. Auf Augenhöhe und einfach erklärt für Kinder und Eltern.</p>
                    </div>
                    <span class="text-blue-600 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>

                <a href="menschenrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-50 border border-slate-200">
                    <div>
                        <span class="text-3xl block mb-3">⚖️</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-blue-600 text-slate-900">Menschenrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-700">Meinungsfreiheit, Gleichberechtigung und Würde. Die Säulen unserer Gesellschaft.</p>
                    </div>
                    <span class="text-blue-600 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>

                <a href="digitalrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-50 border border-slate-200">
                    <div>
                        <span class="text-3xl block mb-3">📱</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-blue-600 text-slate-900">Digitalrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-700">Deine Rechte im Netz. Von Datenschutz bis zum Schutz vor Cybermobbing.</p>
                    </div>
                    <span class="text-blue-600 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>
            </div>
            
            <div class="text-center mt-10">
                <a href="unsere-rechte.html" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3 rounded-xl shadow-md no-underline transition-all transform hover:-translate-y-0.5 border-0">
                    Zum gesamten Rechte-Hub
                </a>
            </div>
        </section>

        <!-- Stat-Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div class="p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all bg-white border border-slate-200">
                <div class="text-3xl p-4 rounded-xl bg-blue-500/10 text-blue-600">
                    📰
                </div>
                <div>
                    <span class="block text-2xl md:text-3xl font-black text-slate-900">{{ site.posts.size }}</span>
                    <span class="text-sm font-bold uppercase tracking-wider text-slate-500">Artikel veröffentlicht</span>
                </div>
            </div>

            {% assign total_words = 0 %}
            {% for post in site.posts %}
                {% assign words = post.content | strip_html | number_of_words %}
                {% assign total_words = total_words | plus: words %}
            {% endfor %}
            <div class="p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all bg-white border border-slate-200">
                <div class="text-3xl p-4 rounded-xl bg-cyan-500/10 text-cyan-600">
                    ✍️
                </div>
                <div>
                    <span class="block text-2xl md:text-3xl font-black text-slate-900">{{ total_words }}</span>
                    <span class="text-sm font-bold uppercase tracking-wider text-slate-500">Wörter geschrieben</span>
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

        function zeigeBanner(type, title, message) {
            const banner = document.getElementById('custom-banner');
            const icon = document.getElementById('banner-icon');
            const titleEl = document.getElementById('banner-title');
            const msgEl = document.getElementById('banner-message');

            if(type === 'success') {
                banner.style.backgroundColor = "rgba(240, 253, 244, 0.85)";
                banner.style.borderColor = "rgba(74, 222, 128, 0.5)";
                banner.style.color = "#166534";
                icon.innerText = "❤️";
            } else if(type === 'info') {
                banner.style.backgroundColor = "rgba(239, 246, 255, 0.85)";
                banner.style.borderColor = "rgba(96, 165, 250, 0.5)";
                banner.style.color = "#1e40af";
                icon.innerText = "ℹ️";
            } else {
                banner.style.backgroundColor = "rgba(254, 242, 242, 0.85)";
                banner.style.borderColor = "rgba(248, 113, 113, 0.5)";
                banner.style.color = "#991b1b";
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

                const { data: { user } } = await supabaseClient.auth.getUser();
                if (user) {
                    const { data: favoriten } = await supabaseClient
                        .from('favoriten')
                        .select('blog_id')
                        .eq('user_id', user.id);

                    if (favoriten) {
                        const favIds = new Set(favoriten.map(f => f.blog_id.toString()));
                        const cards = document.getElementsByClassName('blog-card');
                        for (let card of cards) {
                            const postId = card.getAttribute('data-post-id');
                            if (favIds.has(postId)) {
                                const btn = card.querySelector('.fav-btn');
                                if (btn) {
                                    btn.innerHTML = "❤️ Favorisiert";
                                    btn.style.backgroundColor = "#ef4444";
                                    btn.style.color = "#ffffff";
                                    btn.style.borderColor = "#ef4444";
                                }
                            }
                        }
                    }

                    const { data: meineLikes } = await supabaseClient
                        .from('likes')
                        .select('blog_id')
                        .eq('user_id', user.id);

                    if (meineLikes) {
                        const likedIds = new Set(meineLikes.map(l => l.blog_id.toString()));
                        const cards = document.getElementsByClassName('blog-card');
                        for (let card of cards) {
                            const postId = card.getAttribute('data-post-id');
                            if (likedIds.has(postId)) {
                                const btn = card.querySelector('.like-btn');
                                if (btn) {
                                    const counter = btn.querySelector('.like-counter');
                                    const countVal = counter ? counter.innerText : '0';
                                    btn.innerHTML = `💖 <span class="like-counter">${countVal}</span> Likes`;
                                    btn.style.backgroundColor = "#ec4899";
                                    btn.style.color = "#ffffff";
                                    btn.style.borderColor = "#ec4899";
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
                        button.style.backgroundColor = "rgba(255,255,255,0.4)";
                        button.style.color = "#0f172a";
                        button.style.borderColor = "rgba(0,0,0,0.08)";
                        zeigeBanner('info', 'Entfernt', 'Der Artikel wurde aus deinen Favoriten gelöscht.');
                    }
                } else {
                    const { error } = await supabaseClient.from('favoriten').insert([{ user_id: user.id, blog_id: blogId }]);
                    if (!error) {
                        button.innerHTML = "❤️ Favorisiert";
                        button.style.backgroundColor = "#ef4444";
                        button.style.color = "#ffffff";
                        button.style.borderColor = "#ef4444";
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
                let aktuellerStand = parseInt(counterEl.innerText) || 0;

                const { data: existiert } = await supabaseClient.from('likes').select('*').eq('user_id', user.id).eq('blog_id', blogId);

                if (existiert && existiert.length > 0) {
                    const { error } = await supabaseClient.from('likes').delete().eq('user_id', user.id).eq('blog_id', blogId);
                    if (!error) {
                        const neuStand = Math.max(0, aktuellerStand - 1);
                        button.innerHTML = `🤍 <span class="like-counter">${neuStand}</span> Likes`;
                        button.style.backgroundColor = "rgba(255,255,255,0.4)";
                        button.style.color = "#0f172a";
                        button.style.borderColor = "rgba(0,0,0,0.08)";
                        zeigeBanner('info', 'Like entfernt', 'Schade, dir gefällt dieser Beitrag nicht mehr.');
                    }
                } else {
                    const { error } = await supabaseClient.from('likes').insert([{ user_id: user.id, blog_id: blogId }]);
                    if (!error) {
                        const neuStand = aktuellerStand + 1;
                        button.innerHTML = `💖 <span class="like-counter">${neuStand}</span> Likes`;
                        button.style.backgroundColor = "#ec4899";
                        button.style.color = "#ffffff";
                        button.style.borderColor = "#ec4899";
                        zeigeBanner('success', 'Geliked!', 'Danke für dein Feedback zu diesem Beitrag!');
                    }
                }
            } catch (err) { zeigeBanner('error', 'Fehler', err.message); }
        }

        // Bilder-Slideshow mit Hover-Pause
        document.addEventListener("DOMContentLoaded", function() {
            datenLaden();

            const images = document.querySelectorAll('.slideshow-img');
            const container = images[0] ? images[0].parentElement : null; 
            let currentIndex = 0;
            let slideshowInterval;

            if (images.length < 2) return;

            function startSlideshow() {
                slideshowInterval = setInterval(function() {
                    images[currentIndex].classList.remove('opacity-100');
                    images[currentIndex].classList.add('opacity-0');

                    currentIndex = (currentIndex + 1) % images.length;

                    images[currentIndex].classList.remove('opacity-0');
                    images[currentIndex].classList.add('opacity-100');
                }, 4000);
            }

            function stopSlideshow() {
                clearInterval(slideshowInterval);
            }

            startSlideshow();

            if (container) {
                container.addEventListener('mouseenter', stopSlideshow);
                container.addEventListener('mouseleave', startSlideshow);
            }
        });
    </script>
</body>
</html>
