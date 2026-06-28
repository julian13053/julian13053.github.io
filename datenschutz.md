---
layout: null
title: Datenschutz
---
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datenschutzerklärung - M-Fleger</title>
    
    <meta name="description" content="Datenschutzerklärung von M-Fleger. Erfahre, wie wir deine Daten bei der Anmeldung und Nutzung der Favoriten-Funktion schützen.">
    <meta name="robots" content="noindex, follow">
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="font-sans antialiased flex flex-col min-h-screen">

    <nav class="sticky top-0 z-50 shadow-xs">
        {% include navigation.html %}
    </nav>

    <header class="bg-gradient-to-br from-[#1d4ed8] via-[#1e3a8a] to-[#312e81] text-white py-12 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">🛡️ Datenschutzerklärung</h1>
            <p class="text-base md:text-lg text-blue-100">Transparenz ist mir wichtig. Hier erfährst du, was mit deinen Daten passiert.</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-12 flex-grow w-full prose prose-slate">
        
        <div class="p-8 rounded-2xl space-y-8 liquid-glass">
            
            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">1. Allgemeine Hinweise</h2>
                <p class="leading-relaxed" style="color: #334155;">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
                </p>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">2. Verantwortliche Stelle</h2>
                <p class="leading-relaxed" style="color: #334155;">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br><br>
                    <strong style="color: #0f172a;">Julian Fleger</strong><br>
                    Rüdickenstr. 30<br>
                    13053 Berlin<br><br>
                    <strong style="color: #0f172a;">Kontakt:</strong><br>
                    E-Mail: julian@m-fleger.de
                </p>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">3. Registrierung und Anmeldung (Supabase Auth)</h2>
                <p class="leading-relaxed mb-4" style="color: #334155;">
                    Auf meiner Website kannst du dich registrieren, um zusätzliche Funktionen wie das Favorisieren von Blogartikeln zu nutzen. Die von dir eingegebenen Daten (E-Mail-Adresse und Passwort) werden ausschließlich für die Bereitstellung dieses Nutzerkontos verwendet.
                </p>
                <div class="p-4 rounded-xl text-sm space-y-2" style="background: rgba(37,  99, 235, 0.08); border: 1px solid rgba(37, 99, 235, 0.2); color: #1e3a8a;">
                    <p><strong>Dienstleister:</strong> Wir nutzen für die Authentifizierung und Datenbankverwaltung den Dienst <strong>Supabase</strong> (Supabase Inc., 970 Summer St, Stamford, CT 06905, USA).</p>
                    <p><strong>Datenverschlüsselung:</strong> Dein Passwort wird niemals im Klartext gespeichert, sondern vor der Übertragung und Speicherung nach aktuellen Sicherheitsstandards kryptografisch verschlüsselt (gehasht).</p>
                    <p><strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Erfüllung des Nutzungsvertrags (Art. 6 Abs. 1 lit. b DSGVO).</p>
                </div>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">4. Speicherung von Favoriten</h2>
                <p class="leading-relaxed" style="color: #334155;">
                    Wenn du eingeloggt bist und einen Beitrag favorisierst, wird diese Information (welcher User welche Blog-ID markiert hat) in unserer Supabase-Datenbank gespeichert. Dies dient einzig und allein dem Zweck, dir deine persönliche Merkliste bei deinem nächsten Besuch wieder anzuzeigen.
                </p>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">5. Cookies und LocalStorage</h2>
                <p class="leading-relaxed mb-4" style="color: #334155;">
                    Diese Website nutzt Speichermedien im Browser, um grundlegende Funktionen bereitzustellen und deine Privatsphäre-Einstellungen zu sichern.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-sm" style="color: #334155;">
                    <li><strong>Cookie-Banner-Auswahl:</strong> Deine Entscheidung im Cookie-Banner (akzeptiert oder abgelehnt) wird im LocalStorage unter dem Schlüssel <code>cookie-consent</code> gespeichert. Dies ist technisch notwendig, damit das Banner nach deiner Entscheidung ausgeblendet bleibt und nicht bei jedem Seitenaufruf neu erscheint.</li>
                    <li><strong>Anmelde-Sitzung (Session):</strong> Supabase nutzt den LocalStorage deines Browsers, um ein sicheres Zugriffs-Token (Session-Token) zu speichern. Dadurch bleibst du eingeloggt, während du durch die verschiedenen Seiten navigierst. Ohne diesen Speicher wäre eine Anmeldung technisch nicht möglich.</li>
                </ul>
                <p class="text-sm mt-4" style="color: #475569;">
                    Da es sich hierbei um <strong>technisch absolut notwendige Funktionen</strong> zur Ausführung der von dir gewünschten Dienste (Einloggen & Cookie-Präferenz merken) handelt, ist hierfür keine gesonderte Einwilligung erforderlich (gemäß TDDDG / DSGVO).
                </p>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <!-- NEUER ABSCHNITT FÜR GOOGLE ANALYTICS -->
            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">6. Webanalyse (Google Analytics 4)</h2>
                <p class="leading-relaxed mb-4" style="color: #334155;">
                    Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). 
                </p>
                <p class="leading-relaxed mb-4" style="color: #334155;">
                    Google Analytics hilft uns zu verstehen, wie Besucher mit unserer Website interagieren. Dabei werden anonymisierte Daten wie Seitenaufrufe, Verweildauer, genutzte Betriebssysteme und die grobe Herkunft erfasst. Deine IP-Adresse wird bei der Erfassung in Google Analytics 4 standardmäßig automatisch anonymisiert (gekürzt), sodass eine direkte persönliche Zuordnung ausgeschlossen ist.
                </p>
                <div class="p-4 rounded-xl text-sm space-y-2 mb-4" style="background: rgba(37, 99, 235, 0.08); border: 1px solid rgba(37, 99, 235, 0.2); color: #1e3a8a;">
                    <p><strong>Freiwilligkeit & Widerruf:</strong> Die Datenerfassung durch Google Analytics startet erst, wenn du im Cookie-Overlay aktiv auf <strong>„Akzeptieren“</strong> klickst. Wenn du auf „Ablehnen“ klickst, wird kein Code geladen und kein Tracking durchgeführt.</p>
                    <p><strong>Rechtsgrundlage:</strong> Die Verarbeitung deiner Daten erfolgt ausschließlich auf Grundlage deiner ausdrücklichen Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>.</p>
                </div>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">7. Dein Recht auf Löschung ("Recht auf Vergessenwerden")</h2>
                <p class="leading-relaxed mb-4" style="color: #334155;">
                    Du hast jederzeit die volle Kontrolle über deine Daten. Du hast das Recht, Auskunft über deine gespeicherten Daten zu erhalten, diese zu korrigieren oder komplett löschen zu lassen.
                </p>
                <div class="p-4 rounded-xl text-sm" style="background: rgba(220, 38, 38, 0.06); border: 1px solid rgba(220, 38, 38, 0.2); color: #991b1b;">
                    <strong>Konto löschen:</strong> Du kannst dein Profil jederzeit direkt in deinen Kontoeinstellungen selbstständig löschen. Bei der Löschung werden deine E-Mail-Adresse, dein Zugang sowie alle von dir gesetzten Favoriten **sofort, restlos und unwiderruflich** aus der Datenbank gelöscht.
                </div>
            </section>

            <hr style="border-color: rgba(255, 255, 255, 0.4);">

            <section>
                <h2 class="text-2xl font-black mb-3" style="color: #0f172a;">8. Hosting der Website</h2>
                <p class="leading-relaxed" style="color: #334155;">
                    Diese Website wird über <strong>GitHub Pages</strong> (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seite werden automatisch Logfiles (u.a. IP-Adresse des Aufrufers) durch GitHub verarbeitet, um die Sicherheit und Stabilität des Dienstes zu gewährleisten.
                </p>
            </section>

        </div>

    </main>

    {% include footer.html %}
</body>
</html>
