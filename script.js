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


/* WordPress-like search overlay + static results */
(function () {
  const openBtn = document.getElementById('wpSearchButton');
  const overlay = document.getElementById('wpSearchOverlay');
  const closeBtn = document.getElementById('wpSearchClose');
  const input = document.getElementById('wpSearchInput');

  if (openBtn && overlay && closeBtn) {
    function setOpen(open) {
      overlay.classList.toggle('open', open);
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && input) setTimeout(() => input.focus(), 60);
    }

    openBtn.addEventListener('click', () => setOpen(true));
    closeBtn.addEventListener('click', () => setOpen(false));

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  const resultsRoot = document.getElementById('searchResults');
  const heading = document.getElementById('searchHeading');
  const searchPageInput = document.getElementById('searchPageInput');

  if (!resultsRoot || !heading || !searchPageInput) return;

  const pages = [
    { title: 'Home', url: 'index.html', text: 'Med n Ed healthcare education mission donate worldwide resources' },
    { title: 'Our Mission', url: 'mission.html', text: 'mission medical educational access healthcare education' },
    { title: 'Our Motivation', url: 'motivation.html', text: 'motivation why Med n Ed healthcare education' },
    { title: 'Partner/Sponsor', url: 'partner-sponsor.html', text: 'partner sponsor partnership support organization' },
    { title: 'Our Team', url: 'team.html', text: 'team board Sadhika Roshni Sudhiksha Sophia Swarasai' },
    { title: 'Get Involved', url: 'get-involved.html', text: 'get involved become member partner donate volunteer' },
    { title: 'Projects', url: 'projects.html', text: 'projects events community service mask drive book drive MedX bake sale' },
    { title: 'Interviews', url: 'interviews.html', text: 'interviews doctors medical professionals' },
    { title: 'Instagram Takeovers', url: 'instagram-takeovers.html', text: 'instagram takeovers social media events' },
    { title: 'Resources', url: 'resources.html', text: 'resources articles healthcare education' },
    { title: 'Youtube Videos', url: 'youtube-videos.html', text: 'youtube videos media' },
    { title: 'MedX', url: 'medx.html', text: 'MedX conference event medicine education' },
    { title: 'Contact Us', url: 'contact.html', text: 'contact email instagram message form' }
  ];

  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || '').trim();
  searchPageInput.value = q;

  if (!q) {
    heading.textContent = 'Search';
    resultsRoot.innerHTML = '<p>Enter a search term above.</p>';
    return;
  }

  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = pages.filter(page => {
    const haystack = (page.title + ' ' + page.text).toLowerCase();
    return terms.every(term => haystack.includes(term));
  });

  heading.textContent = 'Search results for: “' + q + '”';

  if (!matches.length) {
    resultsRoot.innerHTML = '<p>No results found.</p>';
    return;
  }

  resultsRoot.innerHTML = matches.map(page =>
    '<article class="search-result-item">' +
      '<a href="' + page.url + '">' +
        '<h3>' + page.title + '</h3>' +
        '<p>' + page.text + '</p>' +
      '</a>' +
    '</article>'
  ).join('');
})();



/* Our Members carousel */
(function () {
  const carousel = document.getElementById('missionMembersCarousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.mission-members-slide')];
  const prev = carousel.querySelector('.mission-carousel-prev');
  const next = carousel.querySelector('.mission-carousel-next');
  const pause = carousel.querySelector('.mission-carousel-pause');

  let index = 0;
  let paused = false;
  let timer;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle('active', n === index));
  }

  function start() {
    clearInterval(timer);
    if (!paused) timer = setInterval(() => show(index + 1), 6000);
  }

  prev?.addEventListener('click', () => {
    show(index - 1);
    start();
  });

  next?.addEventListener('click', () => {
    show(index + 1);
    start();
  });

  pause?.addEventListener('click', () => {
    paused = !paused;
    pause.textContent = paused ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    start();
  });

  show(0);
  start();
})();

/* Our Motivation carousel */
(function () {
  const carousel = document.getElementById('motivationCarousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.motivation-slide')];
  const prev = carousel.querySelector('.motivation-prev');
  const next = carousel.querySelector('.motivation-next');
  const pause = carousel.querySelector('.motivation-pause');
  let index = 0, paused = false, timer;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle('active', n === index));
  }

  function start() {
    clearInterval(timer);
    if (!paused) timer = setInterval(() => show(index + 1), 6000);
  }

  prev?.addEventListener('click', () => { show(index - 1); start(); });
  next?.addEventListener('click', () => { show(index + 1); start(); });
  pause?.addEventListener('click', () => {
    paused = !paused;
    pause.textContent = paused ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    start();
  });

  show(0);
  start();
})();
