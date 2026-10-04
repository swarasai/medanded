
(function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  function closeMenu() {
    toggle.classList.remove('open');
    nav.classList.remove('mobile-open');
    document.body.classList.remove('mobile-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    toggle.classList.add('open');
    nav.classList.add('mobile-open');
    document.body.classList.add('mobile-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  toggle.addEventListener('click', function () {
    nav.classList.contains('mobile-open') ? closeMenu() : openMenu();
  });

  nav.querySelectorAll('.nav-dropdown-toggle').forEach(function (button) {
    button.addEventListener('click', function (event) {
      if (window.innerWidth > 900) return;
      event.preventDefault();
      const parent = button.closest('.nav-dropdown');
      const open = parent.classList.toggle('mobile-dropdown-open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) closeMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      closeMenu();
      nav.querySelectorAll('.nav-dropdown').forEach(function (drop) {
        drop.classList.remove('mobile-dropdown-open');
      });
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
})();
