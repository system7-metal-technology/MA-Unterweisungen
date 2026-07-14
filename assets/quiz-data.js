const QUIZ_QUESTIONS = {
  de: [
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
  ],
  hu: [
    {
      tag: "Általános",
      q: "Mi érvényes az üzem teljes területén munkaidő alatt?",
      options: [
        "Az alkohol és a kábítószer tilos",
        "Kis mennyiségű alkohol megengedett",
        "Csak sör megengedett",
        "Az alkohol csak az irodai dolgozóknak tilos"
      ],
      correct: 0,
      explain: "Alkohol és kábítószer használata az üzem teljes területén tilos, munkaidő alatt alkoholos ital fogyasztása nem megengedett."
    },
    {
      tag: "Általános",
      q: "Szabad-e enni és inni a termelési munkahelyeken?",
      options: [
        "Igen, mindenhol megengedett",
        "Nem, higiéniai okokból nem megengedett",
        "Csak a délelőtti műszakban megengedett",
        "Csak inni szabad"
      ],
      correct: 1,
      explain: "Az étkezés és ivás higiéniai okokból a termelési munkahelyeken nem megengedett."
    },
    {
      tag: "Általános",
      q: "Milyen ivóedények használata kötelező a termelésben?",
      options: [
        "Nyitott kávéspoharak",
        "Nyitott üdítős dobozok",
        "Az ivónyílást védő palackok/poharak (pl. zárókupakkal)",
        "Bármilyen edény használható"
      ],
      correct: 2,
      explain: "Mivel a termelési területen egészségkárosító munkaanyagokat használnak, csak olyan ivópalackok és poharak használhatók, amelyek megfelelően védik az ivónyílást."
    },
    {
      tag: "Általános",
      q: "Hol szabad dohányozni az üzem területén?",
      options: [
        "Bárhol, kivéve az irodát",
        "Csak a szünetekben, az épületen kívül, a kijelölt területeken",
        "Minden munkahelyen",
        "A dohányzás mindenhol, még kint is tilos"
      ],
      correct: 1,
      explain: "Az üzemépületen belül általános dohányzási tilalom van érvényben. A dohányzás a szünetekben az épületen kívül, a kijelölt területeken engedélyezett."
    },
    {
      tag: "Általános",
      q: "Ki kezelheti a targoncát az üzemben?",
      options: [
        "Bármely munkavállaló 16 éves kortól",
        "Csak 18. életévét betöltött, targoncavezetői jogosítvánnyal, belső vezetési engedéllyel és oktatásban részesült személy",
        "Bárki érvényes vezetői engedéllyel",
        "Csak a termelési vezető személyesen"
      ],
      correct: 1,
      explain: "A targoncát csak 18. életévüket betöltött személyek használhatják, akik targoncavezetői jogosítvánnyal, belső üzemi vezetési engedéllyel rendelkeznek, és a targonca használatára oktatásban részesültek."
    },
    {
      tag: "Tűzvédelem",
      q: "Melyik segélyhívó számot hívjuk Ausztriában a tűzoltóság riasztásához?",
      options: ["112", "133", "122", "144"],
      correct: 2,
      explain: "A tűzoltóságot a 122-es segélyhívón kell riasztani."
    },
    {
      tag: "Tűzvédelem",
      q: "Melyik segélyhívó számot hívjuk a mentőkhöz?",
      options: ["122", "133", "140", "144"],
      correct: 3,
      explain: "Szükség esetén a mentőket a 144-es segélyhívón kell riasztani."
    },
    {
      tag: "Tűzvédelem",
      q: "Mi szükséges feltétlenül melegmunkák (hegesztés, vágás, forrasztás) végzése előtt?",
      options: [
        "Semmi, bárki bármikor hegeszthet",
        "Előzetes engedély (engedélyezési jegy) az üzemvezetéstől vagy a tűzvédelmi megbízottól",
        "Csak szóbeli bejelentés a kollégáknak",
        "Bejelentés a tűzoltóságnak"
      ],
      correct: 1,
      explain: "Melegmunkák csak előzetes engedéllyel (engedélyezési jegy) végezhetők az üzemvezetés vagy a tűzvédelmi megbízott (ill. helyettese) jóváhagyásával."
    },
    {
      tag: "Tűzvédelem",
      q: "Mennyi idő áll rendelkezésre a beavatkozó kapcsolás működtetésére, miután egy füstérzékelő jelzett?",
      options: ["10 másodperc", "60 másodperc", "5 perc", "15 perc"],
      correct: 1,
      explain: "Füstérzékelő jelzésekor először csak épületen belüli riasztás indul. Legfeljebb 60 másodpercen belül lehet a beavatkozó kapcsolást működtetni, ezt követően további legfeljebb 5 perc felderítési idő áll rendelkezésre."
    },
    {
      tag: "Tűzvédelem",
      q: "Mivel kell oltani a szilíciumakkumulátor tüzét?",
      options: [
        "Mindig bő vízzel",
        "Kizárólag homokkal",
        "Speciális oltóanyaggal, például CO2-vel, porral vagy habbal",
        "Akkumulátortüzet soha nem szabad oltani"
      ],
      correct: 2,
      explain: "Szilíciumakkumulátor tüze esetén elektromos tüzekhez való speciális oltóanyagot (pl. CO2, por vagy hab) kell használni. A víz általában nem megfelelő, mert fokozhatja a rövidzárlatot."
    },
    {
      tag: "Dolgozói önellenőrzés",
      q: "Mennyi ideig kell várni az előhívó felvitele után a PT-vizsgálatnál?",
      options: ["1 perc", "5 perc", "10 perc", "30 perc"],
      correct: 2,
      explain: "Az előhívó (BEA) felvitele után 10 perces várakozási időt kell betartani, mielőtt a hegesztési varratokat értékelnék."
    },
    {
      tag: "Dolgozói önellenőrzés",
      q: "Mi a teendő, ha egy szállítási tétel vizsgálatakor szivárgást észlelnek?",
      options: [
        "Csak az érintett alkatrészt kell utómunkálni, a többi érintetlen marad",
        "A teljes szállítási tétel összes vizsgálandó alkatrészét PT-vizsgálatnak kell alávetni",
        "A teljes tételt további vizsgálat nélkül selejtezik",
        "Nincs további teendő"
      ],
      correct: 1,
      explain: "Szivárgás észlelése esetén minden vizsgálandó alkatrészt (a teljes szállítási tételt) PT-vizsgálatnak kell alávetni."
    },
    {
      tag: "Dolgozói önellenőrzés",
      q: "Milyen védőfelszerelés kötelező a PT-vizsgálat során használt vegyszerekkel szemben?",
      options: [
        "Csak biztonsági cipő",
        "FFP2 védőmaszk, saválló védőkesztyű és jól záró védőszemüveg",
        "Nincs szükség védőfelszerelésre",
        "Csak hallásvédő"
      ],
      correct: 1,
      explain: "A rendkívül tűzveszélyes aeroszol és az egészségkárosító hatások miatt FFP2 védőmaszk, saválló kesztyű és jól záró védőszemüveg szükséges."
    },
    {
      tag: "Esztergagép",
      q: "Szabad-e kesztyűt viselni esztergagépen végzett munka közben?",
      options: [
        "Igen, mindig kötelező",
        "Nem, alapvetően tilos — kivéve álló gépnél alkatrészek mozgatásához",
        "Igen, de csak bőrkesztyűt",
        "Csak éjszakai műszakban"
      ],
      correct: 1,
      explain: "Esztergagépen végzett munka közben kesztyűt viselni tilos, mivel a forgó alkatrészek elkaphatják. Kivétel: álló gépnél alkatrészek mozgatása."
    },
    {
      tag: "Esztergagép",
      q: "Szabad-e az alkatrészeket vagy a ruházatot sűrített levegővel tisztítani az esztergagépnél?",
      options: [
        "Igen, ez az ajánlott módszer",
        "Nem, ez tilos (többek között a hűtő-kenőanyag-kibocsátás és egészségügyi veszély miatt)",
        "Csak járó gépnél",
        "Csak hallásvédővel megengedett"
      ],
      correct: 1,
      explain: "Az alkatrészeket és a ruházatot tilos sűrített levegővel tisztítani, mivel ez súlyos egészségügyi veszélyt jelent a felkavart hűtő-kenőanyag-kibocsátás miatt."
    }
  ]
};
