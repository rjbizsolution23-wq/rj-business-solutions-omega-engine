import React, { useState } from 'react';
import {
  Globe,
  Search,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Play,
  CheckCircle,
  Copy,
  Terminal,
  ShieldCheck,
  Zap,
  Code2,
  Database
} from 'lucide-react';

interface IntegrationCard {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'configured' | 'trial';
  keyPrefix: string;
  docsUrl: string;
  description: string;
  endpoints: string[];
}

const INTEGRATIONS: IntegrationCard[] = [
  {
    id: 'rtrvr',
    name: 'Rtrvr.ai Web Agent',
    category: 'Autonomous Browsing',
    status: 'active',
    keyPrefix: 'rtrvr_hGPB6...',
    docsUrl: 'https://rtrvr.ai/docs/agent',
    description: 'Autonomous web agent for executing live multi-step browser tasks, scraping, and real-time page extraction.',
    endpoints: ['POST /api/rtrvr/agent', 'POST /api/rtrvr/extract']
  },
  {
    id: 'apollo',
    name: 'Apollo.io B2B Intelligence',
    category: 'Lead Enrichment',
    status: 'active',
    keyPrefix: 'v5NH1Njtp...',
    docsUrl: 'https://apolloio.github.io/apollo-api-docs/',
    description: 'Direct B2B decision-maker search, contact matching, email verification, and company organizational data.',
    endpoints: ['POST /api/apollo/match', 'POST /api/apollo/search', 'GET /api/apollo/org']
  },
  {
    id: 'builtwith',
    name: 'BuiltWith Tech Profiler',
    category: 'Tech Stack Audit',
    status: 'active',
    keyPrefix: '2febc5be-...',
    docsUrl: 'https://api.builtwith.com/',
    description: 'Domain technology profiler that detects CRMs, CMS platforms, analytics tags, payment gateways, and ad pixels.',
    endpoints: ['GET /api/builtwith/domain', 'GET /api/builtwith/summary']
  },
  {
    id: 'gemini',
    name: 'Google Gemini AI',
    category: 'Multimodal AI',
    status: 'active',
    keyPrefix: 'ai-f84a14...',
    docsUrl: 'https://ai.google.dev/docs',
    description: 'Next-gen multimodal reasoning, long-context document analysis, structured JSON generation, and copy synthesis.',
    endpoints: ['POST /api/gemini/generate']
  },
  {
    id: 'phyllo',
    name: 'Phyllo Creator Data',
    category: 'Creator Analytics',
    status: 'active',
    keyPrefix: '719d01dc-...',
    docsUrl: 'https://docs.getphyllo.com/',
    description: 'Universal creator data API aggregating follower counts, engagement rates, and content feeds across platforms.',
    endpoints: ['GET /api/phyllo/platforms', 'POST /api/phyllo/user', 'GET /api/phyllo/profiles']
  },
  {
    id: 'brightdata',
    name: 'Bright Data Unlocker & SERP',
    category: 'Web Intelligence',
    status: 'active',
    keyPrefix: 'E6e931fc-...',
    docsUrl: 'https://docs.brightdata.com/',
    description: 'Enterprise proxy network with automated CAPTCHA bypass, DOM unlocker, and Google SERP rank tracking.',
    endpoints: ['POST /api/brightdata/scrape', 'POST /api/brightdata/serp']
  },
  {
    id: 'jev',
    name: 'Jev AI Task Engine',
    category: 'Task Automation',
    status: 'active',
    keyPrefix: 'jev_pQqCv...',
    docsUrl: 'https://api.jev.ai/',
    description: 'Autonomous workflow agent for executing complex business logic and CRM processing instructions.',
    endpoints: ['POST /api/jev/task']
  },
  {
    id: 'github',
    name: 'GitHub CI/CD & Org Hub',
    category: 'DevOps & Source',
    status: 'active',
    keyPrefix: 'github_pat_11BV...',
    docsUrl: 'https://docs.github.com/rest',
    description: 'Programmatic repository creation, issue tracking, commit automation, and webhook receivers for rjbizsolution23-wq.',
    endpoints: ['GET /api/github/user', 'GET /api/github/repos', 'POST /api/github/create-repo']
  },
  {
    id: 'apify',
    name: 'Apify Actor Cloud',
    category: 'Web Scraping',
    status: 'active',
    keyPrefix: 'apify_api_Yhtl... (Actor: KNXxxRcLw...)',
    docsUrl: 'https://docs.apify.com/api/v2',
    description: 'Scalable cloud actor runners for Google Maps, LinkedIn company data, Instagram, and directory crawling.',
    endpoints: ['POST /api/leadgen/scrape']
  }
];

export const IntegrationsSuiteHub: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string>('rtrvr');
  const [testInput, setTestInput] = useState<string>('https://rjbusinesssolutions.org');
  const [promptInput, setPromptInput] = useState<string>('Extract core services, contact email, and executive founder');
  const [loading, setLoading] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<any>(null);
  const [copiedCurl, setCopiedCurl] = useState<boolean>(false);

  const handleRunTest = async () => {
    setLoading(true);
    setExecutionResult(null);

    try {
      if (selectedTool === 'rtrvr') {
        const res = await fetch('/api/rtrvr/extract', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: testInput, prompt: promptInput })
        });
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'builtwith') {
        const res = await fetch(`/api/builtwith/summary?domain=${encodeURIComponent(testInput)}`);
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'apollo') {
        const res = await fetch('/api/apollo/match', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ first_name: 'Rick', last_name: 'Jefferson', domain: testInput })
        });
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'phyllo') {
        const res = await fetch('/api/phyllo/platforms');
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'brightdata') {
        const res = await fetch('/api/brightdata/scrape', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: testInput })
        });
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'gemini') {
        const res = await fetch('/api/gemini/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: promptInput })
        });
        const data = await res.json();
        setExecutionResult(data);
      } else if (selectedTool === 'jev') {
        const res = await fetch('/api/jev/task', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: promptInput })
        });
        const data = await res.json();
        setExecutionResult(data);
      }
    } catch (err: any) {
      setExecutionResult({ success: false, error: err.message });
    } finally {
      setLoading(false);
    }
  };

  const getCurlSnippet = (toolId: string) => {
    switch (toolId) {
      case 'rtrvr':
        return `curl -X POST http://localhost:3000/api/rtrvr/extract \\\n  -H "Content-Type: application/json" \\\n  -d '{"url":"https://rjbusinesssolutions.org","prompt":"Extract services"}'`;
      case 'builtwith':
        return `curl "http://localhost:3000/api/builtwith/summary?domain=rjbusinesssolutions.org"`;
      case 'apollo':
        return `curl -X POST http://localhost:3000/api/apollo/match \\\n  -H "Content-Type: application/json" \\\n  -d '{"first_name":"Rick","last_name":"Jefferson","domain":"rjbusinesssolutions.org"}'`;
      case 'phyllo':
        return `curl "http://localhost:3000/api/phyllo/platforms"`;
      case 'brightdata':
        return `curl -X POST http://localhost:3000/api/brightdata/scrape \\\n  -H "Content-Type: application/json" \\\n  -d '{"url":"https://rjbusinesssolutions.org"}'`;
      case 'gemini':
        return `curl -X POST http://localhost:3000/api/gemini/generate \\\n  -H "Content-Type: application/json" \\\n  -d '{"prompt":"Summarize RJ Business Solutions"}'`;
      case 'jev':
        return `curl -X POST http://localhost:3000/api/jev/task \\\n  -H "Content-Type: application/json" \\\n  -d '{"prompt":"Run workflow check"}'`;
      default:
        return `curl http://localhost:3000/api/health`;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950 p-8 border border-blue-500/20 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OMEGA INTEGRATION SUITE · 18+ CONNECTED PROVIDERS</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-white tracking-tight sm:text-4xl">
            Enterprise Tool & API Hub
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Consolidated credentials, type-safe API wrappers, autonomous browser agents, B2B intelligence, tech profilers, and multimodal LLM engines wired into the RJ Business Solutions edge framework.
          </p>
        </div>
      </div>

      {/* Grid of Integrated Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {INTEGRATIONS.map((tool) => {
          const isSelected = selectedTool === tool.id;
          return (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`cursor-pointer rounded-xl p-5 transition-all border ${
                isSelected
                  ? 'bg-blue-950/40 border-brand-blue shadow-lg ring-1 ring-brand-blue/50'
                  : 'glass-card border-white/10 hover:border-white/20 bg-slate-900/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-sky">
                    {tool.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{tool.name}</h3>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  CONNECTED
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 truncate max-w-[150px]">
                  {tool.keyPrefix}
                </span>
                <a
                  href={tool.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center space-x-1 text-brand-sky hover:text-blue-300 font-medium"
                >
                  <span>Docs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Testing Console */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <Terminal className="w-5 h-5 text-brand-sky" />
            <div>
              <h2 className="text-lg font-bold text-white">
                Live Execution Console: {INTEGRATIONS.find((t) => t.id === selectedTool)?.name}
              </h2>
              <p className="text-xs text-slate-400">
                Trigger real-time edge calls directly through the Cloudflare Worker API.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(getCurlSnippet(selectedTool));
                setCopiedCurl(true);
                setTimeout(() => setCopiedCurl(false), 2000);
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10"
            >
              {copiedCurl ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCurl ? 'Copied cURL' : 'Copy cURL'}</span>
            </button>
          </div>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Target URL / Domain:
            </label>
            <input
              type="text"
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              placeholder="https://rjbusinesssolutions.org"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Instruction / Extraction Prompt:
            </label>
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="Extract contact and services"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Available Endpoints:{' '}
            <span className="text-brand-sky">
              {INTEGRATIONS.find((t) => t.id === selectedTool)?.endpoints.join(', ')}
            </span>
          </div>

          <button
            onClick={handleRunTest}
            disabled={loading}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-sky text-white text-xs font-semibold shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
            <span>{loading ? 'Executing Live Edge Request...' : 'Run Integration Request'}</span>
          </button>
        </div>

        {/* Output Inspector */}
        {executionResult && (
          <div className="rounded-xl bg-slate-950 p-4 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
              <span>Execution Result Payload</span>
              <span className={executionResult.success !== false ? 'text-emerald-400' : 'text-amber-400'}>
                {executionResult.success !== false ? '● 200 OK' : '● Warning / Notice'}
              </span>
            </div>
            <pre className="text-xs font-mono text-emerald-300 overflow-x-auto max-h-80 p-2">
              {JSON.stringify(executionResult, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
