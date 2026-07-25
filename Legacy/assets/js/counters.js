document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-value');
  const speed = 200; // The lower the slower

  const animateCounters = (counter, target) => {
    let start = null;
    const duration = 2000; // 2 seconds

    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      const currentCount = Math.floor(easeOutQuad(progress) * target);
      counter.innerText = currentCount;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        counter.innerText = target + (counter.dataset.suffix || '');
      }
    };
    window.requestAnimationFrame(step);
  };

  const observerOptions = {
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        // Prevent re-animating
        if (!counter.classList.contains('counted')) {
          counter.classList.add('counted');
          animateCounters(counter, target);
        }
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});
