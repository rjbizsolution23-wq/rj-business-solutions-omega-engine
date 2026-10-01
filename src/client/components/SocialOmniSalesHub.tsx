import React, { useState } from 'react';
import {
  Search,
  Zap,
  Globe,
  TrendingUp,
  MessageSquare,
  Send,
  CheckCircle2,
  Copy,
  AlertCircle,
  Share2,
  Users,
  Target,
  ShieldAlert,
  Flame,
  ChevronRight,
  Sparkles,
  Bot
} from 'lucide-react';

interface BuyerLead {
  platform: string;
  authorOrUsername: string;
  postOrCommentUrl: string;
  painPointSummary: string;
  buyingSignalScore: number;
  intentCategory: 'READY_TO_BUY' | 'DISSATISFIED_WITH_COMPETITOR' | 'LOOKING_FOR_RECOMMENDATIONS' | 'INFORMATION_SEEKING';
  recommendedSolution: string;
  generatedPitch: string;
  contactInfo?: {
    email?: string;
    phone?: string;
    website?: string;
  };
}

interface CompetitorInfo {
  competitorName: string;
  profileUrl: string;
  engagementRating: string;
  topOffersAndPricing: string;
  customerComplaints: string[];
  marketVulnerabilities: string[];
  opportunityForRJ: string;
}

export const SocialOmniSalesHub: React.FC = () => {
  const [niche, setNiche] = useState<string>('Luxury Mobile Cocktail Bar & Event Catering');
  const [region, setRegion] = useState<string>('Dallas-Fort Worth, TX');
  const [productCategory, setProductCategory] = useState<'tasty-licka' | 'rj-automation' | 'smart-fcra' | 'ministry'>('tasty-licka');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram', 'facebook', 'reddit']);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanReport, setScanReport] = useState<any>(null);
  const [copiedPitchIndex, setCopiedPitchIndex] = useState<number | null>(null);
  const [dispatchedIndex, setDispatchedIndex] = useState<number | null>(null);
  const [dispatchStatus, setDispatchStatus] = useState<string>('');

  const togglePlatform = (p: string) => {
    if (selectedPlatforms.includes(p)) {
      setSelectedPlatforms(selectedPlatforms.filter((item) => item !== p));
    } else {
      setSelectedPlatforms([...selectedPlatforms, p]);
    }
  };

  const handleRunOmniScan = async () => {
    setIsScanning(true);
    setScanReport(null);
    setDispatchStatus('');

    try {
      const res = await fetch('/api/social-omni/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nicheOrTopic: niche,
          targetCityOrRegion: region,
          platforms: selectedPlatforms,
          productCategory
        })
      });

      const data = await res.json();
      if (data.success && data.report) {
        setScanReport(data.report);
      } else {
        throw new Error(data.error || 'Failed to complete scan');
      }
    } catch (err: any) {
      alert(`Scan Notice: ${err.message}`);
    } finally {
      setIsScanning(false);
    }
  };

  const handleDispatchSMS = async (lead: BuyerLead, index: number) => {
    setDispatchedIndex(index);
    try {
      const res = await fetch('/api/social-omni/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead })
      });
      const data = await res.json();
      setDispatchStatus(data.message || 'Pitch dispatched successfully');
    } catch (err: any) {
      setDispatchStatus(`Dispatch Notice: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 p-8 border border-indigo-500/20 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-sky border border-brand-sky/30 text-xs font-mono">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>OMNIPRESENT SOCIAL RADAR · MULTI-NETWORK BUYER ENGINE</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-white tracking-tight sm:text-4xl">
            Social Media Intelligence & Sales Generation System
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Continuously scans TikTok, Instagram, Facebook Groups, Reddit, and YouTube to extract real-time buyer demand, expose competitor weaknesses, generate hyper-targeted solution pitches, and sync leads directly into GoHighLevel with 60-second follow-up triggers.
          </p>
        </div>
      </div>

      {/* Configuration & Targeting Control Panel */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-brand-sky" />
            <div>
              <h2 className="text-lg font-bold text-white">Niche & Social Network Radar Targeting</h2>
              <p className="text-xs text-slate-400">Configure your target keyword, geographic territory, and solution brand.</p>
            </div>
          </div>
          <span className="mono-badge text-xs px-2.5 py-1 rounded-full bg-brand-sky/10 text-brand-sky border border-brand-sky/30">
            AUTO-SYNC TO GHL CRM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Target Niche / Buyer Search Topic:
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Wedding Mobile Bar, Credit Automation, CRM Leads"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Target Market / Territory:
            </label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="e.g. Dallas-Fort Worth, TX or National US"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Target Solution Brand & GHL Subaccount:
            </label>
            <select
              value={productCategory}
              onChange={(e: any) => setProductCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-blue"
            >
              <option value="tasty-licka">Tasty Licka™ Catering & Mobile Bar (0TOBkf...)</option>
              <option value="rj-automation">RJ Business Solutions Edge Infrastructure (DvKRM...)</option>
              <option value="smart-fcra">SMART FCRA Credit Technology (aBL9b...)</option>
              <option value="ministry">Contracting Preacher Outreach (wBPmI...)</option>
            </select>
          </div>
        </div>

        {/* Platform Selectors */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-2">
            Active Social Networks & Community Scanners:
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'tiktok', label: 'TikTok Trends & Comments' },
              { id: 'instagram', label: 'Instagram Niche Pages & DMs' },
              { id: 'facebook', label: 'Facebook Groups & Communities' },
              { id: 'reddit', label: 'Reddit Pain Point Subs (r/Dallas, r/smallbusiness)' },
              { id: 'youtube', label: 'YouTube Video Comments & Transcripts' },
              { id: 'linkedin', label: 'LinkedIn Decision Makers' }
            ].map((p) => {
              const active = selectedPlatforms.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                    active
                      ? 'bg-brand-blue/30 border-brand-sky text-white shadow-rj-blue font-semibold'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs font-mono text-slate-400">
            Powered by: <span className="text-brand-sky">Apify + Bright Data SERP + Gemini 1.5 + GoHighLevel V2</span>
          </div>

          <button
            onClick={handleRunOmniScan}
            disabled={isScanning}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 text-white text-xs font-bold shadow-xl hover:opacity-95 transition-all disabled:opacity-50"
          >
            {isScanning ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <Search className="w-4 h-4 fill-white" />
            )}
            <span>{isScanning ? 'Scanning Social Media & Analyzing Demand...' : 'Launch Social Media Intelligence Radar'}</span>
          </button>
        </div>
      </div>

      {/* Live Scan Results View */}
      {scanReport && (
        <div className="space-y-8 animate-fade-in">
          {/* Market Overview & Opportunity Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass-card rounded-xl p-5 border border-white/10 bg-slate-900/60 space-y-2 md:col-span-2">
              <div className="flex items-center space-x-2 text-brand-sky text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Market Opportunity Synthesis</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {scanReport.marketOpportunitySummary}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                {scanReport.highestConvertingAngles?.map((angle: string, i: number) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    ⚡ {angle}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border border-emerald-500/30 bg-emerald-950/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  CRM SYNC ENGINE
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {scanReport.ghlSyncSummary?.syncedCount} Leads Ingested
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Pushed into Subaccount: <span className="text-emerald-300 font-mono">{scanReport.ghlSyncSummary?.targetLocationId}</span>
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tags & Custom Fields Synced</span>
              </div>
            </div>
          </div>

          {/* Competitor Analysis & Weakness Matrix */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center space-x-3">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-base font-bold text-white">Competitor Weaknesses & RJ Exploitation Angles</h3>
                <p className="text-xs text-slate-400">Where competing vendors fail on social media and how we win.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scanReport.competitorsAudited?.map((comp: CompetitorInfo, idx: number) => (
                <div key={idx} className="rounded-xl bg-slate-950/60 p-4 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{comp.competitorName}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {comp.engagementRating}
                    </span>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Social Complaints:</strong> {comp.customerComplaints?.join(', ')}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Market Vulnerabilities:</strong> {comp.marketVulnerabilities?.join(', ')}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-brand-sky">
                    🎯 <strong>RJ Winning Move:</strong> {comp.opportunityForRJ}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High-Intent Buyer Lead Discovery Feed */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <Flame className="w-5 h-5 text-brand-sky" />
                <div>
                  <h3 className="text-lg font-bold text-white">Active Social Buying Signals & Instant DM Pitches</h3>
                  <p className="text-xs text-slate-400">Real social discussions classified with custom value-first solutions.</p>
                </div>
              </div>
              {dispatchStatus && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {dispatchStatus}
                </span>
              )}
            </div>

            <div className="space-y-4">
              {scanReport.leadsDiscovered?.map((lead: BuyerLead, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-950/80 p-5 border border-white/10 hover:border-brand-sky/40 transition-all space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-brand-blue/20 text-brand-sky border border-brand-sky/30">
                        {lead.platform}
                      </span>
                      <span className="text-sm font-bold text-white">{lead.authorOrUsername}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Signal Score: {lead.buyingSignalScore}%
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {lead.intentCategory}
                      </span>
                    </div>
                  </div>

                  {/* Pain Point & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-slate-400 font-mono block text-[10px] uppercase mb-1">
                        Detected Need / Pain Point:
                      </span>
                      <p className="text-slate-200">{lead.painPointSummary}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/20">
                      <span className="text-brand-sky font-mono block text-[10px] uppercase mb-1">
                        Recommended Solution:
                      </span>
                      <p className="text-blue-100 font-medium">{lead.recommendedSolution}</p>
                    </div>
                  </div>

                  {/* Hyper-Personalized Pitch */}
                  <div className="rounded-lg bg-slate-900 p-3.5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <Bot className="w-3.5 h-3.5 text-brand-sky" />
                        <span>Generated Value-First Pitch / Social DM:</span>
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(lead.generatedPitch);
                          setCopiedPitchIndex(idx);
                          setTimeout(() => setCopiedPitchIndex(null), 2000);
                        }}
                        className="inline-flex items-center space-x-1 text-slate-300 hover:text-white"
                      >
                        {copiedPitchIndex === idx ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedPitchIndex === idx ? 'Copied' : 'Copy Pitch'}</span>
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed bg-black/40 p-2.5 rounded border border-white/5">
                      {lead.generatedPitch}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="text-xs font-mono text-slate-400">
                      {lead.contactInfo?.email && <span className="mr-3">📧 {lead.contactInfo.email}</span>}
                      {lead.contactInfo?.phone && <span>📱 {lead.contactInfo.phone}</span>}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDispatchSMS(lead, idx)}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send 1-Click Pitch</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
