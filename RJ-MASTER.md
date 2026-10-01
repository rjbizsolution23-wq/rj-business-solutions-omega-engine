# RJ BUSINESS SOLUTIONS · MASTER AGENT FILE

**The single source of truth. Any AI agent reading this file has enough context to build any RJ asset from zero, in-brand, on-voice, governance-compliant.**

> Version: `v25.0` · Wave: `P3 Systems Maturity + Content System`
> Owner: Rick Jefferson · Founder + Credit Technology Architect
> Updated: 2026-09-07
> Governed by: `RJ Complete Brand Library/00 · Brand System/Governance Manual.html`

---

## 0. HOW TO USE THIS FILE

You are an AI agent tasked with building anything for RJ Business Solutions. Read this file **first, always**, before touching any output. Every rule below is authoritative. When conflicts arise, higher-numbered sections override lower ones.

**Quick-start abbreviated version:** `RJ-QUICKSTART.md` — read that if this file is too long for your context window.

**Rule of law hierarchy:**
1. This file (RJ-MASTER.md) — authoritative brand contract
2. `tokens.json` / `tokens.css` — machine-readable brand values
3. `Governance Manual.html` — approval + versioning + quality gate
4. `AI Style Guide.html` — generation rules for visual assets
5. `Component Library.html` — canonical component reference
6. `manifest.json` — full asset registry with owners + dependencies

---

## 1. COMPANY IDENTITY

### 1.1 Basic Facts

| Field | Value |
|---|---|
| Legal name | RJ Business Solutions |
| Founder | Rick Jefferson |
| Founded | 2023 |
| Address | 1342 NM 333, Tijeras, New Mexico 87059 |
| Website | https://rjbusinesssolutions.org |
| Support email | support@rjbusinesssolutions.org |
| Rick's LinkedIn | https://www.linkedin.com/in/rick-jefferson-314998235 |
| TikTok | https://www.tiktok.com/@rick_jeff_solution |
| Twitter/X | https://twitter.com/ricksolutions1 |
| Logo URL | https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg |
| GitHub org | rjbizsolution23-wq |

### 1.2 Positioning

**One-liner:** AI-powered systems, automation, and growth infrastructure for businesses ready to scale.

**Longer:** RJ Business Solutions builds AI-powered business systems, automation infrastructure, credit technology, social media workflows, DM automation, lead follow-up systems, and conversion-focused digital platforms for service businesses, credit companies, fintech brands, and growth-focused operators.

**What we don't do:** We don't sell templates. We don't do MVPs. We don't ship half-finished builds. We don't guarantee credit score outcomes (compliance-critical). We don't recreate copyrighted UI patterns without authorization.

### 1.3 Rick Jefferson · The Person

**Public role:** Credit Technology Architect · Building AI-Powered Credit Repair Systems, APIs & Automation for FinTech · CEO @ RJ Business Solutions

**Short bio:**
Rick Jefferson is a credit technology architect, AI systems builder, and business automation strategist. As the founder of Rick Jefferson Solutions and operator behind RJ Business Solutions, he builds AI-powered platforms, credit repair systems, automation workflows, client portals, payment infrastructure, and growth engines for credit, fintech, and service-based businesses.

**Medium bio (blog byline · about page):**
Rick Jefferson is a credit technology architect, AI and fintech systems builder, and business automation strategist. He operates at the intersection of credit expertise, enterprise software, and practical growth execution.

Through RJ Business Solutions, Rick builds AI-powered business systems, automation infrastructure, credit repair platforms, APIs, client portals, payment workflows, and conversion-focused digital systems for companies that need to scale securely and efficiently.

His public LinkedIn profile positions him as a builder of AI-powered credit repair systems, credit monitoring APIs, conversational AI credit agents, payment infrastructure, white-label fintech platforms, and compliance-focused automation systems.

**Areas of expertise:** AI automation · credit technology · fintech systems · credit repair platforms · CRM automation · client portals · business process automation · lead follow-up systems · payment infrastructure · white-label SaaS · FCRA-aware workflows · CROA-compliant systems.

**Photo library (existing assets):**
- `01 · Photos of Rick/rick-hero.jpg` — full-width hero shot
- `01 · Photos of Rick/rick-portrait.jpg` — professional headshot
- `01 · Photos of Rick/rick-vision.jpg` — forward-looking pose (LinkedIn)
- `01 · Photos of Rick/rick-vault.jpg` — systems-builder shot
- `01 · Photos of Rick/rick-signing.jpg` — deal-closing shot
- `01 · Photos of Rick/rick-circuit.jpg` — tech portrait

---

## 2. BRAND OPERATING SYSTEM

### 2.1 The 4 Governance Principles

1. **Ownership** — Every asset has one named owner. No shared accountability. Every registry entry has an `owner` field.
2. **Versioning by intent** — Semantic versioning adjusted for design. MAJOR = user-visible change. MINOR = additive. PATCH = invisible correction. Never break a public URL.
3. **Approval by risk tier** — Green auto-ships. Yellow logs. Red waits for Rick. Default posture: **BUILD**. Approval gates exist only where cost-of-wrong is high.
4. **Deprecation before deletion** — Assets retire gracefully with successors documented and dependencies flagged. Nothing gets deleted for at least one 90-day cycle.

### 2.2 The 6 Brand Voice Traits

Every piece of copy must carry these traits:

1. **Direct** — Say the thing. No hedging. No corporate mush.
2. **Premium but practical** — Confident tone. Not luxury-fake. Not startup-hyped.
3. **Founder-led** — Rick is a real human. Copy reads as if he's writing.
4. **Compliance-native** — Estimates labeled "est." · claims backed · scores never guaranteed · CROA/FCRA/TCPA-safe by default.
5. **Systems-thinking** — We build infrastructure. We don't sell hacks.
6. **Anti-generic** — If the RJ logo disappeared, would it still read as RJ? If no, rewrite.

**Signature copy patterns Rick uses:**

- "We do not sell templates. We build systems."
- "Your leads should not disappear in DMs."
- "Growth is not more noise. Growth is better infrastructure."
- "If your business depends on follow-up, your follow-up cannot depend on memory."
- "Automation only works when the strategy is clean."

### 2.3 The 6 Style Pillars (Visual)

Every visual asset carries these traits (documented fully in `AI Style Guide.html`):

1. **Structural** — grid-aligned · geometric · sharp corners at exact radii · architectural
2. **Human** — natural light · candid · real office · diverse authentic · Kodak Portra
3. **Chromatic** — RJ blue family only · #2563EB → #0EA5E9 · restrained · never rainbow
4. **Editorial** — one focal element · negative space · typographic hierarchy · confident calm
5. **Compliance-native** — labeled estimates · confidence bands · non-committal tone · FCRA-aware
6. **Motion-restrained** — 200ms base · std easing · explanatory only · reduced-motion respected

---

## 3. DESIGN TOKENS · MACHINE-READABLE BRAND CONTRACT

Full JSON: `assets/tokens.json` · Full CSS: `assets/tokens.css`

### 3.1 Colors

```css
--rj-blue:   #2563eb;   /* Primary · CTAs · accents */
--rj-sky:    #0ea5e9;   /* Secondary · gradient partner */
--rj-deep:   #1e3a8a;   /* Deep authority contexts */
--rj-navy:   #0f172a;   /* Dark surfaces + primary text */
--rj-white:  #ffffff;
--rj-soft:   #f8fafc;   /* Body background */
--rj-light:  #eff6ff;   /* Section bg · pill fills */
--rj-border: #bfdbfe;   /* Blue-tinted borders */
--rj-muted:  #dbeafe;   /* Muted fills */
--rj-line:   #e2e8f0;   /* Neutral hairlines */

/* Text */
--rj-text:        #0f172a;
--rj-muted-text:  #475569;
--rj-subtle-text: #94a3b8;

/* Semantic */
--rj-success: #10b981;  /* Positive · confirmations */
--rj-warning: #f59e0b;  /* Attention · caution */
--rj-danger:  #ef4444;  /* Errors · failures · destructive */
--rj-info:    #0ea5e9;  /* Neutral information */
```

**Gradients:**
```css
--grad-primary: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
--grad-dark:    linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%);
--grad-light:   linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
```

### 3.2 Typography

```css
--font-head: "Space Grotesk", system-ui, sans-serif;   /* Display + headings */
--font-body: "Inter", system-ui, sans-serif;           /* All body copy */
--font-mono: "Space Grotesk", ui-monospace, monospace; /* Micro-labels + eyebrows */
--font-code: ui-monospace, "SF Mono", Menlo, monospace;/* Actual code */
```

**Scale:** `--fs-xs 11px` → `--fs-sm 12px` → `--fs-base 14px` → `--fs-md 15px` → `--fs-lg 17px` → `--fs-xl 20px` → `--fs-2xl 26px` → `--fs-3xl 32px` → `--fs-4xl 44px` → `--fs-5xl 56px` → `--fs-6xl 72px` → `--fs-hero 112px`

**Weights:** 400 / 500 / 600 / 700

**Letter-spacing:** headings use `-0.02em` to `-0.03em`. Body: `0`. Micro-labels (mono, uppercase): `0.14em`.

### 3.3 Spacing · Radius · Shadow

```css
--sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-6: 24px; --sp-8: 32px; --sp-12: 48px;
--r-sm: 4px; --r-md: 8px; --r-lg: 12px; --r-xl: 16px; --r-2xl: 20px; --r-3xl: 24px;
--sh-sm:   0 2px 4px rgba(15,23,42,0.06);
--sh-md:   0 6px 14px rgba(15,23,42,0.08);
--sh-blue: 0 8px 18px rgba(37,99,235,0.35);
```

### 3.4 Motion

```css
--dur-fast: 150ms; --dur-base: 200ms; --dur-slow: 300ms; --dur-slower: 500ms;
--ease-std:    cubic-bezier(0.4, 0, 0.2, 1);      /* default */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* entrances */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* delight */
```

**Rule:** When in doubt, use `--dur-base` with `--ease-std`.

---

## 4. THE HTML FILE STANDARD

Every RJ HTML asset MUST follow this scaffold. Copy it. Fill it in. Do not deviate structurally.

```html
<!doctype html>
<html lang="en"><head>
  <meta charset="utf-8"/>
  <title>[Asset Name] · RJ Business Solutions</title>
  <meta name="description" content="[SEO description · 140-160 chars]"/>
  <meta property="og:image" content="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"/>
  <link rel="stylesheet" href="brand.css">
  <style>
    /* Asset-specific CSS · reference tokens · never invent hex values */
    body { background: var(--rj-soft); font-family: var(--font-body); }
    /* ... */
  </style>
</head>
<body>
  <!-- Asset content -->
</body></html>
```

**Non-negotiable requirements:**
- Every file references `brand.css` (imports token vars)
- Every file has an accurate `<title>` and `<meta description>`
- Every file passes the anti-generic test
- Never invent hex values — always use `var(--rj-*)`
- Never use system default fonts — always `var(--font-head)` / `var(--font-body)`
- Icons live in shared `icons.svg` — reference via `<svg><use href="icons.svg#ic-name"/></svg>`

---

## 5. COMPANY-WIDE COPY LIBRARY

### 5.1 Headlines

Rick's greatest hits — reusable across contexts:

- "AI-powered systems for businesses ready to scale."
- "We turn business chaos into automated growth systems."
- "Built systems. Better follow-up. More booked calls."
- "From scattered leads to scalable systems."
- "Where AI automation meets real business execution."

### 5.2 Legal Footer (every public page)

```
© 2026 RJ Business Solutions. All rights reserved.
Privacy Policy · Terms of Service · Refund Policy · Accessibility
1342 NM 333, Tijeras, New Mexico 87059 · support@rjbusinesssolutions.org
```

### 5.3 Standard SEO Meta Block

Every public page includes:

```html
<meta name="description" content="[140-160 chars, keyword-rich, non-hyped]"/>
<meta property="og:type" content="[website|article]"/>
<meta property="og:site_name" content="RJ Business Solutions"/>
<meta property="og:title" content="[Title]"/>
<meta property="og:description" content="[Same as description]"/>
<meta property="og:url" content="https://rjbusinesssolutions.org/[slug]"/>
<meta property="og:image" content="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"/>
<meta name="twitter:card" content="summary_large_image"/>
<link rel="canonical" href="https://rjbusinesssolutions.org/[slug]"/>
```

### 5.4 Article JSON-LD Schema

For every blog article, embed:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article title]",
  "description": "[Article description]",
  "image": "[Hero image URL]",
  "author": {
    "@type": "Person",
    "name": "Rick Jefferson",
    "url": "https://www.linkedin.com/in/rick-jefferson-314998235",
    "jobTitle": "Credit Technology Architect",
    "worksFor": { "@type": "Organization", "name": "RJ Business Solutions" }
  },
  "publisher": {
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "logo": { "@type": "ImageObject", "url": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://rjbusinesssolutions.org/blog/[slug]" }
}
</script>
```

---

## 6. QUALITY GATE (mandatory before "Approved" status)

Score 0-10 on each. Minimum aggregate 85/100 to ship. Fail on Anti-Generic = automatic hold.

| # | Criterion | Weight |
|---|---|---|
| 01 | Brand fit — uses tokens, matches voice | 10 |
| 02 | Originality — not template, not Canva clone | 10 |
| 03 | Composition — hierarchy · rhythm · scannable | 9 |
| 04 | Clarity — purpose obvious in 3 seconds | 9 |
| 05 | Craft — alignment · spacing · pixel accuracy | 9 |
| 06 | Scalability — responsive · multi-size | 8 |
| 07 | Accessibility — WCAG 2.1 AA · reduced-motion | 9 |
| 08 | Production ready — exports · file naming · manifest | 9 |
| 09 | Cross-channel — doesn't fragment the system | 8 |
| 10 | Anti-generic test | Pass/fail |

---

## 7. FILE NAMING & FOLDER STRUCTURE

**Naming convention:** `[Type] [Descriptor].html` in Title Case. Blog articles use deterministic numbering: `Article 01 · [Topic].html`.

**Master folder structure:** `RJ Complete Brand Library/`
```
00 · Brand System         — tokens, voice, governance, style guides, components
01 · Photos of Rick        — founder photography (JPGs)
02 · Stationery & Print    — letterhead, cards, envelopes, invoices
03 · Email                 — marketing + transactional + drip families
04 · Social                — LinkedIn, IG, TikTok, X templates
05 · Sales Decks & Docs    — proposals, pitch, one-pagers
06 · Legal & Contracts     — MSA, NDA, SOW, releases
07 · Product & Web         — marketing site, landing pages, dashboards
08 · Ads & Paid Media      — Meta, LinkedIn, retargeting
09 · Video & Podcast       — thumbnails, overlays, lower-thirds
10 · Physical & Merch      — apparel, packaging, event booth
11 · Credit Technology     — CIP screens (21 flagship product screens)
12 · Client Ops            — welcome kit, onboarding
13 · Investor & Corporate  — cap table, valuation, pitch deck
14 · Forms & Intake        — 9 intake forms
15 · Engineering Blueprints — API specs, Cloudflare backend
16 · Mobile & Client Portal — PWA, mobile app screens
17 · Admin Console         — operator + support + provider health
18 · Compliance            — regulatory toolkit
19 · Public Pages          — trust center, roadmap, status
20 · CRM                   — Contact 360, Pipeline, Workflow, Deal Detail
22 · Content               — blog articles + content system
25 · Analytics             — executive dashboard
27 · Billing               — finance home
28 · Support               — help center
32 · Notifications         — toast + center + preferences
35 · Auth                  — sign in + sign up + MFA
45 · Motion & States       — motion tokens + 12 canonical states
48 · Data Viz              — chart primitives + rules
60 · Registry              — manifest + tokens + Coverage Dashboard + Audit
```

---

## 8. THE 5-STEP BUILD PROTOCOL (when building anything new)

Any agent building a new RJ asset must execute:

1. **Read this file (RJ-MASTER.md).** Load brand contract into memory.
2. **Check `manifest.json`.** Is there already an asset that serves this purpose? If yes, extend it. Don't duplicate.
3. **Load the closest sibling asset.** If building a new dashboard, open `Executive Analytics.html` first. Match structure and vocabulary.
4. **Build using the HTML file standard (Section 4).** Reference tokens. Never invent hex values.
5. **Register in `manifest.json`.** New entry with: `id`, `category`, `path`, `purpose`, `tags`, `use_for`, `owner: "Rick Jefferson"`, `version: "1.0"`, `status: "approved"`.

**Then run the Quality Gate (Section 6).** Anything below 85 goes back to draft.

---

## 9. COMPLIANCE GUARDRAILS (never violate)

### 9.1 Credit / FCRA / CROA

- **Never guarantee** specific score point increases.
- **Never claim** we can remove accurate information from credit reports.
- **Always disclose** that credit repair results vary and cannot be guaranteed.
- **Always label** projections as "est.", "typical", "average", or "projected" — never as promises.
- **Always distinguish** the RJ Credit Health Index (proprietary) from FICO/VantageScore (bureau scores).
- **Always attach** the 3-day right-to-cancel notice at CROA-triggered signup points.

### 9.2 TCPA (SMS + calls)

- **Never send** SMS without documented double-opt-in consent.
- **Always include** STOP-to-cancel in every SMS.
- **10-day revocation SLA** must be honored.

### 9.3 GLBA / Privacy

- **All PII masked by default** in operator surfaces. Unmasking requires elevated session + logged reason.
- **All monitoring** requires granular per-consent opt-in with provider disclosed (SEON, SpyCloud, Optery, HIBP, Array, Melissa).

### 9.4 Editorial / Marketing

- **Never write** headlines like "Boost your score 100+ points!" — that's CROA violation.
- **Instead write** "The framework we use with clients targeting mortgage-readiness" — educational, non-committal.
- **Every case study** requires signed testimonial release before publishing.
- **Every price** shown publicly must match Stripe live products exactly.

---

## 10. AGENT EXECUTION CHECKLIST

Before publishing anything, verify:

- [ ] `brand.css` linked
- [ ] Tokens used everywhere (no hex literals)
- [ ] Space Grotesk + Inter (no other fonts)
- [ ] `<title>` + `<meta description>` present
- [ ] OG image references the RJ logo URL
- [ ] JSON-LD schema included (if applicable)
- [ ] Rick Jefferson credited as author (if blog/article)
- [ ] Rick photo from approved library (if hero image)
- [ ] Copy passes voice test (direct · premium · founder-led · compliance-native)
- [ ] No hyped claims (no "guaranteed" · no specific score promises)
- [ ] No AI-slop patterns (no rainbow · no cyberpunk · no glowing rims · no mascots)
- [ ] Registered in `manifest.json`
- [ ] Added to `index.html` library tile grid
- [ ] Quality Gate ≥85 aggregate score

If ALL boxes check → mark `status: "approved"` in manifest and ship.

---

## 11. GOAL · WHY THIS FILE EXISTS

This file exists so that **any agent** — a future team member, a Genspark Code deployment, a Cloudflare Worker running Claude, a marketing hire in year three — can produce on-brand RJ output without a briefing call.

Read this file. Build to spec. Ship.

Rick's brand is the compounding asset. Every asset that carries this system correctly makes the next one easier and more valuable. Every asset that doesn't dilutes it.

**When in doubt: build the smaller, more restrained version. RJ's edge is craft, not volume.**

---

*End of RJ-MASTER.md · v25.0 · Signed by Rick Jefferson · Next review Dec 7, 2026.*
