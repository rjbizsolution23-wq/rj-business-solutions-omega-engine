# 01 · Brand Design Tokens · The Contract

**The complete visual contract every RJ asset inherits. Never invent new values. Always reference these.**

## 1. Color System

### Primary brand palette

```css
--rj-blue:   #2563eb;   /* Primary · CTAs · accents · anchor color */
--rj-sky:    #0ea5e9;   /* Secondary · gradient partner · highlights */
--rj-deep:   #1e3a8a;   /* Deep · authority contexts · dark hero */
--rj-navy:   #0f172a;   /* Navy · dark surfaces + primary text */
```

### Neutrals

```css
--rj-white:  #ffffff;
--rj-soft:   #f8fafc;   /* Body background · light surfaces */
--rj-light:  #eff6ff;   /* Section bg · pill fills · callout bg */
--rj-border: #bfdbfe;   /* Blue-tinted borders */
--rj-muted:  #dbeafe;   /* Muted blue fills */
--rj-line:   #e2e8f0;   /* Neutral hairline borders */
```

### Text

```css
--rj-text:        #0f172a;   /* Primary body text (light theme) */
--rj-muted-text:  #475569;   /* Secondary body text */
--rj-subtle-text: #94a3b8;   /* Tertiary · captions · metadata */
--rj-inverse:     #ffffff;   /* Text on dark backgrounds */
```

### Semantic colors (state meaning)

```css
--rj-success:    #10b981;   /* Positive · confirmations · wins */
--rj-success-bg: #dcfce7;
--rj-warning:    #f59e0b;   /* Attention · caution */
--rj-warning-bg: #fef3c7;
--rj-danger:     #ef4444;   /* Errors · failures · destructive */
--rj-danger-bg:  #fee2e2;
--rj-info:       #0ea5e9;   /* Neutral information */
--rj-info-bg:    #e0f2fe;
```

### Dark theme surfaces (for admin, credit intelligence, dark heroes)

```css
--rj-dark-surface:   #0b1220;   /* Dark app background */
--rj-dark-surface-2: #0f172a;   /* Elevated dark cards */
--rj-dark-border:    rgba(255,255,255,0.06);
--rj-dark-text:      #e2e8f0;
--rj-dark-muted:     #94a3b8;
--rj-dark-subtle:    #64748b;
```

### Data visualization series (blue-family only)

```css
--rj-series-1: #2563eb;
--rj-series-2: #0ea5e9;
--rj-series-3: #1e3a8a;
--rj-series-4: #60a5fa;
--rj-series-5: #0891b2;
--rj-series-6: #0369a1;
/* Never use non-blue for series colors */
```

### Gradients (approved combinations only)

```css
--grad-primary: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
--grad-dark:    linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%);
--grad-light:   linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
--grad-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

**Rules:**
- NEVER use rainbow gradients
- NEVER use purple/pink/orange in RJ contexts
- NEVER use neon or "cyberpunk" color combinations
- Always anchor gradients to the RJ blue family

## 2. Typography

### Font families

```css
--font-head: "Space Grotesk", system-ui, sans-serif;      /* Headings, display */
--font-body: "Inter", system-ui, sans-serif;              /* All body copy */
--font-mono: "Space Grotesk", ui-monospace, monospace;    /* Micro-labels, eyebrows */
--font-code: ui-monospace, "SF Mono", Menlo, monospace;   /* Actual code */
```

**Rule:** Only these fonts. Never system defaults. Never Roboto, Arial, Times.

### Size scale

```css
--fs-xs:   11px;    /* Fine print, metadata */
--fs-sm:   12px;    /* Captions, small labels */
--fs-base: 14px;    /* Default body */
--fs-md:   15px;    /* Emphasized body */
--fs-lg:   17px;    /* Article body */
--fs-xl:   20px;    /* Card titles */
--fs-2xl:  26px;    /* Small section headings */
--fs-3xl:  32px;    /* Section headings */
--fs-4xl:  44px;    /* Page titles */
--fs-5xl:  56px;    /* Hero titles */
--fs-6xl:  72px;    /* Display */
--fs-7xl:  88px;    /* Hero display */
--fs-hero: 112px;   /* Signature hero moments */
```

### Weight

```css
--fw-regular:  400;   /* Body */
--fw-medium:   500;
--fw-semibold: 600;   /* Emphasized body */
--fw-bold:     700;   /* Headings, CTAs */
```

### Letter-spacing

```css
--ls-tightest: -0.04em;   /* Hero display */
--ls-tighter:  -0.03em;   /* Large headings */
--ls-tight:    -0.02em;   /* Medium headings */
--ls-snug:     -0.01em;   /* Small headings */
--ls-normal:   0;         /* Body */
--ls-wide:     0.05em;    /* Micro-labels */
--ls-widest:   0.14em;    /* Eyebrows, all-caps micro-text */
```

### Line-height

```css
--lh-tight:   1.05;   /* Hero */
--lh-snug:    1.2;    /* Large headings */
--lh-normal:  1.5;    /* Body */
--lh-relaxed: 1.7;    /* Long-form article body */
```

## 3. Spacing Scale

```css
--sp-0:  0;
--sp-1:  4px;
--sp-2:  8px;
--sp-3:  12px;
--sp-4:  16px;
--sp-5:  20px;
--sp-6:  24px;
--sp-8:  32px;
--sp-10: 40px;
--sp-12: 48px;
--sp-16: 64px;
--sp-20: 80px;
--sp-24: 96px;
```

## 4. Border Radius

```css
--r-none: 0;
--r-sm:   4px;      /* Small pills, inline chips */
--r-md:   8px;      /* Inputs, small cards */
--r-lg:   12px;     /* Cards, containers */
--r-xl:   16px;     /* Larger cards */
--r-2xl:  20px;     /* Hero containers */
--r-3xl:  24px;     /* Major containers */
--r-full: 9999px;   /* Circular avatars, pills */
```

## 5. Shadows

```css
--sh-sm:   0 2px 4px rgba(15,23,42,0.06);
--sh-md:   0 6px 14px rgba(15,23,42,0.08);
--sh-lg:   0 15px 30px rgba(15,23,42,0.12);
--sh-xl:   0 25px 50px rgba(15,23,42,0.18);
--sh-blue: 0 8px 18px rgba(37,99,235,0.35);   /* Blue-tinted for CTAs */
--sh-sky:  0 8px 18px rgba(14,165,233,0.30);
```

## 6. Motion

```css
--dur-fast:    150ms;   /* Micro-interactions */
--dur-base:    200ms;   /* Default · when in doubt */
--dur-slow:    300ms;   /* Deliberate transitions */
--dur-slower:  500ms;   /* Reveals */

--ease-std:    cubic-bezier(0.4, 0, 0.2, 1);      /* Default */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* Entrances */
--ease-in:     cubic-bezier(0.7, 0, 0.84, 0);     /* Exits */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Delight moments */
```

**Rule:** When in doubt, `--dur-base` with `--ease-std`. Always respect `prefers-reduced-motion`.

## 7. Breakpoints

```css
/* Sizes */
sm:  375px    /* Small mobile */
md:  640px    /* Large mobile */
lg:  1024px   /* Tablet */
xl:  1280px   /* Desktop, document width */
2xl: 1440px   /* Wide desktop, app width */
```

## 8. Z-index Scale

```css
--z-base:    0;
--z-sticky:  100;
--z-banner:  200;
--z-overlay: 400;
--z-modal:   500;
--z-toast:   600;
--z-tooltip: 700;
```

## Anti-token Rules · Never

- ❌ Never hardcode hex values in components — reference tokens
- ❌ Never invent new colors — extend the palette by adding a token in `tokens.json` first
- ❌ Never use fonts other than Space Grotesk + Inter
- ❌ Never use rainbow gradients, purple/pink/orange, or neon
- ❌ Never use motion longer than `--dur-slower` (500ms) without accessibility opt-out
- ❌ Never fake typographic hierarchy with bold+size only — use the full scale properly

## Source of truth

The machine-readable version lives at:
- `assets/tokens.json` (W3C design token format)
- `assets/tokens.css` (CSS custom properties)
- `RJ Complete Brand Library/60 · Registry/tokens.json` (canonical library copy)

If tokens change, update those files first. Then propagate to consuming components.
