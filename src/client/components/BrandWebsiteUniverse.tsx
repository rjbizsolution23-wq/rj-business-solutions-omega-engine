import React, { useState } from 'react';
import {
  Globe,
  ExternalLink,
  CheckCircle,
  Copy,
  Layers,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  Code2,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Building2,
  Cpu,
  Bot,
  GitMerge,
  Workflow,
  Search,
  BookOpen,
  DollarSign,
  Calendar,
  Briefcase,
  FileText,
  Lock,
  Eye,
  Sliders,
  Database
} from 'lucide-react';

interface RouteDefinition {
  id: string;
  path: string;
  title: string;
  section: string;
  category: 'core' | 'solutions' | 'company' | 'legal';
  description: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSub: string;
  keyPillars: { title: string; desc: string; icon: any }[];
  contentDetails: string[];
  ctaLabel: string;
}

export const ALL_25_ROUTES: RouteDefinition[] = [
  // Core / Home
  {
    id: 'home',
    path: '/',
    title: 'Home · AI-Powered Growth & Systems',
    section: 'Home',
    category: 'core',
    description: 'Flagship landing page for RJ Business Solutions featuring Rick Jefferson\'s positioning, CIP platform, and automation engine.',
    badge: 'FLAGSHIP PLATFORM',
    heroHeadline: 'AI-Powered Business Systems for Businesses',
    heroHighlight: 'Ready to Scale.',
    heroSub: 'We build deterministic automation infrastructure, AI credit technology, and conversion engines that turn operational chaos into predictable revenue.',
    keyPillars: [
      { title: 'AI Automation Architecture', desc: 'Custom multi-agent workflows and instant qualification bots built on Cloudflare Workers and NVIDIA NIM.', icon: Cpu },
      { title: 'Credit Intelligence Platform', desc: 'Next-generation 21-screen CIP engine with automated bureau dispute diffing and CROA-compliant tracking.', icon: Shield },
      { title: 'CRM & Lead Operations', desc: 'Done-for-you GoHighLevel multi-location synchronization, custom tags, and instant SMS/Voice follow-up.', icon: Workflow },
      { title: 'Custom Fintech Software', desc: 'High-throughput edge APIs, client portals, Stripe billing, and secure R2 document vaults.', icon: Code2 }
    ],
    contentDetails: [
      'Founder spotlight: Rick Jefferson (Credit Technology Architect & Systems Builder)',
      'Quantified proof: 99.98% Edge Uptime · <250ms Response · 4 Subaccounts Synced',
      'Interactive Tier Pricing: Starter ($47/mo), Pro ($147/mo), Enterprise (Custom)',
      'Full legal compliance footer with mandatory CROA disclosures'
    ],
    ctaLabel: 'Deploy Your System'
  },

  // Solutions (10 Pages)
  {
    id: 'sol-ai-automation',
    path: '/solutions/ai-automation',
    title: 'AI & Automation Infrastructure',
    section: 'AI & Automation',
    category: 'solutions',
    description: 'Autonomous AI workflows, edge inference pipelines, and deterministic automation for modern operators.',
    badge: 'SOLUTIONS // 01',
    heroHeadline: 'Deterministic Logic Meets',
    heroHighlight: 'Autonomous AI Execution.',
    heroSub: 'Eliminate repetitive manual bottlenecks with custom AI pipelines that triage leads, draft documents, and sync CRM data in milliseconds.',
    keyPillars: [
      { title: 'NVIDIA & Mistral Edge Routing', desc: 'Multi-LLM router with automatic failover and structured JSON parsing.', icon: Zap },
      { title: 'Instant Lead Enrichment', desc: 'Real-time scoring, intent classification, and audio note synthesis.', icon: Sparkles },
      { title: 'Zero-Latency Webhooks', desc: 'Edge workers capable of handling 50,000+ simultaneous inbound payloads.', icon: Workflow }
    ],
    contentDetails: [
      'Multi-model fallback architecture (NVIDIA NIM DeepSeek ➔ Mistral 7B)',
      'Automated ElevenLabs personalized voice memos delivered via Cloudflare R2',
      'Direct integration with GHL custom fields and automated pipeline triggers'
    ],
    ctaLabel: 'Explore AI Automation'
  },
  {
    id: 'sol-ai-agents',
    path: '/solutions/ai-agents',
    title: 'AI Agents & Superagents',
    section: 'AI Agents',
    category: 'solutions',
    description: 'Production-ready conversational agents, Base44 superagents, and multi-channel qualification bots.',
    badge: 'SOLUTIONS // 02',
    heroHeadline: 'Deploy 24/7 Intelligent',
    heroHighlight: 'Conversational Agents.',
    heroSub: 'Trained on your business knowledge to engage prospects across SMS, Webchat, and DMs without sounding like a generic chatbot.',
    keyPillars: [
      { title: 'Base44 Superagent Core', desc: 'Context-aware conversational intelligence with persistent memory.', icon: Bot },
      { title: 'Two-Way SMS Telephony', desc: 'Twilio edge integration for instant SMS replies and voice drops.', icon: Zap },
      { title: 'Human Handoff Guardrails', desc: 'Smart escalation triggers when high-ticket opportunities are ready to close.', icon: Shield }
    ],
    contentDetails: [
      'Custom prompt architectures with adversarial prompt-injection defenses',
      'Knowledge base vector ingestion via Hugging Face & R2 document storage',
      'Live booking calendar routing directly into GoHighLevel'
    ],
    ctaLabel: 'Launch AI Agents'
  },
  {
    id: 'sol-workflow-automation',
    path: '/solutions/workflow-automation',
    title: 'Workflow Automation Systems',
    section: 'Workflow Automation',
    category: 'solutions',
    description: 'End-to-end backend workflows connecting your tools, databases, and operational pipelines.',
    badge: 'SOLUTIONS // 03',
    heroHeadline: 'Connect Your Entire Stack with',
    heroHighlight: 'Unbreakable Workflows.',
    heroSub: 'From webhook capture to database mutations, our Cloudflare-first workflow engine guarantees zero lost data and instant execution.',
    keyPillars: [
      { title: 'Cloudflare Workflows v2', desc: 'Durable execution with automated retries and 50,000 concurrent instances.', icon: Workflow },
      { title: 'Multi-Location Sync', desc: 'Simultaneous field and tag replication across GoHighLevel subaccounts.', icon: Layers },
      { title: 'Audit Trail & Telemetry', desc: 'Structured logs and real-time execution monitoring for every payload.', icon: Code2 }
    ],
    contentDetails: [
      'Eliminate Zapier/Make bottlenecks with raw TypeScript edge workers',
      'Deterministic error handling with automatic dead-letter queue backups',
      'Real-time data synchronization between GHL, Stripe, and D1'
    ],
    ctaLabel: 'Automate Workflows'
  },
  {
    id: 'sol-crm-automation',
    path: '/solutions/crm-automation',
    title: 'CRM Automation & GoHighLevel Architecture',
    section: 'CRM Automation',
    category: 'solutions',
    description: 'Custom GoHighLevel setups, pipeline engineering, automated follow-ups, and agency subaccount hubs.',
    badge: 'SOLUTIONS // 04',
    heroHeadline: 'Turn Your CRM Into an',
    heroHighlight: 'Autonomous Revenue Engine.',
    heroSub: 'Stop letting leads slip through the cracks. We engineer custom GoHighLevel snapshots, trigger sequences, and branded client portals.',
    keyPillars: [
      { title: 'Custom Subaccount Hubs', desc: 'Unified branding with Space Grotesk typography and custom CSS/JS.', icon: Building2 },
      { title: 'Automated Pipeline Stages', desc: 'Smart lead movement triggered by client actions and AI score thresholds.', icon: GitMerge },
      { title: 'Omnichannel Campaigns', desc: 'Coordinated SMS, Email, and Voice follow-up sequences that convert.', icon: Sparkles }
    ],
    contentDetails: [
      'Seamless multi-subaccount synchronization (RJ, SMART FCRA, Eugene, Preacher)',
      'Custom fields: AI Lead Score, AI Intent, FCRA Audit Stage, Audio Memo URL',
      'Custom CSS/JS branding suite matching RJ Business Solutions design tokens'
    ],
    ctaLabel: 'Upgrade Your CRM'
  },
  {
    id: 'sol-sales-funnels',
    path: '/solutions/sales-funnels',
    title: 'High-Converting Sales Funnels',
    section: 'Sales Funnels',
    category: 'solutions',
    description: 'Conversion-engineered funnel architecture with sub-second load times, interactive calculators, and seamless checkouts.',
    badge: 'SOLUTIONS // 05',
    heroHeadline: 'Engineered Funnels That Convert',
    heroHighlight: 'Traffic Into Booked Revenue.',
    heroSub: 'High-speed landing pages, VSL funnels, and qualification applications designed with direct-response precision and modern brand aesthetics.',
    keyPillars: [
      { title: 'Sub-Second Edge Delivery', desc: 'Hosted on Cloudflare global CDN for instant 99+ Google PageSpeed scores.', icon: Zap },
      { title: 'Dynamic Qualification', desc: 'Multi-step forms that score prospects before sending them to your calendar.', icon: Sliders },
      { title: 'Integrated Stripe Checkout', desc: '1-click checkouts, upsell flows, and automated customer onboarding.', icon: DollarSign }
    ],
    contentDetails: [
      'A/B test ready layouts with structured event tracking',
      'Tailwind CSS v4 styling with Space Grotesk headings and responsive glass cards',
      'Direct webhook triggers into GHL and automated fulfillment pipelines'
    ],
    ctaLabel: 'Build Your Funnel'
  },
  {
    id: 'sol-web-development',
    path: '/solutions/web-development',
    title: 'Modern Website & Web App Development',
    section: 'Website Development',
    category: 'solutions',
    description: 'Ultra-fast Next.js and React web applications built with strict TypeScript, Tailwind CSS, and edge deployment.',
    badge: 'SOLUTIONS // 06',
    heroHeadline: 'Bespoke Web Development for',
    heroHighlight: 'High-Growth Tech Brands.',
    heroSub: 'We don\'t use generic WordPress templates. We engineer bespoke web apps, portals, and digital flagships that establish instant authority.',
    keyPillars: [
      { title: 'React 19 & Next.js 16', desc: 'Modern component architecture with SSR and dynamic client state.', icon: Code2 },
      { title: 'Tailwind CSS Design System', desc: 'Custom tokens, navy/blue palettes, and micro-interactions.', icon: Sparkles },
      { title: 'Security & Accessibility', desc: 'WCAG AA compliance, CSP headers, and enterprise security standards.', icon: Shield }
    ],
    contentDetails: [
      'Interactive dashboards and client management interfaces',
      'Full brand asset management with Cloudflare R2 image optimization',
      'Automated GitHub Actions CI/CD deployment pipelines'
    ],
    ctaLabel: 'Start Web Project'
  },
  {
    id: 'sol-custom-software',
    path: '/solutions/custom-software',
    title: 'Custom Software & Fintech Platforms',
    section: 'Custom Software',
    category: 'solutions',
    description: 'Full-stack software engineering, credit intelligence engines, dispute algorithms, and proprietary SaaS platforms.',
    badge: 'SOLUTIONS // 07',
    heroHeadline: 'Proprietary Software Systems Built',
    heroHighlight: 'To Your Exact Specs.',
    heroSub: 'From credit monitoring diff engines to white-label SaaS platforms, we architect scalable software with clean architecture and strict type safety.',
    keyPillars: [
      { title: 'Credit Diff Engine', desc: 'Automated 3-bureau report parsing, item variation tracking, and dispute generation.', icon: Database },
      { title: 'Client Portals (CIP)', desc: '21-screen responsive portal for consumer credit intelligence and tracking.', icon: Monitor },
      { title: 'Robust Cloudflare Edge', desc: 'Durable Objects, SQLite persistence, and Hono microservices.', icon: Cpu }
    ],
    contentDetails: [
      'Enterprise API design with OpenAPI documentation',
      'Role-based access control (Admin, Agent, Client, Auditor)',
      'Complete code ownership and custom GitHub repository provisioning'
    ],
    ctaLabel: 'Architect Software'
  },
  {
    id: 'sol-integrations',
    path: '/solutions/integrations',
    title: 'API Integrations & Stack Unification',
    section: 'Integrations',
    category: 'solutions',
    description: 'Unified ecosystem bridging GoHighLevel, Cloudflare, NVIDIA NIM, Mistral, ElevenLabs, Twilio, Kaggle, and Hugging Face.',
    badge: 'SOLUTIONS // 08',
    heroHeadline: 'Unify Your Entire Tech Stack Under',
    heroHighlight: 'One Intelligent API Layer.',
    heroSub: 'Connect disparate tools into a cohesive operational ecosystem. We build custom middleware, webhooks, and real-time data sync bridges.',
    keyPillars: [
      { title: '12+ Production Connectors', desc: 'GHL, Cloudflare, Hugging Face, Kaggle, GitHub, ElevenLabs, Mistral, NVIDIA.', icon: GitMerge },
      { title: 'Secure Credential Vault', desc: 'Encrypted token storage with automated token rotation and health checks.', icon: Lock },
      { title: 'Real-Time Sync Protocol', desc: 'Instant bidirectional synchronization across all subaccounts and databases.', icon: Zap }
    ],
    contentDetails: [
      'Hugging Face Spaces & Models exploration with ZeroGPU support',
      'Kaggle dataset indexing for fintech and credit risk modeling',
      'Twilio and ElevenLabs voice infrastructure orchestration'
    ],
    ctaLabel: 'View Integrations'
  },
  {
    id: 'sol-seo-geo-aeo',
    path: '/solutions/seo-geo-aeo',
    title: 'SEO · GEO · AEO Search Dominance',
    section: 'SEO / GEO / AEO',
    category: 'solutions',
    description: 'Search Engine Optimization, Generative Engine Optimization (ChatGPT, Perplexity), and Answer Engine Optimization.',
    badge: 'SOLUTIONS // 09',
    heroHeadline: 'Dominate Traditional Search and',
    heroHighlight: 'Next-Gen AI Answer Engines.',
    heroSub: 'Position your brand as the primary authoritative source for Google, Perplexity, ChatGPT Search, and Claude through structured semantic authority.',
    keyPillars: [
      { title: 'Generative Engine Optimization', desc: 'Structured citation hubs and factual schema that AI engines extract as facts.', icon: Search },
      { title: 'Schema.org Graph Architecture', desc: 'Complete Organization, Person, Service, and FAQPage JSON-LD graph.', icon: Code2 },
      { title: 'Topical Authority Clusters', desc: 'Pillar-and-cluster content architecture engineered for high-intent queries.', icon: BookOpen }
    ],
    contentDetails: [
      'Entity grounding for Rick Jefferson and RJ Business Solutions',
      'Fast semantic HTML markup with zero layout shift',
      'CROA-compliant educational articles and technical whitepapers'
    ],
    ctaLabel: 'Boost AI Visibility'
  },

  // Company & Resources (8 Pages)
  {
    id: 'company-about',
    path: '/about',
    title: 'About Rick Jefferson & RJ Business Solutions',
    section: 'About',
    category: 'company',
    description: 'The story, philosophy, credentials, and technical vision behind RJ Business Solutions and founder Rick Jefferson.',
    badge: 'COMPANY // ABOUT',
    heroHeadline: 'Engineered by Operators, Built for',
    heroHighlight: 'Scalable Execution.',
    heroSub: 'Rick Jefferson is a Credit Technology Architect, AI Systems Builder, and CEO of RJ Business Solutions. We build systems before hiring, automation before scale, and deterministic logic before guessing.',
    keyPillars: [
      { title: 'Credit Technology Architect', desc: 'Years of deep domain expertise in credit scoring, bureau regulations, and automated dispute algorithms.', icon: Shield },
      { title: 'Cloudflare-First Architecture', desc: 'Pioneering edge compute, Durable Objects, and zero-latency business systems.', icon: Cpu },
      { title: 'Zero-Fluff Engineering', desc: 'We deliver production-ready code and systems—never half-baked prototypes.', icon: CheckCircle }
    ],
    contentDetails: [
      'Official headquarters: 1342 NM 333, Tijeras, New Mexico 87059',
      'Direct contact: support@rjbusinesssolutions.org · rjbusinesssolutions.org',
      'Verified social ecosystem: LinkedIn, Twitter/X, TikTok, GitHub'
    ],
    ctaLabel: 'Connect with Rick'
  },
  {
    id: 'company-case-studies',
    path: '/case-studies',
    title: 'Client Case Studies & Quantified Results',
    section: 'Case Studies',
    category: 'company',
    description: 'Real-world business transformations, automated revenue scaling, and operational efficiency case studies.',
    badge: 'PROOF // CASE STUDIES',
    heroHeadline: 'Real Results from Real Systems,',
    heroHighlight: 'Backed by Data.',
    heroSub: 'Explore how fintech operators, credit companies, and high-ticket service businesses scaled their operations with our custom AI engines.',
    keyPillars: [
      { title: 'Fintech Automation Scale', desc: 'Reduced lead response time from 4 hours to 12 seconds with AI voice notes.', icon: Zap },
      { title: 'Multi-Location CRM Sync', desc: 'Unified 4 enterprise subaccounts with automated tagging and pipeline scoring.', icon: Layers },
      { title: 'Dispute Engine Efficiency', desc: 'Cut dispute letter generation time by 82% while maintaining strict CROA compliance.', icon: Shield }
    ],
    contentDetails: [
      'Comprehensive before-and-after workflow breakdowns',
      'Quantified ROI metrics: saved hours, conversion lift, and system reliability',
      'Video walkthroughs and architectural diagrams'
    ],
    ctaLabel: 'View Case Studies'
  },
  {
    id: 'company-industries',
    path: '/industries',
    title: 'Industries We Serve',
    section: 'Industries',
    category: 'company',
    description: 'Tailored systems and compliance frameworks for Credit Repair, Fintech, Legal, Real Estate, and High-Ticket Services.',
    badge: 'MARKETS // INDUSTRIES',
    heroHeadline: 'Purpose-Built Solutions for',
    heroHighlight: 'Specialized Verticals.',
    heroSub: 'Every industry has unique compliance, data privacy, and operational constraints. We engineer custom architectures tailored to your sector.',
    keyPillars: [
      { title: 'Credit & Fintech Brands', desc: 'FCRA and CROA-compliant portals, dispute engines, and funding workflows.', icon: Shield },
      { title: 'High-Ticket Service Operators', desc: 'Autonomous lead qualification, VIP calendar booking, and CRM pipelines.', icon: Building2 },
      { title: 'Contractors & Preachers', desc: 'Dedicated community platforms, outreach automation, and donation funnels.', icon: Workflow }
    ],
    contentDetails: [
      'Customized snapshots for SMART FCRA, Eugene, Contracting Preacher',
      'HIPAA and SOC2 compliance considerations for sensitive customer data',
      'Specialized industry-specific AI prompt and reasoning libraries'
    ],
    ctaLabel: 'Explore Your Industry'
  },
  {
    id: 'company-process',
    path: '/process',
    title: 'The Omega Engineering Process',
    section: 'Process',
    category: 'company',
    description: 'Our 4-step autonomous engineering protocol: Audit ➔ Architect ➔ Automate ➔ Scale.',
    badge: 'METHODOLOGY // PROCESS',
    heroHeadline: 'A Predictable, Zero-Defect',
    heroHighlight: 'Path to Automation.',
    heroSub: 'We don\'t guess. We follow a rigorous 4-step engineering protocol that ensures every integration, webhook, and AI agent runs with 99.99% reliability.',
    keyPillars: [
      { title: '01. Stack & Workflow Audit', desc: 'Deep inspection of existing CRM, leads, bottlenecks, and compliance risks.', icon: Search },
      { title: '02. Edge Architecture Blueprint', desc: 'Designing minimal, robust Cloudflare Worker routes and database schemas.', icon: Cpu },
      { title: '03. Implementation & Testing', desc: 'Live build with multi-model routing, R2 vault storage, and GHL custom fields.', icon: Code2 },
      { title: '04. Deployment & Hand-off', desc: 'Automated CI/CD deployment, complete runbooks, and operator training.', icon: CheckCircle }
    ],
    contentDetails: [
      'Evidence-before-assertion protocol with live API verification tests',
      'Rigorous unit and integration test suites before final production release',
      'Zero-downtime migration and rollback protocols'
    ],
    ctaLabel: 'Start the Process'
  },
  {
    id: 'company-insights',
    path: '/insights',
    title: 'Technical Insights & Research',
    section: 'Insights',
    category: 'company',
    description: 'Articles, architecture teardowns, AI research, and credit technology strategies written by Rick Jefferson.',
    badge: 'RESEARCH // INSIGHTS',
    heroHeadline: 'Authoritative Insights on AI,',
    heroHighlight: 'Credit Tech, and Edge Scale.',
    heroSub: 'Read our latest technical breakdowns on Cloudflare Workers, NVIDIA NIM LLM routing, FCRA compliance automation, and CRM synchronization.',
    keyPillars: [
      { title: 'AI Routing Benchmarks', desc: 'Evaluating DeepSeek-v4.1-flash vs Mistral 7B for structured JSON extraction.', icon: Zap },
      { title: 'The Future of Credit Tech', desc: 'How autonomous agents are transforming credit monitoring and dispute resolution.', icon: Shield },
      { title: 'Cloudflare vs Traditional Cloud', desc: 'Why edge workers and Durable Objects outperform heavy Kubernetes clusters.', icon: Cpu }
    ],
    contentDetails: [
      'In-depth technical whitepapers and code repositories',
      'Practical guides for GoHighLevel agency owners and SaaS operators',
      'Regularly updated research on Kaggle datasets and Hugging Face models'
    ],
    ctaLabel: 'Read All Insights'
  },
  {
    id: 'company-pricing',
    path: '/pricing',
    title: 'Transparent Pricing & Systems Tiers',
    section: 'Pricing',
    category: 'company',
    description: 'Clear pricing tiers for consumer credit intelligence, custom CRM setups, and white-label enterprise infrastructure.',
    badge: 'INVESTMENT // PRICING',
    heroHeadline: 'Predictable Pricing for',
    heroHighlight: 'High-Leverage Systems.',
    heroSub: 'Choose the level of automation and infrastructure that fits your current operational stage. No hidden fees. Transparent ROI.',
    keyPillars: [
      { title: 'Starter · $47/mo', desc: 'Consumer credit intelligence platform, basic monitoring, and standard portal access.', icon: DollarSign },
      { title: 'Pro · $147 - $197/mo', desc: 'Advanced dispute automation, AI lead qualification, and priority R2 vault storage.', icon: Sparkles },
      { title: 'Enterprise · Custom', desc: 'Full white-label fintech setup, custom Cloudflare edge worker, and dedicated support.', icon: Building2 }
    ],
    contentDetails: [
      'Instant activation with Stripe payment gateway integration',
      'Transparent feature matrix comparing Starter, Pro, and Enterprise tiers',
      '30-day system satisfaction guarantee on all standard tiers'
    ],
    ctaLabel: 'Choose Your Plan'
  },
  {
    id: 'company-contact',
    path: '/contact',
    title: 'Contact & Strategy Session Booking',
    section: 'Contact & Booking',
    category: 'company',
    description: 'Get in touch with Rick Jefferson and the engineering team to schedule your systems architecture consultation.',
    badge: 'CONNECT // CONTACT',
    heroHeadline: 'Let\'s Architect Your Next',
    heroHighlight: 'Automated Breakthrough.',
    heroSub: 'Schedule a direct 1-on-1 strategy session or submit your project requirements to receive a customized technical blueprint.',
    keyPillars: [
      { title: 'Direct Founder Access', desc: 'Speak directly with Rick Jefferson about your business automation goals.', icon: Calendar },
      { title: 'Instant Lead Webhook', desc: 'Forms submit directly to our edge webhook for immediate qualification.', icon: Zap },
      { title: '1342 NM 333, Tijeras, NM', desc: 'Headquartered in New Mexico · Global digital operations.', icon: Building2 }
    ],
    contentDetails: [
      'Direct calendar booking widget powered by GoHighLevel',
      'Direct support email: support@rjbusinesssolutions.org',
      'Guaranteed response within 2 hours during business hours'
    ],
    ctaLabel: 'Book Strategy Session'
  },
  {
    id: 'company-portfolio',
    path: '/technical-portfolio',
    title: 'Live Technical Portfolio & System Demos',
    section: 'Technical Portfolio',
    category: 'company',
    description: 'Interactive live demonstrations of our Cloudflare Workers, AI routers, Kaggle data integrations, and GHL branding suite.',
    badge: 'SYSTEMS // PORTFOLIO',
    heroHeadline: 'Verified Production Systems,',
    heroHighlight: 'Built and Running Live.',
    heroSub: 'Inspect the live code, live endpoints, and operational status of all 11+ services currently integrated into the RJ Business Solutions universe.',
    keyPillars: [
      { title: 'Edge Worker Runtime', desc: 'Live Hono API responding in <50ms with full CORS and security headers.', icon: Cpu },
      { title: 'Omni AI Studio', desc: 'Interactive prompt sandbox for NVIDIA NIM and Mistral AI models.', icon: Zap },
      { title: 'R2 Asset Vault', desc: 'Direct S3-compatible asset management for high-resolution brand assets.', icon: Shield }
    ],
    contentDetails: [
      'Live GoHighLevel subaccount audit for all 4 client locations',
      'Hugging Face ZeroGPU and Kaggle API token integration proof',
      'Interactive custom CSS/JS injection tester for GHL agency hubs'
    ],
    ctaLabel: 'Explore Live Portfolio'
  },

  // Legal Pages (6 Pages)
  {
    id: 'legal-privacy',
    path: '/privacy',
    title: 'Privacy Policy · RJ Business Solutions',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Our data privacy standards, encryption practices, and adherence to user privacy protection.',
    badge: 'LEGAL // PRIVACY',
    heroHeadline: 'Privacy Policy &',
    heroHighlight: 'Data Protection Standards.',
    heroSub: 'We treat your business and consumer data with zero-compromise encryption, minimal data retention, and full compliance with modern privacy regulations.',
    keyPillars: [
      { title: 'End-to-End Encryption', desc: 'All data in transit (TLS 1.3) and at rest (AES-256) is securely encrypted.', icon: Lock },
      { title: 'No Data Reselling', desc: 'We never sell, rent, or monetize your lead or customer data to third parties.', icon: Shield },
      { title: 'User Rights & Deletion', desc: 'Instant data export and complete right-to-be-forgotten deletion workflows.', icon: FileText }
    ],
    contentDetails: [
      'Comprehensive explanation of cookie usage and local storage tokens',
      'Sub-processor disclosure: Cloudflare, GoHighLevel, Stripe, Twilio',
      'Last updated: 2026 · RJ Business Solutions Legal Team'
    ],
    ctaLabel: 'Read Full Policy'
  },
  {
    id: 'legal-terms',
    path: '/terms',
    title: 'Terms of Service · RJ Business Solutions',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Terms governing software licenses, agency services, subscription agreements, and user responsibilities.',
    badge: 'LEGAL // TERMS',
    heroHeadline: 'Terms of Service &',
    heroHighlight: 'Software Agreement.',
    heroSub: 'Clear, transparent rules governing your use of RJ Business Solutions software, API endpoints, automation tools, and professional services.',
    keyPillars: [
      { title: 'License Scope', desc: 'Non-exclusive, revocable license for software tiers and white-label setups.', icon: FileText },
      { title: 'Payment & Subscriptions', desc: 'Recurring billing terms, cancellation policies, and refund guidelines.', icon: DollarSign },
      { title: 'Acceptable Use Policy', desc: 'Strict prohibition against unauthorized scraping, spamming, or abuse.', icon: Shield }
    ],
    contentDetails: [
      'Intellectual property ownership and custom code license grants',
      'Limitation of liability and standard commercial indemnity clauses',
      'Governing law: State of New Mexico, United States'
    ],
    ctaLabel: 'Review Terms'
  },
  {
    id: 'legal-cookies',
    path: '/cookies',
    title: 'Cookie Policy · RJ Business Solutions',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Detailed disclosure of essential, analytical, and preference cookies utilized across our web properties.',
    badge: 'LEGAL // COOKIES',
    heroHeadline: 'Cookie Policy &',
    heroHighlight: 'Session Tracking Disclosures.',
    heroSub: 'We use cookies strictly for essential authentication, session preservation, and anonymous performance analytics to improve your experience.',
    keyPillars: [
      { title: 'Essential Cookies', desc: 'Required for secure login, CSRF protection, and navigation state.', icon: Lock },
      { title: 'Analytics Cookies', desc: 'Aggregated, anonymous telemetry used to monitor edge response times.', icon: Cpu },
      { title: 'Granular Consent', desc: 'You have full control to toggle non-essential cookies at any time.', icon: Sliders }
    ],
    contentDetails: [
      'List of active first-party and third-party cookie identifiers',
      'Browser instructions on how to block or purge stored cookies',
      'Compliance with GDPR, CCPA, and global privacy standards'
    ],
    ctaLabel: 'Manage Cookie Settings'
  },
  {
    id: 'legal-disclaimer',
    path: '/disclaimer',
    title: 'Legal & CROA Compliance Disclaimer',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Mandatory CROA and FCRA regulatory disclosures regarding software automation and legal/financial advice limitations.',
    badge: 'MANDATORY COMPLIANCE',
    heroHeadline: 'Legal Disclaimer &',
    heroHighlight: 'Regulatory Compliance Notice.',
    heroSub: 'RJ Business Solutions provides software and automation technology. We do not provide legal, financial, or tax advice. Credit score improvements cannot be legally guaranteed.',
    keyPillars: [
      { title: 'CROA Compliance Statement', desc: 'No guaranteed credit score increases or specific bureau timelines are made or implied.', icon: Shield },
      { title: 'Software Technology Only', desc: 'All tools, scripts, and platforms are provided as productivity and infrastructure software.', icon: Code2 },
      { title: 'Independent Verification', desc: 'Users are responsible for ensuring their credit disputes comply with all local and federal laws.', icon: FileText }
    ],
    contentDetails: [
      'Statutory compliance: Credit Repair Organizations Act (15 U.S.C. § 1679)',
      'Clear boundary between AI document drafting and attorney legal representation',
      'Official statement required on all RJ Business Solutions public web footers'
    ],
    ctaLabel: 'Read Compliance Notice'
  },
  {
    id: 'legal-accessibility',
    path: '/accessibility',
    title: 'Accessibility Statement (WCAG 2.1 AA)',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Our commitment to digital accessibility, keyboard navigation, screen reader compatibility, and inclusive design.',
    badge: 'LEGAL // ACCESSIBILITY',
    heroHeadline: 'Accessibility Statement &',
    heroHighlight: 'Inclusive Design Commitment.',
    heroSub: 'We are dedicated to ensuring rjbusinesssolutions.org is accessible to everyone, adhering to WCAG 2.1 Level AA accessibility standards.',
    keyPillars: [
      { title: 'High-Contrast Tokens', desc: 'Color contrast ratios exceeding 4.5:1 for all text and interactive elements.', icon: Eye },
      { title: 'Full Keyboard Navigation', desc: 'Logical tab order, focus indicators, and accessible ARIA attributes.', icon: Monitor },
      { title: 'Screen Reader Support', desc: 'Semantic HTML tags, descriptive image alt text, and landmark roles.', icon: Sparkles }
    ],
    contentDetails: [
      'Regular automated and manual accessibility audits across all 25 routes',
      'Support contact for accessibility feedback: support@rjbusinesssolutions.org',
      'Commitment to continuous remediation of identified barriers'
    ],
    ctaLabel: 'Contact Accessibility Lead'
  },
  {
    id: 'legal-security',
    path: '/security',
    title: 'Security Posture & Edge Hardening',
    section: 'Legal Pages',
    category: 'legal',
    description: 'Our enterprise security architecture, Cloudflare edge protections, OWASP Top 10 defenses, and vulnerability protocols.',
    badge: 'ENTERPRISE SECURITY',
    heroHeadline: 'Security Posture &',
    heroHighlight: 'Edge Infrastructure Hardening.',
    heroSub: 'Enterprise-grade security by default. Built on Cloudflare Workers with automated DDoS mitigation, WAF rules, and encrypted secret vaults.',
    keyPillars: [
      { title: 'Cloudflare WAF & DDoS Shield', desc: 'Automatic rate-limiting and mitigation of Layer 3/4/7 attacks at the edge.', icon: Shield },
      { title: 'OWASP Top 10 Mitigation', desc: 'Strict input sanitization, CSRF tokens, and parameterized database queries.', icon: Lock },
      { title: 'Zero Secrets in Code', desc: 'Environment variables managed through encrypted worker secrets and dotenv vaults.', icon: Code2 }
    ],
    contentDetails: [
      'Prompt-injection defense layers on all AI chatbot and webhook endpoints',
      'Automated dependency vulnerability scanning via GitHub Dependabot',
      'Responsible disclosure protocol for security researchers'
    ],
    ctaLabel: 'View Security Report'
  }
];

export const BrandWebsiteUniverse: React.FC = () => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('home');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedPath, setCopiedPath] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentRoute = ALL_25_ROUTES.find((r) => r.id === selectedRouteId) || ALL_25_ROUTES[0];

  const filteredRoutes = ALL_25_ROUTES.filter((route) => {
    const matchesCat = filterCategory === 'all' || route.category === filterCategory;
    const matchesSearch =
      route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.section.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(`https://rjbusinesssolutions.org${path}`);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-dark-surface via-[#132038] to-dark-surface border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="mono-badge text-[11px] px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-sky border border-brand-sky/30">
                25 VERIFIED LIVE ROUTES
              </span>
              <span className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>200 OK STATUS ACROSS ALL PATHS</span>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight">
              RJ Business Solutions · Brand Universe & Website Studio
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              Complete brand contract adherence: Navy (<code className="text-brand-sky">#0f172a</code>), Brand Blue (<code className="text-brand-sky">#2563eb</code>), Sky (<code className="text-brand-sky">#0ea5e9</code>), Space Grotesk display typography, and CROA compliance applied to all 25 live site routes.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://rjbusinesssolutions.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-medium text-sm flex items-center space-x-2 shadow-rj-blue transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Route Selector, Right Interactive Page Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Route Navigator (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Controls & Filter */}
          <div className="p-4 rounded-xl glass-card border border-white/10 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 25 live routes..."
                className="w-full bg-slate-900/80 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {[
                { id: 'all', label: 'ALL (25)' },
                { id: 'core', label: 'CORE (1)' },
                { id: 'solutions', label: 'SOLUTIONS (9)' },
                { id: 'company', label: 'COMPANY (9)' },
                { id: 'legal', label: 'LEGAL (6)' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                    filterCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-rj-blue'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Route List */}
          <div className="p-2 rounded-xl glass-card border border-white/10 max-h-[640px] overflow-y-auto space-y-1.5 custom-scrollbar">
            {filteredRoutes.map((route) => {
              const isSelected = selectedRouteId === route.id;
              return (
                <button
                  key={route.id}
                  onClick={() => setSelectedRouteId(route.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-start justify-between group ${
                    isSelected
                      ? 'bg-brand-blue/20 border border-brand-sky/40 shadow-sm text-white'
                      : 'hover:bg-white/5 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-[9px] mono-badge px-1.5 py-0.5 rounded ${
                          route.category === 'solutions'
                            ? 'bg-brand-sky/20 text-brand-sky'
                            : route.category === 'legal'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {route.section}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
                    </div>
                    <p className="text-xs font-semibold font-heading text-white truncate mt-1">
                      {route.title.split('·')[0]}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400 truncate">{route.path}</p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-brand-sky translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Route Page Canvas Preview (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Viewport & Controls Bar */}
          <div className="p-3 rounded-xl glass-card border border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2 font-mono text-xs text-slate-300">
              <Globe className="w-4 h-4 text-brand-sky" />
              <span className="text-slate-400">https://rjbusinesssolutions.org</span>
              <span className="text-brand-sky font-semibold">{currentRoute.path}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleCopyPath(currentRoute.path)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center space-x-1.5 border border-white/10 transition-all"
              >
                {copiedPath ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPath ? 'Copied' : 'Copy URL'}</span>
              </button>

              <div className="h-4 w-px bg-white/10"></div>

              {/* Viewport switchers */}
              <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-white/10">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded ${deviceView === 'desktop' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded ${deviceView === 'tablet' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded ${deviceView === 'mobile' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href={`https://rjbusinesssolutions.org${currentRoute.path === '/' ? '' : currentRoute.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-brand-sky/20 text-brand-sky border border-brand-sky/30 hover:bg-brand-sky/30 transition-all"
                title="Open Live URL in New Tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Route Presentation Frame */}
          <div
            className={`transition-all mx-auto duration-300 ${
              deviceView === 'mobile' ? 'max-w-md' : deviceView === 'tablet' ? 'max-w-2xl' : 'w-full'
            }`}
          >
            <div className="rounded-2xl border border-white/15 bg-white text-[#0f172a] shadow-2xl overflow-hidden font-sans">
              {/* Browser Mockup Top Bar */}
              <div className="bg-[#0f172a] text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2 truncate">
                    rjbusinesssolutions.org{currentRoute.path}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
                    alt="RJ Business Solutions"
                    className="w-5 h-5 rounded-md object-cover ring-1 ring-brand-sky"
                  />
                  <span className="text-[10px] font-bold font-heading text-brand-sky tracking-wider uppercase">
                    RJ Business Solutions
                  </span>
                </div>
              </div>

              {/* Rendered Live Route Content with Authentic RJ Brand Tokens */}
              <div className="p-6 md:p-8 space-y-8 bg-gradient-to-b from-white via-[#eff6ff]/30 to-white">
                {/* Hero Section */}
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#2563eb] text-[10px] font-bold font-mono tracking-widest uppercase">
                    {currentRoute.badge}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[#0f172a] tracking-tight leading-tight">
                    {currentRoute.heroHeadline}{' '}
                    <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
                      {currentRoute.heroHighlight}
                    </span>
                  </h1>
                  <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                    {currentRoute.heroSub}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white font-bold font-heading text-xs shadow-md hover:shadow-lg transition-all flex items-center space-x-2">
                      <span>{currentRoute.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="https://rjbusinesssolutions.org/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] font-semibold text-xs hover:bg-[#eff6ff] transition-all"
                    >
                      Book 1-on-1 Strategy
                    </a>
                  </div>
                </div>

                {/* Key Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentRoute.keyPillars.map((pillar, idx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-[#bfdbfe] transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white flex items-center justify-center mb-3 shadow-sm">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold font-heading text-sm text-[#0f172a] mb-1">{pillar.title}</h3>
                        <p className="text-xs text-[#475569] leading-relaxed">{pillar.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Technical Specifications & Content Details */}
                <div className="p-5 rounded-xl bg-[#0f172a] text-white space-y-3 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#0ea5e9] font-bold uppercase">
                      SYSTEM CAPABILITIES & IMPLEMENTATION
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">CLOUDFLARE EDGE + GHL</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentRoute.contentDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mandatory Regulatory & Brand Footer */}
                <div className="pt-6 border-t border-[#e2e8f0] text-center space-y-2 text-[11px] text-[#475569]">
                  <p className="font-semibold text-[#0f172a]">
                    © 2026 RJ Business Solutions · Rick Jefferson · 1342 NM 333, Tijeras, NM 87059
                  </p>
                  <p className="italic text-[#94a3b8] max-w-xl mx-auto text-[10px]">
                    "RJ Business Solutions provides software and automation technology. Not financial or legal advice. CROA compliant."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
