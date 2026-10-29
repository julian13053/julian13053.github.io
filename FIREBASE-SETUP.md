# Firebase einrichten (Login, Likes, Favoriten)

Die Website nutzt nur den **kostenlosen Spark-Plan** von Firebase:
**Authentication** (E-Mail/Passwort + Google) und **Cloud Firestore**.
Es gibt keinen Server und keine Cloud Functions, du musst kein Zahlungsmittel hinterlegen.

Projekt: **m-fleger-web** (Werte in `assets/js/firebase-config.js`).

---

## 1. Plan prüfen

Firebase Console → links unten muss **Spark** stehen.
Wichtig: Sobald du ein Abrechnungskonto verknüpfst, wird das Projekt automatisch auf
den kostenpflichtigen Blaze-Plan umgestellt. Also kein Abrechnungskonto verknüpfen.

## 2. Anmeldemethoden aktivieren

**Authentication → Sign-in method**

- **E-Mail-Adresse/Passwort** → aktivieren → Speichern
- **Google** → aktivieren → Support-E-Mail wählen → Speichern

## 3. Domains freigeben

**Authentication → Einstellungen → Autorisierte Domains** → „Domain hinzufügen“:

- `m-fleger.de`
- `julian13053.github.io`
- `localhost` (für lokale Tests mit `bundle exec jekyll serve`, ist meist schon drin)

Ohne diesen Schritt schlägt vor allem der Google-Login fehl.

## 4. Firestore-Datenbank anlegen

**Firestore Database → Datenbank erstellen**

- Edition/Modus: **Produktionsmodus** (alles gesperrt, bis die Regeln gesetzt sind)
- Standort: am besten in der EU, z. B. **eur3 (Europa)** oder **europe-west3 (Frankfurt)**.
  ⚠️ Der Standort lässt sich später **nicht** mehr ändern.

## 5. Sicherheitsregeln einfügen

**Firestore Database → Regeln** → den kompletten Inhalt von
[`firestore.rules`](firestore.rules) einfügen → **Veröffentlichen**.

Die Regeln sorgen dafür, dass

- jeder nur seine **eigenen** Favoriten und Likes sehen und ändern kann,
- Like-Zahlen öffentlich lesbar sind, aber nur **um genau 1** und nur zusammen mit
  einem eigenen Like verändert werden können (kein Manipulieren der Zahlen),
- nur Konten mit **bestätigter E-Mail-Adresse** speichern dürfen.

Tipp: Unter Regeln → **Rules Playground** kannst du einzelne Zugriffe ausprobieren.

## 6. (Empfohlen) API-Schlüssel auf deine Domains beschränken

Google Cloud Console → **APIs & Dienste → Anmeldedaten** → den „Browser key“ des Projekts
öffnen → **Anwendungseinschränkungen: Websites** → eintragen:

- `https://m-fleger.de/*`
- `https://julian13053.github.io/*`
- `https://m-fleger-web.firebaseapp.com/*` (für den Google-Login nötig)
- `http://localhost/*` und `http://localhost:4000/*` (lokal)

Der Schlüssel ist ohnehin öffentlich sichtbar; die Beschränkung verhindert nur,
dass fremde Websites ihn mitbenutzen.

---

## Datenmodell

| Sammlung | Dokument-ID | Inhalt |
|---|---|---|
| `users/{uid}/favoriten` | Artikel-ID | `postId`, `createdAt` |
| `likes` | `{Artikel-ID}_{uid}` | `postId`, `uid`, `createdAt` |
| `likeCounts` | Artikel-ID | `count` |

Artikel-ID = Datum des Beitrags als `JJJJMMTTHHMM` (wie bisher).

## Kostenrahmen (Spark)

Laut Firebase sind im Spark-Plan u. a. **50.000 Lesevorgänge und 20.000 Schreibvorgänge
pro Tag** in Firestore kostenlos; E-Mail- und Google-Login sind ohne Kosten nutzbar.
Wird ein Limit überschritten, entstehen **keine Kosten** – die Funktion pausiert dann.

Ungefährer Verbrauch pro Seitenaufruf:

- Startseite / Blog: 1 Lesevorgang pro Artikel mit Likes (Like-Zahlen)
  + für eingeloggte Nutzer ihre Favoriten und Likes
- Like / Favorit setzen: 1–2 Schreib- und 1–2 Lesevorgänge

## Dateien

- `assets/js/firebase-config.js` – Projektdaten (die einzige Stelle mit Schlüsseln)
- `assets/js/firebase.js` – gemeinsamer Kern: Login-Status, Favoriten, Likes, Konto löschen
- `assets/js/reactions.js` – Like-/Favoriten-Knöpfe auf Startseite, Blog, Artikeln
- `login.html`, `profil.html`, `_includes/navigation.html` – nutzen den Kern
- `firestore.rules` – Sicherheitsregeln (in die Console kopieren)
- `firebase.json` – nur für die optionale Firebase-CLI (`firebase deploy --only firestore:rules`)
