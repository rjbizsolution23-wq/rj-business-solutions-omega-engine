# 05 · Compliance Rules · Guardrails

**Every RJ output touching credit, financial, or communication topics must pass this file. Violations are legally serious.**

## The 4 regulatory pillars

### 1. FCRA (Fair Credit Reporting Act)

**Governs:** Credit reporting, disputes, consumer rights around credit files.

**Rules for RJ content and product:**

- ✅ Consumers have the right to dispute inaccurate, incomplete, or unverifiable info under §611
- ✅ 30-day investigation period is federally required
- ✅ Consumers can request method of verification under §611(a)(7)
- ✅ Hard inquiries require permissible purpose under §604
- ✅ Negative info ages off after 7 years (10 for Ch 7 bankruptcy)

**Never:**
- ❌ Encourage disputing accurate information ("dispute everything to see what sticks" is illegal)
- ❌ Claim to "remove" accurate items — you can request correction; you cannot demand deletion of accurate info
- ❌ Suggest bureaus have to remove info just because it's negative
- ❌ Guarantee dispute outcomes (they're never guaranteed)

**Approved language:**
- "Items you have genuine reason to believe are inaccurate"
- "Debt validation" (for collections under FDCPA §809)
- "Method of verification" (specific FCRA right)
- "Estimated 40-60% of well-founded Round 1 disputes result in some change"

### 2. CROA (Credit Repair Organizations Act)

**Governs:** Businesses that offer credit repair services (RJ Credit Intelligence qualifies).

**Rules:**

- ✅ Must provide 3-day right-to-cancel notice at signup
- ✅ Must have written contract before performing any services
- ✅ Cannot accept payment before services rendered
- ✅ Cannot make false claims about services

**Never:**
- ❌ Guarantee specific credit score point increases
- ❌ Promise removal of accurate negative information
- ❌ Claim to establish "new credit identity" (illegal)
- ❌ Accept payment before delivering services
- ❌ Use terms like "guaranteed results" or "we can remove any negative item"

**Approved language:**
- "Framework we use with clients targeting [outcome]"
- "Estimated typical range · results vary"
- "In our client observation, roughly X% of [item type] result in [outcome]"
- "Educational estimate only · never guaranteed"

### 3. TCPA (Telephone Consumer Protection Act)

**Governs:** SMS, robocalls, automated communications.

**Rules:**

- ✅ Must have documented double-opt-in consent before any SMS
- ✅ Every SMS must include STOP-to-cancel instruction
- ✅ Must honor STOP requests within 10 days
- ✅ Cannot send marketing SMS between 9pm and 8am local time

**Never:**
- ❌ Send SMS without documented consent (max $500-$1,500 per violation)
- ❌ Continue sending after STOP request
- ❌ Include SMS opt-in as a hidden checkbox default-on
- ❌ Fail to disclose message frequency at opt-in

**Approved language for opt-in:**
> "Reply STOP to cancel. Msg & data rates may apply. By opting in, I consent to receive up to [N] messages per month from RJ Business Solutions at the phone number provided."

### 4. GLBA (Gramm-Leach-Bliley Act)

**Governs:** Privacy of personal financial info.

**Rules:**

- ✅ Every product surface handling financial info encrypts data in transit and at rest
- ✅ PII masked by default in operator interfaces
- ✅ Unmasking requires elevated session + logged reason
- ✅ Privacy notice provided at account opening

**Never:**
- ❌ Display full SSN, DOB, or account numbers in operator views without elevation
- ❌ Include unmasked PII in logs
- ❌ Share consumer data with third parties without explicit disclosed consent

## Universal Compliance Vocabulary

Every credit-adjacent sentence uses these patterns:

### Estimates & projections
- "Estimated"
- "Est."
- "Typically"
- "In our observation"
- "Client-observed"
- "Framework outcome"
- "Educational estimate"

### Never
- "Guaranteed"
- "Will result in"
- "Assured"
- "Definitely will"
- "Absolutely will remove"

### Disputes
- "Items you have genuine reason to believe are inaccurate"
- "Legitimate disputes under FCRA §611"
- "Method of verification"
- "Debt validation"

### Never
- "Dispute anything to see what sticks"
- "Get anything removed"
- "Force the bureau to delete"

### Marketing headlines
- "The framework we use with mortgage-track clients"
- "In client observations..."
- "Estimated 20-25 point movement typical"

### Never
- "Boost your score 100+ points!"
- "Guaranteed credit repair!"
- "Fix your credit fast!"

## Consent flows

Every RJ signup or credit-adjacent flow includes:

1. **FCRA authorization** — explicit consent for us to pull credit reports on their behalf, with permissible purpose disclosed
2. **CROA 3-day cancel notice** — clearly displayed, dated, signed
3. **TCPA opt-in** — separate double-opt-in for SMS with frequency disclosure
4. **GLBA privacy notice** — disclosed at account open, linked in every subsequent communication

The consent files exist in the library:
- `RJ Complete Brand Library/06 · Legal & Contracts/` (various consent + contract templates)
- `RJ Complete Brand Library/18 · Compliance/Compliance Toolkit.html`

## The compliance test (pre-publish)

Before shipping any credit-adjacent content, verify:

- [ ] Every point-increase claim has "est." or equivalent label
- [ ] Every dispute reference includes "items you have genuine reason to believe are inaccurate"
- [ ] Every SMS opt-in has consent language + STOP instruction
- [ ] Every credit repair service page has 3-day cancel notice
- [ ] No language guaranteeing any credit outcome
- [ ] No language promising removal of accurate information
- [ ] No hidden consent checkboxes
- [ ] Privacy notice linked in footer

If any box unchecked: hold. Do not ship.

## Legal-adjacent copy · always Red-tier

Per the Governance Manual, all legal-adjacent copy is Red-tier — Rick must approve before publish. This includes:

- Terms of service
- Privacy policy
- FCRA authorization language
- Dispute language sent on behalf of clients
- CROA cancel notice
- Any statement about credit outcomes or services

**Never publish these without explicit Rick sign-off.**

## Related library files

Reference these when compliance matters:

- `18 · Compliance/Compliance Toolkit.html` — full regulatory doc
- `19 · Public Pages/Trust Center.html` — public compliance statement
- `06 · Legal & Contracts/NDA.html`, `Contract Cover Page.html`, etc.
- `00 · Brand System/Governance Manual.html` — approval matrix

If you're unsure whether something is compliant, default to **more conservative** language. Then flag for Rick review.
