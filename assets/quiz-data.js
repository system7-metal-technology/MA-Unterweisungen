const QUIZ_QUESTIONS = [
  {
    tag: "Allgemein",
    q: "Was gilt am gesamten Betriebsgelände während der Arbeitszeit?",
    options: [
      "Alkohol und Suchtgift sind verboten",
      "Alkohol ist in kleinen Mengen erlaubt",
      "Nur Bier ist erlaubt",
      "Alkohol ist nur für Angestellte verboten"
    ],
    correct: 0,
    explain: "Alkohol und Suchtgift sind am gesamten Betriebsgelände verboten, während der Arbeitszeit dürfen keine alkoholischen Getränke konsumiert werden."
  },
  {
    tag: "Allgemein",
    q: "Ist Essen und Trinken an den Arbeitsplätzen in der Produktion erlaubt?",
    options: [
      "Ja, überall erlaubt",
      "Nein, aus hygienischen Gründen nicht erlaubt",
      "Nur in der Frühschicht erlaubt",
      "Nur Trinken ist erlaubt"
    ],
    correct: 1,
    explain: "Essen und Trinken ist aus hygienischen Gründen an den Arbeitsplätzen in der Produktion nicht erlaubt."
  },
  {
    tag: "Allgemein",
    q: "Welche Trinkgefäße sind in der Produktion vorgeschrieben?",
    options: [
      "Offene Kaffeebecher",
      "Offene Getränkedosen",
      "Flaschen/Becher mit Schutz des Mundstücks (z.B. Verschlusskappe)",
      "Beliebige Gefäße"
    ],
    correct: 2,
    explain: "Wegen gesundheitsschädlicher Arbeitsstoffe in der Produktion sind nur Trinkflaschen und Becher mit entsprechendem Schutz des Mundstücks vorgeschrieben."
  },
  {
    tag: "Allgemein",
    q: "Wo darf innerhalb des Betriebsgeländes geraucht werden?",
    options: [
      "Überall außer im Büro",
      "Nur in den Pausen außerhalb des Gebäudes in gekennzeichneten Bereichen",
      "An jedem Arbeitsplatz",
      "Rauchen ist generell komplett verboten, auch draußen"
    ],
    correct: 1,
    explain: "Innerhalb des Gebäudes gilt generelles Rauchverbot. Rauchen ist nur in den Pausen außerhalb des Gebäudes in gekennzeichneten Bereichen gestattet."
  },
  {
    tag: "Allgemein",
    q: "Wer darf einen Stapler (Gabelstapler) im Betrieb bedienen?",
    options: [
      "Jeder Mitarbeiter ab 16 Jahren",
      "Nur Personen ab 18 Jahren mit Staplerschein, innerbetrieblicher Fahrerlaubnis und Unterweisung",
      "Jeder mit gültigem Führerschein",
      "Nur der Produktionsleiter persönlich"
    ],
    correct: 1,
    explain: "Der Stapler darf nur von Personen ab 18 Jahre benutzt werden, die einen Staplerschein, eine innerbetriebliche Fahrerlaubnis besitzen und für den Stapler unterwiesen sind."
  },
  {
    tag: "Brandschutz",
    q: "Welche Notrufnummer wird für die Feuerwehr in Österreich verwendet?",
    options: ["112", "133", "122", "144"],
    correct: 2,
    explain: "Die Feuerwehr wird über den Notruf 122 alarmiert."
  },
  {
    tag: "Brandschutz",
    q: "Welche Notrufnummer wird für die Rettung verwendet?",
    options: ["122", "133", "140", "144"],
    correct: 3,
    explain: "Die Rettung wird, falls erforderlich, über den Notruf 144 alarmiert."
  },
  {
    tag: "Brandschutz",
    q: "Was ist vor Heißarbeiten wie Schweißen, Schneiden oder Löten zwingend erforderlich?",
    options: [
      "Nichts, jeder darf jederzeit schweißen",
      "Eine vorherige Genehmigung (Freigabeschein) durch Betriebsleitung oder Brandschutzbeauftragten",
      "Nur eine mündliche Ankündigung im Kollegenkreis",
      "Eine Anmeldung bei der Feuerwehr"
    ],
    correct: 1,
    explain: "Heißarbeiten dürfen nur nach vorheriger Genehmigung (Freigabeschein) durch die Betriebsleitung oder den Brandschutzbeauftragten (bzw. dessen Stellvertreter) durchgeführt werden."
  },
  {
    tag: "Brandschutz",
    q: "Wie viel Zeit steht nach Ansprechen eines Rauchmelders zur Verfügung, um die Interventionsschaltung zu betätigen?",
    options: ["10 Sekunden", "60 Sekunden", "5 Minuten", "15 Minuten"],
    correct: 1,
    explain: "Bei Ansprechen eines Rauchmelders wird zunächst nur hausintern Alarm ausgelöst. Innerhalb von max. 60 Sekunden kann die Interventionsschaltung betätigt werden, danach folgen bis zu 5 Minuten Erkundungszeit."
  },
  {
    tag: "Brandschutz",
    q: "Womit sollte ein Brand einer Silizium-Batterie gelöscht werden?",
    options: [
      "Immer mit viel Wasser",
      "Mit Sand ausschließlich",
      "Mit speziellen Löschmitteln wie CO2, Pulver oder Schaum",
      "Batteriebrände dürfen nie gelöscht werden"
    ],
    correct: 2,
    explain: "Bei einem Brand einer Silizium-Batterie sollten spezielle Löschmittel für elektrische Brände verwendet werden (z.B. CO2, Pulver oder Schaum). Wasser ist in der Regel nicht geeignet, da es Kurzschlüsse verstärken kann."
  },
  {
    tag: "Werkerselbstkontrolle",
    q: "Wie lange muss nach Auftragen des Entwicklers bei der Eindringprüfung (PT) gewartet werden?",
    options: ["1 Minute", "5 Minuten", "10 Minuten", "30 Minuten"],
    correct: 2,
    explain: "Nach dem Auftragen des Entwicklers (BEA) ist eine Wartezeit von 10 Minuten einzuhalten, bevor die Schweißnähte beurteilt werden."
  },
  {
    tag: "Werkerselbstkontrolle",
    q: "Was ist zu tun, wenn bei der Prüfung eines Auslieferloses eine Undichtheit festgestellt wird?",
    options: [
      "Nur das betroffene Teil wird nachgearbeitet, der Rest bleibt unberührt",
      "Alle zu prüfenden Teile des gesamten Auslieferloses müssen einer PT-Prüfung unterzogen werden",
      "Das gesamte Los wird ohne weitere Prüfung verworfen",
      "Es muss nichts weiter unternommen werden"
    ],
    correct: 1,
    explain: "Wird eine Undichtheit festgestellt, müssen alle zu prüfenden Teile des gesamten Auslieferloses einer PT-Prüfung unterzogen werden."
  },
  {
    tag: "Werkerselbstkontrolle",
    q: "Welche Schutzausrüstung ist bei der Eindringprüfung mit den verwendeten Chemikalien vorgeschrieben?",
    options: [
      "Nur Sicherheitsschuhe",
      "Schutzmaske FFP2, säurebeständige Schutzhandschuhe und dichtschließende Schutzbrille",
      "Keine Schutzausrüstung notwendig",
      "Nur ein Gehörschutz"
    ],
    correct: 1,
    explain: "Wegen des extrem entzündbaren Aerosols und der Gesundheitsgefahren sind Schutzmaske FFP2, säurebeständige Handschuhe und eine dichtschließende Schutzbrille erforderlich."
  },
  {
    tag: "Drehmaschine",
    q: "Dürfen bei der Arbeit an einer Drehmaschine Handschuhe getragen werden?",
    options: [
      "Ja, immer verpflichtend",
      "Nein, grundsätzlich nicht — außer zur Manipulation bei stillstehender Maschine",
      "Ja, aber nur aus Leder",
      "Nur bei Nachtschicht"
    ],
    correct: 1,
    explain: "Handschuhe dürfen bei der Arbeit an Drehmaschinen nicht getragen werden, da sie von rotierenden Teilen erfasst werden können. Ausnahme: Manipulation von Teilen bei stillstehender Maschine."
  },
  {
    tag: "Drehmaschine",
    q: "Dürfen Bauteile oder Kleidung an der Drehmaschine mit Druckluft gereinigt werden?",
    options: [
      "Ja, das ist die empfohlene Methode",
      "Nein, das ist verboten (u.a. wegen Kühlschmiermittel-Emissionen und Gesundheitsgefahr)",
      "Nur bei laufender Maschine",
      "Nur mit Gehörschutz erlaubt"
    ],
    correct: 1,
    explain: "Bauteile und Kleidung dürfen nicht mit Druckluft gereinigt werden, da dies eine hohe Gesundheitsgefahr durch aufgewirbelte Kühlschmiermittel-Emissionen darstellt."
  }
];
