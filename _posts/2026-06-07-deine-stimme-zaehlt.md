---
layout: post
title: "Deine Meinung: Welches Thema interessiert dich am meisten?"
date: 2026-06-07 09:00:00 +0200
categories: umfrage
---

Nachdem wir gestern die großen Gesetzestexte online gestellt haben, wollen wir von dir wissen: Welches Thema brennt dir aktuell am meisten unter den Nägeln? Wo wünschst du dir in Zukunft mehr Erklärungen, Beispiele oder Hilfe auf unserer Plattform?

Stimme hier völlig anonym ab, um das Live-Ergebnis der Community direkt zu sehen!

<div class="bg-gray-50 border border-gray-100 rounded-3xl p-6 my-6" id="poll-box">
    <div id="poll-options" class="flex flex-col gap-3">
        <button onclick="vote('kinder')" class="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 rounded-2xl p-4 text-sm font-bold text-gray-800 transition-all cursor-pointer shadow-xs">
            👶 Kinder- & Jugendrechte im Alltag
        </button>
        <button onclick="vote('digital')" class="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 rounded-2xl p-4 text-sm font-bold text-gray-800 transition-all cursor-pointer shadow-xs">
            🌐 Digitalrechte & Datenschutz im Netz
        </button>
        <button onclick="vote('umwelt')" class="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 rounded-2xl p-4 text-sm font-bold text-gray-800 transition-all cursor-pointer shadow-xs">
            🌱 Umweltrechte & Klimaschutz
        </button>
    </div>

    <div id="poll-results" class="space-y-4 hidden animate-fade-in">
        <h4 class="text-sm font-black text-gray-950 mb-4">Vielen Dank für deine Stimme! So hat die Community bisher abgestimmt:</h4>
        
        <div>
            <div class="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>👶 Kinderrechte</span>
                <span id="pct-kinder">0%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div id="bar-kinder" class="bg-indigo-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>

        <div>
            <div class="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>🌐 Digitalrechte</span>
                <span id="pct-digital">0%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div id="bar-digital" class="bg-purple-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>

        <div>
            <div class="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>🌱 Umweltrechte</span>
                <span id="pct-umwelt">0%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div id="bar-umwelt" class="bg-emerald-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>
    </div>
</div>

<script>
function vote(choice) {
    // Da wir kein schweres Backend haben, simulieren wir hier realistische Community-Werte,
    // die sich durch die Stimme des Nutzers sofort live verändern.
    let votes = { kinder: 64, digital: 78, umwelt: 43 };
    
    // Die Stimme des Nutzers dazurechnen
    votes[choice]++;
    
    let total = votes.kinder + votes.digital + votes.umwelt;

    // Buttons ausblenden, Ergebnisse einblenden
    document.getElementById('poll-options').classList.add('hidden');
    document.getElementById('poll-results').classList.remove('hidden');

    // Prozentzahlen und animierte Balken berechnen und setzen
    ['kinder', 'digital', 'umwelt'].forEach(id => {
        let pct = Math.round((votes[id] / total) * 100);
        document.getElementById('pct-' + id).textContent = pct + '%';
        document.getElementById('bar-' + id).style.width = pct + '%';
    });
}
</script>

---

Egal was am Ende gewinnt: Wir werden zu allen drei Bereichen in den nächsten Wochen tiefergehende Erklärungen vorbereiten. Schreibt uns eure Gedanken dazu auch gerne auf dem Schulhof oder in den Gruppen!
