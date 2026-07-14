const LANG_KEY = "s7-lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "de";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function t(key, vars) {
  const lang = getLang();
  let str = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.de[key] || "";
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replace(`{${k}}`, vars[k]);
    });
  }
  return str;
}

function applyCommonI18n(pageTitleKey) {
  const lang = getLang();
  document.documentElement.lang = lang;
  if (pageTitleKey) document.title = t(pageTitleKey);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) el.textContent = val;
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("active", btnLang === lang);
    btn.addEventListener("click", () => {
      if (getLang() === btnLang) return;
      setLang(btnLang);
      location.reload();
    });
  });
}

function renderDocs() {
  const lang = getLang();
  document.querySelectorAll("[data-doc]").forEach((card) => {
    const id = card.getAttribute("data-doc");
    const doc = DOCS[id];
    if (!doc) return;
    const info = doc[lang] || doc.de;
    const numEl = card.querySelector("[data-doc-num]");
    const titleEl = card.querySelector("[data-doc-title]");
    const descEl = card.querySelector("[data-doc-desc]");
    const linkEl = card.querySelector("[data-doc-link]");
    if (numEl) numEl.textContent = doc.num;
    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc;
    if (linkEl) {
      linkEl.setAttribute("href", info.file);
      linkEl.textContent = t("download_btn");
    }
  });
}
