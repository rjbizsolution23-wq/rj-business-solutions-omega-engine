# 06 · Asset Index · What's Already Built

**Before creating anything new, check here. If a similar asset exists, extend it instead of duplicating.**

## Master Library Location

```
RJ Complete Brand Library/
```

170+ HTML files across 29 numbered sections. Every file is production-quality and referenceable.

## Section Map

### Brand Foundation (00 · 60)

| Section | Purpose | Key files |
|---|---|---|
| 00 · Brand System | Tokens, governance, style guides, components | Brand Kit, Governance Manual, AI Style Guide, Component Library, Campaign System |
| 60 · Registry | Machine-readable manifests + coverage | tokens.json, tokens.css, Brand Universe Coverage, Audit Report |

### Content & Voice (01-05)

| Section | Purpose | Key files |
|---|---|---|
| 01 · Photos of Rick | Founder photography | rick-hero, rick-portrait, rick-vision, rick-vault, rick-signing, rick-circuit |
| 02 · Stationery & Print | Letterhead, cards, envelopes | Letterhead, Business Cards, Invoice, Envelope, Presentation Folder |
| 03 · Email | Marketing + transactional | Newsletter, Drip Sequence, Transactional Email Family (6 templates) |
| 04 · Social | Platform-specific templates | LinkedIn, Instagram, TikTok, X banners + post templates |
| 05 · Sales Decks & Docs | Sales enablement | Pitch Deck, One-Pager, Proposal, Case Study, NDA, Rate Card |

### Legal & Documentation (06)

| Section | Purpose | Key files |
|---|---|---|
| 06 · Legal & Contracts | Templates + consent forms | Contract Cover, NDA, Operating Agreement, Term Sheet, Vesting |

### Marketing & Product (07-09)

| Section | Purpose | Key files |
|---|---|---|
| 07 · Product & Web | Marketing site + landing pages | Landing Page, Marketing Site, Meet Rick, Dashboard |
| 08 · Ads & Paid Media | Ad creatives | Meta, LinkedIn, retargeting templates |
| 09 · Video & Podcast | Video overlays | Thumbnails, Lower Thirds, Intro/Outro Cards |

### Physical Brand (10)

| Section | Purpose | Key files |
|---|---|---|
| 10 · Physical & Merch | Apparel, packaging | Merch Mockups, Sticker Sheet, Swag Box, Event Booth, Trade Show |

### The Credit Intelligence Platform (11-19)

| Section | Purpose | Key files |
|---|---|---|
| 11 · Credit Technology | **21 flagship CIP screens** | Credit Command Center, Change Explainer, Scenario Lab, Identity Watch, Reporting Calendar, Bureau Diff Engine, Action Center, Dispute Workspace, CIP Onboarding, Learning Center, Credit Analysis Dashboard, Score Simulator, Utilization Optimizer, Tradeline Manager, Credit Timeline, Bureau Comparison, Client Progress Report, Icon System |
| 12 · Client Ops | Client-facing operations | Welcome Kit, Onboarding Flow |
| 13 · Investor & Corporate | Investor materials | Cap Table, Valuation, Pitch Deck, Financial Model, Annual Report, Whitepaper |
| 14 · Forms & Intake | 9 intake forms | Credit Qualify, Business Funding, Universal Lead, Service Intake, Growth Audit, White-Label App, Partnership App, Podcast Guest, Media Request |
| 15 · Engineering Blueprints | Technical specs | Cloudflare Backend, API Spec, Foundry Blueprint |
| 16 · Mobile & Client Portal | Mobile-first CIP | Mobile Client Home, Mobile Score, Mobile Disputes, Mobile Upload, Mobile Chat, Mobile CIP, Onboarding Flow |
| 17 · Admin Console | Internal operator surfaces | Admin Dashboard, Client Roster, Revenue Analytics, AI Agent Console, Partner Portal, CIP Admin, CIP Provider Health, CIP Support Workspace |
| 18 · Compliance | Regulatory toolkit | Compliance Toolkit |
| 19 · Public Pages | External comms | Trust Center, Roadmap, Status Page |

### Business Systems (20+)

| Section | Purpose | Key files |
|---|---|---|
| 20 · CRM | Full CRM stack | CRM Contact 360, Pipeline, Workflow Builder, Deal Detail |
| 22 · Content | Blog + editorial | Blog Hub, 20 articles (Article 01-20) |
| 25 · Analytics | Executive dashboards | Executive Analytics |
| 27 · Billing | Finance operations | Billing Dashboard |
| 28 · Support | Help center | Support Help Center |
| 32 · Notifications | Notification system | Notifications System |
| 35 · Auth | Auth flows | Auth System |
| 45 · Motion & States | Motion + system states | Motion & System States |
| 48 · Data Viz | Chart primitives | Data Viz Library |

## Blog Articles (Section 22)

The full 20-article library, all authored by Rick Jefferson:

### Credit Intelligence · 8 articles
1. Article 01 · The utilization playbook that beats a $2,000 payment on the wrong day
2. Article 02 · The 6 factors that actually move your FICO score
3. Article 03 · How long does a credit dispute actually take?
4. Article 04 · Collections on your credit report: pay, settle, dispute, or wait?
5. Article 05 · Your rights under the FCRA, translated into plain English
6. Article 06 · Identity monitoring: what works vs security theater
7. Article 07 · Authorized user tradelines: the legal, powerful, misunderstood credit lever
8. Article 08 · Credit freezes vs locks vs fraud alerts

### Business Growth · 8 articles
9. Article 09 · Automation before scale: why most agencies try to grow at the wrong time
10. Article 10 · Your DMs are your CRM. Your CRM is broken.
11. Article 11 · AI agents aren't magic — they're really disciplined interns
12. Article 12 · White-label fintech: the operator's guide to launching without building
13. Article 13 · The lead follow-up system that turns 40% of ghosts into bookings
14. Article 14 · Funnels vs content: the false choice every founder keeps making
15. Article 15 · Client portals are retention tools, not delivery tools
16. Article 16 · Stripe subscription ops: the checklist most SaaS businesses skip

### Homebuyer Readiness · 4 articles
17. Article 17 · The 12-month mortgage readiness plan (start at 620, target 740)
18. Article 18 · DTI matters more than your credit score for mortgage approval
19. Article 19 · When to get pre-approved for a mortgage
20. Article 20 · What happens to your credit after you close on a house

## Flagship Screens · reference these when building similar

When building **new dashboards**, load:
- `RJ Complete Brand Library/25 · Analytics/Executive Analytics.html`
- `RJ Complete Brand Library/17 · Admin Console/CIP Admin.html`

When building **credit-related product screens**, load:
- `RJ Complete Brand Library/11 · Credit Technology/Credit Command Center.html`
- `RJ Complete Brand Library/11 · Credit Technology/Bureau Diff Engine.html`

When building **CRM surfaces**, load:
- `RJ Complete Brand Library/20 · CRM/CRM Contact 360.html`
- `RJ Complete Brand Library/20 · CRM/CRM Pipeline.html`

When building **marketing pages**, load:
- `RJ Complete Brand Library/07 · Product & Web/Marketing Site.html`
- `RJ Complete Brand Library/22 · Content/Blog Hub.html`

When building **forms**, load:
- `RJ Complete Brand Library/14 · Forms & Intake/Credit Qualify.html`
- `RJ Complete Brand Library/14 · Forms & Intake/Universal Lead Funnel.html`

## Machine-readable manifest

`manifest.json` at repo root contains the full asset registry with:
- `id`, `category`, `path`, `purpose`, `tags`, `use_for`
- Decision tree mapping needs → assets

Query this file first when trying to route a task.

## What's NOT built yet (potential expansion)

- Deep-dive photography direction (team + environment)
- Sound identity (audio logo, notification tones)
- Extended community/education/events sections
- Recruiting/careers landing pages
- Storefront/commerce (deprioritized · not our vertical)

If a task falls into these gaps, note it and build with governance-compliant care.
