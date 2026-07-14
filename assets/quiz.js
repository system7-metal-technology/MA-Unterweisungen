(function () {
  const questionCard = document.getElementById("question-card");
  const resultCard = document.getElementById("result-card");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");

  const lang = getLang();
  const questions = QUIZ_QUESTIONS[lang] || QUIZ_QUESTIONS.de;

  let current = 0;
  let score = 0;
  let answered = false;
  const userAnswers = new Array(questions.length).fill(null);

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    progressFill.style.width = ((current) / questions.length * 100) + "%";
    progressLabel.textContent = t("progress_label", { cur: current + 1, total: questions.length });

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
    nextBtn.textContent = current === questions.length - 1 ? t("next_btn_last") : t("next_btn");
    nextBtn.addEventListener("click", nextQuestion);
    actions.appendChild(nextBtn);
    questionCard.appendChild(actions);
  }

  function selectAnswer(i, btn, opts) {
    if (answered) return;
    answered = true;
    const q = questions[current];
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
    if (current >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    progressFill.style.width = "100%";
    progressLabel.textContent = t("progress_label", { cur: questions.length, total: questions.length });
    questionCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    const pct = Math.round((score / questions.length) * 100);
    document.getElementById("result-title").textContent = t("result_title");
    document.getElementById("result-score").textContent = `${score} / ${questions.length}`;

    let msg;
    if (pct === 100) msg = t("result_msg_100");
    else if (pct >= 80) msg = t("result_msg_80");
    else if (pct >= 50) msg = t("result_msg_50");
    else msg = t("result_msg_low");
    document.getElementById("result-msg").textContent = msg;

    document.getElementById("restart-btn").textContent = t("restart_btn");
    document.getElementById("docs-link-btn").textContent = t("docs_link_btn");

    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";
    questions.forEach((q, idx) => {
      const ua = userAnswers[idx];
      if (ua === q.correct) return;
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="rq">${idx + 1}. ${q.q}</div>
        <div>${t("your_answer")} <span class="ra-wrong">${q.options[ua]}</span></div>
        <div>${t("correct_answer")} <span class="ra-correct">${q.options[q.correct]}</span></div>
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

  applyCommonI18n("page_title_quiz");
  renderQuestion();
})();
