const DOCS = {
  werkerselbstkontrolle: {
    num: "mt-02-00103",
    de: {
      title: "Werkerselbstkontrolle",
      desc: "Anweisung und Protokoll zur Sichtkontrolle der Schweißnähte und Eindringprüfung (PT) für dichtgeschweißte Bauteile.",
      file: "documents/mt-02-00103-werkerselbstkontrolle.pdf"
    },
    hu: {
      title: "Dolgozói önellenőrzés",
      desc: "Utasítás és jegyzőkönyv a hegesztési varratok szemrevételezéséhez és PT-vizsgálatához tömören hegesztett alkatrészeknél.",
      file: "documents/hu/mt-02-00103-dolgozoi-onellenorzes.pdf"
    }
  },
  allgemein: {
    num: "mt-03-00101",
    de: {
      title: "BA Unterweisung Allgemein",
      desc: "Allgemeine Betriebsanweisung: Gebote/Verbote, Arbeits- und Pausenzeiten, PSA, Erste Hilfe, Verhalten im Brandfall.",
      file: "documents/mt-03-00101-unterweisung-allgemein.pdf"
    },
    hu: {
      title: "Általános munkavédelmi oktatás",
      desc: "Általános üzemeltetési utasítás: előírások és tilalmak, munka- és szünetidők, EVE, elsősegély, teendők tűz esetén.",
      file: "documents/hu/mt-03-00101-altalanos-oktatas.pdf"
    }
  },
  brandschutz: {
    num: "mt-03-00102",
    de: {
      title: "Brandschutzordnung",
      desc: "Verhalten im Brandfall, Brandschutzeinrichtungen, Alarmablauf, Evakuierung und Umgang mit Batterien.",
      file: "documents/mt-03-00102-brandschutzordnung.pdf"
    },
    hu: {
      title: "Tűzvédelmi szabályzat",
      desc: "Teendők tűz esetén, tűzvédelmi berendezések, riasztási folyamat, kiürítés és az akkumulátorok kezelése.",
      file: "documents/hu/mt-03-00102-tuzvedelmi-szabalyzat.pdf"
    }
  },
  drehmaschine: {
    num: "mt-03-00108",
    de: {
      title: "BA Drehmaschine",
      desc: "Maschinenbetriebsanweisung für konventionelle Drehmaschinen: Gefahren, Schutzmaßnahmen und PSA.",
      file: "documents/mt-03-00108-drehmaschine.pdf"
    },
    hu: {
      title: "Gépi üzemeltetési utasítás – Esztergagép",
      desc: "Üzemeltetési utasítás hagyományos esztergagépekhez: veszélyek, védelmi intézkedések és EVE.",
      file: "documents/hu/mt-03-00108-esztergagep.pdf"
    }
  }
};

const STRINGS = {
  de: {
    page_title_index: "Mitarbeiter-Unterweisungen | system7 metal technology",
    page_title_quiz: "Quiz | system7 metal technology",
    nav_docs: "Dokumente",
    nav_quiz: "Quiz",
    back_link: "Zurück zur Übersicht",
    hero_title: "Mitarbeiter-Unterweisungen",
    hero_text: "Hier finden Sie die aktuellen Unterweisungsdokumente zum Download sowie ein kurzes Quiz, mit dem Sie Ihr Wissen zu Arbeitssicherheit, Brandschutz und Maschinenbedienung überprüfen können.",
    docs_title: "Dokumente zum Download",
    docs_sub: "Bitte lesen Sie alle Dokumente sorgfältig durch, bevor Sie das Quiz starten.",
    download_btn: "PDF herunterladen",
    quiz_cta_title: "Wissens-Quiz",
    quiz_cta_text: "15 Fragen zu den obigen Unterweisungen — direkt im Browser, ohne Anmeldung.",
    quiz_cta_btn: "Quiz starten →",
    footer: "system7 metal technology — Mitarbeiter-Unterweisungen",
    progress_label: "Frage {cur} von {total}",
    next_btn: "Nächste Frage →",
    next_btn_last: "Ergebnis anzeigen",
    result_title: "Ihr Ergebnis",
    result_msg_100: "Ausgezeichnet! Sie beherrschen alle Unterweisungsinhalte.",
    result_msg_80: "Sehr gut! Ein Blick in die Dokumente schadet trotzdem nicht.",
    result_msg_50: "Solide Basis — bitte die Dokumente noch einmal durchgehen.",
    result_msg_low: "Bitte lesen Sie die Unterweisungsdokumente sorgfältig durch und wiederholen Sie das Quiz.",
    restart_btn: "Quiz wiederholen",
    docs_link_btn: "Zur Dokumentenübersicht",
    your_answer: "Ihre Antwort:",
    correct_answer: "Richtig:"
  },
  hu: {
    page_title_index: "Munkavállalói oktatások | system7 metal technology",
    page_title_quiz: "Kvíz | system7 metal technology",
    nav_docs: "Dokumentumok",
    nav_quiz: "Kvíz",
    back_link: "Vissza az áttekintéshez",
    hero_title: "Munkavállalói oktatások",
    hero_text: "Itt találja a letölthető aktuális oktatási dokumentumokat, valamint egy rövid kvízt, amellyel ellenőrizheti tudását a munkavédelem, a tűzvédelem és a gépkezelés területén.",
    docs_title: "Letölthető dokumentumok",
    docs_sub: "Kérjük, a kvíz megkezdése előtt figyelmesen olvassa el az összes dokumentumot.",
    download_btn: "PDF letöltése",
    quiz_cta_title: "Tudásfelmérő kvíz",
    quiz_cta_text: "15 kérdés a fenti oktatások tartalmáról — közvetlenül a böngészőben, regisztráció nélkül.",
    quiz_cta_btn: "Kvíz indítása →",
    footer: "system7 metal technology — Munkavállalói oktatások",
    progress_label: "{cur}. kérdés / {total}",
    next_btn: "Következő kérdés →",
    next_btn_last: "Eredmény megtekintése",
    result_title: "Az Ön eredménye",
    result_msg_100: "Kiváló! Ön minden oktatási tartalmat elsajátított.",
    result_msg_80: "Nagyon jó! Egy pillantást azért érdemes vetni a dokumentumokra.",
    result_msg_50: "Szolid alap — kérjük, nézze át még egyszer a dokumentumokat.",
    result_msg_low: "Kérjük, olvassa el figyelmesen az oktatási dokumentumokat, és ismételje meg a kvízt.",
    restart_btn: "Kvíz újrakezdése",
    docs_link_btn: "A dokumentumok áttekintéséhez",
    your_answer: "Az Ön válasza:",
    correct_answer: "Helyes válasz:"
  }
};
