(function () {
  const slides = [...document.querySelectorAll('.wp-slide')];
  if (!slides.length) return;

  let index = 0;
  let timer;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('active', n === index));
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 6500);
  }

  document.querySelector('.wp-prev')?.addEventListener('click', () => {
    show(index - 1);
    resetTimer();
  });

  document.querySelector('.wp-next')?.addEventListener('click', () => {
    show(index + 1);
    resetTimer();
  });

  show(0);
  resetTimer();
})();


/* Shared Med n' Ed chatbot */
(function () {
  const launcher = document.getElementById('chatLauncher');
  const panel = document.getElementById('chatPanel');
  const close = document.getElementById('chatClose');
  const body = document.getElementById('chatBody');
  const options = document.getElementById('chatOptions');

  if (!launcher || !panel || !close || !body || !options) return;

  const answers = {
    about:
      'Med n\\' Ed is committed to improving access to healthcare and education. <a class="chat-answer-link" href="mission.html">Read our mission →</a>',
    join:
      'You can become a member, volunteer, or partner with us. <a class="chat-answer-link" href="get-involved.html">Get involved →</a>',
    donate:
      'Donations support Med n\\' Ed projects and communities in need. <a class="chat-answer-link" href="get-involved.html">Donation information →</a>',
    contact:
      'You can email us at <a class="chat-answer-link" href="mailto:contactmedanded@gmail.com">contactmedanded@gmail.com</a> or message <a class="chat-answer-link" href="https://www.instagram.com/medanded_org/" target="_blank" rel="noopener">@medanded_org</a>.'
  };

  function openChat() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
  }

  function closeChat() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  launcher.addEventListener('click', () => {
    panel.classList.contains('open') ? closeChat() : openChat();
  });

  close.addEventListener('click', closeChat);

  options.addEventListener('click', (event) => {
    const button = event.target.closest('[data-chat-answer]');
    if (!button) return;

    const key = button.getAttribute('data-chat-answer');
    const answer = answers[key];
    if (!answer) return;

    const message = document.createElement('div');
    message.className = 'chat-message bot';
    message.innerHTML = answer;
    body.appendChild(message);
    body.scrollTop = body.scrollHeight;
  });
})();
