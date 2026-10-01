import React, { useState } from 'react';
import { BookOpen, Terminal, Code, HelpCircle, PhoneCall, Mail, CheckCircle2, Copy, Search, Send, Play, ChevronRight, Zap, ShieldAlert, Cpu, LifeBuoy } from 'lucide-react';

export const UserGuideHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'manual' | 'api' | 'tutorials' | 'support' | 'faq'>('manual');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [apiTestResponse, setApiTestResponse] = useState<string | null>(null);
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleTestApi = async (endpoint: string, method: string = 'GET', body?: any) => {
    setIsTestingApi(true);
    setApiTestResponse(null);
    try {
      const res = await fetch(`https://rj-agency-omega.rickjefferson.workers.dev${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined
      });
      const data = await res.json();
      setApiTestResponse(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setApiTestResponse(JSON.stringify({ error: err.message }, null, 2));
    } finally {
      setIsTestingApi(false);
    }
  };

  const faqItems = [
    {
      q: "How do I sync GoHighLevel subaccounts with the Omega Engine?",
      a: "Navigate to the Subaccounts Hub tab and click 'Sync All Subaccounts'. The system reads your GHL Private Integration Token and maps all 5 subaccounts instantly."
    },
    {
      q: "What AI models are available in the Omni AI Studio?",
      a: "The engine dynamically routes between Mistral AI, NVIDIA NIM (DeepSeek-v4.1-flash), ElevenLabs (voice synthesis), Replicate (image generation), and Runway Gen-3 (video)."
    },
    {
      q: "How does the Tasty Licka™ Instant Proposal Calculator work?",
      a: "Input guest count, package tier, and flavor selections. The engine automatically calculates guest subtotal, 8.25% Texas sales tax, required TABC bartenders, and 30% deposit requirements."
    },
    {
      q: "Is there an SLA guarantee for API uptime?",
      a: "Yes! RJ Business Solutions guarantees 99.9% uptime across all edge Worker endpoints backed by Cloudflare's global edge network."
    },
    {
      q: "How do I export leads found by the Google Maps Lead Hunter?",
      a: "Search results can be downloaded as CSV or pushed directly to your GoHighLevel CRM location via the 'Ingest All to GHL' button."
    }
  ];

  const filteredFaqs = faqItems.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Title Banner */}
      <div className="p-6 rounded-2xl glass-card border border-white/10 bg-gradient-to-r from-brand-navy via-brand-deep to-brand-blue/30 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-brand-sky" />
              <h2 className="text-2xl font-bold text-white font-heading tracking-tight">
                Master User Guide, Developer Manual & Support Hub
              </h2>
            </div>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Complete documentation, interactive API tester, step-by-step video & text tutorials, and customer support ticket portal for Rick Jefferson's RJ Business Solutions Omega Engine.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-black/40 p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'manual', label: 'Manual', icon: BookOpen },
              { id: 'api', label: 'API Docs', icon: Terminal },
              { id: 'tutorials', label: 'Tutorials', icon: Play },
              { id: 'faq', label: 'Knowledge Base', icon: HelpCircle },
              { id: 'support', label: 'Support', icon: LifeBuoy }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeSection === tab.id
                      ? 'bg-brand-blue text-white shadow-rj-blue'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 1: MASTER USER MANUAL */}
      {activeSection === 'manual' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-brand-sky" />
                <span>Command Center Operational Modules (14 System Hubs)</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-brand-sky flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-sky"></span>
                    <span>1. DIRGE Nexus Warfare</span>
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Executes deep-market reconnaissance, competitor price auditing, and 30-day market takeover playbooks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-amber-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>2. Google Maps Hunter</span>
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Extracts verified local business contacts, phone numbers, addresses, and ratings directly from Google Maps API.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>3. Social Omni Sales Radar</span>
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Monitors hashtags and social signals across Instagram, TikTok, and Twitter/X for automated lead engagement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-emerald-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>4. Tasty Licka™ Craft Catering & Bar</span>
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Complete management suite for Angel Lewis's luxury catering brand with automated proposal generation, TABC staff calculator, and deposit invoice generator.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-blue-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>5. Subaccount Operations Grid</span>
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Monitors and syncs all 5 GoHighLevel agency locations (RJ Business Solutions, SMART FCRA, Eugene, Contracting Preacher, Tasty Licka).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                ⚡ Quick System Specs
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Framework</span>
                  <span className="font-mono text-white">React 19 + Hono Edge</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Edge Provider</span>
                  <span className="font-mono text-emerald-400">Cloudflare Worker</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Primary AI Model</span>
                  <span className="font-mono text-purple-400">NVIDIA NIM DeepSeek</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Failover AI</span>
                  <span className="font-mono text-amber-400">Mistral AI (Large)</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">GHL Agency Hub</span>
                  <span className="font-mono text-sky-400">0-908-802 (5 Subs)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-brand-blue/30 bg-brand-blue/10 space-y-3">
              <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-brand-sky" />
                <span>Brand Compliance Rule</span>
              </h4>
              <p className="text-xs text-slate-300">
                RJ Business Solutions provides software and automation technology. Not financial or legal advice. CROA compliance rules strictly enforced.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: DEVELOPER API REFERENCE & LIVE TESTER */}
      {activeSection === 'api' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-brand-sky" />
              <span>Interactive Edge REST API Console</span>
            </h3>
            <p className="text-xs text-slate-400">
              Test production REST endpoints directly against the live Cloudflare Edge Worker (`https://rj-agency-omega.rickjefferson.workers.dev`).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Endpoint 1: Health Check */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET /api/health
                  </span>
                  <button
                    onClick={() => handleTestApi('/api/health', 'GET')}
                    disabled={isTestingApi}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue/80 transition-all"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run Test</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Checks live health, timestamp, agency ID, and connected integrations.
                </p>
              </div>

              {/* Endpoint 2: Get Subaccounts */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET /api/subaccounts
                  </span>
                  <button
                    onClick={() => handleTestApi('/api/subaccounts', 'GET')}
                    disabled={isTestingApi}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue/80 transition-all"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run Test</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Fetches real-time status and metadata for all 5 GoHighLevel subaccount locations.
                </p>
              </div>

              {/* Endpoint 3: Tasty Licka Blueprint */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET /api/tastylicka/blueprint
                  </span>
                  <button
                    onClick={() => handleTestApi('/api/tastylicka/blueprint', 'GET')}
                    disabled={isTestingApi}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue/80 transition-all"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run Test</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Returns GHL custom fields, custom values, tags, pipelines, and workflow triggers.
                </p>
              </div>

              {/* Endpoint 4: Proposal Generator */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    POST /api/tastylicka/generate-proposal
                  </span>
                  <button
                    onClick={() => handleTestApi('/api/tastylicka/generate-proposal', 'POST', {
                      clientName: "Sterling Events",
                      guestCount: 100,
                      packageTier: "celebration",
                      eventDate: "2026-11-15"
                    })}
                    disabled={isTestingApi}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue/80 transition-all"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run Test</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Calculates guest pricing, 8.25% Texas tax, deposit requirements, and TABC mixologists.
                </p>
              </div>
            </div>

            {/* API Console Response Log */}
            {apiTestResponse && (
              <div className="p-4 rounded-xl bg-black border border-brand-sky/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-brand-sky">
                  <span>⚡ Live API Response Payload</span>
                  <button
                    onClick={() => copyToClipboard(apiTestResponse, 'api-response')}
                    className="text-slate-400 hover:text-white flex items-center space-x-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode === 'api-response' ? 'Copied!' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-slate-200 overflow-x-auto max-h-80 p-2">
                  {apiTestResponse}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 3: INTERACTIVE STEP-BY-STEP TUTORIALS */}
      {activeSection === 'tutorials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-brand-sky font-semibold text-sm">
              <Play className="w-4 h-4" />
              <span>Interactive Tutorial 1: Proposal Automation</span>
            </div>
            <h4 className="text-base font-bold text-white">How to Generate an Executive Catering Quote</h4>
            <ol className="space-y-3 text-xs text-slate-300 list-decimal list-inside">
              <li>Open the <strong>Tasty Licka</strong> tab in the navigation bar.</li>
              <li>Scroll down to the <strong>Instant Proposal Calculator</strong>.</li>
              <li>Select your event guest count (e.g., 100 guests).</li>
              <li>Choose package tier: <em>Kickoff ($28/guest)</em>, <em>Celebration ($65/guest)</em>, or <em>Legacy ($120/guest)</em>.</li>
              <li>Click <strong>Generate Instant Proposal</strong>.</li>
              <li>View itemized quote, 30% date-lock deposit calculation, and Texas sales tax breakdown.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
              <Play className="w-4 h-4" />
              <span>Interactive Tutorial 2: Google Maps Lead Extraction</span>
            </div>
            <h4 className="text-base font-bold text-white">How to Hunt & Ingest Local B2B Prospects</h4>
            <ol className="space-y-3 text-xs text-slate-300 list-decimal list-inside">
              <li>Navigate to the <strong>Google Maps Hunter</strong> tab.</li>
              <li>Enter target category (e.g., <em>"Event Planners"</em> or <em>"Venues"</em>).</li>
              <li>Type target city (e.g., <em>"Frisco, TX"</em> or <em>"Dallas, TX"</em>).</li>
              <li>Click <strong>Execute Lead Hunt</strong> to extract phone numbers and ratings.</li>
              <li>Click <strong>Ingest All to GHL</strong> to push contacts directly into your GoHighLevel subaccount.</li>
            </ol>
          </div>
        </div>
      )}

      {/* SECTION 4: KNOWLEDGE BASE SEARCH */}
      {activeSection === 'faq' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search knowledge base & troubleshooting guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-brand-sky text-sm"
              />
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-semibold text-white text-sm flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-brand-sky" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: CUSTOMER SUPPORT & SLA PORTAL */}
      {activeSection === 'support' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <LifeBuoy className="w-5 h-5 text-brand-sky" />
              <span>Submit Priority Support Ticket</span>
            </h3>

            {supportSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 animate-bounce" />
                <h4 className="font-bold text-white text-base">Support Ticket Received!</h4>
                <p className="text-xs text-slate-300">
                  Rick Jefferson's system engineering team has received your request. Estimated SLA response time: <strong>under 1 hour</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSupportSubmitted(true); }} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Your Full Name</label>
                    <input required type="text" placeholder="Rick Jefferson" className="w-full p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-brand-sky" />
                  </div>
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Email Address</label>
                    <input required type="email" placeholder="support@rjbusinesssolutions.org" className="w-full p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-brand-sky" />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Select Module / Category</label>
                  <select className="w-full p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-brand-sky">
                    <option>GoHighLevel Multi-Location Sync</option>
                    <option>Tasty Licka Proposal Generator</option>
                    <option>Google Maps Lead Hunter</option>
                    <option>AI Studio & Multimodal Routing</option>
                    <option>General System Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Issue Description & Steps to Reproduce</label>
                  <textarea required rows={4} placeholder="Describe the behavior or request..." className="w-full p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-brand-sky"></textarea>
                </div>

                <button type="submit" className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue/80 transition-all flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Support Ticket to Systems Team</span>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider font-mono">
                📞 Direct Contact Hotline
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-3 p-2 rounded-lg bg-white/5">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="font-bold text-white">Toll-Free Support</p>
                    <p className="font-mono text-slate-400">(866) 752-4618</p>
                  </div>
                </li>

                <li className="flex items-center space-x-3 p-2 rounded-lg bg-white/5">
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <div>
                    <p className="font-bold text-white">Executive Direct Line</p>
                    <p className="font-mono text-slate-400">(945) 308-8003</p>
                  </div>
                </li>

                <li className="flex items-center space-x-3 p-2 rounded-lg bg-white/5">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="font-bold text-white">Support Email</p>
                    <p className="font-mono text-slate-400">support@rjbusinesssolutions.org</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
