import React, { useState } from 'react';
import { Copy, Check, Palette, Code, ExternalLink, Sparkles, Layers } from 'lucide-react';

export const GHLBrandingHub: React.FC = () => {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedJS, setCopiedJS] = useState(false);

  const customCSS = `/* ==============================================================================
   🏛️ RJ BUSINESS SOLUTIONS — GOHIGHLEVEL AGENCY & SUBACCOUNT BRAND THEME
   Engineered for Rick Jefferson | RJ Business Solutions
   Colors: Navy (#0f172a) · Brand Blue (#2563eb) · Sky (#0ea5e9)
   Typography: Space Grotesk (Headings/Monospace) · Inter (Body)
   ============================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --rj-blue: #2563eb;
  --rj-sky: #0ea5e9;
  --rj-deep: #1e3a8a;
  --rj-navy: #0f172a;
  --rj-text: #0f172a;
  --font-head: "Space Grotesk", system-ui, -apple-system, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
  --grad-primary: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
}

/* Global Font Application */
body, .hl-app, .app-layout, #app {
  font-family: var(--font-body) !important;
  color: var(--rj-text);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6, .hl-title, .page-title, .card-title {
  font-family: var(--font-head) !important;
  letter-spacing: -0.02em;
}

/* Sidebar Styling */
#sidebar-v2, .sidebar-v2-container, .hl_wrapper--sidebar, .sidebar {
  background: var(--rj-navy) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}

#sidebar-v2 .nav-item a:hover, .sidebar-v2-container a:hover {
  background: rgba(255, 255, 255, 0.06) !important;
  color: #ffffff !important;
}

#sidebar-v2 .nav-item.active a, .sidebar-v2-container .active a {
  background: var(--grad-primary) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4) !important;
  font-weight: 600 !important;
}

/* Buttons & Primary CTAs */
.btn-primary, button.btn-primary, .hl-btn-primary, button[type="submit"]:not(.btn-secondary) {
  background: var(--grad-primary) !important;
  border: none !important;
  color: #ffffff !important;
  font-family: var(--font-head) !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.35) !important;
}

.btn-primary:hover, button.btn-primary:hover, .hl-btn-primary:hover {
  filter: brightness(1.1) !important;
  transform: translateY(-1px) !important;
}`;

  const customJS = `/**
 * 🏛️ RJ BUSINESS SOLUTIONS — GOHIGHLEVEL BRAND JAVASCRIPT
 * Dynamic Font Loader · Official Logo Replacement · Favicon Sync
 */

(function () {
  'use strict';
  const RJ_LOGO = 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg';

  function updateLogos() {
    const selectors = ['#sidebar-v2 .agency-logo img', '#sidebar-v2 .location-logo img', '.hl_wrapper--sidebar .logo img'];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((img) => {
        if (img && img.src !== RJ_LOGO) {
          img.src = RJ_LOGO;
          img.style.borderRadius = '8px';
          img.style.objectFit = 'cover';
        }
      });
    });
  }

  function init() {
    updateLogos();
    const observer = new MutationObserver(updateLogos);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`;

  const copyToClipboard = (text: string, type: 'css' | 'js') => {
    navigator.clipboard.writeText(text);
    if (type === 'css') {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } else {
      setCopiedJS(true);
      setTimeout(() => setCopiedJS(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Hero Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-dark-surface2 via-brand-navy to-brand-deep/30 border border-brand-sky/30 shadow-rj-dark">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-white">
              GoHighLevel Custom CSS & JavaScript Brand Kit
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 font-mono">
              Apply to GHL Agency Settings ➔ Company ➔ Custom CSS / Custom JS for all 4 subaccounts
            </p>
          </div>
        </div>
      </div>

      {/* 2-Column Code Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CSS Box */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-brand-sky" />
                <span className="font-heading font-bold text-white text-sm">GHL Custom CSS</span>
              </div>
              <button
                onClick={() => copyToClipboard(customCSS, 'css')}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-sky border border-brand-blue/30 text-xs font-mono transition-all"
              >
                {copiedCSS ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY CSS</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Paste in GHL Agency ➔ Settings ➔ Company ➔ Custom CSS
            </p>
          </div>

          <pre className="bg-dark-surface rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto border border-white/5 max-h-80 select-all">
            {customCSS}
          </pre>
        </div>

        {/* JS Box */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-brand-sky" />
                <span className="font-heading font-bold text-white text-sm">GHL Custom JavaScript</span>
              </div>
              <button
                onClick={() => copyToClipboard(customJS, 'js')}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-sky border border-brand-blue/30 text-xs font-mono transition-all"
              >
                {copiedJS ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY JS</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Paste in GHL Agency ➔ Settings ➔ Company ➔ Custom JS (or Funnel Global Body Tracking)
            </p>
          </div>

          <pre className="bg-dark-surface rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto border border-white/5 max-h-80 select-all">
            {customJS}
          </pre>
        </div>
      </div>
    </div>
  );
};
