# 10 · Build Protocol · Execution Steps

**The exact sequence any agent follows when building anything new for RJ. Follow every step. Skip nothing.**

## The 9-Step Build Protocol

### Step 1 · Load the brand contract

Before touching any output, read (in order):

1. `README.md` (this system's entry point)
2. `agent-config.json` (machine-readable overview)
3. `00-brand-facts.md` (company + Rick)
4. `01-brand-tokens.md` (colors, type, motion, tokens)
5. `02-voice-guide.md` (how to write)

**Time investment:** ~10 minutes. Non-optional.

### Step 2 · Understand the task

Answer these questions before starting:

- What **type** of asset is this? (dashboard, article, form, email, page, etc.)
- Who is the **audience**? (consumer, operator, prospect, existing client, partner, investor)
- What **lifecycle stage** does it serve? (discovery, conversion, onboarding, retention, expansion, advocacy)
- What **channel(s)** will it live on? (web, mobile, email, print, social)
- What's the **primary action** it should trigger?

Write these answers down. They inform every downstream decision.

### Step 3 · Check the asset index

Open `06-asset-index.md`. Query: does something like this already exist?

**If yes:**
- Load that existing asset
- Understand why it exists and what it covers
- Decide: extend, refine, or duplicate (usually extend)
- Do NOT create a redundant asset

**If no:**
- Note this in your build plan
- Proceed to step 4

### Step 4 · Load the closest sibling

Even if your asset is new, find the closest existing sibling. Load it as your reference.

Examples:
- New dashboard → load Executive Analytics
- New product screen → load Credit Command Center
- New article → load Article 01 (utilization-reset)
- New form → load Credit Qualify
- New marketing page → load Marketing Site

Read the sibling end-to-end. Note its:
- Layout structure
- Section rhythm
- CTA treatment
- Compliance language patterns
- Visual anchors

Your new asset inherits this DNA.

### Step 5 · Build the scaffold

Copy the scaffold from `03-html-scaffold.md`. Fill in:

- Title (ending with " · RJ Business Solutions")
- Meta description (140-160 chars)
- OG image (logo URL)
- Canonical URL
- JSON-LD if applicable (blog, product page)

Link `brand.css` to inherit design tokens.

### Step 6 · Compose using tokens

Never invent hex values. Never invent spacing values. Reference tokens:

- Colors: `var(--rj-blue)`, `var(--rj-navy)`, etc.
- Type: `var(--font-head)`, `var(--font-body)`
- Space: `var(--sp-4)`, `var(--sp-6)`, etc.
- Motion: `var(--dur-base)`, `var(--ease-std)`

Compose components using recipes from `04-component-recipes.md`. Don't reinvent buttons, cards, badges.

### Step 7 · Apply voice + compliance

For copy:
- Load `02-voice-guide.md` in your context
- For any credit/financial content, also load `05-compliance-rules.md`
- Write in Rick's voice · direct · founder-led · compliance-native
- Every estimate labeled "est." · never guarantee outcomes

For visuals (if AI-generated):
- Load `07-prompt-library.md`
- Use the appropriate template
- Append the universal negative prompt

### Step 8 · Run the quality gate

Open `08-quality-gate.md`. Score your asset 0-10 on each of the 9 weighted criteria.

- Aggregate must be ≥85/100
- Anti-generic test must PASS

**If passes:** proceed to step 9.
**If fails:** identify lowest-scoring criteria, revise, re-score.

### Step 9 · Register + file

**Register in `manifest.json`:**

```json
{
  "id": "unique-slug-id",
  "category": "credit_tech" | "brand_system" | "product" | etc.,
  "path": "assets/[filename].html",
  "purpose": "One-sentence description of what this asset does.",
  "tags": ["tag1", "tag2", "tag3"],
  "use_for": ["Use case 1", "Use case 2"],
  "owner": "Rick Jefferson",
  "version": "1.0",
  "status": "approved",
  "qualityScore": 87,
  "source": "human" | "ai-generated" | "hybrid"
}
```

**File into the library:**

Copy from `assets/` to appropriate section of `RJ Complete Brand Library/`. Use the section map from `06-asset-index.md`.

**Add to master index:**

Update `RJ Complete Brand Library/index.html` — add a tile referencing your new asset.

**Update Coverage Dashboard:**

If the new asset represents a section gap-fill, update `assets/Brand Universe Coverage.html`.

## The Success Definition

Your asset is complete when:

- ✅ It exists at `assets/[filename].html`
- ✅ It's copied to the appropriate library section
- ✅ It's registered in `manifest.json`
- ✅ It's linked from the master library index
- ✅ Quality Gate scored ≥85 with anti-generic PASS
- ✅ It loads with zero console errors
- ✅ It renders correctly at 1440px and mobile

Anything missing = not done.

## Edge Cases

### Building for a new section (not in existing index)
1. Create the section folder: `RJ Complete Brand Library/[NN] · [Section Name]/`
2. Add the section to `06-asset-index.md`
3. Add the section to the master library index
4. Proceed with normal build

### Building an AI-generated visual asset
1. Load `07-prompt-library.md`
2. Use the appropriate template
3. Generate the image
4. **Manually inspect** — check for AI-slop patterns (hallucinated hands, wrong faces, negative-prompt violations)
5. Only integrate if clean
6. Attribute `source: "ai-generated"` in manifest

### Building a legal or compliance-adjacent asset
1. Load `05-compliance-rules.md`
2. Draft the asset
3. **HOLD** — do not ship
4. Flag for Rick review with specific line-by-line notes
5. Ship only after Rick sign-off

### Building at scale (multiple assets in one wave)
1. Define the wave's scope
2. Build asset 1 as the reference standard
3. Get quality-gate PASS on asset 1
4. Then produce siblings using asset 1 as template
5. Register all together in a single manifest update

## The 3 rules that override everything

1. **When in doubt, build the smaller, more restrained version.** RJ's edge is craft, not volume.
2. **When compliance is unclear, default to more conservative.** Then flag for Rick.
3. **When brand is unclear, load the closest gold-standard.** Match it. Don't invent.

## When to escalate to a human

- The task doesn't map to any existing pattern
- Compliance is genuinely ambiguous
- Multiple gold-standard references contradict each other
- Score can't reach 85 despite multiple revisions
- The asset would create a new brand precedent

Escalation isn't failure. It's protection of the brand.

## The system is alive

This protocol updates as RJ evolves. Version-locked. Governed. Every change to this file goes through the Governance Manual's approval process.

If you're reading this protocol and it feels out of date, that itself is worth flagging.

---

*End of build protocol. You now have the full context to build anything for RJ Business Solutions.*
