document.querySelectorAll('[data-reverse-demo]').forEach((demo) => {
  const noiseEstimate = demo.querySelector('[data-noise-estimate]');
  const freshNoise = demo.querySelector('[data-fresh-noise]');
  const estimatedClean = demo.querySelector('[data-estimated-clean]');
  const reverseMean = demo.querySelector('[data-reverse-mean]');
  const previousSample = demo.querySelector('[data-previous-sample]');
  const estimateLabel = demo.querySelector('[data-estimate-label]');
  const freshLabel = demo.querySelector('[data-fresh-label]');

  const update = () => {
    const epsilon = Number(noiseEstimate.value);
    const xi = Number(freshNoise.value);
    const mean = (1 - 0.2 / 0.6 * epsilon) / Math.sqrt(0.8);
    estimateLabel.textContent = epsilon.toFixed(1);
    freshLabel.textContent = xi.toFixed(1);
    estimatedClean.textContent = ((1 - 0.6 * epsilon) / 0.8).toFixed(2);
    reverseMean.textContent = mean.toFixed(2);
    previousSample.textContent = (mean + xi / 3).toFixed(2);
  };

  noiseEstimate.addEventListener('input', update);
  freshNoise.addEventListener('input', update);
  update();
});
