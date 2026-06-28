---
layout: post
title: "🧠 Das große M-Fleger Wochenquiz: Hast du alles gecheckt?"
date: 2026-06-28
author: Julian Fleger
category: Quiz
---

Inspiriert vom coolen *logo!-Nachrichtenquiz* (siehe `image_08c400.jpg`) dachte ich mir: Testen wir doch mal, wer in den letzten Tagen bei meinen Artikeln und Updates am besten aufgepasst hat! 

Hier sind **3 knackige Fragen** zu den neuesten Features und Themen auf M-Fleger. Klicke einfach auf die Antwort, die du für richtig hältst!

---

### Frage 1: Das neue Cookie-Banner poppt auf. Wann genau passiert das, nachdem du die Seite geöffnet hast?

<div class="flex flex-col gap-2 my-4">
    <button onclick="checkAnswer('q1', 'falsch', 'Leider nicht! Sofort wäre etwas zu hektisch. Rate nochmal!')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">A) Sofort beim Laden der Seite</button>
    <button onclick="checkAnswer('q1', 'richtig', '🎉 Richtig! Das Banner wartet exakt 3 Sekunden, bevor es sich elegant über den Bildschirm legt.')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">B) Nach genau 3 Sekunden</button>
    <button onclick="checkAnswer('q1', 'falsch', 'Puh, 10 Sekunden wären ganz schön lang – da sind manche schon wieder weg. Probier\'s nochmal!')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">C) Erst nach 10 Sekunden</button>
</div>
<div id="q1-result" class="hidden p-4 rounded-xl font-bold text-sm"></div>

---

### Frage 2: Wir nutzen jetzt Google Analytics 4 für die Statistik. Was passiert mit deiner IP-Adresse, wenn du auf „Akzeptieren“ klickst?

<div class="flex flex-col gap-2 my-4">
    <button onclick="checkAnswer('q2', 'falsch', 'Auf keinen Fall! Datenschutz wird hier großgeschrieben. Versuchs nochmal!')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">A) Sie wird öffentlich im Profil angezeigt</button>
    <button onclick="checkAnswer('q2', 'richtig', '🎉 Volltreffer! Die IP-Adresse wird sofort automatisch anonymisiert (gekürzt), sodass niemand weiß, wer du persönlich bist.')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">B) Sie wird automatisch anonymisiert und gekürzt</button>
    <button onclick="checkAnswer('q2', 'falsch', 'Niemals! Google bekommt sie nicht im Klartext. Schau noch mal in den gestrigen Artikel.')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">C) Sie wird unverschlüsselt in die USA geschickt</button>
</div>
<div id="q2-result" class="hidden p-4 rounded-xl font-bold text-sm"></div>

---

### Frage 3: Wo werden deine gesetzten Blog-Favoriten und die Anmelde-Sitzung sicher gespeichert?

<div class="flex flex-col gap-2 my-4">
    <button onclick="checkAnswer('q3', 'richtig', '🎉 Ganz genau! Supabase speichert deine Favoriten in der Cloud-Datenbank, und dein Login-Token liegt verschlüsselt im LocalStorage deines Browsers.')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">A) In der Supabase-Datenbank & im LocalStorage</button>
    <button onclick="checkAnswer('q3', 'falsch', 'In einer Excel-Datei auf meinem PC? Bloß nicht, das wäre das pure Chaos! 😉')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">B) In einer Excel-Liste auf Julians Computer</button>
    <button onclick="checkAnswer('q3', 'falsch', 'Ganz ohne Speicher wüsste die Website beim nächsten Klick gar nicht mehr, wer du bist. Knapp daneben!')" class="text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-xl border-0 cursor-pointer font-medium transition-colors">C) Gar nirgends, das läuft komplett ohne Speicher</button>
</div>
<div id="q3-result" class="hidden p-4 rounded-xl font-bold text-sm"></div>

---

### Und, wie viele konntest du auf Anhieb richtig beantworten? 🥳
Schreib mir gerne dein Ergebnis! Wenn du irgendwo daneben gelegen hast, kannst du die Details ganz einfach in den Artikeln vom Vortag oder in der Datenschutzerklärung nachlesen.

<script>
function checkAnswer(questionId, status, text) {
    const resultDiv = document.getElementById(questionId + '-result');
    resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    
    if (status === 'richtig') {
        resultDiv.classList.add('bg-green-100', 'text-green-800');
    } else {
        resultDiv.classList.add('bg-red-100', 'text-red-800');
    }
    
    resultDiv.innerText = text;
}
</script>
