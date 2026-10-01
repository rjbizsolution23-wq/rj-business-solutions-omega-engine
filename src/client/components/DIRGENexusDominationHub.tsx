import React, { useState } from 'react';
import {
  ShieldAlert,
  Crosshair,
  Cpu,
  Layers,
  Zap,
  TrendingUp,
  BarChart3,
  Search,
  CheckCircle2,
  Copy,
  Terminal,
  Code2,
  DollarSign,
  AlertTriangle,
  Globe,
  ExternalLink,
  Lock,
  Compass,
  FileCode,
  Sparkles,
  ArrowRight,
  Flame,
  Bot,
  BookOpen,
  MessageSquare,
  PhoneCall,
  Send,
  UserCheck
} from 'lucide-react';

export const DIRGENexusDominationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dirge' | 'domination' | 'nexus' | 'fifty-x' | 'digital-dennis'>('fifty-x');

  // DIRGE State
  const [dirgeTarget, setDirgeTarget] = useState('https://rjbusinesssolutions.org');
  const [dirgeMode, setDirgeMode] = useState<'stealth' | 'crisis' | 'growth' | 'audit' | 'research' | 'intel'>('growth');
  const [dirgeIndustry, setDirgeIndustry] = useState('Credit & Financial Automation');
  const [dirgeTerritory, setDirgeTerritory] = useState('Dallas-Fort Worth / National US');
  const [dirgeLoading, setDirgeLoading] = useState(false);
  const [dirgeReport, setDirgeReport] = useState<any>(null);

  // Market Domination State
  const [domSubject, setDomSubject] = useState('AI Business Automation Systems');
  const [domMarket, setDomMarket] = useState('US B2B Service Operators');
  const [domCompetitors, setDomCompetitors] = useState('Legacy Digital Agencies, SaaS Chatbot Startups');
  const [domObjective, setDomObjective] = useState<'total_market_capture' | 'disrupt_incumbent' | 'rapid_scale' | 'niche_monopolization'>('total_market_capture');
  const [domLoading, setDomLoading] = useState(false);
  const [domReport, setDomReport] = useState<any>(null);

  // Nexus Architect State
  const [nexusProject, setNexusProject] = useState('RJ-OmniEdge-Core');
  const [nexusArchType, setNexusArchType] = useState<'cloudflare_edge' | 'fullstack_nextjs_fastapi' | 'microservices_k8s' | 'ghl_crm_automation' | 'ai_multiagent_mesh'>('cloudflare_edge');
  const [nexusDomain, setNexusDomain] = useState('Autonomous Multi-Channel Lead & CRM Infrastructure');
  const [nexusLoading, setNexusLoading] = useState(false);
  const [nexusReport, setNexusReport] = useState<any>(null);

  // 50X Sales Domination State
  const [fiftyXOffer, setFiftyXOffer] = useState('Tax-Tech Wealth Automation™ & High-Ticket AI Edge Infrastructure');
  const [fiftyXAudience, setFiftyXAudience] = useState('High-Revenue Service Business Owners, Credit Operators & Fintech Brands');
  const [fiftyXPrice, setFiftyXPrice] = useState<number | string>(5000);
  const [fiftyXChannel, setFiftyXChannel] = useState<'omnichannel' | 'vsl_funnel' | 'dm_inbox' | 'phone_closer' | 'sms_email_cadence'>('omnichannel');
  const [fiftyXLoading, setFiftyXLoading] = useState(false);
  const [fiftyXReport, setFiftyXReport] = useState<any>(null);

  // Digital Dennis State
  const [dennisLeadName, setDennisLeadName] = useState('Marcus Vance');
  const [dennisChannel, setDennisChannel] = useState<'sms' | 'instagram_dm' | 'facebook_dm' | 'tiktok_dm' | 'website_chat' | 'phone_call'>('sms');
  const [dennisInquiry, setDennisInquiry] = useState('Hey Rick, interested in your automated lead follow-up system. Does this work with GoHighLevel and what is the typical setup timeframe?');
  const [dennisNiche, setDennisNiche] = useState('Credit Repair & Business Funding Agency');
  const [dennisLoading, setDennisLoading] = useState(false);
  const [dennisResponse, setDennisResponse] = useState<any>(null);

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // 1. Run DIRGE Recon
  const handleRunDirge = async () => {
    setDirgeLoading(true);
    setDirgeReport(null);
    try {
      const res = await fetch('/api/dirge/recon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetEntityOrUrl: dirgeTarget,
          mode: dirgeMode,
          industryOrNiche: dirgeIndustry,
          territory: dirgeTerritory,
          syncToGHL: true
        })
      });
      const data = await res.json();
      if (data.success && data.report) {
        setDirgeReport(data.report);
      }
    } catch (err) {
      console.error('DIRGE error:', err);
    } finally {
      setDirgeLoading(false);
    }
  };

  // 2. Run Market Domination
  const handleRunDomination = async () => {
    setDomLoading(true);
    setDomReport(null);
    try {
      const res = await fetch('/api/domination/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyOrNiche: domSubject,
          targetMarket: domMarket,
          primaryCompetitors: domCompetitors.split(',').map(c => c.trim()),
          strategicObjective: domObjective,
          syncToGHL: true
        })
      });
      const data = await res.json();
      if (data.success && data.report) {
        setDomReport(data.report);
      }
    } catch (err) {
      console.error('Domination error:', err);
    } finally {
      setDomLoading(false);
    }
  };

  // 3. Run Nexus Architect Build
  const handleRunNexus = async () => {
    setNexusLoading(true);
    setNexusReport(null);
    try {
      const res = await fetch('/api/nexus/build-system', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: nexusProject,
          architectureType: nexusArchType,
          targetAudienceOrDomain: nexusDomain,
          securityComplianceRequirements: ['OWASP_2026', 'ZERO_TRUST', 'FCRA_COMPLIANT'],
          generateFullScaffold: true
        })
      });
      const data = await res.json();
      if (data.success && data.report) {
        setNexusReport(data.report);
      }
    } catch (err) {
      console.error('Nexus error:', err);
    } finally {
      setNexusLoading(false);
    }
  };

  // 4. Run 50X Sales Domination Plan
  const handleRunFiftyX = async () => {
    setFiftyXLoading(true);
    setFiftyXReport(null);
    try {
      const res = await fetch('/api/sales/50x-domination', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerOrProductName: fiftyXOffer,
          targetAudience: fiftyXAudience,
          pricePoint: fiftyXPrice,
          primaryChannel: fiftyXChannel,
          syncToGHL: true
        })
      });
      const data = await res.json();
      if (data.success && data.report) {
        setFiftyXReport(data.report);
      }
    } catch (err) {
      console.error('50X Sales error:', err);
    } finally {
      setFiftyXLoading(false);
    }
  };

  // 5. Run Digital Dennis Interaction
  const handleRunDennis = async () => {
    setDennisLoading(true);
    setDennisResponse(null);
    try {
      const res = await fetch('/api/sales/digital-dennis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadName: dennisLeadName,
          channel: dennisChannel,
          leadMessageOrInquiry: dennisInquiry,
          businessNiche: dennisNiche,
          syncToGHL: true
        })
      });
      const data = await res.json();
      if (data.success && data.response) {
        setDennisResponse(data.response);
      }
    } catch (err) {
      console.error('Digital Dennis error:', err);
    } finally {
      setDennisLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Master Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-blue-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                QUANTUM PROMPT GENESIS
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
                50X PERSUASION STACK
              </span>
              <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-400/30">
                DIGITAL DENNIS AUTONOMOUS AI
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 font-mono">
              THE 50X SALES DOMINATION & DIGITAL DENNIS ENGINE
            </h1>
            <p className="text-blue-200 text-sm max-w-2xl leading-relaxed">
              AGI-level persuasion intelligence (AIPP, NLF, MCL), academic research fusion (arXiv, OpenAlex, Kaggle), and 24/7 autonomous sales execution for Rick Jefferson | RJ Business Solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('fifty-x')}
              className={`px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'fifty-x'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              50X Sales Stack
            </button>
            <button
              onClick={() => setActiveTab('digital-dennis')}
              className={`px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'digital-dennis'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              Digital Dennis AI
            </button>
            <button
              onClick={() => setActiveTab('dirge')}
              className={`px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'dirge'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5 text-blue-300" />
              D.I.R.G.E. Recon
            </button>
            <button
              onClick={() => setActiveTab('domination')}
              className={`px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'domination'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
              Market Warfare
            </button>
            <button
              onClick={() => setActiveTab('nexus')}
              className={`px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'nexus'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-purple-300" />
              Nexus Architect
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: 50X SALES DOMINATION TRANSFORMATION STACK
      ───────────────────────────────────────────────────────────── */}
      {activeTab === 'fifty-x' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg font-bold text-slate-900 font-mono">
                The 50X Sales Domination Persuasion Stack & Research Engine
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Offer / Product Title</label>
                <input
                  type="text"
                  value={fiftyXOffer}
                  onChange={(e) => setFiftyXOffer(e.target.value)}
                  placeholder="e.g. Tax-Tech Wealth Automation™"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Target Buyer Avatar</label>
                <input
                  type="text"
                  value={fiftyXAudience}
                  onChange={(e) => setFiftyXAudience(e.target.value)}
                  placeholder="e.g. Service Business Owners & Fintech Brands"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Price Point ($ USD)</label>
                <input
                  type="text"
                  value={fiftyXPrice}
                  onChange={(e) => setFiftyXPrice(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Primary Conversion Channel</label>
                <select
                  value={fiftyXChannel}
                  onChange={(e) => setFiftyXChannel(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none capitalize bg-white font-medium"
                >
                  <option value="omnichannel">Omni-Channel (Full Multi-Touch Mesh)</option>
                  <option value="vsl_funnel">High-Ticket VSL & Application Funnel</option>
                  <option value="dm_inbox">Direct Message (DM) Inbound/Outbound</option>
                  <option value="phone_closer">Phone Closer & Live Diagnostic Call</option>
                  <option value="sms_email_cadence">Sub-60s SMS & Email Nurture</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleRunFiftyX}
                disabled={fiftyXLoading}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all font-mono"
              >
                {fiftyXLoading ? (
                  <>
                    <Flame className="w-4 h-4 animate-spin" />
                    SYNTHESIZING 50X PERSUASION STACK...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    GENERATE 50X TRANSFORMATION BLUEPRINT
                  </>
                )}
              </button>
            </div>
          </div>

          {fiftyXReport && (
            <div className="space-y-6">
              {/* Top Banner KPI */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Conversion Multiplier</span>
                  <div className="text-2xl font-black text-amber-600 font-mono mt-1">
                    {fiftyXReport.projectedConversionMultiplier}
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold">OBX Stack Active</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Monthly Cost of Inaction (NLF)</span>
                  <div className="text-xl font-bold text-rose-600 font-mono mt-1">
                    {fiftyXReport.obxPersuasionStack.neuroLossFraming.costOfInactionMonthly}
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Scarcity Lock Rule</span>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    {fiftyXReport.obxPersuasionStack.scarcityLockSequence.cohortLimitRule}
                  </div>
                </div>
              </div>

              {/* OBX Persuasion Stack Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    AI Identity Priming (AIPP) & Status Elevation
                  </h3>
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/60 text-xs text-blue-950 space-y-1.5">
                    <p><strong>Evolved Buyer Identity:</strong> {fiftyXReport.obxPersuasionStack.aiIdentityPriming.buyerEvolvedIdentity}</p>
                    <p><strong>Opening Hook:</strong> "{fiftyXReport.obxPersuasionStack.aiIdentityPriming.primingOpeningHook}"</p>
                    <p><strong>Status Statement:</strong> {fiftyXReport.obxPersuasionStack.aiIdentityPriming.statusElevationStatement}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Neuro-Loss Framing (NLF) & Mirror Conversion
                  </h3>
                  <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200/60 text-xs text-rose-950 space-y-1.5">
                    <p><strong>Emotional Loss Trigger:</strong> {fiftyXReport.obxPersuasionStack.neuroLossFraming.emotionalLossTrigger}</p>
                    <p><strong>Urgency Anchor:</strong> {fiftyXReport.obxPersuasionStack.neuroLossFraming.urgencyAnchor}</p>
                    <p><strong>Mirror Script:</strong> "{fiftyXReport.obxPersuasionStack.mirrorConversionLanguage.echoFramingScript}"</p>
                  </div>
                </div>
              </div>

              {/* Objection Neutralization Matrix */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  Dynamic Objection Neutralization Matrix
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fiftyXReport.objectionNeutralizationMatrix.map((item: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">Objection: "{item.objection}"</span>
                      </div>
                      <p className="text-slate-600"><strong>Psychological Fear:</strong> {item.underlyingFearOrPsychology}</p>
                      <p className="text-rose-900 bg-rose-50 p-2 rounded border border-rose-200">
                        <strong>Neuro-Loss Reframe:</strong> {item.neuroLossReframing}
                      </p>
                      <p className="text-slate-700 bg-white p-2 rounded border border-slate-200">
                        <strong>Mirror Conversion Script:</strong> "{item.mirrorConversionScript}"
                      </p>
                      <p className="text-emerald-800 font-semibold">
                        <strong>Closing Ask:</strong> "{item.closingQuestion}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Intelligence Integration */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Academic Research Intelligence & Benchmark Verification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {fiftyXReport.researchIntelligence.map((ref: any, idx: number) => (
                    <div key={idx} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-bold text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded border border-blue-700">
                          {ref.database}
                        </span>
                      </div>
                      <p className="font-bold text-slate-200">{ref.title}</p>
                      <p className="text-slate-400">{ref.queryOrTopic}</p>
                      <p className="text-emerald-300 bg-emerald-950/40 p-2 rounded border border-emerald-800/50">
                        <strong>Strategic Insight:</strong> {ref.strategicInsight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-amber-300 font-semibold">50X Master Orchestrator:</span> Rick Jefferson Solutions
                  </div>
                  <button
                    onClick={() => copyToClipboard(fiftyXReport.mandatoryRickJeffersonCTA, 'fiftyx-cta')}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-xs font-mono font-bold rounded-lg text-white flex items-center gap-2 transition-all"
                  >
                    {copiedKey === 'fiftyx-cta' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    COPY 50X SALES BLUEPRINT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: DIGITAL DENNIS AUTONOMOUS AI AGENT
      ───────────────────────────────────────────────────────────── */}
      {activeTab === 'digital-dennis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-bold text-slate-900 font-mono">
                Digital Dennis 24/7 Autonomous AI Sales & Operations Agent
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Prospect / Lead Name</label>
                <input
                  type="text"
                  value={dennisLeadName}
                  onChange={(e) => setDennisLeadName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Inbound Channel</label>
                <select
                  value={dennisChannel}
                  onChange={(e) => setDennisChannel(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none capitalize bg-white font-medium"
                >
                  <option value="sms">SMS / Text Message (Sub-60s Auto-Response)</option>
                  <option value="instagram_dm">Instagram Direct Message</option>
                  <option value="facebook_dm">Facebook Messenger</option>
                  <option value="tiktok_dm">TikTok Lead Messenger</option>
                  <option value="website_chat">Website 2-Way Chat Widget</option>
                  <option value="phone_call">Twilio Voice Inbound / Outbound</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Prospect Business Niche</label>
                <input
                  type="text"
                  value={dennisNiche}
                  onChange={(e) => setDennisNiche(e.target.value)}
                  placeholder="e.g. Credit Repair & Business Funding"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Inbound Message / Objection Simulation</label>
              <textarea
                value={dennisInquiry}
                onChange={(e) => setDennisInquiry(e.target.value)}
                rows={3}
                placeholder="Type any client message, objection, or question..."
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none font-sans"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleRunDennis}
                disabled={dennisLoading}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all font-mono"
              >
                {dennisLoading ? (
                  <>
                    <Bot className="w-4 h-4 animate-spin" />
                    DIGITAL DENNIS QUALIFYING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    TRIGGER DIGITAL DENNIS INTERACTION
                  </>
                )}
              </button>
            </div>
          </div>

          {dennisResponse && (
            <div className="space-y-6">
              {/* Interaction Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Qualification Status</span>
                  <div className="text-xl font-bold text-emerald-600 font-mono mt-1">
                    {dennisResponse.qualificationStatus}
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Lead Score</span>
                  <div className="text-2xl font-black text-cyan-600 font-mono mt-1">
                    {dennisResponse.leadScore}/100
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Recommended Next Step</span>
                  <div className="text-sm font-bold text-slate-900 mt-1">
                    {dennisResponse.recommendedAction}
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Suggested Stripe Deposit</span>
                  <div className="text-2xl font-black text-purple-600 font-mono mt-1">
                    ${dennisResponse.suggestedStripeCheckoutAmount}
                  </div>
                </div>
              </div>

              {/* AI Generated Message Bubble */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-cyan-600" />
                    <span className="font-bold text-slate-900 font-mono text-sm">
                      Digital Dennis Autonomous AI Response ({dennisResponse.channel.toUpperCase()})
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(dennisResponse.aiGeneratedReply, 'dennis-reply')}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-semibold rounded-lg flex items-center gap-1.5 transition-all"
                  >
                    {copiedKey === 'dennis-reply' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    COPY SCRIPT
                  </button>
                </div>

                <div className="p-4 bg-cyan-50/50 rounded-xl border border-cyan-200 text-slate-800 text-sm leading-relaxed font-sans">
                  "{dennisResponse.aiGeneratedReply}"
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div>
                    <strong className="text-slate-800">Objection Detected:</strong> {dennisResponse.objectionDetected}
                  </div>
                  <div>
                    <strong className="text-slate-800">Dynamic Rebuttal Strategy:</strong> {dennisResponse.dynamicRebuttalUsed}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: D.I.R.G.E. v8.0 RECON ENGINE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === 'dirge' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900 font-mono">
                D.I.R.G.E. v8.0 Reconnaissance Control Matrix
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Target URL or Business Entity</label>
                <input
                  type="text"
                  value={dirgeTarget}
                  onChange={(e) => setDirgeTarget(e.target.value)}
                  placeholder="https://target-business.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Operational Recon Mode</label>
                <select
                  value={dirgeMode}
                  onChange={(e) => setDirgeMode(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none capitalize bg-white font-medium"
                >
                  <option value="growth">Growth Mode (Revenue Leakage & Scaling)</option>
                  <option value="stealth">Stealth Mode (Zero-Footprint Passive Recon)</option>
                  <option value="crisis">Crisis Mode (Reputation Triage & Vulnerabilities)</option>
                  <option value="audit">Audit Mode (Deep Tech Stack & SEO Dissection)</option>
                  <option value="research">Research Mode (Academic & Market Deep Dive)</option>
                  <option value="intel">Intel Mode (Competitive Espionage & Counter-Moves)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Industry / Niche</label>
                <input
                  type="text"
                  value={dirgeIndustry}
                  onChange={(e) => setDirgeIndustry(e.target.value)}
                  placeholder="e.g. Credit Automation / B2B SaaS"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Target Territory / Market</label>
                <input
                  type="text"
                  value={dirgeTerritory}
                  onChange={(e) => setDirgeTerritory(e.target.value)}
                  placeholder="e.g. Dallas-Fort Worth / National US"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleRunDirge}
                disabled={dirgeLoading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all font-mono"
              >
                {dirgeLoading ? (
                  <>
                    <Crosshair className="w-4 h-4 animate-spin" />
                    EXECUTING RECON MATRIX...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    ACTIVATE D.I.R.G.E. RECON
                  </>
                )}
              </button>
            </div>
          </div>

          {dirgeReport && (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Opportunity Score</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-blue-600 font-mono">{dirgeReport.opportunityScore}/10</span>
                    <span className="text-xs text-emerald-600 font-semibold">High Conversion Potential</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Est. Monthly Revenue Leak</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-rose-600 font-mono">
                      ${dirgeReport.dimensions.financialAndROIImpact.estimatedMonthlyRevenueLeakage.toLocaleString()}
                    </span>
                    <span className="text-xs text-rose-500 font-semibold">/ month</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Recommended RJ Package</span>
                  <div className="mt-1">
                    <span className="text-lg font-bold text-slate-900">{dirgeReport.dimensions.financialAndROIImpact.recommendedRJPackage}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: MARKET DOMINATION WARFARE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === 'domination' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-slate-900 font-mono">
                SUPREME Market Domination Strategic Matrix
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Target Business or Category</label>
                <input
                  type="text"
                  value={domSubject}
                  onChange={(e) => setDomSubject(e.target.value)}
                  placeholder="e.g. AI Business Automation"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Target Addressable Market</label>
                <input
                  type="text"
                  value={domMarket}
                  onChange={(e) => setDomMarket(e.target.value)}
                  placeholder="e.g. US B2B Service Businesses"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Primary Competitors</label>
                <input
                  type="text"
                  value={domCompetitors}
                  onChange={(e) => setDomCompetitors(e.target.value)}
                  placeholder="Competitor A, Competitor B"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Strategic Objective</label>
                <select
                  value={domObjective}
                  onChange={(e) => setDomObjective(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none capitalize bg-white font-medium"
                >
                  <option value="total_market_capture">Total Market Capture</option>
                  <option value="disrupt_incumbent">Disrupt Incumbent</option>
                  <option value="rapid_scale">Rapid Scale (Hypergrowth)</option>
                  <option value="niche_monopolization">Niche Monopolization</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleRunDomination}
                disabled={domLoading}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all font-mono"
              >
                {domLoading ? (
                  <>
                    <TrendingUp className="w-4 h-4 animate-spin" />
                    SYNTHESIZING MARKET WARFARE...
                  </>
                ) : (
                  <>
                    <BarChart3 className="w-4 h-4" />
                    GENERATE DOMINATION WARPLAN
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: NEXUS ARCHITECT AI BUILDER
      ───────────────────────────────────────────────────────────── */}
      {activeTab === 'nexus' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-slate-900 font-mono">
                NEXUS ARCHITECT AI Zero-Defect Full-Stack Builder
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Project Name</label>
                <input
                  type="text"
                  value={nexusProject}
                  onChange={(e) => setNexusProject(e.target.value)}
                  placeholder="RJ-OmniEdge-Core"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Architecture Model</label>
                <select
                  value={nexusArchType}
                  onChange={(e) => setNexusArchType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none capitalize bg-white font-medium"
                >
                  <option value="cloudflare_edge">Cloudflare Workers Edge (Hono + D1 + Workflows)</option>
                  <option value="fullstack_nextjs_fastapi">Next.js 16 / React 19 + FastAPI Microservice</option>
                  <option value="ai_multiagent_mesh">Autonomous Multi-Agent AI Mesh (Antigravity SDK)</option>
                  <option value="ghl_crm_automation">GoHighLevel CRM Bi-directional Automation Engine</option>
                  <option value="microservices_k8s">Enterprise Kubernetes 1.32 + Terraform 1.16</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Domain / Business Purpose</label>
                <input
                  type="text"
                  value={nexusDomain}
                  onChange={(e) => setNexusDomain(e.target.value)}
                  placeholder="Omni-channel Lead Engine & CRM"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleRunNexus}
                disabled={nexusLoading}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-purple-500/20 transition-all font-mono"
              >
                {nexusLoading ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin" />
                    GENERATING ZERO-DEFECT SCAFFOLD...
                  </>
                ) : (
                  <>
                    <Code2 className="w-4 h-4" />
                    BUILD PRODUCTION SYSTEM
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
