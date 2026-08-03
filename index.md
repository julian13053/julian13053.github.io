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
        /* Keyframes für schwebende 3D-Objekte (Oreo-Style) */
        @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            50% { transform: translateY(-18px) rotate(5deg) scale(1.03); }
        }
        @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-28px) rotate(-8deg); }
        }
        @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
        }

        .animate-float-1 { animation: floatSlow 6s ease-in-out infinite; }
        .animate-float-2 { animation: floatFast 5s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-3 { animation: floatSlow 7s ease-in-out infinite; animation-delay: 2s; }
        .animate-glow { animation: pulseGlow 4s ease-in-out infinite; }

        /* Hintergrund Dot-Pattern wie auf der Oreo Website */
        .bg-oreo-dots {
            background-image: radial-gradient(rgba(255, 255, 255, 0.18) 2px, transparent 2px);
            background-size: 28px 28px;
        }

        /* Smooth Activity Rings Transition */
        .ring-progress {
            transition: stroke-dashoffset 1.8s cubic-bezier(0.42, 0, 0.58, 1);
            filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.15));
        }
    </style>
</head>
<body class="bg-slate-950 text-gray-100 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

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

    <!-- HERO SECTION IM OREO-STYLE (SCHWEBENDE ELEMENTE + RIESIGE TYPO) -->
    <header class="relative bg-gradient-to-b from-blue-700 via-blue-900 to-slate-950 text-white min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 md:px-8 overflow-hidden bg-oreo-dots">
        
        <!-- Leuchtender Hintergrund-Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-glow"></div>

        <!-- SCHWEBENDE 3D-OBJEKTE (Ersetzen die Oreos & Milchspritzer) -->
        <!-- Objekt 1: Oben Links (Digitales Herz / Pflege) -->
        <div class="absolute -top-6 -left-8 md:top-12 md:left-12 w-32 md:w-48 h-32 md:h-48 z-10 pointer-events-none animate-float-1">
            <div class="w-full h-full bg-gradient-to-tr from-pink-500 to-rose-400 rounded-3xl rotate-12 shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-md">
                <span class="text-5xl md:text-7xl">🩺</span>
            </div>
        </div>

        <!-- Objekt 2: Oben Rechts (Code / Zukunfts-Brille) -->
        <div class="absolute top-16 -right-10 md:top-20 md:right-16 w-36 md:w-52 h-36 md:h-52 z-10 pointer-events-none animate-float-2">
            <div class="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full -rotate-12 shadow-2xl flex items-center justify-center border-4 border-white/30">
                <span class="text-6xl md:text-8xl">🚀</span>
            </div>
        </div>

        <!-- Objekt 3: Unten Links (Verbindung / Netze) -->
        <div class="absolute bottom-10 -left-10 md:bottom-16 md:left-20 w-28 md:w-44 h-28 md:h-44 z-10 pointer-events-none animate-float-3">
            <div class="w-full h-full bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-2xl rotate-45 shadow-2xl flex items-center justify-center border-4 border-white/20">
                <span class="text-4xl md:text-6xl">🌐</span>
            </div>
        </div>

        <!-- Objekt 4: Unten Rechts (Blog / Gedanken) -->
        <div class="absolute -bottom-8 -right-6 md:bottom-12 md:right-24 w-32 md:w-48 h-32 md:h-48 z-10 pointer-events-none animate-float-1">
            <div class="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl -rotate-6 shadow-2xl flex items-center justify-center border-4 border-white/20">
                <span class="text-5xl md:text-7xl">💡</span>
            </div>
        </div>

        <!-- ZENTRALER INHALT -->
        <div class="max-w-5xl mx-auto text-center relative z-20 space-y-6">
            
            <div class="inline-block">
                <span class="bg-cyan-400 text-slate-950 font-black px-5 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform inline-block">
                    Julian Fleger • Digital Portfolio
                </span>
            </div>

            <!-- Fette Headline im Stil von "WILLKOMMEN BEI DIE ZUKUNFT..." -->
            <h1 class="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase leading-[0.9] text-white drop-shadow-2xl">
                Willkommen bei <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-pink-400">
                    M-Fleger.
                </span>
            </h1>

            <p class="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
                Punktgenau verbunden. Moderne Web-Entwicklung, starke Brandings und digitale Konzepte für Pflege-Agenturen.
            </p>

            <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="blog.html" class="w-full sm:w-auto bg-white text-blue-950 hover:bg-cyan-300 font-black text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 no-underline">
                    Direkt zum Blog →
                </a>
                <a href="#projekte" class="w-full sm:w-auto backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-lg transition-all no-underline">
                    Mehr entdecken
                </a>
            </div>

            <!-- Scroll Indicator -->
            <div class="pt-12 animate-bounce">
                <span class="text-xs uppercase tracking-widest text-cyan-300 font-bold block mb-1">Scrollen</span>
                <span class="text-2xl">↓</span>
            </div>

        </div>
    </header>

    <!-- Main Content Bereich -->
    <main class="max-w-6xl mx-auto px-4 md:px-6 pt-16 flex-grow w-full relative z-20 text-slate-900">
        
        <!-- Neueste Artikel -->
        <div class="mb-12">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-10 gap-4 text-center md:text-left">
                <div>
                    <h2 class="text-3xl md:text-5xl font-black tracking-tight text-white">📰 Neueste Artikel</h2>
                    <p class="text-base md:text-lg mt-2 text-slate-400">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1 group no-underline">
                    Alle Artikel ansehen <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {% for post in site.posts limit:3 %}
                {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
                
                <div class="blog-card p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-slate-900/90 border border-slate-800 text-white shadow-xl" data-post-id="{{ numeric_id }}">
                    <div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-extrabold uppercase">{{ post.date | date: "%d.%m.%Y" }}</span>
                            {% assign words = post.content | strip_html | number_of_words %}
                            {% assign read_time = words | divided_by: 180 | plus: 1 %}
                            <span class="text-xs font-semibold text-slate-400">📖 {{ read_time }} Min.</span>
                        </div>
                        <h3 class="text-2xl font-black mt-1 mb-2 line-clamp-2 text-white">{{ post.title }}</h3>
                        <p class="text-sm mb-4 line-clamp-3 text-slate-300">{{ post.excerpt | strip_html }}</p>
                    </div>
                    
                    <div class="flex flex-col gap-3 mt-4">
                        <div class="flex justify-between items-center">
                            <a href="{{ post.url | relative_url }}" class="text-cyan-400 font-bold text-sm hover:text-cyan-300 no-underline inline-block">
                                Artikel lesen →
                            </a>
                            
                            <button onclick="likeUmschalten('{{ numeric_id }}', this)" class="like-btn text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1 text-white bg-slate-800 border-slate-700">
                                🤍 <span class="like-counter">0</span> Likes
                            </button>
                        </div>
                        
                        <div class="flex justify-end">
                            <button onclick="favoritUmschalten('{{ numeric_id }}', this)" class="fav-btn text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer w-full md:w-auto text-center text-white bg-slate-800 border-slate-700">
                                ⭐ Favorit
                            </button>
                        </div>
                    </div>
                </div>
                {% else %}
                <div class="col-span-1 md:col-span-3 text-center py-12 rounded-3xl bg-slate-900 border border-slate-800">
                    <p class="text-lg font-medium text-slate-400">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
                </div>
                {% endfor %}
            </div>
        </div>

        <!-- Rechte-Hub Section -->
        <section class="my-16 p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
            <div class="max-w-3xl mx-auto text-center mb-10">
                <span class="bg-cyan-400/20 text-cyan-300 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border border-cyan-400/30">Neu auf M-Fleger</span>
                <h2 class="text-3xl md:text-5xl font-black tracking-tight mt-3 text-white">🌍 Das große Rechte-Hub</h2>
                <p class="text-base md:text-lg mt-2 text-slate-300">Rechte gehen uns alle an – egal wie alt wir sind. Entdecke unser neues Portal, das Rechte für jeden verständlich erklärt.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="kinderrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-800/80 border border-slate-700">
                    <div>
                        <span class="text-4xl block mb-3">🎒</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-cyan-400 text-white">Kinderrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-300">Schutz, Bildung und Freizeit. Auf Augenhöhe und einfach erklärt für Kinder und Eltern.</p>
                    </div>
                    <span class="text-cyan-400 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>

                <a href="menschenrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-800/80 border border-slate-700">
                    <div>
                        <span class="text-4xl block mb-3">⚖️</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-cyan-400 text-white">Menschenrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-300">Meinungsfreiheit, Gleichberechtigung und Würde. Die Säulen unserer Gesellschaft.</p>
                    </div>
                    <span class="text-cyan-400 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>

                <a href="digitalrechte.html" class="group p-6 rounded-2xl transition-all duration-300 no-underline flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg bg-slate-800/80 border border-slate-700">
                    <div>
                        <span class="text-4xl block mb-3">📱</span>
                        <h3 class="text-xl font-black transition-colors group-hover:text-cyan-400 text-white">Digitalrechte</h3>
                        <p class="text-sm mt-2 leading-relaxed text-slate-300">Deine Rechte im Netz. Von Datenschutz bis zum Schutz vor Cybermobbing.</p>
                    </div>
                    <span class="text-cyan-400 font-bold text-sm mt-4 inline-block">Mehr erfahren →</span>
                </a>
            </div>
            
            <div class="text-center mt-10">
                <a href="unsere-rechte.html" class="inline-block bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg no-underline transition-all transform hover:-translate-y-0.5 border-0">
                    Zum gesamten Rechte-Hub
                </a>
            </div>
        </section>

        <!-- Dynamische Liquid Berechnungen -->
        {% assign total_words = 0 %}
        {% assign total_read_time = 0 %}
        {% for post in site.posts %}
            {% assign words = post.content | strip_html | number_of_words %}
            {% assign read_time = words | divided_by: 180 | plus: 1 %}
            {% assign total_words = total_words | plus: words %}
            {% assign total_read_time = total_read_time | plus: read_time %}
        {% endfor %}

        <!-- Apple Activity Card Section -->
        <section id="activity-section" class="my-16 p-8 md:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden border border-slate-800">
            <div class="relative mx-auto w-full max-w-3xl rounded-3xl p-2 md:p-8 text-white">
                <div class="flex flex-col items-center gap-8">
                    <h2 class="font-black text-3xl text-white">Aktivitätsringe</h2>

                    <div class="flex items-center flex-col sm:flex-row gap-6 sm:gap-0">
                        <!-- Activity Rings SVGs Container -->
                        <div class="relative h-[200px] w-[200px] flex items-center justify-center">
                            
                            <!-- RING 1: WÖRTER (Größe 200) -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90 transform" width="200" height="200" viewBox="0 0 200 200">
                                    <defs>
                                        <linearGradient id="gradient-woerter" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color: #FF2D55; stop-opacity: 1;" />
                                            <stop offset="100%" style="stop-color: #FF6B8B; stop-opacity: 1;" />
                                        </linearGradient>
                                    </defs>
                                    <circle class="text-zinc-800/80" cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="16" />
                                    <circle id="circle-words" class="ring-progress" cx="100" cy="100" r="92" fill="none" 
                                            stroke="url(#gradient-woerter)" stroke-width="16" stroke-linecap="round" 
                                            stroke-dasharray="578.05" stroke-dashoffset="578.05" />
                                </svg>
                            </div>

                            <!-- RING 2: ARTIKEL (Größe 160) -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90 transform" width="160" height="160" viewBox="0 0 160 160">
                                    <defs>
                                        <linearGradient id="gradient-artikel" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color: #A3F900; stop-opacity: 1;" />
                                            <stop offset="100%" style="stop-color: #C5FF4D; stop-opacity: 1;" />
                                        </linearGradient>
                                    </defs>
                                    <circle class="text-zinc-800/80" cx="80" cy="80" r="72" fill="none" stroke="currentColor" stroke-width="16" />
                                    <circle id="circle-posts" class="ring-progress" cx="80" cy="80" r="72" fill="none" 
                                            stroke="url(#gradient-artikel)" stroke-width="16" stroke-linecap="round" 
                                            stroke-dasharray="452.39" stroke-dashoffset="452.39" />
                                </svg>
                            </div>

                            <!-- RING 3: LESEZEIT (Größe 120) -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90 transform" width="120" height="120" viewBox="0 0 120 120">
                                    <defs>
                                        <linearGradient id="gradient-lesezeit" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color: #04C7DD; stop-opacity: 1;" />
                                            <stop offset="100%" style="stop-color: #4DDFED; stop-opacity: 1;" />
                                        </linearGradient>
                                    </defs>
                                    <circle class="text-zinc-800/80" cx="60" cy="60" r="52" fill="none" stroke="currentColor" stroke-width="16" />
                                    <circle id="circle-time" class="ring-progress" cx="60" cy="60" r="52" fill="none" 
                                            stroke="url(#gradient-lesezeit)" stroke-width="16" stroke-linecap="round" 
                                            stroke-dasharray="326.73" stroke-dashoffset="326.73" />
                                </svg>
                            </div>

                        </div>

                        <!-- Detailed Activity Info -->
                        <div class="ml-0 sm:ml-8 flex flex-col gap-6 text-center sm:text-left">
                            <div class="flex flex-col">
                                <span class="font-medium text-sm text-zinc-400">WÖRTER</span>
                                <span class="font-black text-3xl" style="color: #FF2D55;">
                                    {{ total_words }}
                                    <span class="ml-1 text-base text-zinc-400 font-normal">WÖRTER GESCHRIEBEN</span>
                                </span>
                            </div>

                            <div class="flex flex-col">
                                <span class="font-medium text-sm text-zinc-400">ARTIKEL</span>
                                <span class="font-black text-3xl" style="color: #A3F900;">
                                    {{ site.posts.size }}
                                    <span class="ml-1 text-base text-zinc-400 font-normal">ARTIKEL GESCHRIEBEN</span>
                                </span>
                            </div>

                            <div class="flex flex-col">
                                <span class="font-medium text-sm text-zinc-400">LESEZEIT</span>
                                <span class="font-black text-3xl" style="color: #04C7DD;">
                                    {{ total_read_time }}
                                    <span class="ml-1 text-base text-zinc-400 font-normal">MIN. LESEZEIT</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                        button.style.backgroundColor = "rgba(255,255,255,0.1)";
                        button.style.color = "#ffffff";
                        button.style.borderColor = "rgba(255,255,255,0.2)";
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
                        button.style.backgroundColor = "rgba(255,255,255,0.1)";
                        button.style.color = "#ffffff";
                        button.style.borderColor = "rgba(255,255,255,0.2)";
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

        // Aktivitätsringe animieren
        function animiereAktivitaetsRinge() {
            const words = parseInt("{{ total_words }}") || 0;
            const posts = parseInt("{{ site.posts.size }}") || 0;
            const readTime = parseInt("{{ total_read_time }}") || 0;

            const targetWords = Math.max(words, 5000);
            const targetPosts = Math.max(posts, 10);
            const targetTime = Math.max(readTime, 30);

            const wordsVal = Math.min((words / targetWords) * 100, 100);
            const postsVal = Math.min((posts / targetPosts) * 100, 100);
            const timeVal = Math.min((readTime / targetTime) * 100, 100);

            const cWords = document.getElementById('circle-words');
            if (cWords) {
                const offsetWords = ((100 - wordsVal) / 100) * 578.05;
                cWords.style.strokeDashoffset = offsetWords;
            }

            const cPosts = document.getElementById('circle-posts');
            if (cPosts) {
                const offsetPosts = ((100 - postsVal) / 100) * 452.39;
                cPosts.style.strokeDashoffset = offsetPosts;
            }

            const cTime = document.getElementById('circle-time');
            if (cTime) {
                const offsetTime = ((100 - timeVal) / 100) * 326.73;
                cTime.style.strokeDashoffset = offsetTime;
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            datenLaden();
            
            // Scroll-Observer für Ring-Animation (1s Delay nach Scrollen)
            const targetSection = document.getElementById('activity-section');
            let animationTriggered = false;

            if (targetSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !animationTriggered) {
                            animationTriggered = true;
                            setTimeout(animiereAktivitaetsRinge, 1000);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.3 });

                observer.observe(targetSection);
            }
        });
    </script>
</body>
</html>
