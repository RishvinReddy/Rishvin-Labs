/* =====================================================
   Rishvin Labs v3 — Mega Navbar JS
   Handles: dropdown open/close, mobile menu,
            scroll hide/show, scrolled class
   ===================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {

    const navbar    = document.getElementById('main-navbar');
    const menuBtn   = document.getElementById('mobile-menu-btn');
    const linksWrap = document.getElementById('navbar-links');
    const navItems  = document.querySelectorAll('.nav-item[data-dropdown]');

    if (!navbar) return;

    /* ── Scroll: scrolled + hide-on-scroll ──────────── */
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      navbar.classList.toggle('scrolled', y > 20);
      // Auto-hide only after user scrolls past 120px
      if (y > lastY && y > 120) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastY = y;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ── Mobile menu toggle ─────────────────────────── */
    if (menuBtn && linksWrap) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = linksWrap.classList.toggle('active');
        const icon   = menuBtn.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [menuBtn] });
        }
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
          linksWrap.classList.remove('active');
          const icon = menuBtn.querySelector('[data-lucide]');
          if (icon && icon.getAttribute('data-lucide') === 'x') {
            icon.setAttribute('data-lucide', 'menu');
            if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [menuBtn] });
          }
          // Close all mobile dropdowns
          navItems.forEach(item => item.classList.remove('open'));
        }
      });
    }

    /* ── Dropdown: hover (desktop) + click (mobile) ── */
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (!link) return;

      // Desktop: hover managed by CSS, but keep click as fallback
      link.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 900;
        if (!isMobile) return; // desktop: let CSS :hover handle it

        e.preventDefault();
        const isOpen = item.classList.toggle('open');
        // Close siblings
        navItems.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
      });
    });

    /* ── Close dropdowns on Escape ──────────────────── */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navItems.forEach(item => item.classList.remove('open'));
        if (linksWrap) linksWrap.classList.remove('active');
      }
    });

    /* ── Highlight active page link ─────────────────── */
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[href], .dd-item[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.split('#')[0] === currentPath) {
        link.classList.add('active');
        // Also mark parent nav-link active
        const parentItem = link.closest('.nav-item');
        if (parentItem) {
          const parentLink = parentItem.querySelector(':scope > .nav-link');
          if (parentLink) parentLink.classList.add('active');
        }
      }
    });

  });
})();
