// Global observer configuration
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

// Create a single observer instance
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Optionally unobserve if we only want it to reveal once
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Expose a global function to check/observe newly added .reveal elements
window.checkReveal = function() {
  const reveals = document.querySelectorAll('.reveal:not(.active)');
  reveals.forEach(reveal => {
    // observe will not duplicate if already observing
    revealObserver.observe(reveal);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.checkReveal();
});