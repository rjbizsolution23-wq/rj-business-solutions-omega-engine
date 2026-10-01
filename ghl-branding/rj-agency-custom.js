/**
 * 🏛️ RJ BUSINESS SOLUTIONS — GOHIGHLEVEL AGENCY & SUBACCOUNT BRAND JAVASCRIPT
 * Engineered for Rick Jefferson | RJ Business Solutions
 * Dynamic Font Loader · Logo Replacement · Favicon Sync · SPA Route Observer
 */

(function () {
  'use strict';

  const RJ_BRAND = {
    name: 'RJ Business Solutions',
    principal: 'Rick Jefferson',
    logoUrl: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    faviconUrl: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    website: 'https://rjbusinesssolutions.org',
    supportEmail: 'support@rjbusinesssolutions.org'
  };

  // 1. Inject Fonts (Space Grotesk & Inter)
  function injectGoogleFonts() {
    if (document.getElementById('rj-google-fonts')) return;
    const link = document.createElement('link');
    link.id = 'rj-google-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  // 2. Inject Favicon
  function injectFavicon() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = RJ_BRAND.faviconUrl;
  }

  // 3. Replace Sidebar & Header Logos with RJ Business Solutions Logo
  function updateLogos() {
    const logoSelectors = [
      '#sidebar-v2 .agency-logo img',
      '#sidebar-v2 .location-logo img',
      '.sidebar-v2-container img.logo',
      '.hl_wrapper--sidebar .logo img',
      '.hl_header .logo img',
      '.hl-navbar .navbar-brand img'
    ];

    logoSelectors.forEach((selector) => {
      const imgs = document.querySelectorAll(selector);
      imgs.forEach((img) => {
        if (img && img.src !== RJ_BRAND.logoUrl) {
          img.src = RJ_BRAND.logoUrl;
          img.style.borderRadius = '8px';
          img.style.objectFit = 'cover';
        }
      });
    });
  }

  // 4. Inject Bottom Agency Badge in Sidebar
  function injectSidebarBadge() {
    const sidebar = document.querySelector('#sidebar-v2, .sidebar-v2-container, .hl_wrapper--sidebar');
    if (sidebar && !document.getElementById('rj-sidebar-brand-badge')) {
      const badge = document.createElement('div');
      badge.id = 'rj-sidebar-brand-badge';
      badge.style.padding = '12px 16px';
      badge.style.margin = '16px 8px 8px 8px';
      badge.style.background = 'rgba(255, 255, 255, 0.04)';
      badge.style.border = '1px solid rgba(255, 255, 255, 0.08)';
      badge.style.borderRadius = '10px';
      badge.style.textAlign = 'center';
      badge.innerHTML = `
        <div style="font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;color:#0ea5e9;letter-spacing:0.08em;text-transform:uppercase;">
          RJ BUSINESS SOLUTIONS
        </div>
        <div style="font-family:'Inter',sans-serif;font-size:10px;color:#94a3b8;margin-top:2px;">
          Autonomous AI & Automation
        </div>
      `;
      sidebar.appendChild(badge);
    }
  }

  // 5. Initialize & Observe DOM Changes for GHL Single Page App navigation
  function init() {
    injectGoogleFonts();
    injectFavicon();
    updateLogos();
    injectSidebarBadge();

    // Observe SPA route changes
    const observer = new MutationObserver(() => {
      updateLogos();
      injectSidebarBadge();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
