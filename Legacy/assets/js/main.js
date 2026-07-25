document.addEventListener('DOMContentLoaded', () => {

  // ── LOADER ──────────────────────────────────────────────
  const loader = document.getElementById('loader');
  if (loader) {
    // Minimum display time for the brand impression
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = 'visible';
    }, 1000);
  }



});

document.addEventListener("DOMContentLoaded", () => {

    // 3D Tilt Effect for Bento Cards
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max tilt angle
            const maxTilt = 5;
            
            // Calculate tilt degrees
            const tiltX = ((y - centerY) / centerY) * -maxTilt;
            const tiltY = ((x - centerX) / centerX) * maxTilt;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none'; // remove transition for smooth tracking
        });
    });

});