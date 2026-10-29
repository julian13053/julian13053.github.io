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
    <meta name="theme-color" content="#1e3a8a">

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
        /* ---------- Hero-Auftritt ---------- */
        @keyframes heroIn {
            0%   { opacity: 0; transform: translateY(40px) scale(0.985); }
            100% { opacity: 1; transform: none; }
        }
        @keyframes riseIn {
            0%   { opacity: 0; transform: translateY(22px); filter: blur(6px); }
            100% { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes orbit {
            0%   { transform: translate3d(0, 0, 0) scale(1); }
            50%  { transform: translate3d(4%, -6%, 0) scale(1.12); }
            100% { transform: translate3d(-3%, 4%, 0) scale(0.95); }
        }
        @keyframes kenBurns {
            0%   { transform: scale(1.06); }
            100% { transform: scale(1); }
        }

        .animate-hero  { animation: heroIn 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .rise          { opacity: 0; animation: riseIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .rise-1 { animation-delay: 0.25s; }
        .rise-2 { animation-delay: 0.4s; }
        .rise-3 { animation-delay: 0.55s; }
        .rise-4 { animation-delay: 0.7s; }

        .animate-draw {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            animation: drawLine 1.1s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards;
        }

        /* Leuchtende Kugeln im Hero, die langsam kreisen */
        .hero-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            pointer-events: none;
            animation: orbit 18s ease-in-out infinite alternate;
        }

        /* Feines Raster, das nach unten ausblendet */
        .hero-grid {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
            background-size: 56px 56px;
            -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%);
            mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%);
        }

        /* Bild-Slideshow: Überblenden + leichter Ken-Burns-Zoom */
        .slideshow-img { transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .slideshow-img.opacity-100 { animation: kenBurns 6s ease-out both; }

        /* Aktivitätsringe */
        .ring-progress {
            transition: stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1);
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.12));
        }

        @media (prefers-reduced-motion: reduce) {
            .rise, .animate-hero { opacity: 1; animation: none; }
            .animate-draw { stroke-dashoffset: 0; animation: none; }
            .hero-orb, .slideshow-img.opacity-100 { animation: none; }
        }
    </style>
</head>
<body class="text-slate-900 font-sans antialiased flex flex-col min-h-screen relative overflow-x-hidden">

    {% include toast.html %}

    <!-- Navigation -->
    {% include navigation.html %}

    <!-- ================= HERO ================= -->
    <header class="animate-hero relative mx-3 sm:mx-4 -mt-[5.75rem] pt-36 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 rounded-b-[44px] md:rounded-b-[72px] overflow-hidden text-white shadow-[0_40px_80px_-30px_rgba(30,58,138,0.6)]"
            style="background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 48%, #312e81 100%);">

        <!-- Lebendiger Hintergrund -->
        <div class="hero-grid"></div>
        <div class="hero-orb w-[28rem] h-[28rem] -top-32 -left-24 bg-cyan-400/40"></div>
        <div class="hero-orb w-[32rem] h-[32rem] top-1/3 -right-40 bg-indigo-400/35" style="animation-duration: 24s; animation-delay: -6s;"></div>
        <div class="hero-orb w-[22rem] h-[22rem] -bottom-40 left-1/3 bg-blue-400/35" style="animation-duration: 20s; animation-delay: -12s;"></div>
        <!-- Lichtkante oben im Glas -->
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-14 md:gap-10 items-center">

            <div class="md:col-span-7 text-center md:text-left">
                <div class="rise rise-1">
                    <span class="shimmer inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan-200 bg-white/10 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                        <span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]"></span>
                        Design &amp; Development für Pflege-Agenturen
                    </span>
                </div>

                <div class="rise rise-2 mt-7 mb-7">
                    <h1 class="text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl font-extrabold tracking-tight relative inline-block pb-4">
                        Julian Fleger.
                        <span class="absolute left-0 bottom-0 w-full h-4 text-cyan-300" aria-hidden="true">
                            <svg viewBox="0 0 500 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="none">
                                <path d="M5 15C130 5 370 4 495 15" stroke="currentColor" stroke-width="5" stroke-linecap="round" class="animate-draw"/>
                            </svg>
                        </span>
                    </h1>
                    <span class="text-gradient-brand block text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3" style="font-family: var(--font-display);">Punktgenau verbunden.</span>
                </div>

                <div class="rise rise-3">
                    <p class="text-base md:text-xl text-blue-100/90 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                        Ich bin Julian. Ich teile meine kreativen Ideen, Brandings und Web-Projekte sowie neue, spannende Blogartikel.
                    </p>
                </div>

                <div class="rise rise-4">
                    <a href="blog.html" class="group relative inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl px-8 py-4 font-extrabold text-blue-950 no-underline bg-gradient-to-br from-cyan-300 to-cyan-400 shadow-[0_12px_30px_-10px_rgba(34,211,238,0.8),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(34,211,238,0.9),inset_0_1px_0_rgba(255,255,255,0.7)] active:scale-[0.97] overflow-hidden">
                        <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
                        <span class="relative">Direkt zum Blog</span>
                        <span class="relative arrow-nudge">→</span>
                    </a>
                </div>
            </div>

            <!-- Foto in Glasrahmen mit 3D-Tilt -->
            <div class="md:col-span-5 flex justify-center rise rise-2">
                <div class="relative" data-tilt="5">
                    <div class="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-cyan-300/50 via-blue-400/20 to-indigo-400/40 blur-2xl opacity-80"></div>

                    <div class="relative p-3 rounded-[34px] bg-white/10 border border-white/25 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_30px_60px_-20px_rgba(15,23,42,0.7)]">
                        <div class="relative w-64 h-80 md:w-80 md:h-[400px] rounded-[26px] overflow-hidden bg-slate-800">
                            <img src="julian-bild-1.jpg" alt="Julian Fleger Portfolio - Webentwicklung"
                                 class="slideshow-img absolute inset-0 w-full h-full object-cover opacity-100">
                            <img src="julian-bild-2.jpg" alt="Julian Fleger - Digitale Lösungen für die Pflege"
                                 class="slideshow-img absolute inset-0 w-full h-full object-cover opacity-0">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10 pointer-events-none"></div>
                        </div>
                    </div>

                    <!-- Schwebende Glas-Chips -->
                    <div class="animate-float absolute -left-8 bottom-12 hidden sm:flex items-center gap-2.5 rounded-2xl px-4 py-3 bg-slate-900/45 border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_30px_-12px_rgba(15,23,42,0.6)]">
                        <span class="text-lg">📰</span>
                        <span class="text-sm font-bold leading-tight text-white">{{ site.posts.size }} Artikel<br><span class="text-[11px] font-semibold text-blue-100/80">im Blog</span></span>
                    </div>
                    <div class="animate-float absolute -right-6 top-10 hidden sm:flex items-center gap-2 rounded-2xl px-4 py-3 bg-slate-900/45 border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_30px_-12px_rgba(15,23,42,0.6)]" style="animation-delay: -3.5s;">
                        <span class="text-lg">⚖️</span>
                        <span class="text-sm font-bold text-white">Rechte-Hub</span>
                    </div>
                </div>
            </div>

        </div>
    </header>

    <!-- ================= MAIN ================= -->
    <main class="max-w-6xl mx-auto px-5 md:px-6 pt-20 md:pt-24 flex-grow w-full relative z-20">

        <!-- Neueste Artikel -->
        <section class="mb-24 md:mb-32" aria-labelledby="latest-heading">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-5 text-center md:text-left">
                <div>
                    <span class="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Blog</span>
                    <h2 id="latest-heading" class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">📰 Neueste Artikel</h2>
                    <p class="text-base md:text-lg mt-3 text-slate-600">Frisch aus dem Gedankenkarussell gegriffen.</p>
                </div>
                <a href="blog.html" class="btn-glass group px-5 py-3 text-sm text-blue-700">
                    Alle Artikel ansehen <span class="arrow-nudge">→</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                {% for post in site.posts limit:3 %}
                {% assign numeric_id = post.date | date: "%Y%m%d%H%M" %}
                {% assign words = post.content | strip_html | number_of_words %}
                {% assign read_time = words | divided_by: 180 | plus: 1 %}

                <article class="blog-card liquid-glass group p-7 flex flex-col justify-between" data-post-id="{{ numeric_id }}">
                    <div>
                        <div class="flex justify-between items-center mb-5">
                            <span class="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide !text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_4px_12px_-4px_rgba(37,99,235,0.6)]">{{ post.date | date: "%d.%m.%Y" }}</span>
                            <span class="text-xs font-semibold !text-slate-500">📖 {{ read_time }} Min.</span>
                        </div>
                        <h3 class="text-xl md:text-[1.35rem] leading-snug mb-3 line-clamp-2 transition-colors duration-300 group-hover:!text-blue-700">
                            <a href="{{ post.url | relative_url }}" class="no-underline text-inherit">{{ post.title }}</a>
                        </h3>
                        <p class="text-[15px] mb-6 line-clamp-3">{{ post.excerpt | strip_html }}</p>
                    </div>

                    <div class="pt-5 border-t border-white/70 flex flex-wrap items-center justify-between gap-3">
                        <a href="{{ post.url | relative_url }}" class="text-blue-600 font-bold text-sm no-underline inline-flex items-center gap-1 hover:text-blue-800">
                            Artikel lesen <span class="arrow-nudge !text-blue-600">→</span>
                        </a>
                        <div class="flex gap-2">
                            <button type="button" onclick="likeUmschalten('{{ numeric_id }}', this)" class="like-btn glass-pill" aria-label="Gefällt mir">
                                🤍 <span class="like-counter">0</span> Likes
                            </button>
                            <button type="button" onclick="favoritUmschalten('{{ numeric_id }}', this)" class="fav-btn glass-pill" aria-label="Als Favorit speichern">
                                ⭐ Favorit
                            </button>
                        </div>
                    </div>
                </article>
                {% else %}
                <div class="liquid-glass col-span-1 md:col-span-3 text-center py-14">
                    <p class="text-lg font-medium">Bisher wurden noch keine Blog-Artikel veröffentlicht.</p>
                </div>
                {% endfor %}
            </div>
        </section>

        <!-- Rechte-Hub -->
        <section class="glass-panel relative overflow-hidden mb-24 md:mb-32 p-8 md:p-14" aria-labelledby="rights-heading">
            <!-- dezente Farbflächen im Panel -->
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-300/30 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>

            <div class="relative max-w-3xl mx-auto text-center mb-12">
                <span class="shimmer inline-flex rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-700 bg-blue-100/80 border border-blue-200/80">Neu auf M-Fleger</span>
                <h2 id="rights-heading" class="text-4xl md:text-5xl font-extrabold tracking-tight mt-5 text-slate-900">🌍 Das große Rechte-Hub</h2>
                <p class="text-base md:text-lg mt-4 text-slate-600 leading-relaxed">Rechte gehen uns alle an – egal wie alt wir sind. Entdecke unser neues Portal, das Rechte für jeden verständlich erklärt.</p>
            </div>

            <div class="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                <a href="kinderrechte.html" class="liquid-glass group p-7 no-underline flex flex-col justify-between">
                    <div>
                        <span class="grid place-items-center w-14 h-14 mb-5 rounded-2xl text-3xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover:scale-110 group-hover:-rotate-6">🎒</span>
                        <h3 class="text-xl transition-colors group-hover:!text-blue-700">Kinderrechte</h3>
                        <p class="text-sm mt-2">Schutz, Bildung und Freizeit. Auf Augenhöhe und einfach erklärt für Kinder und Eltern.</p>
                    </div>
                    <span class="!text-blue-600 font-bold text-sm mt-6 inline-flex items-center gap-1">Mehr erfahren <span class="arrow-nudge !text-blue-600">→</span></span>
                </a>

                <a href="menschenrechte.html" class="liquid-glass group p-7 no-underline flex flex-col justify-between">
                    <div>
                        <span class="grid place-items-center w-14 h-14 mb-5 rounded-2xl text-3xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover:scale-110 group-hover:-rotate-6">⚖️</span>
                        <h3 class="text-xl transition-colors group-hover:!text-blue-700">Menschenrechte</h3>
                        <p class="text-sm mt-2">Meinungsfreiheit, Gleichberechtigung und Würde. Die Säulen unserer Gesellschaft.</p>
                    </div>
                    <span class="!text-blue-600 font-bold text-sm mt-6 inline-flex items-center gap-1">Mehr erfahren <span class="arrow-nudge !text-blue-600">→</span></span>
                </a>

                <a href="digitalrechte.html" class="liquid-glass group p-7 no-underline flex flex-col justify-between">
                    <div>
                        <span class="grid place-items-center w-14 h-14 mb-5 rounded-2xl text-3xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover:scale-110 group-hover:-rotate-6">📱</span>
                        <h3 class="text-xl transition-colors group-hover:!text-blue-700">Digitalrechte</h3>
                        <p class="text-sm mt-2">Deine Rechte im Netz. Von Datenschutz bis zum Schutz vor Cybermobbing.</p>
                    </div>
                    <span class="!text-blue-600 font-bold text-sm mt-6 inline-flex items-center gap-1">Mehr erfahren <span class="arrow-nudge !text-blue-600">→</span></span>
                </a>
            </div>

            <div class="relative text-center mt-12">
                <a href="unsere-rechte.html" class="btn-brand group px-7 py-3.5">
                    Zum gesamten Rechte-Hub <span class="arrow-nudge">→</span>
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

        <!-- Aktivitätsringe -->
        <section id="activity-section" class="glass-dark-card relative overflow-hidden rounded-[40px] mb-8 p-8 md:p-14 text-white" aria-labelledby="activity-heading">
            <div class="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"></div>

            <div class="relative mx-auto w-full max-w-3xl">
                <div class="flex flex-col items-center gap-10">
                    <div class="text-center">
                        <span class="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">Statistik</span>
                        <h2 id="activity-heading" class="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">Aktivitätsringe</h2>
                    </div>

                    <div class="flex items-center flex-col sm:flex-row gap-10 sm:gap-14">
                        <!-- Ringe -->
                        <div class="relative h-[200px] w-[200px] flex items-center justify-center" data-tilt="8">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90" width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="gradient-woerter" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#FF2D55" />
                                            <stop offset="100%" stop-color="#FF6B8B" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,45,85,0.14)" stroke-width="16" />
                                    <circle id="circle-words" class="ring-progress" cx="100" cy="100" r="92" fill="none"
                                            stroke="url(#gradient-woerter)" stroke-width="16" stroke-linecap="round"
                                            stroke-dasharray="578.05" stroke-dashoffset="578.05" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90" width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="gradient-artikel" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#A3F900" />
                                            <stop offset="100%" stop-color="#C5FF4D" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(163,249,0,0.14)" stroke-width="16" />
                                    <circle id="circle-posts" class="ring-progress" cx="80" cy="80" r="72" fill="none"
                                            stroke="url(#gradient-artikel)" stroke-width="16" stroke-linecap="round"
                                            stroke-dasharray="452.39" stroke-dashoffset="452.39" style="transition-delay: 0.15s;" />
                                </svg>
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="-rotate-90" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="gradient-lesezeit" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#04C7DD" />
                                            <stop offset="100%" stop-color="#4DDFED" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(4,199,221,0.14)" stroke-width="16" />
                                    <circle id="circle-time" class="ring-progress" cx="60" cy="60" r="52" fill="none"
                                            stroke="url(#gradient-lesezeit)" stroke-width="16" stroke-linecap="round"
                                            stroke-dasharray="326.73" stroke-dashoffset="326.73" style="transition-delay: 0.3s;" />
                                </svg>
                            </div>
                        </div>

                        <!-- Werte (zählen beim Sichtbarwerden hoch) -->
                        <dl class="flex flex-col gap-6 text-center sm:text-left">
                            <div>
                                <dt class="text-xs font-bold tracking-[0.16em] text-slate-400">WÖRTER</dt>
                                <dd class="mt-1 text-3xl font-extrabold tabular-nums" style="color: #FF2D55; font-family: var(--font-display);">
                                    <span data-count="{{ total_words }}">{{ total_words }}</span>
                                    <span class="ml-1 text-sm font-semibold text-slate-400" style="font-family: var(--font-sans);">Wörter geschrieben</span>
                                </dd>
                            </div>
                            <div>
                                <dt class="text-xs font-bold tracking-[0.16em] text-slate-400">ARTIKEL</dt>
                                <dd class="mt-1 text-3xl font-extrabold tabular-nums" style="color: #A3F900; font-family: var(--font-display);">
                                    <span data-count="{{ site.posts.size }}">{{ site.posts.size }}</span>
                                    <span class="ml-1 text-sm font-semibold text-slate-400" style="font-family: var(--font-sans);">Artikel geschrieben</span>
                                </dd>
                            </div>
                            <div>
                                <dt class="text-xs font-bold tracking-[0.16em] text-slate-400">LESEZEIT</dt>
                                <dd class="mt-1 text-3xl font-extrabold tabular-nums" style="color: #04C7DD; font-family: var(--font-display);">
                                    <span data-count="{{ total_read_time }}">{{ total_read_time }}</span>
                                    <span class="ml-1 text-sm font-semibold text-slate-400" style="font-family: var(--font-sans);">Min. Lesezeit</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </main>

    {% include footer.html %}
    {% include cookie-banner.html %}

    <!-- Likes, Favoriten & Toast (gemeinsam mit Blog und Artikeln) -->
    <script src="/assets/js/reactions.js"></script>

    <script>
        /* ---------- Aktivitätsringe ---------- */
        function animiereAktivitaetsRinge() {
            const words = parseInt("{{ total_words }}") || 0;
            const posts = parseInt("{{ site.posts.size }}") || 0;
            const readTime = parseInt("{{ total_read_time }}") || 0;

            // Dynamische Skalierungsziele für sauberen visuellen Ring-Fortschritt
            const rings = [
                ['circle-words', words, Math.max(words, 5000), 578.05],
                ['circle-posts', posts, Math.max(posts, 10), 452.39],
                ['circle-time', readTime, Math.max(readTime, 30), 326.73]
            ];
            rings.forEach(([id, value, target, length]) => {
                const el = document.getElementById(id);
                if (!el) return;
                const pct = Math.min((value / target) * 100, 100);
                el.style.strokeDashoffset = ((100 - pct) / 100) * length;
            });
        }

        document.addEventListener("DOMContentLoaded", function () {
            // Ringe füllen sich, sobald der Bereich sichtbar ist
            const targetSection = document.getElementById('activity-section');
            if (targetSection && 'IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(animiereAktivitaetsRinge, 350);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.35 });
                observer.observe(targetSection);
            } else {
                animiereAktivitaetsRinge();
            }

            // Bilder-Slideshow (pausiert beim Hovern)
            const images = document.querySelectorAll('.slideshow-img');
            if (images.length < 2) return;
            const container = images[0].parentElement;
            let currentIndex = 0;
            let slideshowInterval;

            function startSlideshow() {
                clearInterval(slideshowInterval);
                slideshowInterval = setInterval(function () {
                    images[currentIndex].classList.replace('opacity-100', 'opacity-0');
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.replace('opacity-0', 'opacity-100');
                }, 5000);
            }
            startSlideshow();
            container.addEventListener('mouseenter', () => clearInterval(slideshowInterval));
            container.addEventListener('mouseleave', startSlideshow);
        });
    </script>
</body>
</html>
