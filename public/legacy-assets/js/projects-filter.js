document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        // Reset animation state for re-triggering
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = null;

        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex'; // Use flex for the card layout
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });
});
