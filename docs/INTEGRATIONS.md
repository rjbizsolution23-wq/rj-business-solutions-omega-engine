# 🏛️ RJ Business Solutions · Multi-Engine Integration Suite & API Reference
**Version**: 2.5.0 (Production Verified)  
**Author**: Rick Jefferson · RJ Business Solutions  
**Headquarters**: 1342 NM 333, Tijeras, NM 87059  
**Platform URL**: [rjbusinesssolutions.org](https://rjbusinesssolutions.org)

---

## 📋 Executive Overview

The **RJ Business Solutions Omega Engine** consolidates 18+ high-performance AI, scraping, enrichment, communication, and infrastructure tools into a unified, type-safe edge system running on Cloudflare Workers and Hono.

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                     RJ BUSINESS SOLUTIONS OMEGA ENGINE                          │
├──────────────────┬──────────────────┬─────────────────────┬──────────────────────┤
│  AI & Reasoning  │  Lead Gen & Tech │ Web Agents & Scrap  │ Infrastructure & Com │
├──────────────────┼──────────────────┼─────────────────────┼──────────────────────┤
│ • Mistral AI     │ • Apollo.io B2B  │ • Rtrvr.ai Agent    │ • Cloudflare R2      │
│ • NVIDIA NIM     │ • BuiltWith Tech │ • Bright Data Scrap │ • GoHighLevel V2     │
│ • Google Gemini  │ • Apify Web Scrap│ • Bright Data SERP  │ • Twilio 2-Way SMS   │
│ • Jev AI Tasks   │ • Phyllo Creator │ • GitHub CI/CD      │ • ElevenLabs Voice   │
│ • Replicate Arts │ • DFW B2B Leads  │ • Base44 Agent      │ • Runway Gen-3 Video │
└──────────────────┴──────────────────┴─────────────────────┴──────────────────────┘
```

---

## 🔑 1. Environment & Credential Registry

All credentials are automatically loaded in `src/config/credentials.ts` and managed in `.env`:

| Service | Environment Variable | Key / Identifier Prefix | Primary Purpose |
| :--- | :--- | :--- | :--- |
| **Rtrvr.ai** | `RTRVR_API_KEY` | `rtrvr_hGPB6...` | Autonomous browser agent & web crawler |
| **Apollo.io** | `APOLLO_API_KEY` | `v5NH1Njtp...` | B2B lead enrichment & executive search |
| **BuiltWith** | `BUILTWITH_API_KEY` | `2febc5be-...` | Tech stack profiling & framework analysis |
| **Phyllo** | `PHYLLO_API_KEY` | `719d01dc-...` | Creator social accounts & analytics |
| **Bright Data** | `BRIGHTDATA_API_KEY` | `E6e931fc-...` | Web unlocker proxy & SERP intelligence |
| **Jev AI** | `JEV_API_KEY` | `jev_pQqCv...` | AI task execution & automated workflows |
| **Gemini AI** | `GEMINI_API_KEY` | `ai-f84a14...` | Google Multimodal LLM reasoning |
| **GitHub** | `GITHUB_TOKEN` | `github_pat_11BV...` | Organization repos & CI/CD control |
| **Apify** | `APIFY_API_TOKEN` | `apify_api_Yhtl...` | Actor-based web scraping & directories |
| **ElevenLabs** | `ELEVENLABS_API_KEY` | `sk_acfc64...` | Human-grade voice synthesis & audio memos |
| **Runway** | `RUNWAY_API_KEY` | `Key_8920...` | Gen-3 cinematic video generation |
| **Replicate** | `REPLICATE_API_TOKEN` | `r8_PFfhci...` | SDXL & image rendering pipelines |
| **NVIDIA NIM** | `NVIDIA_API_KEY` | `nvapi-Td71...` | Llama-3.1 70B ultra-low latency compute |
| **Mistral AI** | `MISTRAL_API_KEY` | `Nnxo6nu5...` | Large-2407 & Mistral Small fast inference |
| **Cloudflare R2** | `R2_ACCESS_KEY_ID` | `5ce80996...` | High-speed global media & asset vault |
| **Twilio** | `TWILIO_ACCOUNT_SID` | `AC4727a3...` | 2-Way SMS via Toll-Free `+1-866-752-4618` |
| **GoHighLevel** | `GHL_AGENCY_PIT` | `pit-defef...` | Multi-location CRM, Pipelines & Custom Values |

---

## 🛠️ 2. Core Service Capabilities & API Endpoints

### 1. Rtrvr.ai (Autonomous Web Browsing Agent)
- **Service**: `src/services/rtrvrService.ts`
- **Endpoints**:
  - `POST /api/rtrvr/agent` — Run multi-step agent actions on live websites.
  - `POST /api/rtrvr/extract` — Extract contact & business data from single/multiple URLs.
- **Example cURL**:
```bash
curl -X POST http://localhost:3000/api/rtrvr/agent \
  -H "Content-Type: application/json" \
  -d '{
    "input": "Find the owner email and booking phone number on this page",
    "urls": ["https://rjbusinesssolutions.org"],
    "verbosity": "final"
  }'
```

---

### 2. Apollo.io (B2B People & Organization Enrichment)
- **Service**: `src/services/apolloService.ts`
- **Endpoints**:
  - `POST /api/apollo/match` — Match a contact by name, email, or LinkedIn URL.
  - `POST /api/apollo/search` — Search leads by job title, industry, and geography.
  - `GET /api/apollo/org?domain=example.com` — Enrich company revenue, employee count, and technologies.
- **Example cURL**:
```bash
curl -X POST http://localhost:3000/api/apollo/match \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Rick",
    "last_name": "Jefferson",
    "domain": "rjbusinesssolutions.org"
  }'
```

---

### 3. BuiltWith (Technology Profiler)
- **Service**: `src/services/builtwithService.ts`
- **Endpoints**:
  - `GET /api/builtwith/domain?domain=shopify.com` — Full technical stack profile.
  - `GET /api/builtwith/summary?domain=rjbusinesssolutions.org` — Categorized summary (CRM, Analytics, Hosting, Ads).
- **Example cURL**:
```bash
curl "http://localhost:3000/api/builtwith/summary?domain=rjbusinesssolutions.org"
```

---

### 4. Phyllo (Creator Economy & Social Aggregation)
- **Service**: `src/services/phylloService.ts`
- **Endpoints**:
  - `GET /api/phyllo/platforms` — List connected social platforms (YouTube, Instagram, TikTok, LinkedIn).
  - `POST /api/phyllo/user` — Register creator profile for engagement tracking.
  - `GET /api/phyllo/profiles?user_id=123` — Retrieve engagement and follower metrics.
- **Example cURL**:
```bash
curl "http://localhost:3000/api/phyllo/platforms"
```

---

### 5. Bright Data (Web Unlocker & SERP Intelligence)
- **Service**: `src/services/brightdataService.ts`
- **Endpoints**:
  - `POST /api/brightdata/scrape` — Bypass Cloudflare/CAPTCHA protections and scrape DOM.
  - `POST /api/brightdata/serp` — Live Google ranking data for local and national keywords.
- **Example cURL**:
```bash
curl -X POST http://localhost:3000/api/brightdata/scrape \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.google.com/search?q=catering+dallas+tx",
    "country": "us"
  }'
```

---

### 6. Jev AI (Autonomous Workflows)
- **Service**: `src/services/jevService.ts`
- **Endpoints**:
  - `POST /api/jev/task` — Run autonomous agentic tasks with custom context.
- **Example cURL**:
```bash
curl -X POST http://localhost:3000/api/jev/task \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Analyze inbound B2B lead conversion pipeline",
    "context": { "industry": "Credit Technology" }
  }'
```

---

### 7. Google Gemini AI (Multimodal Generation)
- **Service**: `src/services/geminiService.ts`
- **Endpoints**:
  - `POST /api/gemini/generate` — Text and structured output generation.
- **Example cURL**:
```bash
curl -X POST http://localhost:3000/api/gemini/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Draft a high-conversion B2B proposal outline for luxury event catering"
  }'
```

---

## 🚀 3. Integration Hub UI & Frontend Dashboard

The frontend now includes live cards and execution triggers for all integrations in the **RJ Business Solutions Engine Dashboard**:
- Real-time online status indicators
- 1-Click test runners for Rtrvr, Apollo, BuiltWith, Gemini, Phyllo, Bright Data, and Jev
- Response visualizers with raw JSON and formatted summaries

---

## 🔒 4. Compliance & Security Architecture

1. **Zero Raw Secret Exposure**: All tokens and keys reside server-side in Cloudflare Workers / Node runtime.
2. **Deterministic-Before-Generative**: Data operations and webhook handling run deterministically; AI models are routed exclusively for enrichment, synthesis, and creative tasks.
3. **CROA & Legal Compliance**: Automated disclaimer headers applied on credit-related pipelines: *"RJ Business Solutions provides software and automation technology. Not financial or legal advice."*
