document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.querySelector('.intro-overlay');
  if (!overlay) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    overlay.remove();
    return;
  }

  document.body.classList.add('intro-lock');

  window.setTimeout(function () {
    overlay.classList.add('intro-hide');
  }, 950);

  overlay.addEventListener('transitionend', function () {
    overlay.remove();
    document.body.classList.remove('intro-lock');
  });
});
