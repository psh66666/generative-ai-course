document.querySelectorAll('[data-reparameterization-demo]').forEach((demo) => {
  const mu = demo.querySelector('[data-mu]');
  const sigma = demo.querySelector('[data-sigma]');
  const muValue = demo.querySelector('[data-mu-value]');
  const sigmaValue = demo.querySelector('[data-sigma-value]');
  const zValue = demo.querySelector('[data-z-value]');

  const update = () => {
    const muNumber = Number(mu.value);
    const sigmaNumber = Number(sigma.value);
    muValue.textContent = muNumber.toFixed(1);
    sigmaValue.textContent = sigmaNumber.toFixed(1);
    zValue.textContent = (muNumber - sigmaNumber).toFixed(1);
  };

  mu.addEventListener('input', update);
  sigma.addEventListener('input', update);
  update();
});
