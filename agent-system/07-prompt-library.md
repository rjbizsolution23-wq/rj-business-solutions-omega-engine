# 07 · Prompt Library · AI Generation

**Reusable prompts for generating brand-compliant assets with AI image/video/text models.**

## Universal Negative Prompt

Every image prompt appends:

```
Negative: rainbow, neon, cyberpunk, cartoon, 3d render, illustration, glowing eyes,
exaggerated lighting, generic corporate, robot, chrome, glossy plastic, motion blur,
low resolution, purple, magenta, orange, matrix code, particle effects, sparkles,
lens flare, isometric, 3d cards, mascots, glowing rim, gradient mesh, saas 2018
illustration, floating device mockups, whimsical, cute, watercolor, chalk, sketch.
```

## 1 · Founder Portrait (rare — prefer existing photos)

```
Editorial portrait of Rick Jefferson, Black male credit-technology architect, mid-40s,
in a modern Southwest office at magic hour. Natural window light from left, warm 5200K.
Fitted charcoal blazer, crisp white shirt, no tie. Direct calm eye contact. Slight smile.
Sharp focus on eyes, gentle depth-of-field. Kodak Portra 400 palette. Fortune/WSJ Magazine
editorial style. 3:4 aspect ratio. 8k.
```

## 2 · Dark Marketing Hero Background

```
Abstract editorial background. Deep navy #0F172A base with soft radial glow of RJ blue
#2563EB fading to sky #0EA5E9 in upper-right. Restrained, negative space. Subtle grid
lines at low opacity. 16:9. Cinematic depth. No text overlays.
```

## 3 · Light Marketing Hero Background

```
Abstract editorial background. Off-white #F8FAFC base with soft blue tint in upper-right
fading through #EFF6FF. Subtle geometric structure at low opacity. Editorial magazine
feel — Harper's or New Yorker inside cover style. 16:9. No text.
```

## 4 · Editorial Illustration

```
Editorial illustration for finance magazine. Flat vector geometric composition. Central
hero shape (representing [CONCEPT]) in RJ blue #2563EB, secondary shape in sky #0EA5E9.
Deep navy background. Precise angles, 8px corner radii, aligned to grid. WSJ opinion
or Bloomberg magazine cover art style. Minimal, confident, restrained.
```

## 5 · Product Screenshot Mockup

```
Ultra-realistic screenshot of fintech dashboard on MacBook Pro at slight angle. Clean
white desk, warm daylight. Screen shows [DESCRIBE UI]. Editorial product photography —
Apple style, but with genuine content. Sharp screen edges. Realistic reflection. 8k.
```

⚠ Always prefer real screenshots over mockups. Only use this for hero shots where real screens can't be captured.

## 6 · Video · Founder Talking Head

```
Rick Jefferson in editorial office setting, natural window light, seated at a desk.
Speaking calmly and confidently, restrained purposeful gestures. Slight camera drift,
dolly-in motion. Documentary style, warm color grade, film-grain texture. Cinematic.
Kodak Portra look. 24fps, 16:9, 8 seconds.
```

## 7 · Icon (rare — hand-authored SVG preferred)

```
Single minimal geometric icon, stroke-based, 2px stroke width, deep navy on white.
Represents [CONCEPT]. 512×512 square. Centered composition, generous padding. Rounded
caps and joins. Feather or Lucide style but slightly more premium and structural.
```

## 8 · LLM · Blog article opener

```
You are writing an article in the voice of Rick Jefferson, Founder of RJ Business
Solutions. Direct, premium but practical, founder-led, compliance-native.

Write a 200-word introduction to: "[ARTICLE TITLE]"

Requirements:
- Open with specific, concrete observation (not generic hook)
- Establish credibility with specific data point or client observation
- Preview article scope in one sentence
- Never use: "unlock", "supercharge", "revolutionary", "game-changing"
- Never guarantee credit outcomes
- End with transition into first section header

Load context: rj-agent-system/02-voice-guide.md
```

## 9 · LLM · CTA button + supporting phrase

```
Write in voice of Rick Jefferson (Founder, RJ Business Solutions):
- 3-6 word button text (imperative, specific)
- 1-sentence supporting phrase (12-18 words) that reads as Rick speaking

Constraints:
- Never "boost", "supercharge", "unlock", generic marketing words
- Never promise credit outcomes
- Feel like founder speaking, not marketer

Context: [SPECIFIC OFFER/PAGE]
```

## 10 · LLM · Social post

```
Write LinkedIn post in voice of Rick Jefferson.

Structure:
- Line 1: Specific observation or contrarian claim (≤12 words)
- Lines 2-6: Supporting context in short punchy sentences (≤15 words each)
- Line 7: Specific action or next step
- Optional line 8: Signature (one of Rick's approved phrases)

Constraints:
- No emoji unless data label
- No hashtag spam
- Every claim traces to mechanism or specific number
- Never guarantee outcomes

Topic: [TOPIC]
```

## 11 · LLM · Transactional email

```
Write transactional email from RJ Business Solutions.

Structure:
- Subject: 40-60 chars, specific
- Greeting: "Hey [Name]," or "Marcus —" (never "Dear Sir/Madam")
- 1-3 sentence intro stating specific event
- Data block with relevant facts
- What happens next in 1-2 sentences
- Signature: "— Rick" or "— The RJ Team"

Constraints:
- Match voice guide (direct, founder-led, compliance-native)
- Never sound corporate
- Always include specific timeframe or next-action

Event: [EVENT]
Data: [DETAILS]
```

## Meta rules

### Always
- Anchor to specific brand hex (`#2563EB`, `#0EA5E9`, `#1E3A8A`, `#0F172A`)
- Reference "Rick Jefferson" and "RJ Business Solutions" by name
- Append universal negative prompt on every image gen
- Pass every output through voice guide + compliance rules
- Attribute AI-generated assets in `manifest.json` with `source: "ai-generated"`

### Never
- Generate stock corporate imagery
- Include negative-prompt tropes (rainbow, neon, mascot, etc.)
- Bypass the quality gate
- Ship AI-generated legal or compliance copy without Rick review

## The generation-to-production flow

1. Load this file
2. Pick prompt template
3. Fill in [BRACKETS] with specifics
4. Generate with appropriate model
5. Run through `08-quality-gate.md`
6. If passing → integrate into asset with `03-html-scaffold.md`
7. Register in `manifest.json` with source attribution

Skip any step and you're building AI slop, not RJ brand.
