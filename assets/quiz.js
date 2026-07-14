(function () {
  const shell = document.getElementById("quiz-shell");
  const questionCard = document.getElementById("question-card");
  const resultCard = document.getElementById("result-card");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");

  let current = 0;
  let score = 0;
  let answered = false;
  const userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

  function renderQuestion() {
    answered = false;
    const q = QUIZ_QUESTIONS[current];
    progressFill.style.width = ((current) / QUIZ_QUESTIONS.length * 100) + "%";
    progressLabel.textContent = `Frage ${current + 1} von ${QUIZ_QUESTIONS.length}`;

    questionCard.innerHTML = "";

    const tag = document.createElement("div");
    tag.className = "question-tag";
    tag.textContent = q.tag;
    questionCard.appendChild(tag);

    const text = document.createElement("div");
    text.className = "question-text";
    text.textContent = q.q;
    questionCard.appendChild(text);

    const opts = document.createElement("div");
    opts.className = "options";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.innerHTML = `<span class="letter">${letters[i]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => selectAnswer(i, btn, opts));
      opts.appendChild(btn);
    });
    questionCard.appendChild(opts);

    const explain = document.createElement("div");
    explain.className = "explain";
    explain.id = "explain-box";
    explain.textContent = q.explain;
    questionCard.appendChild(explain);

    const actions = document.createElement("div");
    actions.className = "quiz-actions";
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-primary hidden";
    nextBtn.id = "next-btn";
    nextBtn.textContent = current === QUIZ_QUESTIONS.length - 1 ? "Ergebnis anzeigen" : "Nächste Frage →";
    nextBtn.addEventListener("click", nextQuestion);
    actions.appendChild(nextBtn);
    questionCard.appendChild(actions);
  }

  function selectAnswer(i, btn, opts) {
    if (answered) return;
    answered = true;
    const q = QUIZ_QUESTIONS[current];
    userAnswers[current] = i;
    if (i === q.correct) score++;

    [...opts.children].forEach((child, idx) => {
      child.disabled = true;
      if (idx === q.correct) child.classList.add("correct");
      else if (idx === i) child.classList.add("wrong");
    });

    document.getElementById("explain-box").classList.add("show");
    document.getElementById("next-btn").classList.remove("hidden");
  }

  function nextQuestion() {
    current++;
    if (current >= QUIZ_QUESTIONS.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    progressFill.style.width = "100%";
    progressLabel.textContent = `Frage ${QUIZ_QUESTIONS.length} von ${QUIZ_QUESTIONS.length}`;
    questionCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    document.getElementById("result-score").textContent = `${score} / ${QUIZ_QUESTIONS.length}`;

    let msg;
    if (pct === 100) msg = "Ausgezeichnet! Sie beherrschen alle Unterweisungsinhalte.";
    else if (pct >= 80) msg = "Sehr gut! Ein Blick in die Dokumente schadet trotzdem nicht.";
    else if (pct >= 50) msg = "Solide Basis — bitte die Dokumente noch einmal durchgehen.";
    else msg = "Bitte lesen Sie die Unterweisungsdokumente sorgfältig durch und wiederholen Sie das Quiz.";
    document.getElementById("result-msg").textContent = msg;

    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";
    QUIZ_QUESTIONS.forEach((q, idx) => {
      const ua = userAnswers[idx];
      if (ua === q.correct) return;
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="rq">${idx + 1}. ${q.q}</div>
        <div>Ihre Antwort: <span class="ra-wrong">${q.options[ua]}</span></div>
        <div>Richtig: <span class="ra-correct">${q.options[q.correct]}</span></div>
      `;
      reviewList.appendChild(item);
    });
  }

  document.getElementById("restart-btn").addEventListener("click", () => {
    current = 0;
    score = 0;
    userAnswers.fill(null);
    resultCard.classList.add("hidden");
    questionCard.classList.remove("hidden");
    renderQuestion();
  });

  renderQuestion();
})();
