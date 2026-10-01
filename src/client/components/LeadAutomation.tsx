import React, { useState } from 'react';
import { UserPlus, Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, Database, Webhook, Copy, Check } from 'lucide-react';

export const LeadAutomation: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: 'Marcus',
    lastName: 'Vance',
    phone: '+15055550199',
    email: 'marcus.vance@techcorp.com',
    notes: 'Interested in AI CRM automation, credit dispute processing, and custom AI lead routing for 15 sales reps.',
    targetLocationId: 'DvKRMVD9YudoS6xRyBfb',
    triggerVoiceMemo: true
  });

  const [loading, setLoading] = useState(false);
  const [pipelineResult, setPipelineResult] = useState<any>(null);

  const webhooksList = [
    {
      name: 'RJ Business Solutions (Primary)',
      locationId: 'DvKRMVD9YudoS6xRyBfb',
      endpoint: '/api/webhooks/ghl/rj-business-solutions',
      fullUrl: 'https://rj-agency-omega.workers.dev/api/webhooks/ghl/rj-business-solutions'
    },
    {
      name: 'SMART FCRA (Credit Tech)',
      locationId: 'aBL9bEdg3LoPKJ9RhPzE',
      endpoint: '/api/webhooks/ghl/smart-fcra',
      fullUrl: 'https://rj-agency-omega.workers.dev/api/webhooks/ghl/smart-fcra'
    },
    {
      name: 'Eugene Solutions',
      locationId: '1J5ooApb6gIuDiOen20e',
      endpoint: '/api/webhooks/ghl/eugene',
      fullUrl: 'https://rj-agency-omega.workers.dev/api/webhooks/ghl/eugene'
    },
    {
      name: 'Contracting Preacher',
      locationId: 'wBPmIpkN5dcwCCSc2kwz',
      endpoint: '/api/webhooks/ghl/contracting-preacher',
      fullUrl: 'https://rj-agency-omega.workers.dev/api/webhooks/ghl/contracting-preacher'
    }
  ];

  const handleCopyWebhook = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPipelineResult(null);

    try {
      const res = await fetch('/api/leads/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setPipelineResult(data);
    } catch (err: any) {
      setPipelineResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* GHL Webhook Endpoints Section */}
      <div className="p-6 rounded-2xl bg-dark-surface2 border border-brand-sky/30 shadow-rj-dark">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
            <Webhook className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-white">
              GoHighLevel Inbound Webhook Endpoints
            </h2>
            <p className="text-xs text-slate-300 font-mono mt-0.5">
              Paste these into GHL Automation Workflows ➔ Webhook Action (POST) to trigger autonomous AI processing
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {webhooksList.map((wh, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl border border-white/5 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-white">{wh.name}</span>
                  <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-brand-blue/20 text-brand-sky">
                    {wh.locationId.slice(0, 8)}...
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-300 bg-dark-surface p-2.5 rounded-lg border border-white/5 mt-2 truncate select-all">
                  {wh.fullUrl}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleCopyWebhook(wh.fullUrl, idx)}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-sky border border-brand-blue/30 text-xs font-mono transition-all"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY WEBHOOK URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Pipeline Simulator */}
      <div className="p-6 rounded-2xl bg-dark-surface2 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-white">
              Manual Ingestion & Pipeline Simulator
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulate inbound webhook payload ➔ Mistral AI Scoring ➔ ElevenLabs Voice Memo ➔ Cloudflare R2 ➔ GHL Subaccount ➔ Twilio SMS
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">FIRST NAME</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">LAST NAME</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">PHONE NUMBER</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">DESTINATION GHL SUBACCOUNT</label>
            <select
              value={formData.targetLocationId}
              onChange={(e) => setFormData({ ...formData, targetLocationId: e.target.value })}
              className="w-full bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none font-mono"
            >
              <option value="DvKRMVD9YudoS6xRyBfb">RJ Business Solutions (DvKRMVD9YudoS6xRyBfb)</option>
              <option value="aBL9bEdg3LoPKJ9RhPzE">SMART FCRA (aBL9bEdg3LoPKJ9RhPzE)</option>
              <option value="1J5ooApb6gIuDiOen20e">Eugene (1J5ooApb6gIuDiOen20e)</option>
              <option value="wBPmIpkN5dcwCCSc2kwz">Contracting Preacher (wBPmIpkN5dcwCCSc2kwz)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">PROSPECT INQUIRY / SCOPE</label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-dark-surface rounded-xl p-4 text-sm text-white border border-white/10 focus:border-brand-sky outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="voiceMemo"
              checked={formData.triggerVoiceMemo}
              onChange={(e) => setFormData({ ...formData, triggerVoiceMemo: e.target.checked })}
              className="rounded bg-dark-surface border-white/10 text-brand-blue focus:ring-brand-sky"
            />
            <label htmlFor="voiceMemo" className="text-xs text-slate-300 font-medium">
              Generate AI Personalized Voice Note & store to Cloudflare R2
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-medium shadow-rj-blue hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Running Edge Pipeline & Syncing GHL...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Process & Route Inbound Lead</span>
              </>
            )}
          </button>
        </form>
      </div>

      {pipelineResult && (
        <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 space-y-4">
          <div className="flex items-center space-x-2 text-emerald-400 text-sm font-mono font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>PIPELINE EXECUTION COMPLETE</span>
          </div>

          <pre className="bg-dark-surface/90 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-x-auto border border-white/5 max-h-96">
            {JSON.stringify(pipelineResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
