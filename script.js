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