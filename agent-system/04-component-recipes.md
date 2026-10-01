# 04 · Component Recipes · Reusable UI

**The exact CSS + HTML patterns for every UI primitive. Copy verbatim. Do not deviate stylistically.**

## Buttons

### Primary CTA (default)

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
  text-decoration: none;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.35);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover { transform: translateY(-2px); }
</style>
```

### Ghost / Secondary

```html
<a class="btn-ghost">Cancel</a>

<style>
.btn-ghost {
  padding: 11px 20px;
  background: #fff;
  color: var(--rj-navy);
  border: 1px solid var(--rj-line);
  border-radius: 10px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.01em;
}
</style>
```

### Danger (destructive)

```html
<a class="btn-danger">Delete</a>

<style>
.btn-danger {
  padding: 12px 22px;
  background: linear-gradient(135deg, var(--rj-danger), #dc2626);
  color: #fff;
  border-radius: 10px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13px;
  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.35);
}
</style>
```

## Cards

### Standard content card

```html
<div class="card">
  <div class="k">● Eyebrow · category</div>
  <h3>Card headline</h3>
  <p>Body text describing the card content.</p>
</div>

<style>
.card {
  background: #fff;
  border: 1px solid var(--rj-line);
  border-radius: 14px;
  padding: 24px 26px;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.card:hover { border-color: var(--rj-blue); transform: translateY(-3px); box-shadow: 0 15px 30px rgba(37,99,235,0.15); }
.card .k {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rj-blue);
  font-weight: 700;
  margin-bottom: 6px;
}
.card h3 {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 18px;
  color: var(--rj-navy);
  letter-spacing: -0.02em;
  margin: 0 0 4px 0;
}
.card p {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--rj-muted-text);
  line-height: 1.55;
  margin: 0;
}
</style>
```

### KPI/stat card

```html
<div class="stat-card">
  <div class="k">Monthly recurring revenue</div>
  <div class="v">$147K</div>
  <div class="d">▲ +12.4% MoM</div>
</div>

<style>
.stat-card {
  background: #fff;
  border: 1px solid var(--rj-line);
  border-radius: 12px;
  padding: 18px 22px;
}
.stat-card .k {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rj-muted-text);
  font-weight: 700;
}
.stat-card .v {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 32px;
  color: var(--rj-navy);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-top: 4px;
}
.stat-card .d {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--rj-success);
  font-weight: 700;
  margin-top: 4px;
}
</style>
```

## Callout / Highlight Box

```html
<div class="callout">
  <div class="k-co">● Rule of thumb</div>
  <h4>Target under 10% aggregate utilization</h4>
  <p>Below 10% is where most FICO gains happen in our client data.</p>
</div>

<style>
.callout {
  margin: 32px 0;
  padding: 24px 28px;
  background: linear-gradient(135deg, rgba(37,99,235,0.05), rgba(14,165,233,0.02));
  border: 1px solid var(--rj-border);
  border-radius: 14px;
}
.callout .k-co {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rj-blue);
  font-weight: 700;
  margin-bottom: 6px;
}
.callout h4 {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 18px;
  color: var(--rj-navy);
  margin: 0 0 6px 0;
}
.callout p {
  font-family: var(--font-body);
  font-size: 15px;
  color: #334155;
  line-height: 1.6;
  margin: 0;
}
</style>
```

## Badges & Pills

```html
<span class="badge success">✓ Verified</span>
<span class="badge warning">⚠ Warning</span>
<span class="badge danger">✗ Failed</span>
<span class="badge info">● Info</span>

<style>
.badge {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.badge.success { background: var(--rj-success-bg); color: var(--rj-success); }
.badge.warning { background: var(--rj-warning-bg); color: var(--rj-warning); }
.badge.danger  { background: var(--rj-danger-bg);  color: var(--rj-danger);  }
.badge.info    { background: var(--rj-info-bg);    color: var(--rj-info);    }
</style>
```

## Navigation Bar

```html
<nav class="nav-t">
  <a href="/" class="brand">
    <img src="[logo URL]" alt="RJ Business Solutions"/>
    <div>
      <div class="n">RJ Business Solutions</div>
      <div class="t">Section · Descriptor</div>
    </div>
  </a>
  <div class="links">
    <a href="#" class="active">Home</a>
    <a href="#">Help</a>
    <a href="#">Trust</a>
    <a href="#" class="cta">Sign in</a>
  </div>
</nav>

<style>
.nav-t {
  background: #fff;
  border-bottom: 1px solid var(--rj-line);
  padding: 14px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}
.nav-t .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
.nav-t .brand img { width: 36px; height: 36px; border-radius: 9px; }
.nav-t .brand .n { font-family: var(--font-head); font-weight: 700; color: var(--rj-navy); font-size: 14px; letter-spacing: -0.01em; }
.nav-t .brand .t { font-family: var(--font-mono); font-size: 9px; color: var(--rj-blue); letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; margin-top: 2px; }
.nav-t .links { display: flex; gap: 22px; align-items: center; }
.nav-t .links a { font-family: var(--font-body); font-size: 13px; color: var(--rj-muted-text); text-decoration: none; font-weight: 500; }
.nav-t .links a.active { color: var(--rj-blue); font-weight: 700; }
.nav-t .cta {
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--rj-blue), var(--rj-sky));
  color: #fff !important;
  border-radius: 9px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.01em;
}
</style>
```

## Footer (Universal)

```html
<footer class="foot">
  <div class="fb">
    <img src="[logo URL]" alt="RJ Business Solutions"/>
    <div class="n">RJ Business Solutions</div>
  </div>
  <div>AI-powered systems, automation, and growth infrastructure.</div>
  <div>1342 NM 333, Tijeras, New Mexico 87059 · <a href="mailto:support@rjbusinesssolutions.org">support@rjbusinesssolutions.org</a></div>
  <div class="fmt-mono">© 2026 RJ Business Solutions · <a href="Trust Center.html">Trust</a> · <a href="Support Help Center.html">Help</a></div>
</footer>

<style>
.foot {
  background: var(--rj-navy);
  color: #cbd5e1;
  padding: 40px 48px;
  text-align: center;
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 1.6;
}
.foot .fb { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 12px; }
.foot .fb img { width: 34px; height: 34px; border-radius: 8px; }
.foot .fb .n { font-family: var(--font-head); font-weight: 700; color: #fff; font-size: 14px; }
.foot a { color: var(--rj-sky); text-decoration: none; font-weight: 600; }
.foot .fmt-mono {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-top: 8px;
}
</style>
```

## Hero Section (Marketing)

```html
<section class="hero">
  <div class="k-h">● Eyebrow</div>
  <h1>Hero headline. <span>Emphasized part.</span></h1>
  <p class="dek">Supporting subhead that expands on the headline in 1-2 sentences.</p>
  <a href="#" class="btn-primary">Primary CTA →</a>
</section>

<style>
.hero {
  padding: 80px 48px;
  text-align: center;
  background: var(--grad-light);
}
.hero .k-h {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rj-blue);
  font-weight: 700;
  margin-bottom: 14px;
}
.hero h1 {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 72px;
  color: var(--rj-navy);
  letter-spacing: -0.03em;
  line-height: 0.95;
  margin: 0 0 20px 0;
}
.hero h1 span {
  background: linear-gradient(135deg, var(--rj-blue), var(--rj-sky));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero .dek {
  font-family: var(--font-head);
  font-size: 20px;
  color: var(--rj-muted-text);
  font-weight: 500;
  line-height: 1.5;
  max-width: 720px;
  margin: 0 auto 32px;
}
</style>
```

## Alerts (Inline)

```html
<div class="alert success">✓ Dispute sent successfully.</div>
<div class="alert warning">⚠ Statement closes in 3 days.</div>
<div class="alert danger">✗ Payment failed. Update your card.</div>
<div class="alert info">● Report refreshed 2 minutes ago.</div>

<style>
.alert {
  padding: 14px 20px;
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.5;
}
.alert.success { background: var(--rj-success-bg); border: 1px solid rgba(16,185,129,0.3); color: var(--rj-navy); }
.alert.warning { background: var(--rj-warning-bg); border: 1px solid rgba(245,158,11,0.35); color: var(--rj-navy); }
.alert.danger  { background: var(--rj-danger-bg);  border: 1px solid rgba(239,68,68,0.35); color: var(--rj-navy); }
.alert.info    { background: var(--rj-info-bg);    border: 1px solid rgba(14,165,233,0.3); color: var(--rj-navy); }
</style>
```

## Composition Rules

- **Max content width for reading:** 720px (article body). 1200px (dashboards). 1440px (app frames).
- **Section vertical padding:** 60-80px between major sections on marketing pages.
- **Card gap:** 12-16px in grids. 20-24px between major card groups.
- **Icon size next to text:** 14-16px (small), 18-24px (medium), 32-48px (feature). Never mid-values.

## For more components

Live rendered reference: `RJ Complete Brand Library/00 · Brand System/Component Library.html`

That file shows every primitive in every state with the exact working code. When building anything new, open it in your context.
