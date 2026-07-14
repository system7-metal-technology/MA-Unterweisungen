# MA-Unterweisungen

Minimalistische Website zur Mitarbeiter-Unterweisung bei system7 metal technology.

🔗 **Live:** https://system7-metal-technology.github.io/MA-Unterweisungen/

## Inhalt

- **Dokumente zum Download** – die 4 aktuellen Unterweisungsdokumente als PDF:
  - Werkerselbstkontrolle (Sichtkontrolle/Eindringprüfung Schweißnähte)
  - BA Unterweisung Allgemein
  - Brandschutzordnung
  - BA Drehmaschine
- **Quiz** – 15 Fragen zu den Inhalten der Dokumente, mit direktem Feedback und Erklärung nach jeder Antwort sowie einer Ergebnisübersicht am Ende.

## Struktur

```
index.html              Startseite mit Dokumenten-Downloads und Quiz-Einstieg
quiz.html               Interaktives Quiz
assets/style.css        Styling
assets/quiz-data.js     Die 15 Quizfragen
assets/quiz.js          Quiz-Logik
documents/              Die 4 PDF-Dokumente
```

## Lokal testen

Kein Build-Schritt nötig – einfach einen statischen Server im Projektordner starten, z.B.:

```
python -m http.server 8000
```

und `http://localhost:8000` öffnen.

## Deployment

Die Seite wird über GitHub Pages aus dem `master`-Branch (Ordner `/root`) ausgeliefert. Änderungen an `index.html`, `quiz.html`, `assets/` oder `documents/` werden nach einem Push automatisch veröffentlicht.
