/**
 * 🍸 TASTY LICKA™ — GOHIGHLEVEL SUBACCOUNT BRAND JAVASCRIPT
 * Founder & CEO: Angel Lewis · https://tastylicka.com/
 * Font Loader · Favicon Sync · TABC Badge Injector · SPA Route Observer
 */
(function () {
  'use strict';

  const TASTY_BRAND = {
    name: 'Tasty Licka™ Catering & Mobile Bar',
    founder: 'Angel Lewis',
    website: 'https://tastylicka.com/',
    phone: '(469) 555-5425',
    email: 'events@tastylicka.com',
    tabcPermit: 'Permit #TX-8829104'
  };

  // 1. Inject Fonts
  function injectFonts() {
    if (document.getElementById('tl-google-fonts')) return;
    const link = document.createElement('link');
    link.id = 'tl-google-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap';
    document.head.appendChild(link);
  }

  // 2. Inject Sidebar Angel Lewis & TABC Badge
  function injectSidebarBadge() {
    const sidebar = document.querySelector('#sidebar-v2, .sidebar-v2-container, .hl_wrapper--sidebar');
    if (sidebar && !document.getElementById('tl-sidebar-brand-badge')) {
      const badge = document.createElement('div');
      badge.id = 'tl-sidebar-brand-badge';
      badge.style.padding = '12px 14px';
      badge.style.margin = '16px 8px 8px 8px';
      badge.style.background = 'linear-gradient(135deg, rgba(198, 156, 61, 0.15) 0%, rgba(26, 11, 16, 0.4) 100%)';
      badge.style.border = '1px solid rgba(198, 156, 61, 0.3)';
      badge.style.borderRadius = '10px';
      badge.style.textAlign = 'center';
      badge.innerHTML = `
        <div style="font-family:'Chakra Petch',sans-serif;font-size:11px;font-weight:700;color:#C69C3D;letter-spacing:0.06em;text-transform:uppercase;">
          🍸 TASTY LICKA™
        </div>
        <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:10px;color:#ffffff;margin-top:2px;">
          By Angel Lewis · DFW
        </div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#e8d5a7;margin-top:4px;padding:2px 6px;background:rgba(0,0,0,0.3);border-radius:4px;display:inline-block;">
          100% TABC CERTIFIED
        </div>
      `;
      sidebar.appendChild(badge);
    }
  }

  function init() {
    injectFonts();
    injectSidebarBadge();

    const observer = new MutationObserver(() => {
      injectSidebarBadge();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
