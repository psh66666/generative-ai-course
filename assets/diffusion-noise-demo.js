document.querySelectorAll('[data-diffusion-demo]').forEach((demo) => {
  const slider = demo.querySelector('input[type="range"]');
  const predicted = demo.querySelector('[data-predicted]');
  const clean = demo.querySelector('[data-clean]');
  const loss = demo.querySelector('[data-loss]');

  const update = () => {
    const estimate = Number(slider.value);
    predicted.textContent = estimate.toFixed(1);
    clean.textContent = ((1 - 0.6 * estimate) / 0.8).toFixed(2);
    loss.textContent = Math.pow(-1 - estimate, 2).toFixed(2);
  };

  slider.addEventListener('input', update);
  update();
});
