/**
 * Rishvin Labs — Universal Navbar Injector
 * Inserts the mega-navbar into every page at runtime.
 *
 * Usage: include this script in <head> with defer,
 *        and ensure <nav id="main-navbar"></nav> exists in body.
 *
 * The active state is set automatically by navbar.js based on URL.
 */
(function () {
  'use strict';

  // Determine asset root relative to current page
  const getRoot = () => {
    // All pages are at root level, so assets/ is always relative
    return '';
  };

  const NAVBAR_HTML = /* html */`
<div class="container navbar-container">
  <!-- Logo -->
  <a href="index.html" class="navbar-logo" id="nav-logo">
    <img src="assets/images/logo/logo.png" alt="Rishvin Labs" class="logo-img" decoding="async">
    Rishvin <span>Labs</span>
  </a>

  <!-- Mobile Toggle -->
  <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation" aria-expanded="false">
    <i data-lucide="menu"></i>
  </button>

  <!-- Nav Links -->
  <div class="navbar-links" id="navbar-links" role="menubar">

    <!-- Home -->
    <div class="nav-item">
      <a href="index.html" class="nav-link" role="menuitem">Home</a>
    </div>

    <!-- Services (with dropdown) -->
    <div class="nav-item" data-dropdown>
      <a href="services.html" class="nav-link" role="menuitem" aria-haspopup="true">
        Services
        <svg class="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="2 4 6 8 10 4"/></svg>
      </a>
      <div class="nav-dropdown" role="menu">
        <a class="dd-item" href="services.html#web" role="menuitem">
          <div class="dd-icon"><i data-lucide="layout-template"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Web Development</div>
            <div class="dd-desc">Custom sites &amp; web apps</div>
          </div>
        </a>
        <a class="dd-item" href="services.html#saas" role="menuitem">
          <div class="dd-icon violet"><i data-lucide="package"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">SaaS Platforms</div>
            <div class="dd-desc">Full-stack SaaS systems</div>
          </div>
        </a>
        <a class="dd-item" href="services.html#iot" role="menuitem">
          <div class="dd-icon teal"><i data-lucide="cpu"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">IoT Solutions</div>
            <div class="dd-desc">Smart hardware &amp; firmware</div>
          </div>
        </a>
        <a class="dd-item" href="services.html#cyber" role="menuitem">
          <div class="dd-icon green"><i data-lucide="shield-check"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Cybersecurity</div>
            <div class="dd-desc">Audits &amp; secure architecture</div>
          </div>
        </a>
        <a class="dd-item" href="services.html#automation" role="menuitem">
          <div class="dd-icon gold"><i data-lucide="workflow"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Automation</div>
            <div class="dd-desc">Workflow &amp; process automation</div>
          </div>
        </a>
        <div class="dd-divider"></div>
        <a class="dd-item" href="contact.html" role="menuitem">
          <div class="dd-icon" style="background:rgba(37,99,235,0.12);"><i data-lucide="send"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Start a Project</div>
            <div class="dd-desc">Get a quote &rarr;</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Student Hub (Direct Premium Link) -->
    <div class="nav-item">
      <a href="students.html" class="nav-link" style="color: var(--accent-blue); font-weight: 600;" role="menuitem">
        Student Hub <span style="font-size: 0.85em;">✦</span>
      </a>
    </div>

    <!-- Portfolio -->
    <div class="nav-item">
      <a href="https://rishvinreddy.github.io" target="_blank" rel="noopener" class="nav-link" role="menuitem">Portfolio</a>
    </div>

    <!-- About (with dropdown) -->
    <div class="nav-item" data-dropdown>
      <a href="about.html" class="nav-link" role="menuitem" aria-haspopup="true">
        About
        <svg class="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="2 4 6 8 10 4"/></svg>
      </a>
      <div class="nav-dropdown" role="menu">
        <a class="dd-item" href="about.html" role="menuitem">
          <div class="dd-icon"><i data-lucide="building-2"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">About the Studio</div>
            <div class="dd-desc">Mission &amp; principles</div>
          </div>
        </a>
        <a class="dd-item" href="founder.html" role="menuitem">
          <div class="dd-icon violet"><i data-lucide="user-circle-2"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Founder Profile</div>
            <div class="dd-desc">Rishvin Reddy</div>
          </div>
        </a>
        <a class="dd-item" href="manifesto.html" role="menuitem">
          <div class="dd-icon teal"><i data-lucide="file-text"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Manifesto</div>
            <div class="dd-desc">Engineering philosophy</div>
          </div>
        </a>
        <a class="dd-item" href="labs.html" role="menuitem">
          <div class="dd-icon green"><i data-lucide="flask-conical"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Labs</div>
            <div class="dd-desc">Experiments &amp; research</div>
          </div>
        </a>
        <a class="dd-item" href="journal.html" role="menuitem">
          <div class="dd-icon gold"><i data-lucide="book-open"></i></div>
          <div class="dd-text-wrap">
            <div class="dd-title">Journal</div>
            <div class="dd-desc">Engineering insights</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Contact -->
    <div class="nav-item">
      <a href="contact.html" class="nav-link" role="menuitem">Contact</a>
    </div>

  </div><!-- /navbar-links -->

  <!-- CTA -->
  <div class="navbar-cta">
    <a href="contact.html" class="btn btn-primary">
      Start a Project <span class="btn-arrow">&rarr;</span>
    </a>
  </div>

</div><!-- /navbar-container -->
`;

  // Inject on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-navbar');
    if (nav && !nav.querySelector('.navbar-container')) {
      nav.innerHTML = NAVBAR_HTML;
      // Re-init Lucide icons for the injected HTML
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  });

})();
