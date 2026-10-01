# Handoff · RJ Business Solutions Brand Universe

**Complete brand operating system, product design mockups, and blog editorial system for RJ Business Solutions — Rick Jefferson's credit-technology and business-automation platform.**

---

## Overview

RJ Business Solutions is Rick Jefferson's credit-technology + business-automation company. This handoff package contains the complete brand ecosystem — 170+ high-fidelity HTML design references across 29 numbered sections: product screens for the Credit Intelligence Platform (CIP), CRM system, admin console, marketing site, mobile app, 20 authored blog articles, and a comprehensive AI agent knowledge base.

**Primary deliverable:** a real production codebase (Genspark Code, Next.js, or similar) that implements the CIP consumer product, the operator admin console, the marketing site, the blog, and the CRM — all wired together, all inheriting the same brand contract.

**Author:** Rick Jefferson · Credit Technology Architect · Founder
**Company:** RJ Business Solutions · Tijeras, NM · founded 2023
**Website:** https://rjbusinesssolutions.org
**Support:** support@rjbusinesssolutions.org

---

## About the Design Files

**Everything in this bundle is a high-fidelity HTML design reference — not production code to ship directly.** The HTML files were authored as visual prototypes showing the intended pixel-level look, typography, color system, and interaction patterns. They are **the source of truth for design intent**.

**The developer's task:** recreate these designs in the target codebase's existing environment (React / Next.js / Vue / SwiftUI / Flutter — whatever matches the deploy target) using its established libraries and component patterns.

**If no environment exists yet:** Next.js 15+ with the App Router, TypeScript, and Tailwind CSS is the recommended starting stack — it matches the design's typography-heavy editorial voice, ships fast to Vercel/Cloudflare, and supports the JSON-LD schema already embedded in the blog articles.

**Do not ship the raw HTML.** Extract the design tokens, translate the components to your framework's idioms, and wire the interactivity properly.

---

## Fidelity

**High-fidelity (hifi).** Every asset is pixel-perfect with:
- Final production colors (blue-family palette locked to specific hex values)
- Real typography (Space Grotesk headings · Inter body)
- Exact spacing, radius, shadow, and motion token values
- Complete copy (all article bodies, CTAs, alerts, labels are production-ready)
- Real Rick Jefferson photography (6 approved photos, cycle-through system)
- SEO metadata (title, description, OG image, JSON-LD schema)

Developers should reproduce the visual language pixel-perfectly using their framework's component library.

---

## The Complete System · 29 Sections

The library is organized into numbered sections. Every section has 1+ HTML files serving a specific purpose. All files reference the shared `brand.css` for design tokens.

### Foundation (00, 60)

**00 · Brand System** — Core brand assets
- `Brand Kit.html` · master brand doc
- `Governance Manual.html` · 7-section constitution · approval matrix · quality gate · deprecation protocol
- `Component Library.html` · live-rendered reference of every UI primitive
- `AI Style Guide.html` · positive + negative prompts · anti-generic test · 6 style pillars
- `Campaign System.html` · unified launch framework · message architecture · 8-channel matrix
- `Asset Pack.html` · index of all assets

**60 · Registry** — Machine-readable manifests
- `tokens.json` · W3C design token format
- `tokens.css` · CSS custom properties (import first)
- `Brand Universe Coverage.html` · master audit dashboard
- `Audit Report v25.html` · latest audit
- `manifest.json` (at repo root) · full asset registry

### Rick's Photography (01)

**01 · Photos of Rick** — 6 approved production photos
- `rick-hero.jpg` · full-width hero shots
- `rick-portrait.jpg` · author bylines · headshots
- `rick-vision.jpg` · LinkedIn banners · forward-looking
- `rick-vault.jpg` · systems-builder · credit/tech content
- `rick-signing.jpg` · deal-closing · sales content
- `rick-circuit.jpg` · AI/tech portraits

### Physical + Print (02, 10)

**02 · Stationery & Print** — Letterhead, business cards, invoice, envelope, folder
**10 · Physical & Merch** — Apparel mockups, packaging, event booth, trade show display, sticker sheet, gift card, referral card, holiday cards

### Communications (03, 04, 09)

**03 · Email** — Email header, newsletter, drip sequence, signature, transactional family (6 template types)
**04 · Social** — LinkedIn Kit, IG feed + story series, X/TikTok kit, YouTube/podcast kit, avatars, backgrounds
**09 · Video & Podcast** — Thumbnails, lower thirds, intro/outro cards, testimonial overlays

### Sales & Legal (05, 06)

**05 · Sales Decks & Docs** — Pitch deck, sales deck, one-pager, proposal, case study, rate card, quote/estimate, testimonial cards
**06 · Legal & Contracts** — Contract cover, NDA, contract addendums, operating agreement, term sheet, vesting

### Marketing + Public (07, 08, 19)

**07 · Product & Web** — Landing page, marketing site, Meet Rick, dashboard mockup, feature launch, holiday cards, growth playbook
**08 · Ads & Paid Media** — Ad creatives (Meta, LinkedIn, retargeting variants)
**19 · Public Pages** — Trust Center, Roadmap, Status Page

### The Credit Intelligence Platform · flagship product (11, 12, 16, 17, 18)

**11 · Credit Technology** — **21 flagship CIP screens**:
- Credit Command Center (signature home · Health Index + 3-bureau strip + priority actions)
- Change Explainer · what moved my score
- Scenario Lab · multi-variable projection tool
- Identity Watch · monitoring center
- Reporting Calendar · statement close timing
- Bureau Diff Engine · 3-file diff analysis
- Action Center · prioritized recommendations
- Dispute Workspace · dispute preparation + evidence vault
- CIP Onboarding · signup flow
- Learning Center · educational content hub
- Credit Analysis · deep-dive dashboard
- Score Simulator · what-if projections
- Utilization Optimizer
- Tradeline Manager
- Credit Timeline
- Bureau Comparison
- Client Progress Report
- Icon System · 60+ SVG icons
- Credit Report template
- Dispute Letter template
- Credit Suite Hub · master hub

**12 · Client Ops** — Welcome Kit, Client Onboarding
**16 · Mobile & Client Portal** — Mobile CIP, Mobile Client App, API Backend Spec
**17 · Admin Console** — Operator surfaces:
- Admin Dashboard, Client Roster, Revenue Analytics
- CIP Admin (operator home)
- CIP Provider Health (monitoring)
- CIP Support Workspace (masked PII by default)
- AI Agent Console
- Partner Portal
**18 · Compliance** — Compliance Toolkit (regulatory posture doc)

### Investor + Corporate (13, 15)

**13 · Investor & Corporate** — Cap table, valuation summary, pitch deck, financial model, term sheet, vesting, operating agreement, investor one-pager, annual report, whitepaper, media kit, corporate one-pager
**15 · Engineering Blueprints** — Cloudflare Backend spec, API Spec, Foundry Blueprint

### Forms (14)

**14 · Forms & Intake** — 9 intake forms:
- Forms Hub · master index
- Credit Qualify · multi-step credit form
- Business Funding Qualify
- Universal Lead Funnel
- Service Intake
- Growth Engine Audit
- White-Label Fleet Application
- Partnership / Affiliate Application
- Podcast Guest / Media Request

### CRM (20)

**20 · CRM** — Full CRM stack:
- CRM Contact 360 · the 360° customer view
- CRM Pipeline · 5-stage kanban with weighted forecast
- CRM Workflow Builder · visual automation editor
- CRM Deal Detail · per-deal 360

### Content (22) — Blog editorial system · 20 articles

**22 · Content** — Full blog with 20 authored articles by Rick Jefferson:
- `Blog Hub.html` · landing with search + category filters + featured hero
- `blog.css` · shared blog styles
- `Content System.html` · article template reference
- 20 articles (see full list below in **Blog Content** section)

### Business Systems (25, 27, 28, 32, 35)

**25 · Analytics** — Executive Analytics dashboard (MRR · funnel · cohort · segments · forecast)
**27 · Billing** — Billing Dashboard (finance operations · invoices · payouts · reconciliation)
**28 · Support** — Support Help Center (public help · search · 8 categories · contact channels)
**32 · Notifications** — Notifications System (toasts · center · preferences · quiet hours · 5-priority scale)
**35 · Auth** — Auth System (sign in · sign up · MFA · passkey · 8 session states)

### Design System Additions (45, 48)

**45 · Motion & States** — Motion tokens (duration + easing) · micro-interactions · 12 canonical system states
**48 · Data Viz** — Chart primitives · series palette · KPI cards · line/area/bar/funnel/donut/cohort/sparklines + 6 chart rules

---

## Blog Content · 20 Articles by Rick Jefferson

All articles are **8-10 minute reads (~1,600 words each)** with full SEO metadata (meta title/description, OG image, JSON-LD Article schema, keywords) and Rick's byline photo. Every article cycles through the 6 approved Rick photos.

### Credit Intelligence · 8 articles

1. `Article 01 - utilization-reset.html` — The utilization playbook that beats a $2,000 payment on the wrong day
2. `Article 02 - 6-fico-factors.html` — The 6 factors that actually move your FICO score
3. `Article 03 - dispute-timeline.html` — How long does a credit dispute actually take?
4. `Article 04 - collections-decision.html` — Collections on your credit report: pay, settle, dispute, or wait?
5. `Article 05 - fcra-rights.html` — Your rights under the FCRA, translated into plain English
6. `Article 06 - identity-monitoring.html` — Identity monitoring beyond credit: what actually works vs security theater
7. `Article 07 - authorized-user-tradelines.html` — Authorized user tradelines: the legal, powerful, misunderstood credit lever
8. `Article 08 - credit-freezes-vs-locks.html` — Credit freezes vs locks vs fraud alerts

### Business Growth · 8 articles

9. `Article 09 - automation-before-scale.html` — Automation before scale
10. `Article 10 - dm-automation-followup.html` — Your DMs are your CRM. Your CRM is broken.
11. `Article 11 - ai-agent-strategy.html` — AI agents aren't magic — they're really disciplined interns
12. `Article 12 - white-label-fintech.html` — White-label fintech: the operator's guide to launching without building
13. `Article 13 - lead-follow-up-systems.html` — The lead follow-up system that turns 40% of ghosts into bookings
14. `Article 14 - funnels-vs-content.html` — Funnels vs content: the false choice every founder keeps making
15. `Article 15 - client-portal-retention.html` — Client portals are retention tools, not delivery tools
16. `Article 16 - stripe-subscription-ops.html` — Stripe subscription ops: the checklist most SaaS businesses skip

### Homebuyer Readiness · 4 articles

17. `Article 17 - mortgage-readiness-plan.html` — The 12-month mortgage readiness plan (start at 620, target 740)
18. `Article 18 - dti-and-mortgage.html` — DTI matters more than your credit score for mortgage approval
19. `Article 19 - pre-approval-timing.html` — When to get pre-approved (not 6 months out, not the week you're shopping)
20. `Article 20 - post-close-credit.html` — What happens to your credit after you close on a house

---

## Design Tokens · The Complete Contract

All values are locked. Never invent new colors/fonts. Reference tokens by variable name.

### Colors

```css
/* Primary brand */
--rj-blue:   #2563eb;   /* Primary · CTAs · accents · anchor */
--rj-sky:    #0ea5e9;   /* Secondary · gradient partner */
--rj-deep:   #1e3a8a;   /* Deep authority · dark hero */
--rj-navy:   #0f172a;   /* Navy · dark surfaces + primary text */

/* Neutrals */
--rj-white:  #ffffff;
--rj-soft:   #f8fafc;   /* Body background */
--rj-light:  #eff6ff;   /* Section bg · pill fills */
--rj-border: #bfdbfe;   /* Blue-tinted borders */
--rj-muted:  #dbeafe;   /* Muted blue fills */
--rj-line:   #e2e8f0;   /* Neutral hairlines */

/* Text */
--rj-text:        #0f172a;
--rj-muted-text:  #475569;
--rj-subtle-text: #94a3b8;
--rj-inverse:     #ffffff;

/* Semantic */
--rj-success:    #10b981;   --rj-success-bg: #dcfce7;
--rj-warning:    #f59e0b;   --rj-warning-bg: #fef3c7;
--rj-danger:     #ef4444;   --rj-danger-bg:  #fee2e2;
--rj-info:       #0ea5e9;   --rj-info-bg:    #e0f2fe;

/* Dark app surfaces */
--rj-dark-surface:   #0b1220;
--rj-dark-surface-2: #0f172a;
--rj-dark-border:    rgba(255,255,255,0.06);
--rj-dark-text:      #e2e8f0;

/* Data viz series (blue-family only, never rainbow) */
--rj-series-1: #2563eb;
--rj-series-2: #0ea5e9;
--rj-series-3: #1e3a8a;
--rj-series-4: #60a5fa;
--rj-series-5: #0891b2;
--rj-series-6: #0369a1;
```

**Approved gradients (only these):**
```css
--grad-primary: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
--grad-dark:    linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%);
--grad-light:   linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
--grad-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

**Never use:** rainbow, purple, magenta, orange, neon, cyberpunk color combinations.

### Typography

```css
--font-head: "Space Grotesk", system-ui, sans-serif;      /* Headings, display */
--font-body: "Inter", system-ui, sans-serif;              /* All body copy */
--font-mono: "Space Grotesk", ui-monospace, monospace;    /* Micro-labels, eyebrows */
--font-code: ui-monospace, "SF Mono", Menlo, monospace;   /* Actual code blocks */
```

**Load fonts via Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Scale:**
```
--fs-xs   11px   ·   --fs-sm  12px   ·   --fs-base 14px  ·   --fs-md   15px
--fs-lg   17px   ·   --fs-xl  20px   ·   --fs-2xl  26px  ·   --fs-3xl  32px
--fs-4xl  44px   ·   --fs-5xl 56px   ·   --fs-6xl  72px  ·   --fs-hero 112px
```

**Weights:** 400 (regular) · 500 (medium) · 600 (semibold) · 700 (bold)

**Letter-spacing:** headings use `-0.02em` to `-0.03em`. Body: `0`. Micro-labels (mono uppercase): `0.14em`.

### Spacing Scale

```
--sp-1 4px · --sp-2 8px · --sp-3 12px · --sp-4 16px · --sp-5 20px · --sp-6 24px
--sp-8 32px · --sp-10 40px · --sp-12 48px · --sp-16 64px · --sp-20 80px · --sp-24 96px
```

### Border Radius

```
--r-sm 4px · --r-md 8px · --r-lg 12px · --r-xl 16px · --r-2xl 20px · --r-3xl 24px · --r-full 9999px
```

### Shadows

```css
--sh-sm:   0 2px 4px rgba(15,23,42,0.06);
--sh-md:   0 6px 14px rgba(15,23,42,0.08);
--sh-lg:   0 15px 30px rgba(15,23,42,0.12);
--sh-xl:   0 25px 50px rgba(15,23,42,0.18);
--sh-blue: 0 8px 18px rgba(37,99,235,0.35);   /* CTA glow */
--sh-sky:  0 8px 18px rgba(14,165,233,0.30);
```

### Motion

```css
--dur-fast:    150ms;   /* Micro-interactions */
--dur-base:    200ms;   /* Default */
--dur-slow:    300ms;   /* Deliberate transitions */
--dur-slower:  500ms;   /* Reveals */

--ease-std:    cubic-bezier(0.4, 0, 0.2, 1);      /* Default */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* Entrances */
--ease-in:     cubic-bezier(0.7, 0, 0.84, 0);     /* Exits */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Delight */
```

**Rule:** When in doubt, `--dur-base` with `--ease-std`. Always respect `prefers-reduced-motion`.

### Breakpoints

```
sm  375px · md  640px · lg  1024px · xl  1280px · 2xl 1440px
```

### Z-index

```
--z-base 0 · --z-sticky 100 · --z-banner 200 · --z-overlay 400 · --z-modal 500 · --z-toast 600 · --z-tooltip 700
```

**Complete machine-readable tokens:** see `tokens.json` (W3C format) and `tokens.css` in this handoff folder.

---

## Voice Guide · Every Word Matters

Every piece of copy passes through this filter:

**The 6 Voice Traits:**
1. **Direct** — No hedging. Say the thing. Cut every filler word.
2. **Premium but practical** — Confidence without arrogance. Never luxury-fake, never hustle-culture.
3. **Founder-led** — Rick is real. Write as if he's saying it.
4. **Compliance-native** — Every credit estimate labeled "est." Never guarantee outcomes.
5. **Systems-thinking** — Infrastructure not hacks. Framework not tricks.
6. **Anti-generic** — If it could belong to any SaaS, rewrite.

**Signature phrases (approved, reusable):**
- "We do not sell templates. We build systems."
- "Your leads should not disappear in DMs."
- "Growth is not more noise. Growth is better infrastructure."
- "If your business depends on follow-up, your follow-up cannot depend on memory."
- "Automation only works when the strategy is clean."
- "Timing beats magnitude."

**Never use:** "unlock", "supercharge", "revolutionary", "game-changing", "next-level", "synergy", "crushing it".

**Complete voice specification:** see `rj-agent-system/02-voice-guide.md` in the agent system folder.

---

## Compliance Guardrails · Non-negotiable

Every credit-related output must comply with:

### FCRA (Fair Credit Reporting Act)
- Never encourage disputing accurate information
- Never claim to remove accurate items
- Never guarantee dispute outcomes
- Always reference §611 for consumer rights and §611(a)(7) for method of verification

### CROA (Credit Repair Organizations Act)
- Must provide 3-day right-to-cancel notice at signup
- Must have written contract before performing services
- Cannot accept payment before services rendered
- Never guarantee specific score point increases
- Never claim to establish "new credit identity"

### TCPA (SMS + calls)
- Documented double-opt-in consent required
- Every SMS includes STOP-to-cancel instruction
- Honor STOP requests within 10 days
- No marketing SMS between 9pm–8am local time

### GLBA (Privacy)
- Encrypt data at rest (AES-256) and in transit (TLS 1.3)
- PII masked by default in operator interfaces
- Unmasking requires elevated session + logged reason
- Privacy notice at account opening

**Approved compliance language:**
- "Estimated" · "typically" · "in our observation" · "in client-observed data"
- "Items you have genuine reason to believe are inaccurate"
- "Framework we use with mortgage-track clients"
- "Educational estimate only · never guaranteed"

**Complete compliance rules:** see `rj-agent-system/05-compliance-rules.md`.

---

## Component Recipes · Reusable UI Patterns

The complete component library — buttons, cards, alerts, badges, chips, tabs, avatars, progress bars, tables — is documented in `rj-agent-system/04-component-recipes.md` with exact HTML + CSS for each.

Live rendered reference: `RJ Complete Brand Library/00 · Brand System/Component Library.html`

### Primary CTA

```html
<a href="#" class="btn-primary">Take Action →</a>

<style>
.btn-primary {
  padding: 12px 22px;
  background: linear-gradient(135deg, var(--rj-blue), var(--rj-sky));
  color: #fff;
  border-radius: 10px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.01em;
  box-shadow: 0 8px 18px rgba(37,99,235,0.35);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover { transform: translateY(-2px); }
</style>
```

### KPI Stat Card

```html
<div class="stat-card">
  <div class="k">Monthly recurring revenue</div>
  <div class="v">$147K</div>
  <div class="d">▲ +12.4% MoM</div>
</div>
```

### Nav bar, hero, footer, alerts, badges, callouts, cards — all documented in `04-component-recipes.md`

---

## Interactions & Behavior

### Common patterns to implement

**Score change animation** (CIP screens)
- Score number counts up/down with easing over 800ms
- Change delta pulses briefly with spring easing
- Bureau strip refreshes with sequential fade-in per bureau (200ms stagger)

**Filter tabs (Blog Hub, dashboards)**
- Active tab uses `--grad-primary` background
- Clicking non-active tab filters visible cards
- Search input filters cards live as user types
- Empty state message when no matches

**Progress bar / journey display**
- Fill animates with `--ease-out` over 700ms on page load
- Percentage number counts up simultaneously

**Toast notifications**
- Slide in from bottom-right over 500ms with `--ease-out`
- Auto-dismiss after 4s (persistent for security/danger)
- Fade out with `--ease-in` over 200ms

**Modal / drawer**
- Backdrop fades in over 200ms
- Content slides + scales in over 300ms with `--ease-spring`
- ESC key closes
- Click-outside closes

**Reduced motion**
- All animations respect `prefers-reduced-motion: reduce`
- Fall back to instant transitions

Full motion specification: `RJ Complete Brand Library/45 · Motion & States/Motion & System States.html`

---

## State Management

Every major surface needs state for:

### CIP Consumer Screens
- Current credit score (per bureau + composite Health Index)
- Score history (timeline of changes)
- Active disputes (round + status + due dates)
- Monitoring alerts (unread count, dismissed state)
- Goals (mortgage readiness target, progress)
- Notifications (unread count, category filters)

### Operator Admin Screens
- Session elevation state (masked PII vs unmasked · elevation reason logged)
- Client roster (search, filter by tier/status)
- Team member workload
- Provider health status (per bureau API)

### CRM
- Contact records
- Deal pipeline (stage, weighted probability)
- Workflow execution state (running/paused/blocked)
- Activity timeline

### Blog
- Article read state
- Category filter
- Search query
- Reading progress bar (scroll position)

---

## SEO & Metadata

Every public page includes:

```html
<meta name="description" content="[140-160 chars]"/>
<meta property="og:type" content="website|article"/>
<meta property="og:site_name" content="RJ Business Solutions"/>
<meta property="og:title" content="..."/>
<meta property="og:description" content="..."/>
<meta property="og:url" content="https://rjbusinesssolutions.org/[slug]"/>
<meta property="og:image" content="[logo URL]"/>
<meta name="twitter:card" content="summary_large_image"/>
<link rel="canonical" href="https://rjbusinesssolutions.org/[slug]"/>
```

Every blog article also includes JSON-LD `Article` schema with author (Rick Jefferson), publisher (RJ Business Solutions), and dates. See `Article 01 - utilization-reset.html` for exact schema shape.

---

## Assets

### Photography (6 approved photos of Rick Jefferson)

**Source URL:** https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg (logo)

Rick's 6 photos are included in this handoff folder under `photos/`:
- `rick-hero.jpg` — full-width hero shot
- `rick-portrait.jpg` — headshot for bylines
- `rick-vision.jpg` — LinkedIn banner style
- `rick-vault.jpg` — systems-builder
- `rick-signing.jpg` — deal-closing
- `rick-circuit.jpg` — AI/tech portrait

**Rule:** Rotate photos across content. Never regenerate Rick with AI when a real photo works.

### Logo

RJ Business Solutions logo URL (production-ready):
```
https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg
```

### Icon system

`icons.svg` — 60+ SVG symbol definitions. Reference via `<svg><use href="/icons.svg#ic-name"/></svg>`. Sourced in this handoff folder.

---

## Recommended Implementation Stack

**Recommended primary stack:**
- **Next.js 15** with App Router + TypeScript
- **Tailwind CSS 4** with the design tokens loaded as CSS custom properties (import `tokens.css`)
- **shadcn/ui** as the component base (customize with RJ tokens)
- **Vercel** or **Cloudflare Pages** for deployment
- **Supabase** for auth + database (matches the RJ product architecture)
- **Stripe** for subscriptions (see Article 16 for the ops checklist)
- **Framer Motion** for animations respecting motion tokens

**Alternative stacks that work:**
- Astro (excellent for the blog · zero-JS by default)
- Remix (server-first · great for CIP screens)
- SvelteKit (if the team prefers Svelte)

**Do NOT use:** static site generators without a componentized front-end. The design needs a real component system.

---

## Implementation Roadmap · Recommended Order

1. **Design system setup**
   - Import `tokens.css` + `tokens.json` into your project
   - Configure Tailwind (or CSS-in-JS) to consume tokens
   - Load Google Fonts (Space Grotesk + Inter)
   - Build the base component library (buttons, cards, badges, inputs, etc.) matching `Component Library.html`

2. **Marketing site + blog** (fastest to deploy · lowest risk)
   - Marketing home + About Rick + Contact
   - Blog Hub + 20 article pages (data-driven from `blog-data.json` and body JSON files)
   - Support Help Center
   - Trust Center + Roadmap + Status Page

3. **Consumer product · CIP**
   - Auth (sign in/up · MFA · passkey · 8 session states)
   - Onboarding flow (CIP Onboarding)
   - Credit Command Center (signature home)
   - Change Explainer
   - Bureau Diff Engine
   - Action Center
   - Dispute Workspace
   - Identity Watch
   - Reporting Calendar
   - Scenario Lab
   - Learning Center

4. **Mobile · CIP**
   - Mobile Client Home
   - Mobile Score view
   - Mobile Disputes
   - Mobile Upload Center
   - Mobile Chat

5. **Operator · Admin console**
   - Admin Dashboard · masked-by-default views
   - Client Roster
   - Revenue Analytics
   - CIP Admin
   - CIP Provider Health
   - CIP Support Workspace
   - AI Agent Console

6. **CRM**
   - Contact 360
   - Pipeline
   - Deal Detail
   - Workflow Builder

7. **Business systems**
   - Billing Dashboard
   - Notifications System
   - Executive Analytics

---

## Files in This Handoff

Files included in `design_handoff_rj_brand_universe/`:

```
design_handoff_rj_brand_universe/
├── README.md                       ← You are here
├── brand.css                       ← Shared design tokens (import into project)
├── tokens.json                     ← W3C machine-readable tokens
├── tokens.css                      ← CSS custom properties
├── icons.svg                       ← 60+ SVG icon symbols
├── manifest.json                   ← Full asset registry (170 entries)
├── RJ-MASTER.md                    ← Complete brand contract (11-section)
├── RJ-QUICKSTART.md                ← 30-second brand summary
├── agent-system/                   ← 11 knowledge files for AI agents
│   ├── README.md
│   ├── 00-brand-facts.md
│   ├── 01-brand-tokens.md
│   ├── 02-voice-guide.md
│   ├── 03-html-scaffold.md
│   ├── 04-component-recipes.md
│   ├── 05-compliance-rules.md
│   ├── 06-asset-index.md
│   ├── 07-prompt-library.md
│   ├── 08-quality-gate.md
│   ├── 09-example-outputs.md
│   ├── 10-build-protocol.md
│   └── agent-config.json
├── design-references/              ← Flagship HTML mockups (start here)
│   ├── Blog Hub.html
│   ├── Article 01 - utilization-reset.html         (blog example)
│   ├── Credit Command Center.html                   (CIP signature home)
│   ├── Bureau Diff Engine.html                       (CIP flagship)
│   ├── CRM Contact 360.html
│   ├── CRM Pipeline.html
│   ├── Executive Analytics.html
│   ├── Marketing Site.html
│   ├── Component Library.html                        (live component reference)
│   ├── Motion & System States.html
│   ├── Data Viz Library.html
│   ├── Notifications System.html
│   ├── Auth System.html
│   ├── AI Style Guide.html
│   ├── Governance Manual.html
│   ├── Mobile Client App.html
│   ├── CIP Admin.html
│   └── blog.css                                       (shared blog styles)
└── photos/                          ← 6 approved Rick Jefferson photos
    ├── rick-hero.jpg
    ├── rick-portrait.jpg
    ├── rick-vision.jpg
    ├── rick-vault.jpg
    ├── rick-signing.jpg
    └── rick-circuit.jpg
```

### Referencing the full library

The **complete 170-asset library** lives at `RJ Complete Brand Library/` in the source project. This handoff includes the **flagship anchors** — one representative file per major section. For any screen not in `design-references/`, refer to the full library folder in the source project.

---

## Development Notes & Gotchas

1. **File naming:** Design uses `·` and `&` in filenames for the library organization. **In your codebase, use kebab-case** (`credit-command-center.tsx` not `Credit Command Center.tsx`). The `·` character is decorative for the library index only.

2. **Section numbers (00 · Brand System, 22 · Content, etc.)** are library-organization only. Don't reproduce these in URL routing. Use semantic slugs.

3. **The blog articles are the highest-priority content asset.** SEO metadata is complete. JSON-LD schema is embedded. Ship them first — they build organic authority for Rick.

4. **All images and photos must have `alt` text.** Rick's photos: `alt="Rick Jefferson · Credit Technology Architect · RJ Business Solutions"`.

5. **Never hardcode hex values.** Every color reference must go through the token system. Use CSS custom properties or your framework's theming.

6. **Reduced motion:** Every animation must have a `prefers-reduced-motion: reduce` fallback. This is non-negotiable per the Accessibility criterion in the Quality Gate.

7. **Contrast:** WCAG 2.1 AA required · 4.5:1 for body text, 3:1 for large/UI.

8. **Governance:** Every change follows the approval matrix in `RJ-MASTER.md` Section 3.

---

## Contact & Handoff Ownership

**Design owner:** Rick Jefferson
**Company:** RJ Business Solutions
**Location:** 1342 NM 333, Tijeras, New Mexico 87059
**Support:** support@rjbusinesssolutions.org
**LinkedIn:** https://www.linkedin.com/in/rick-jefferson-314998235

**For questions during implementation:** reference the AI agent system (`agent-system/`) first — every rule, spec, and pattern is documented there. If a question isn't answered by those 11 files, escalate to Rick directly.

---

## Success Criteria

Implementation is complete when:

- ✅ All 20 blog articles are live, SEO-indexed, and match design pixel-perfectly
- ✅ CIP consumer surfaces (Command Center, Change Explainer, Bureau Diff, Action Center, Dispute Workspace) are functional
- ✅ Admin/operator surfaces (Admin Dashboard, Client Roster, Provider Health, Support Workspace) are functional with masked-PII by default
- ✅ Auth flows (sign in · sign up · MFA · recovery) support 8 session states with full accessibility
- ✅ Design tokens flow through every component — zero hardcoded hex values
- ✅ WCAG 2.1 AA compliance across all surfaces
- ✅ Reduced-motion respected everywhere
- ✅ Every credit-related output passes the compliance rules in `05-compliance-rules.md`
- ✅ Every deployed asset passes the 10-point Quality Gate in `08-quality-gate.md`

**Then the RJ Brand Universe is live.**
