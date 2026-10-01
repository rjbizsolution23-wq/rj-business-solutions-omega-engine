# 08 · Quality Gate · 10-Point Checklist

**Every asset scored before shipping. Minimum 85/100 aggregate + Anti-Generic PASS. Fail = hold.**

## The 10 Criteria

### 1 · Brand fit (weight 10)
Uses RJ design tokens. Fonts are Space Grotesk + Inter. Colors ΔE ≤4 from brand hex. Voice matches guide.

### 2 · Originality (weight 10)
Not template. Not Canva clone. Anti-generic test passes.

### 3 · Composition (weight 9)
Clear focal point. Negative space respected. Typographic hierarchy tells reader what to look at first.

### 4 · Clarity (weight 9)
Purpose obvious in 3 seconds.

### 5 · Craft (weight 9)
Alignment to grid. Spacing follows token scale. Type on-scale. No pixel errors at 100% zoom.

### 6 · Scalability (weight 8)
Responsive 375px → 1920px. Prints if applicable. Doesn't break in mobile.

### 7 · Accessibility · WCAG 2.1 AA (weight 9)
- Contrast ≥4.5:1 body, ≥3:1 large/UI
- Focus states visible
- Reduced motion respected
- Alt text on every image
- Keyboard navigation works
- Touch targets ≥44×44px

### 8 · Production ready (weight 9)
Exports work. Filenames follow governance. Metadata complete. Registered in manifest.

### 9 · Cross-channel (weight 8)
Related assets (same feature, same campaign) share visual language.

### 10 · Anti-generic test (PASS/FAIL — automatic hold)
**If the RJ logo disappeared, would it still read as RJ?** If no → hold, regardless of aggregate.

## Scoring Card Template

```
Asset: [name]
Reviewer: [agent or human]
Date: [YYYY-MM-DD]

1. Brand fit           ___ × 10 = ___
2. Originality         ___ × 10 = ___
3. Composition         ___ × 9  = ___
4. Clarity             ___ × 9  = ___
5. Craft               ___ × 9  = ___
6. Scalability         ___ × 8  = ___
7. Accessibility       ___ × 9  = ___
8. Production ready    ___ × 9  = ___
9. Cross-channel       ___ × 8  = ___
                       ─────────────
                       Total: ___ / 90 → ×100/90 = ___/100

10. Anti-generic: PASS / FAIL

Decision:
[ ] ≥85 AND PASS → Approve, ship
[ ] <85 OR FAIL  → Hold, revise
```

## Automatic rejection · never passes

Reject on sight, no exceptions:

- Any credit content guaranteeing specific outcomes
- Any SMS opt-in missing TCPA consent language
- Any legal copy shipped without Rick approval
- Rainbow gradient anywhere
- Cyberpunk/neon aesthetic
- Isometric floating card illustration
- Mascot or cartoon character representing brand
- Font other than Space Grotesk + Inter
- Hardcoded hex outside token system

## When an asset scores below 85

1. Identify lowest-scoring criteria (typically 1-2)
2. Specific critique on each
3. Owner has 5 business days to revise
4. Re-score after revision
5. If still below 85 → escalate to Rick

Never lower the threshold. Fewer high-quality assets beat many mediocre ones.

## Passing = Approved status

When aggregate ≥85 and anti-generic PASS:

1. Mark `status: "approved"` in `manifest.json`
2. Set `version: "1.0"` if new, increment if revision
3. Add `qualityScore` field
4. Ship to Production

## Continuous audit

Quarterly at minimum: re-audit approved assets against evolving criteria. Assets that no longer meet threshold get flagged for revision or deprecation per Governance Manual.

The system is a living contract. Standards get stricter over time, never looser.
