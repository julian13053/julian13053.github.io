---
layout: post
title: "Quiz: Wie gut kennst du deine Rechte im echten Leben?"
date: 2026-06-08 09:00:00 +0200
categories: quiz
---

Gesetzestexte klingen oft trocken. Aber wie sieht es eigentlich aus, wenn es im Alltag hart auf hart kommt? Weißt du genau, was dir zusteht und wo das Gesetz dich schützt? 

Testen wir es aus! Mach unser kurzes Blitz-Quiz und klicke einfach auf die Antwort, die du für richtig hältst.

<div class="bg-gray-50 border border-gray-100 rounded-3xl p-6 my-6" id="quiz-container">
    <div class="flex justify-between items-center mb-4">
        <span id="quiz-progress" class="text-xs font-black uppercase tracking-wider text-rose-600">Frage 1 von 2</span>
        <span id="quiz-score" class="text-xs font-bold text-gray-500">Punkte: 0</span>
    </div>

    <h3 id="quiz-question" class="text-base font-black text-gray-950 mb-4 leading-tight">Lädt Frage...</h3>
    
    <div id="quiz-options" class="flex flex-col gap-2"></div>
    
    <div id="quiz-feedback" class="mt-4 p-4 rounded-2xl border text-xs leading-relaxed hidden"></div>

    <div class="mt-4 flex justify-end">
        <button id="quiz-next-btn" disabled class="bg-gray-900 text-white disabled:opacity-30 disabled:cursor-not-allowed font-bold px-4 py-2.5 rounded-xl transition-all text-xs cursor-pointer">
            Nächste Frage →
        </button>
    </div>
</div>

<script>
// Der Fragenkatalog für das Quiz
const questions = [
    {
        q: "Darf ein Kind oder Jugendlicher bei wichtigen Entscheidungen in der Familie oder Schule mitreden?",
        o: [
            "Nein, gesetzlich bestimmen das bis zum 18. Lebensjahr immer nur die Erwachsenen.",
            "Ja, laut UN-Kinderrechtskonvention hat jedes Kind das Recht, gehört und ernst genommen zu werden.",
            "Nur, wenn man einen schriftlichen Antrag bei der Schulleitung einreicht."
        ],
        c: 1,
        e: "✅ **Stimmt genau!** Artikel 12 der UN-Kinderrechtskonvention sichert dir das Recht auf freie Meinungsäußerung und Beteiligung bei allen Angelegenheiten, die dich betreffen."
    },
    {
        q: "Dürfen Internet-Anbieter den Zugriff auf bestimmte Apps oder Webseiten absichtlich langsamer machen?",
        o: [
            "Ja, wenn der App-Entwickler nicht genug Geld an den Anbieter bezahlt.",
            "Ja, aber nur zu Stoßzeiten, wenn das Internet überlastet ist.",
            "Nein, das Gesetz zur Netzneutralität verbietet die Diskriminierung von Daten im Netz."
        ],
        c: 2,
        e: "✅ **Exakt!** Die digitale Netzneutralität sorgt dafür, dass alle Daten im Netz gleich behandelt werden. Kein Konzern darf dein Internet drosseln, nur um eigene Dienste zu bevorzugen."
    }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('quiz-next-btn').disabled = true;
    document.getElementById('quiz-feedback').classList.add('hidden');
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    const currentData = questions[currentIndex];
    
    document.getElementById('quiz-progress').textContent = `Frage ${currentIndex + 1} von ${questions.length}`;
    document.getElementById('quiz-question').textContent = currentData.q;

    currentData.o.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left bg-white border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 transition-all cursor-pointer shadow-xs";
        btn.textContent = optionText;
        
        btn.onclick = () => {
            // Wenn schon geantwortet wurde, Klick blockieren
            if (document.getElementById('quiz-next-btn').disabled === false) return;
            
            let correctIndex = currentData.c;
            
            // Alle Buttons einfärben (richtig = grün, falsch gewählt = rot)
            optionsContainer.querySelectorAll('button').forEach((b, i) => {
                b.classList.remove('hover:bg-gray-100', 'cursor-pointer');
                if (i === correctIndex) {
                    b.className = "w-full text-left bg-green-50 border-green-400 text-green-900 rounded-xl p-3 text-xs font-semibold shadow-xs";
                } else if (i === index) {
                    b.className = "w-full text-left bg-red-50 border-red-400 text-red-900 rounded-xl p-3 text-xs font-semibold shadow-xs";
                } else {
                    b.classList.add('opacity-40');
                }
            });
            
            const feedback = document.getElementById('quiz-feedback');
            if (index === correctIndex) {
                score++;
                document.getElementById('quiz-score').textContent = `Punkte: ${score}`;
                feedback.className = "mt-4 p-4 rounded-xl border bg-green-50 border-green-200 text-green-900 text-xs leading-relaxed";
                feedback.innerHTML = currentData.e;
            } else {
                feedback.className = "mt-4 p-4 rounded-xl border bg-red-50 border-red-200 text-red-900 text-xs leading-relaxed";
                feedback.innerHTML = "❌ **Leider nicht ganz richtig.** " + currentData.e;
            }
            
            feedback.classList.remove('hidden');
            document.getElementById('quiz-next-btn').disabled = false;
        };
        
        optionsContainer.appendChild(btn);
    });
}

document.getElementById('quiz-next-btn').onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-question').textContent = "🎉 Quiz beendet!";
        document.getElementById('quiz-options').innerHTML = `<p class="text-sm font-black text-center py-4 text-rose-600">Stark! Du hast ${score} von ${questions.length} Punkten erreicht!</p>`;
        document.getElementById('quiz-feedback').classList.add('hidden');
        document.getElementById('quiz-next-btn').classList.add('hidden');
    }
};

// Start des Quiz beim Laden der Seite
loadQuestion();
</script>

---

Wie ist dein Ergebnis ausgefallen? Werde zum Rechte-Profi und lies dir auf unseren neuen Spezial-Seiten durch, was dir gesetzlich zusteht!
