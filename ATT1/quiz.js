// quiz.js — lógica do quiz sobre pudim

document.addEventListener('DOMContentLoaded', () => {
  const quizEl = document.getElementById('quiz');
  const submitBtn = document.getElementById('submitQuiz');
  const retryBtn = document.getElementById('retryQuiz');
  const resultEl = document.getElementById('quizResult');

  const questions = [
    {
      q: 'Qual ingrediente é a base doce tradicional do pudim?',
      options: ['Leite desnatado', 'Leite condensado', 'Creme de leite', 'Iogurte'],
      a: 1
    },
    {
      q: 'Qual o método correto de assar o pudim?',
      options: ['Forno direto na grade', 'Fritar em óleo', 'Banho-maria no forno', 'Cozinhar na panela de pressão'],
      a: 2
    },
    {
      q: 'O que precisamos fazer com o açúcar para obter a calda?',
      options: ['Misturar com água fria', 'Queimar até virar carvão', 'Derreter até dourar', 'Bater com manteiga'],
      a: 2
    },
    {
      q: 'Quanto tempo aproximado leva para assar o pudim em banho-maria?',
      options: ['10 minutos', '30 minutos', '1 hora', '4 horas'],
      a: 2
    },
    {
      q: 'Quantos ovos geralmente vão na receita mostrada?',
      options: ['1 ovo', '3 ovos', '6 ovos', 'Nenhum ovo'],
      a: 1
    }
  ];

  function renderQuiz() {
    quizEl.innerHTML = '';
    questions.forEach((item, idx) => {
      const qWrap = document.createElement('div');
      qWrap.className = 'question';
      qWrap.dataset.index = idx;

      const qTitle = document.createElement('h3');
      qTitle.textContent = `${idx + 1}. ${item.q}`;
      qWrap.appendChild(qTitle);

      const opts = document.createElement('div');
      opts.className = 'options';

      item.options.forEach((opt, i) => {
        const optWrap = document.createElement('div');
        optWrap.className = 'option';
        optWrap.dataset.optIndex = i;

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${idx}`;
        input.id = `q${idx}_opt${i}`;
        input.value = i;

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = opt;

        // click area to select
        optWrap.addEventListener('click', () => {
          // unselect others
          const siblings = opts.querySelectorAll('.option');
          siblings.forEach(s => s.classList.remove('selected'));
          optWrap.classList.add('selected');
          input.checked = true;
        });

        optWrap.appendChild(input);
        optWrap.appendChild(label);
        opts.appendChild(optWrap);
      });

      qWrap.appendChild(opts);
      quizEl.appendChild(qWrap);
    });

    // reset result
    resultEl.textContent = '';
    retryBtn.style.display = 'none';
    submitBtn.disabled = false;
  }

  function gradeQuiz() {
    let score = 0;
    questions.forEach((item, idx) => {
      const qWrap = quizEl.querySelector(`.question[data-index='${idx}']`);
      const selected = qWrap.querySelector('.option input:checked');
      const opts = qWrap.querySelectorAll('.option');

      // clear state
      opts.forEach(o => o.classList.remove('correct', 'incorrect', 'selected'));

      if (selected) {
        const chosen = Number(selected.value);
        if (chosen === item.a) {
          score += 1;
        }
        // mark correct/incorrect
        opts.forEach(o => {
          const optIndex = Number(o.dataset.optIndex);
          if (optIndex === item.a) o.classList.add('correct');
          if (optIndex === chosen && chosen !== item.a) o.classList.add('incorrect');
        });
      } else {
        // if nothing selected, still highlight correct answer
        opts.forEach(o => {
          const optIndex = Number(o.dataset.optIndex);
          if (optIndex === item.a) o.classList.add('correct');
        });
      }
    });

    resultEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    submitBtn.disabled = true;
    retryBtn.style.display = 'inline-block';
    // scroll to result for visibility
    resultEl.scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  submitBtn.addEventListener('click', gradeQuiz);
  retryBtn.addEventListener('click', () => {
    renderQuiz();
  });

  // initial render
  renderQuiz();
});
