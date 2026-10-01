import React, { useState, useEffect } from 'react';
import { CheckCircle, RefreshCw, Key, MapPin, Building, ShieldAlert, Zap, Users } from 'lucide-react';

interface SubAccount {
  id: string;
  name: string;
  locationId: string;
  pitToken: string;
  purpose: string;
  category: string;
  status: 'connected' | 'error' | 'syncing';
  details?: any;
}

const SUBACCOUNTS_DATA: SubAccount[] = [
  {
    id: 'rj-business-solutions',
    name: 'RJ Business Solutions',
    locationId: 'DvKRMVD9YudoS6xRyBfb',
    pitToken: 'pit-c04bf7cf-69e6-44b1-b7a6-7bcaf255b609',
    purpose: 'Core Corporate Automation & AI Systems Hub',
    category: 'core',
    status: 'connected'
  },
  {
    id: 'smart-fcra',
    name: 'SMART FCRA',
    locationId: 'aBL9bEdg3LoPKJ9RhPzE',
    pitToken: 'pit-a581a001-f6e1-4c8b-81ce-769d65ed3cf3',
    purpose: 'Credit Technology, Dispute Automation & CROA Compliance',
    category: 'compliance',
    status: 'connected'
  },
  {
    id: 'eugene',
    name: 'Eugene Subaccount',
    locationId: '1J5ooApb6gIuDiOen20e',
    pitToken: 'pit-163f4730-3285-4730-a7ff-b8ca5c7f7bfc',
    purpose: 'Client Operations & Lead Follow-Up Engine',
    category: 'client',
    status: 'connected'
  },
  {
    id: 'contracting-preacher',
    name: 'Contracting Preacher',
    locationId: 'wBPmIpkN5dcwCCSc2kwz',
    pitToken: 'pit-098de1dd-9bfc-436f-b242-957483210ddb',
    purpose: 'Ministry, Community Outreach & Service Workflows',
    category: 'ministry',
    status: 'connected'
  }
];

export const SubaccountsGrid: React.FC = () => {
  const [subaccounts, setSubaccounts] = useState<SubAccount[]>(SUBACCOUNTS_DATA);
  const [syncingAll, setSyncingAll] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const triggerSyncAll = async () => {
    setSyncingAll(true);
    setSyncStatus('Pushing custom fields and automation tags across all 4 locations...');
    try {
      const res = await fetch('/api/subaccounts/sync', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSyncStatus('✅ All 4 Subaccounts successfully synchronized with standard custom fields & tags!');
      } else {
        setSyncStatus(`Sync warning: ${data.error || 'Check individual accounts'}`);
      }
    } catch (err: any) {
      setSyncStatus(`Sync error: ${err.message}`);
    } finally {
      setSyncingAll(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-dark-surface2 via-brand-navy to-brand-deep/40 border border-brand-blue/30 shadow-rj-dark">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold font-heading text-white tracking-tight">
              GoHighLevel Multi-Location Hub
            </h2>
            <span className="mono-badge text-xs px-2 py-0.5 rounded bg-brand-sky/10 text-brand-sky border border-brand-sky/20">
              AGENCY PIT LINKED
            </span>
          </div>
          <p className="text-sm text-slate-300 mt-1">
            Agency Relationship: <span className="font-mono text-brand-sky font-semibold">0-908-802</span> · PIT: <span className="font-mono text-slate-400">pit-defef847...</span>
          </p>
        </div>

        <button
          onClick={triggerSyncAll}
          disabled={syncingAll}
          className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-medium shadow-rj-blue hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${syncingAll ? 'animate-spin' : ''}`} />
          <span>{syncingAll ? 'Synchronizing All Locations...' : 'Sync All 4 Subaccounts'}</span>
        </button>
      </div>

      {syncStatus && (
        <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-sm text-brand-sky font-mono flex items-center space-x-2">
          <Zap className="w-4 h-4 flex-shrink-0" />
          <span>{syncStatus}</span>
        </div>
      )}

      {/* Subaccounts 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subaccounts.map((sub) => (
          <div
            key={sub.id}
            className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-blue/10 blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 uppercase">
                    {sub.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-2">
                    {sub.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>CONNECTED</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-2">
                {sub.purpose}
              </p>

              <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-sky" />
                    <span>Location ID:</span>
                  </span>
                  <span className="text-slate-200 bg-white/5 px-2 py-0.5 rounded select-all">
                    {sub.locationId}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Key className="w-3.5 h-3.5 text-brand-sky" />
                    <span>PIT Token:</span>
                  </span>
                  <span className="text-slate-200 bg-white/5 px-2 py-0.5 rounded font-mono">
                    {sub.pitToken.slice(0, 12)}...
                  </span>
                </div>
              </div>
            </div>

            {/* Standard Configured Badges */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {['AI Lead Score', 'FCRA Audit Stage', 'Voice Memo URL', 'ai-engaged'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/15 text-brand-sky border border-brand-blue/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
