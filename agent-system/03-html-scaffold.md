# 03 · HTML Scaffold · Every File Starts Here

**The exact structure every RJ HTML asset uses. Copy this. Fill it in. Do not deviate structurally.**

## The Universal Scaffold

```html
<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/>
<title>[Asset Name] · RJ Business Solutions</title>
<meta name="description" content="[140-160 chars · specific · non-hyped]"/>
<meta name="keywords" content="[3-8 keywords, comma-separated]"/>
<meta name="author" content="Rick Jefferson"/>

<!-- Open Graph -->
<meta property="og:type" content="[website|article]"/>
<meta property="og:site_name" content="RJ Business Solutions"/>
<meta property="og:title" content="[Same as title]"/>
<meta property="og:description" content="[Same as description]"/>
<meta property="og:url" content="https://rjbusinesssolutions.org/[slug]"/>
<meta property="og:image" content="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"/>

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="[Same as title]"/>
<meta name="twitter:description" content="[Same as description]"/>
<meta name="twitter:image" content="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"/>

<!-- Canonical -->
<link rel="canonical" href="https://rjbusinesssolutions.org/[slug]"/>

<!-- Brand tokens (mandatory) -->
<link rel="stylesheet" href="brand.css">

<!-- Asset-specific styles inline -->
<style>
body { background: var(--rj-soft); font-family: var(--font-body); }
/* ... asset-specific CSS · always reference tokens */
</style>
</head>
<body>

<!-- Content -->

</body></html>
```

## For Blog Articles · Add JSON-LD

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article title]",
  "description": "[Article description]",
  "image": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
  "author": {
    "@type": "Person",
    "name": "Rick Jefferson",
    "url": "https://www.linkedin.com/in/rick-jefferson-314998235",
    "jobTitle": "Credit Technology Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "RJ Business Solutions"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
    }
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://rjbusinesssolutions.org/blog/[slug]"
  }
}
</script>
```

## For Product Pages · Add Organization Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RJ Business Solutions",
  "url": "https://rjbusinesssolutions.org",
  "logo": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
  "email": "support@rjbusinesssolutions.org",
  "founder": {
    "@type": "Person",
    "name": "Rick Jefferson",
    "url": "https://www.linkedin.com/in/rick-jefferson-314998235"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1342 NM 333",
    "addressLocality": "Tijeras",
    "addressRegion": "NM",
    "postalCode": "87059",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rick-jefferson-314998235",
    "https://www.tiktok.com/@rick_jeff_solution",
    "https://twitter.com/ricksolutions1"
  ]
}
</script>
```

## Non-negotiable Rules

Every file MUST:

- ✅ Have `<!doctype html>` on line 1
- ✅ Have `<html lang="en">` (or appropriate language)
- ✅ Have `<meta charset="utf-8"/>` in head
- ✅ Have accurate `<title>` ending with " · RJ Business Solutions"
- ✅ Have `<meta name="description">` between 140-160 chars
- ✅ Link `brand.css` (loads the design tokens)
- ✅ Have OG image referencing the logo URL
- ✅ Pass the anti-generic test (see quality gate)

Every file MUST NOT:

- ❌ Reference external fonts other than via `brand.css`
- ❌ Hardcode hex color values in inline styles
- ❌ Use system default fonts
- ❌ Skip the OG image (breaks social previews)
- ❌ Use `<img>` without `alt` text (accessibility violation)

## Filenames

Follow the governance rules:

- **Blog articles:** `Article NN · [slug].html` (numbered, deterministic)
- **Product screens:** `[Feature Name].html` (descriptive)
- **Documents:** `[Document Name].html` (descriptive)

Never use spaces at file-URL boundaries. Never use special characters that break URLs.

## Where files live

New files land in `assets/` first (working directory), then copy to appropriate section of `RJ Complete Brand Library/`:

- Blog → `22 · Content/`
- Product screens → `07 · Product & Web/` or `11 · Credit Technology/`
- Marketing pages → `07 · Product & Web/`
- Emails → `03 · Email/`
- Legal → `06 · Legal & Contracts/`
- Forms → `14 · Forms & Intake/`

See `06-asset-index.md` for the full section map.
