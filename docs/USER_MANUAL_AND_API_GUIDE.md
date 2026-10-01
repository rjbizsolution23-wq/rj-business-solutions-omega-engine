# 🏛️ RJ BUSINESS SOLUTIONS OMEGA ENGINE
## Complete Master User Manual, Developer API Guide, Interactive Tutorials & Support Knowledge Base

**Author**: Rick Jefferson | CEO & Systems Architect  
**Company**: RJ Business Solutions  
**Website**: [https://rjbusinesssolutions.org](https://rjbusinesssolutions.org)  
**App UI**: [https://rj-business-solutions-omega.pages.dev](https://rj-business-solutions-omega.pages.dev)  
**Edge API**: [https://rj-agency-omega.rickjefferson.workers.dev](https://rj-agency-omega.rickjefferson.workers.dev)  
**GitHub Repo**: [https://github.com/rjbizsolution23-wq/rj-business-solutions-omega-engine](https://github.com/rjbizsolution23-wq/rj-business-solutions-omega-engine)  

---

## 📖 TABLE OF CONTENTS
1. [System Overview & Architecture](#1-system-overview--architecture)
2. [Command Center User Interface Guide (14 Modules)](#2-command-center-user-interface-guide)
3. [Developer API Reference Manual](#3-developer-api-reference-manual)
4. [Interactive Step-by-Step Tutorials](#4-interactive-step-by-step-tutorials)
5. [GoHighLevel Multi-Location Integration Blueprint](#5-gohighlevel-multi-location-integration-blueprint)
6. [Customer Support, SLA & Operations Manual](#6-customer-support-sla--operations-manual)

---

## 1. SYSTEM OVERVIEW & ARCHITECTURE

The **RJ Business Solutions Omega Engine** is an enterprise-grade, edge-deployed automation and intelligence platform built specifically for high-growth service businesses, credit technology operators, and agency networks.

### Core Architecture Pillars:
- **Cloudflare Edge Compute**: Powered by Cloudflare Workers and Pages for ultra-low latency (<50ms global TTFB).
- **Hono Edge Router**: Strict TypeScript routing layer providing 30+ production REST endpoints.
- **GoHighLevel Agency Hub**: Centralized orchestration across Agency Hub `0-908-802` and 5 active subaccount locations.
- **AI & Multimodal Provider Matrix**: Dynamic routing across Mistral AI, NVIDIA NIM (DeepSeek-v4.1-flash), ElevenLabs, Replicate, Runway Gen-3, Genspark, Gemini, and Hugging Face ZeroGPU.
- **Lead Generation & Data Science Engine**: Integrated Apollo.io, BuiltWith, Phyllo, BrightData, Apify, Kaggle Hub, and RTRVR Web Agent.

```
                  ┌────────────────────────────────────────────────────────┐
                  │          RJ BUSINESS SOLUTIONS COMMAND CENTER          │
                  │        (Next.js / React 19 + Tailwind CSS v3)          │
                  └───────────────────────────┬────────────────────────────┘
                                              │
                                              ▼
                  ┌────────────────────────────────────────────────────────┐
                  │               CLOUDFLARE WORKER EDGE API               │
                  │                 (Hono + TypeScript)                    │
                  └─────┬─────────────────────┬──────────────────────┬─────┘
                        │                     │                      │
        ┌───────────────┴────────┐  ┌─────────┴────────────┐  ┌──────┴──────────────┐
        │  GOHIGHLEVEL AGENCY    │  │  AI & MULTIMODAL     │  │  DATA SCIENCE &     │
        │  Hub 0-908-802 (5 Subs)│  │  Mistral / NVIDIA    │  │  Apollo / BuiltWith │
        └────────────────────────┘  │  ElevenLabs / R2     │  │  Phyllo / BrightData│
                                    └──────────────────────┘  └─────────────────────┘
```

---

## 2. COMMAND CENTER USER INTERFACE GUIDE

The web dashboard is organized into 14 specialized operational modules accessible via the top navigation bar:

### Module 1: DIRGE Nexus Domination
- **Purpose**: Autonomous market reconnaissance, competitor teardowns, and revenue strategy generation.
- **How to Use**:
  1. Navigate to **DIRGE Nexus**.
  2. Input target niche (e.g., *"DFW Mobile Bartending"* or *"Credit Repair Automation"*).
  3. Click **Execute Deep Recon Sweep**.
  4. View actionable market share estimates, competitor vulnerabilities, and 30-day action plans.

### Module 2: Google Maps Lead Hunter
- **Purpose**: Extract hyper-targeted local business leads directly from Google Maps with phone numbers and ratings.
- **How to Use**:
  1. Navigate to **Google Maps Hunter**.
  2. Enter keyword (e.g., *"Wedding Planner"*) and city (e.g., *"Frisco, TX"*).
  3. Set lead limit (10–100).
  4. Click **Hunt Local Leads**.
  5. Export CSV or ingest leads directly into GoHighLevel.

### Module 3: Social Omni Sales Hub
- **Purpose**: Real-time social media brand monitoring and automated DM outreach across Instagram, TikTok, and Twitter/X.
- **How to Use**:
  1. Navigate to **Social Omni**.
  2. Input target brand handle or hashtag (e.g., `#DFWEvents`).
  3. Click **Scan Social Radar**.
  4. Review engagement signals and click **Dispatch Automated DM Sequences**.

### Module 4: Integrations Suite Hub
- **Purpose**: Direct control panel for B2B data enrichment APIs (Apollo, BuiltWith, Phyllo, BrightData, Gemini, RTRVR).
- **How to Use**:
  1. Select provider tab (e.g., **Apollo B2B** or **BuiltWith**).
  2. Enter domain or contact name.
  3. Query live enrichment data instantly.

### Module 5: Tasty Licka™ Ecosystem
- **Purpose**: Dedicated management hub for Angel Lewis's Tasty Licka™ Craft Cocktail & Catering brand.
- **How to Use**:
  1. Navigate to **Tasty Licka**.
  2. Use the **Instant Proposal Calculator** by selecting guest count, package tier, and wing flavors.
  3. Click **Generate Instant Proposal** to output itemized quotes with Texas 8.25% tax and TABC staffing requirements.

### Module 6: Brand Website Universe
- **Purpose**: Live showcase of official RJ Business Solutions brand standards, CSS tokens, Space Grotesk typography, and UI assets.

### Module 7: Subaccount Operations Grid
- **Purpose**: Live health and status monitoring for all 5 GoHighLevel subaccounts (RJ Business Solutions, SMART FCRA, Eugene, Contracting Preacher, Tasty Licka).

### Module 8: GHL Theme Customizer
- **Purpose**: Preview and inject custom CSS/JS branding scripts directly into GoHighLevel agency views.

### Module 9: AI Studio
- **Purpose**: Multimodal AI sandbox for text, voice synthesis (ElevenLabs), image generation (Replicate), and video generation (Runway Gen-3).

### Module 10: Hugging Face Hub
- **Purpose**: Search 500,000+ open-source AI models, datasets, and ZeroGPU Spaces.

### Module 11: Kaggle Data Engine
- **Purpose**: Search 100,000+ public datasets and machine learning competition benchmarks.

### Module 12: GitHub CI/CD Hub
- **Purpose**: Control panel for repository workflows, deployment triggers, and code verification.

### Module 13: Lead Automation Pipeline
- **Purpose**: Inbound lead parser, AI lead scoring engine, and automated email/SMS responder.

### Module 14: Cloudflare R2 Storage Vault
- **Purpose**: S3-compatible cloud storage bucket manager for uploaded brand assets, audio memos, and PDFs.

---

## 3. DEVELOPER API REFERENCE MANUAL

Base URL: `https://rj-agency-omega.rickjefferson.workers.dev`

### Endpoint 1: Health Check
- **Route**: `GET /api/health`
- **Description**: Verify system status and integration connection states.
- **Response**:
```json
{
  "status": "online",
  "system": "RJ Business Solutions · Omega Multi-Location Automation Engine",
  "timestamp": "2026-10-01T17:25:03.554Z",
  "agency": {
    "relationshipNumber": "0-908-802",
    "subaccountsTracked": 5
  }
}
```

### Endpoint 2: Get Subaccounts
- **Route**: `GET /api/subaccounts`
- **Description**: Retrieve live status and details for all configured GoHighLevel subaccounts.

### Endpoint 3: Tasty Licka Proposal Generator
- **Route**: `POST /api/tastylicka/generate-proposal`
- **Payload**:
```json
{
  "clientName": "Sterling Events",
  "clientEmail": "events@sterling.com",
  "clientPhone": "214-555-0199",
  "eventType": "Corporate Gala",
  "eventDate": "2026-11-15",
  "guestCount": 100,
  "venueLocation": "Frisco, TX",
  "packageTier": "celebration",
  "cocktailsSelected": ["Wakanda Juice", "Midnight Train"],
  "wingsSelected": ["Hennessy Glazed Wings"]
}
```
- **Response**:
```json
{
  "success": true,
  "proposal": {
    "proposalId": "TL-PROP-769068",
    "generatedDate": "October 1, 2026",
    "pricingBreakdown": {
      "tierName": "Celebration Gala Experience",
      "ratePerGuest": 65,
      "baseSubtotal": 6500,
      "taxAmount": 536.25,
      "grandTotal": 7036.25,
      "depositDueNow": 2110.875,
      "balanceDue7DaysPrior": 4925.375
    }
  }
}
```

### Endpoint 4: AI Chat Completion
- **Route**: `POST /api/ai/chat`
- **Payload**: `{"prompt": "Generate a 3-step lead follow-up strategy."}`

### Endpoint 5: Voice Synthesis
- **Route**: `POST /api/ai/voice`
- **Payload**: `{"text": "Hello, thank you for reaching out to RJ Business Solutions."}`

---

## 4. INTERACTIVE STEP-BY-STEP TUTORIALS

### Tutorial 1: How to Generate an Executive Catering Proposal
1. Open the **Command Center** at [https://rj-business-solutions-omega.pages.dev](https://rj-business-solutions-omega.pages.dev).
2. Click the **Tasty Licka** tab in the top navigation.
3. Scroll to **Instant Proposal Calculator**.
4. Enter Client Name (*"Plano Wedding Planners"*), Guest Count (*150*), and select Package Tier (*"The Legacy Executive Experience"*).
5. Click **Generate Instant Proposal**.
6. The system calculates exact guest cost, 8.25% Texas tax, $2M liquor liability insurance certificate, and required TABC mixologists.
7. Click **Copy Invoice Summary** to send directly to the client.

### Tutorial 2: How to Hunt Local B2B Leads on Google Maps
1. Open the **Command Center**.
2. Click **Google Maps Hunter**.
3. Type `"Event Venues"` in Keyword and `"Dallas"` in Location.
4. Click **Execute Hunt**.
5. The system returns verified business listings, phone numbers, addresses, and review scores.
6. Click **Ingest All to GoHighLevel CRM** to automatically create contacts and pipeline deals.

---

## 5. GOHIGHLEVEL MULTI-LOCATION INTEGRATION BLUEPRINT

### Subaccount Mapping:
1. **RJ Business Solutions (Primary Hub)**
   - Location ID: `DvKRMVD9YudoS6xRyBfb`
   - Purpose: Primary agency billing, client onboarding, automation control.
2. **SMART FCRA (Credit Compliance)**
   - Location ID: `aBL9bEdg3LoPKJ9RhPzE`
   - Purpose: Credit technology, dispute workflows, FCRA audit pipelines.
3. **Eugene Subaccount**
   - Location ID: `1J5ooApb6gIuDiOen20e`
   - Purpose: Client lead automation and follow-up drips.
4. **Contracting Preacher**
   - Location ID: `wBPmIpkN5dcwCCSc2kwz`
   - Purpose: Ministry outreach and community workflows.
5. **Tasty Licka™ Catering & Mobile Bar**
   - Location ID: `0TOBkfBFSDF935BN8Fgr`
   - Purpose: Mobile craft bar & wing catering bookings.

---

## 6. CUSTOMER SUPPORT, SLA & OPERATIONS MANUAL

### Support Channels & Contact Info:
- **Phone Support**: (866) 752-4618 | (945) 308-8003
- **Email Support**: `support@rjbusinesssolutions.org`
- **Official Website**: [https://rjbusinesssolutions.org](https://rjbusinesssolutions.org)
- **HQ Address**: 1342 NM 333, Tijeras, New Mexico 87059

### Service Level Agreement (SLA):
- **System Uptime Target**: 99.9% Edge Availability (Cloudflare Pages + Workers)
- **Critical Issue Response**: Under 1 hour
- **General Support Tickets**: Under 12 hours

### Common Troubleshooting Matrix:

| Symptom | Cause | Solution |
| :--- | :--- | :--- |
| **GHL Location 401 Error** | Expired Location PIT token | Refresh token in `.env` (`GHL_SUB_*_PIT`) and trigger `/api/subaccounts/sync`. |
| **AI Request Timeout** | Provider rate limit or latency | System automatically fails over from NVIDIA NIM → Mistral AI → Gemini AI. |
| **R2 Upload 403** | Expired R2 Access Key | Verify `R2_ACCESS_KEY_ID` and `R2_SECRET_ACCESS_KEY` in environment variables. |

---
*Official Brand Document · Property of Rick Jefferson \| RJ Business Solutions*
