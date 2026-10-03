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


/* Header search */
(function () {
  const wrap = document.querySelector('.header-search');
  const toggle = document.getElementById('headerSearchToggle');
  const form = document.getElementById('headerSearchForm');
  const input = document.getElementById('headerSearchInput');
  if (!wrap || !toggle || !form || !input) return;

  const routes = [
    [['home'], 'index.html'],
    [['mission','our mission'], 'mission.html'],
    [['motivation','our motivation'], 'motivation.html'],
    [['partner','sponsor'], 'partner-sponsor.html'],
    [['team','board'], 'team.html'],
    [['interview'], 'interviews.html'],
    [['instagram','takeover'], 'instagram-takeovers.html'],
    [['project'], 'projects.html'],
    [['resource','article'], 'resources.html'],
    [['youtube','video'], 'youtube-videos.html'],
    [['medx'], 'medx.html'],
    [['get involved','volunteer','member','join'], 'get-involved.html']
  ];

  function openSearch(open) {
    wrap.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) setTimeout(() => input.focus(), 40);
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    openSearch(!wrap.classList.contains('open'));
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) openSearch(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') openSearch(false);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim().toLowerCase();
    if (!q) return;

    document.querySelector('.search-no-result')?.remove();

    if (q.includes('donat') || q.includes('paypal')) {
      window.open('https://www.paypal.com/paypalme/medanded?locale.x=en_US', '_blank', 'noopener');
      return;
    }
    if (q.includes('contact') || q.includes('email')) {
      window.location.href = 'mailto:contactmedanded@gmail.com';
      return;
    }

    const match = routes.find(([terms]) => terms.some(term => q.includes(term) || term.includes(q)));
    if (match) {
      window.location.href = match[1];
      return;
    }

    const msg = document.createElement('div');
    msg.className = 'search-no-result';
    msg.textContent = 'No matching page found. Try Mission, Team, Projects, Resources, Interviews, or Get Involved.';
    wrap.appendChild(msg);
  });
})();
