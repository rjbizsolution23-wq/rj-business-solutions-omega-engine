import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Globe,
  TrendingUp,
  DollarSign,
  Send,
  CheckCircle2,
  Copy,
  AlertTriangle,
  Building2,
  Sparkles,
  Zap,
  Phone,
  FileText,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface LocalProposalTier {
  name: string;
  price: number;
  monthlyRecurring: number;
  deliverables: string[];
}

interface LocalProposal {
  proposalId: string;
  businessName: string;
  targetCategory: string;
  address: string;
  phone: string;
  opportunityScore: number;
  auditSummary: string;
  missedRevenueEstimateMonthly: number;
  coreSolutions: {
    websiteAndMobile: string;
    localSEOAndGoogleRanking: string;
    automationAndSpeedToLead: string;
    crmAndPipelines: string;
  };
  pricingTiers: LocalProposalTier[];
  smsOutreachMessage: string;
  proposalUrl: string;
}

export const GoogleMapsHunterHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('Roofers in Dallas TX');
  const [city, setCity] = useState<string>('Dallas, TX');
  const [filterNoSiteOnly, setFilterNoSiteOnly] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [report, setReport] = useState<any>(null);
  const [selectedProposal, setSelectedProposal] = useState<LocalProposal | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [dispatchStatus, setDispatchStatus] = useState<string>('');

  const handleSearchGoogleMaps = async () => {
    setIsSearching(true);
    setReport(null);
    setSelectedProposal(null);
    setDispatchStatus('');

    try {
      const res = await fetch('/api/pipelines/google-maps-hunter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuery,
          city: city,
          maxResults: 6,
          filterNeedsWebsiteOnly: filterNoSiteOnly
        })
      });

      const data = await res.json();
      if (data.success && data.report) {
        setReport(data.report);
        if (data.report.proposalsGenerated?.length > 0) {
          setSelectedProposal(data.report.proposalsGenerated[0]);
        }
      } else {
        throw new Error(data.error || 'Failed to search Google Maps');
      }
    } catch (err: any) {
      alert(`Google Maps Hunter Error: ${err.message}`);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSendSMS = async (proposal: LocalProposal) => {
    try {
      const res = await fetch('/api/telephony/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: proposal.phone,
          message: proposal.smsOutreachMessage
        })
      });
      const data = await res.json();
      setDispatchStatus(`✅ Proposal SMS dispatched to ${proposal.businessName} (${proposal.phone})`);
    } catch (err: any) {
      setDispatchStatus(`⚠️ SMS Notice: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 p-8 border border-emerald-500/20 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>GOOGLE MAPS RADAR · LOCAL B2B REVENUE HUNTER</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-white tracking-tight sm:text-4xl">
            Google Maps Business Hunter & Automated Proposal Engine
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Scouts local businesses across any city, detects businesses that lack websites, suffer from poor local SEO, or lose customers to slow speed-to-lead, and automatically builds interactive full-scope digital transformation proposals with 1-click GHL CRM ingestion.
          </p>
        </div>
      </div>

      {/* Search & Radar Controls */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="text-lg font-bold text-white">Target Territory & Category Radar</h2>
              <p className="text-xs text-slate-400">Search local high-ticket service industries across DFW and nationwide.</p>
            </div>
          </div>
          <span className="mono-badge text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            AUTO-SYNC TO RJ GHL SUBACCOUNT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Google Maps Search Query:
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Roofers in Dallas TX, Plumbers Arlington TX"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              City / Metro Region:
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Dallas, TX or Arlington, TX"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSearchGoogleMaps}
              disabled={isSearching}
              className="w-full h-[42px] inline-flex items-center justify-center space-x-2 px-6 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white text-xs font-bold shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
            >
              {isSearching ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <Search className="w-4 h-4 fill-white" />
              )}
              <span>{isSearching ? 'Scouting Google Maps & Generating Proposals...' : 'Scout Google Maps & Generate Proposals'}</span>
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">High-Ticket Suggestions:</span>
          {[
            'Roofers in Dallas TX',
            'Plumbers in Arlington TX',
            'Commercial HVAC Dallas TX',
            'Dentists in Plano TX',
            'Luxury Event Venues Fort Worth TX',
            'Auto Detailing in Frisco TX'
          ].map((s) => (
            <button
              key={s}
              onClick={() => {
                setSearchQuery(s);
                setCity(s.split(' in ')[1] || 'Dallas, TX');
              }}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-emerald-500/50 transition-all"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Live Scouted Results & Proposal View */}
      {report && (
        <div className="space-y-8 animate-fade-in">
          {/* Top Status Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border border-white/10 bg-slate-900/40">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Businesses Scanned</span>
              <p className="text-2xl font-bold text-white mt-1">{report.businessesScanned}</p>
              <p className="text-xs text-emerald-400 mt-1">✓ Digital gaps audited on Google Maps</p>
            </div>

            <div className="glass-card rounded-xl p-4 border border-white/10 bg-slate-900/40">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Total Missed Revenue Exposed</span>
              <p className="text-2xl font-bold text-amber-400 mt-1">
                ${report.proposalsGenerated.reduce((acc: number, p: any) => acc + p.missedRevenueEstimateMonthly, 0).toLocaleString()}/mo
              </p>
              <p className="text-xs text-slate-400 mt-1">Lost to missing speed-to-lead & outdated sites</p>
            </div>

            <div className="glass-card rounded-xl p-4 border border-emerald-500/30 bg-emerald-950/20">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">GHL CRM Synced</span>
              <p className="text-2xl font-bold text-emerald-300 mt-1">{report.ghlSyncSummary?.syncedCount} Prospects</p>
              <p className="text-xs text-slate-400 mt-1">Location: {report.ghlSyncSummary?.locationId}</p>
            </div>
          </div>

          {dispatchStatus && (
            <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{dispatchStatus}</span>
            </div>
          )}

          {/* Master Split View: Business List vs Interactive Proposal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Scouted Business List */}
            <div className="space-y-3 lg:col-span-1">
              <h3 className="text-sm font-bold font-mono text-slate-300 uppercase tracking-wider">
                Audited Businesses ({report.proposalsGenerated?.length})
              </h3>

              {report.proposalsGenerated?.map((prop: LocalProposal, idx: number) => {
                const isSelected = selectedProposal?.proposalId === prop.proposalId;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedProposal(prop)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500 shadow-lg ring-1 ring-emerald-500/50'
                        : 'glass-card border-white/10 hover:border-white/20 bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{prop.businessName}</h4>
                        <span className="text-xs text-slate-400">{prop.targetCategory}</span>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Score: {prop.opportunityScore}%
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-400 font-semibold">
                        -${prop.missedRevenueEstimateMonthly.toLocaleString()}/mo
                      </span>
                      <span className="text-emerald-400 flex items-center space-x-1">
                        <span>View Proposal</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Full Comprehensive Proposal Viewer */}
            {selectedProposal && (
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6 lg:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                      Proposal ID: {selectedProposal.proposalId}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {selectedProposal.businessName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{selectedProposal.address}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSendSMS(selectedProposal)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send 1-Click SMS Proposal</span>
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedProposal.proposalUrl);
                        setCopiedIndex(1);
                        setTimeout(() => setCopiedIndex(null), 2000);
                      }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
                      title="Copy Proposal Link"
                    >
                      {copiedIndex === 1 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Audit & Opportunity Summary */}
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold font-mono uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Digital Audit Findings & Revenue Leakage</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {selectedProposal.auditSummary}
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-amber-300 font-mono font-bold">
                    <span>Estimated Monthly Revenue Loss:</span>
                    <span className="text-amber-400 text-sm">
                      ${selectedProposal.missedRevenueEstimateMonthly.toLocaleString()}/mo
                    </span>
                  </div>
                </div>

                {/* 4 Core Transformation Pillars */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Comprehensive Solution Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg bg-slate-950/80 border border-white/5 space-y-1">
                      <span className="text-emerald-400 font-mono font-bold block">
                        1. Modern Edge Web Architecture
                      </span>
                      <p className="text-slate-300">{selectedProposal.coreSolutions.websiteAndMobile}</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-950/80 border border-white/5 space-y-1">
                      <span className="text-blue-400 font-mono font-bold block">
                        2. Google Local Pack Top-3 SEO
                      </span>
                      <p className="text-slate-300">{selectedProposal.coreSolutions.localSEOAndGoogleRanking}</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-950/80 border border-white/5 space-y-1">
                      <span className="text-purple-400 font-mono font-bold block">
                        3. 60-Second SMS Speed-to-Lead
                      </span>
                      <p className="text-slate-300">{selectedProposal.coreSolutions.automationAndSpeedToLead}</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-950/80 border border-white/5 space-y-1">
                      <span className="text-indigo-400 font-mono font-bold block">
                        4. Custom GoHighLevel Pipeline
                      </span>
                      <p className="text-slate-300">{selectedProposal.coreSolutions.crmAndPipelines}</p>
                    </div>
                  </div>
                </div>

                {/* 3-Tier Investment Options */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Investment Packages & ROI
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProposal.pricingTiers.map((tier, tIdx) => (
                      <div
                        key={tIdx}
                        className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
                          tIdx === 1
                            ? 'bg-blue-950/40 border-brand-blue ring-1 ring-brand-blue/50'
                            : 'bg-slate-950/60 border-white/10'
                        }`}
                      >
                        <div>
                          <span className="text-[10px] font-mono text-brand-sky uppercase font-bold">
                            {tier.name.split(':')[0]}
                          </span>
                          <h5 className="text-sm font-bold text-white mt-0.5">{tier.name.split(':')[1] || tier.name}</h5>
                          <div className="mt-2">
                            <span className="text-xl font-bold text-white">${tier.price.toLocaleString()}</span>
                            <span className="text-[10px] text-slate-400 font-mono ml-1">
                              + ${tier.monthlyRecurring}/mo
                            </span>
                          </div>
                          <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                            {tier.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-start space-x-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SMS Pitch Preview */}
                <div className="p-3.5 rounded-lg bg-slate-950 border border-white/10 space-y-1.5 text-xs font-mono">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Ready-to-Send SMS Pitch (via Twilio +1-866-752-4618):
                  </span>
                  <p className="text-slate-300">{selectedProposal.smsOutreachMessage}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
