
(function () {
  const slides = Array.from(document.querySelectorAll('.home-slide'));
  const dots = Array.from(document.querySelectorAll('.slider-dot'));
  const prev = document.querySelector('.slider-prev');
  const next = document.querySelector('.slider-next');

  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 6000);
  }

  prev.addEventListener('click', () => {
    showSlide(current - 1);
    startAuto();
  });

  next.addEventListener('click', () => {
    showSlide(current + 1);
    startAuto();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startAuto();
    });
  });

  showSlide(0);
  startAuto();
})();
