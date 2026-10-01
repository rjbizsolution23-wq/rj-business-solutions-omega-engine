import React, { useState } from 'react';
import {
  Sparkles,
  Shield,
  Copy,
  Check,
  ExternalLink,
  Flame,
  Wine,
  Layers,
  Code2,
  Send,
  Workflow,
  CheckCircle,
  Tag,
  Sliders,
  DollarSign,
  FileText,
  Calendar,
  Building2,
  Download,
  Bot
} from 'lucide-react';
import { TASTY_LICKA_BLUEPRINT } from '../../services/tastyLickaBlueprint';

export const TastyLickaHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'fields' | 'values' | 'tags' | 'pipelines' | 'branding' | 'webhook'>('overview');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [webhookTesting, setWebhookTesting] = useState(false);
  const [webhookResult, setWebhookResult] = useState<any>(null);

  const handleCopy = (text: string, keyId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyId);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleTestWebhook = async () => {
    setWebhookTesting(true);
    setWebhookResult(null);
    try {
      const samplePayload = {
        firstName: 'Marcus',
        lastName: 'Vance',
        email: 'marcus.vance@dfwventures.com',
        phone: '+14695558833',
        event_type: 'Corporate Gala',
        event_date: '2026-11-14',
        guest_count: 120,
        catering_package_tier: 'Celebration Package ($65/pp)',
        wing_flavors: ['Hennessy Glazed', 'Don Julio Mango Habanero'],
        mobile_bar_service: 'Full Mobile Bar + TABC Bartender',
        notes: 'Annual DFW executive holiday gala. Need full mobile bar setup and spirit-infused wings for 120 guests.'
      };

      const res = await fetch('/api/webhooks/ghl/tasty-licka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(samplePayload)
      });
      const data = await res.json();
      setWebhookResult(data);
    } catch (err: any) {
      setWebhookResult({ error: err.message });
    } finally {
      setWebhookTesting(false);
    }
  };

  const downloadSnapshotJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(TASTY_LICKA_BLUEPRINT, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "tasty-licka-ghl-subaccount-snapshot.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner with Tasty Licka Luxury Brand Colors */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0e0608] via-[#1a0b10] to-[#2d121c] border border-[#C69C3D]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69C3D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#C69C3D]/20 text-[#E6C875] border border-[#C69C3D]/40">
                GHL SUBACCOUNT #5
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                100% TABC CERTIFIED & INSURED
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>ACTIVE BLUEPRINT</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-white tracking-tight">
              Tasty Licka™ · Catering & Mobile Bar Hub
            </h1>

            <p className="text-sm text-[#e8d5a7] max-w-3xl leading-relaxed">
              Complete GoHighLevel subaccount architecture for <strong>Angel Lewis</strong>. Featuring custom fields, custom values, luxury wine/gold brand theme, gameday & catering pipelines, and AI-powered inbound lead qualification.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <span className="flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-[#C69C3D]" />
                <span>Frisco / DFW, Texas</span>
              </span>
              <span>·</span>
              <span className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-[#C69C3D]" />
                <span>Permit #TX-8829104</span>
              </span>
              <span>·</span>
              <span className="flex items-center space-x-1.5">
                <Wine className="w-4 h-4 text-[#C69C3D]" />
                <span>Spirit-Infused Wings & Mobile Bar</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={downloadSnapshotJson}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs flex items-center justify-center space-x-2 border border-white/20 transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-[#C69C3D]" />
              <span>Export GHL Snapshot JSON</span>
            </button>

            <a
              href="https://tastylicka.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C69C3D] to-[#E6C875] text-[#0e0608] font-bold font-mono text-xs flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#C69C3D]/30 transition-all uppercase tracking-wider"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
        {[
          { id: 'overview', label: 'Overview & Specs', icon: Layers },
          { id: 'fields', label: `Custom Fields (${TASTY_LICKA_BLUEPRINT.customFields.length})`, icon: Sliders },
          { id: 'values', label: `Custom Values (${TASTY_LICKA_BLUEPRINT.customValues.length})`, icon: Code2 },
          { id: 'tags', label: 'Tag Taxonomy', icon: Tag },
          { id: 'pipelines', label: 'Pipelines & Workflows', icon: Workflow },
          { id: 'branding', label: 'GHL Custom CSS & JS', icon: Sparkles },
          { id: 'webhook', label: 'Inbound Webhook Tester', icon: Send }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#C69C3D] to-[#E6C875] text-[#0e0608] shadow-md font-bold'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION: OVERVIEW */}
      {activeSection === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-lg font-bold font-heading text-white flex items-center space-x-2">
                <Flame className="w-5 h-5 text-[#C69C3D]" />
                <span>Tasty Licka™ Subaccount Positioning & Operations</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tasty Licka™ is Dallas-Fort Worth's premier Black-woman-owned mobile craft cocktail bar and spirit-infused wing catering brand, founded by <strong>Angel Lewis</strong>. This subaccount automates high-ticket corporate catering quotes, luxury wedding bookings, and Dallas Cowboys gameday tailgate party boxes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] font-mono text-slate-400">KICKOFF PKG</p>
                  <p className="text-lg font-bold font-mono text-[#E6C875]">$28<span className="text-xs text-slate-400">/pp</span></p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] font-mono text-slate-400">CELEBRATION</p>
                  <p className="text-lg font-bold font-mono text-[#E6C875]">$65<span className="text-xs text-slate-400">/pp</span></p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] font-mono text-slate-400">LEGACY VIP</p>
                  <p className="text-lg font-bold font-mono text-[#E6C875]">$120<span className="text-xs text-slate-400">/pp</span></p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] font-mono text-slate-400">TABC STATUS</p>
                  <p className="text-xs font-bold font-mono text-emerald-400 mt-1">100% Insured</p>
                </div>
              </div>
            </div>

            {/* Signature Spirit-Infused Flavor Matrix */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-heading text-white flex items-center space-x-2">
                <Wine className="w-4 h-4 text-[#C69C3D]" />
                <span>Signature Spirit-Infused Wings & Cocktail Menu</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { name: 'Hennessy Glazed Wings', desc: 'Deep caramel cognac glaze with toasted sesame and scallions.' },
                  { name: 'Don Julio Mango Habanero', desc: 'Blanco tequila glaze with ripe mango puree and habanero kick.' },
                  { name: 'Crown Apple BBQ Wings', desc: 'Smoky Texas mesquite BBQ simmered with Crown Royal Regal Apple.' },
                  { name: 'Patron Citrus Gold', desc: 'Zesty lime, orange peel, and gold agave nectar glaze.' },
                  { name: 'Pineapple Moonshine Jars', desc: '16oz mason jars soaked in premium high-proof moonshine.' },
                  { name: 'Dallas Gold Rush Cocktail', desc: 'Bourbon, local wildflower honey syrup, fresh lemon juice.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <p className="font-bold text-[#E6C875]">{item.name}</p>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Contacts & GHL Credentials */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-[#C69C3D]/20 space-y-4">
              <h3 className="text-sm font-bold font-mono text-[#E6C875] uppercase tracking-wider">
                SUBACCOUNT METADATA
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">ORGANIZATION NAME</p>
                  <p className="text-white font-semibold">{TASTY_LICKA_BLUEPRINT.locationName}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">FOUNDER / OPERATOR</p>
                  <p className="text-white font-semibold">{TASTY_LICKA_BLUEPRINT.founder}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">HEADQUARTERS</p>
                  <p className="text-white font-semibold">{TASTY_LICKA_BLUEPRINT.headquarters}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">LOCAL PHONE</p>
                  <p className="text-white font-semibold">{TASTY_LICKA_BLUEPRINT.phone}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">BOOKING INBOX</p>
                  <p className="text-white font-semibold">{TASTY_LICKA_BLUEPRINT.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-mono text-[10px]">DEDICATED WEBHOOK URL</p>
                  <code className="text-[11px] text-brand-sky break-all">
                    https://rj-agency-omega.workers.dev/api/webhooks/ghl/tasty-licka
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: CUSTOM FIELDS */}
      {activeSection === 'fields' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl glass-card border border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-base font-bold font-heading text-white">
                Tasty Licka Custom Field Schemas ({TASTY_LICKA_BLUEPRINT.customFields.length})
              </h3>
              <p className="text-xs text-slate-300">
                Created to capture event dates, guest counts, wing flavor choices, bar packages, and AI lead scores.
              </p>
            </div>
            <button
              onClick={() => handleCopy(JSON.stringify(TASTY_LICKA_BLUEPRINT.customFields, null, 2), 'all-fields')}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs flex items-center space-x-1.5 border border-white/10 transition-all self-start sm:self-auto"
            >
              {copiedKey === 'all-fields' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy All Fields JSON</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TASTY_LICKA_BLUEPRINT.customFields.map((field, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card border border-white/10 space-y-2 hover:border-[#C69C3D]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-heading">{field.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#E6C875] border border-white/10">
                    {field.dataType}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                  <span className="text-slate-400 truncate">{field.key}</span>
                  <button
                    onClick={() => handleCopy(`{{ ${field.key} }}`, `field-${idx}`)}
                    className="text-slate-400 hover:text-white ml-2 flex items-center space-x-1"
                    title="Copy Merge Tag"
                  >
                    {copiedKey === `field-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <p className="text-xs text-slate-300">{field.description}</p>
                {field.options && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {field.options.map((opt, oIdx) => (
                      <span key={oIdx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20">
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: CUSTOM VALUES */}
      {activeSection === 'values' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl glass-card border border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-base font-bold font-heading text-white">
                Tasty Licka Custom Values ({TASTY_LICKA_BLUEPRINT.customValues.length})
              </h3>
              <p className="text-xs text-slate-300">
                Universal merge variables for GHL SMS, Email templates, and Funnel pages.
              </p>
            </div>
            <button
              onClick={() => handleCopy(JSON.stringify(TASTY_LICKA_BLUEPRINT.customValues, null, 2), 'all-values')}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs flex items-center space-x-1.5 border border-white/10 transition-all self-start sm:self-auto"
            >
              {copiedKey === 'all-values' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Values JSON</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TASTY_LICKA_BLUEPRINT.customValues.map((val, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-heading">{val.name}</span>
                  <button
                    onClick={() => handleCopy(`{{ ${val.key} }}`, `val-${idx}`)}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#E6C875] hover:bg-white/20 transition-all flex items-center space-x-1"
                  >
                    {copiedKey === `val-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{`{{ ${val.key} }}`}</span>
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-200 bg-black/40 p-2 rounded-md border border-white/5 break-all">
                  {val.value}
                </p>
                <p className="text-[11px] text-slate-400">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: TAGS */}
      {activeSection === 'tags' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl glass-card border border-white/10">
            <h3 className="text-base font-bold font-heading text-white">
              Tasty Licka 25+ Tag Taxonomy Architecture
            </h3>
            <p className="text-xs text-slate-300">
              Categorized tags to route leads, assign bartender teams, track gameday orders, and reward repeat VIPs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TASTY_LICKA_BLUEPRINT.tags.map((group, idx) => (
              <div key={idx} className="p-5 rounded-xl glass-card border border-white/10 space-y-3">
                <h4 className="text-xs font-bold font-mono text-[#E6C875] uppercase tracking-wider flex items-center space-x-2">
                  <Tag className="w-3.5 h-3.5 text-[#C69C3D]" />
                  <span>{group.category}</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tagItem, tIdx) => (
                    <span
                      key={tIdx}
                      onClick={() => handleCopy(tagItem, `tag-${idx}-${tIdx}`)}
                      className="cursor-pointer text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-all flex items-center space-x-1"
                    >
                      <span>{tagItem}</span>
                      {copiedKey === `tag-${idx}-${tIdx}` && <Check className="w-3 h-3 text-emerald-400" />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: PIPELINES & WORKFLOWS */}
      {activeSection === 'pipelines' && (
        <div className="space-y-6">
          {TASTY_LICKA_BLUEPRINT.pipelines.map((pipeline, pIdx) => (
            <div key={pIdx} className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-heading text-white flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-[#C69C3D]" />
                <span>Pipeline {pIdx + 1}: {pipeline.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
                {pipeline.stages.map((stage, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }}></span>
                      <span className="text-[11px] font-bold font-mono text-white truncate">{stage.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Workflow Triggers */}
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <h3 className="text-base font-bold font-heading text-white flex items-center space-x-2">
              <Bot className="w-4 h-4 text-[#C69C3D]" />
              <span>Automated Workflow Recipes</span>
            </h3>

            <div className="space-y-3">
              {TASTY_LICKA_BLUEPRINT.workflowTriggers.map((wf, wIdx) => (
                <div key={wIdx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#E6C875]">{wf.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">Trigger: {wf.trigger}</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {wf.actions.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-[#C69C3D] flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION: BRANDING THEME */}
      {activeSection === 'branding' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Custom CSS */}
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-heading text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#C69C3D]" />
                <span>Tasty Licka Custom CSS</span>
              </h3>
              <button
                onClick={() => handleCopy(`/api/ghl/branding/tasty-licka.css`, 'css-url')}
                className="text-xs font-mono text-[#E6C875] hover:text-white flex items-center space-x-1"
              >
                {copiedKey === 'css-url' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy Endpoint URL</span>
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Paste in <strong>Tasty Licka Subaccount Settings ➔ Company ➔ Custom CSS</strong>.
            </p>
            <pre className="p-4 rounded-xl bg-black/60 text-xs font-mono text-slate-300 border border-white/5 max-h-80 overflow-y-auto custom-scrollbar">
{`/* 🍸 Tasty Licka Luxury Gold & Wine GHL Theme */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');

:root {
  --tl-gold: #C69C3D;
  --tl-wine: #1a0b10;
  --tl-charcoal: #0e0608;
  --font-luxury: "Playfair Display", Georgia, serif;
}

#sidebar-v2 {
  background: var(--tl-charcoal) !important;
  border-right: 1px solid rgba(198, 156, 61, 0.2) !important;
}

.btn-primary {
  background: linear-gradient(135deg, #C69C3D 0%, #E6C875 100%) !important;
  color: #0e0608 !important;
  font-weight: 700 !important;
}`}
            </pre>
          </div>

          {/* Custom JS */}
          <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-heading text-white flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#C69C3D]" />
                <span>Tasty Licka Custom JavaScript</span>
              </h3>
              <button
                onClick={() => handleCopy(`/api/ghl/branding/tasty-licka.js`, 'js-url')}
                className="text-xs font-mono text-[#E6C875] hover:text-white flex items-center space-x-1"
              >
                {copiedKey === 'js-url' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy Endpoint URL</span>
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Paste in <strong>Tasty Licka Subaccount Settings ➔ Company ➔ Custom JavaScript</strong>.
            </p>
            <pre className="p-4 rounded-xl bg-black/60 text-xs font-mono text-slate-300 border border-white/5 max-h-80 overflow-y-auto custom-scrollbar">
{`// 🍸 Tasty Licka Font & Badge Injector
(function () {
  'use strict';
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Chakra+Petch:wght@600;700&display=swap';
  document.head.appendChild(link);
})();`}
            </pre>
          </div>
        </div>
      )}

      {/* SECTION: WEBHOOK TESTER */}
      {activeSection === 'webhook' && (
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-6">
          <div>
            <h3 className="text-base font-bold font-heading text-white">
              Tasty Licka Inbound Webhook Automation Engine
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Trigger a live catering lead test payload through the Omega Edge AI pipeline.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <p className="text-[10px] font-mono text-slate-400">INBOUND WEBHOOK URL</p>
            <code className="text-xs font-mono text-[#E6C875] break-all">
              https://rj-agency-omega.workers.dev/api/webhooks/ghl/tasty-licka
            </code>
          </div>

          <div>
            <button
              onClick={handleTestWebhook}
              disabled={webhookTesting}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C69C3D] to-[#E6C875] text-[#0e0608] font-bold font-mono text-xs flex items-center space-x-2 shadow-lg disabled:opacity-50 transition-all uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              <span>{webhookTesting ? 'Enriching via NVIDIA NIM & ElevenLabs...' : 'Send Live Test Catering Lead'}</span>
            </button>
          </div>

          {webhookResult && (
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                WEBHOOK EXECUTION RESPONSE
              </span>
              <pre className="text-xs font-mono text-slate-300 overflow-x-auto">
                {JSON.stringify(webhookResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
