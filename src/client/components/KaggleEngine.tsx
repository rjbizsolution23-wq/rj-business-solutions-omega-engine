import React, { useState, useEffect } from 'react';
import { Database, Cpu, Award, Search, ExternalLink, Download, Flame, Star, ShieldCheck } from 'lucide-react';

export const KaggleEngine: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'datasets' | 'models' | 'competitions'>('datasets');
  const [query, setQuery] = useState('credit');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  const handleSearch = async (tab = activeSubTab, q = query) => {
    setLoading(true);
    try {
      const endpoint = `/api/kaggle/${tab}?q=${encodeURIComponent(q)}&page=1`;
      const res = await fetch(endpoint);
      const data = await res.json();
      setItems(data[tab] || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch('datasets', 'credit');
  }, []);

  const switchTab = (tab: 'datasets' | 'models' | 'competitions') => {
    setActiveSubTab(tab);
    handleSearch(tab, query);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-dark-surface2 via-brand-navy to-brand-deep/30 border border-brand-sky/30 shadow-rj-dark">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <span className="text-2xl font-black font-mono">k</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold font-heading text-white">
                Kaggle Data & Machine Learning Hub
              </h2>
              <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                TOKEN AUTH VERIFIED
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5 font-mono">
              Access 100K+ Datasets, Gemma/Llama Models & Benchmark Competitions
            </p>
          </div>
        </div>

        {/* Sub-Tabs */}
        <div className="flex bg-dark-surface rounded-xl p-1 border border-white/10">
          {[
            { id: 'datasets', label: 'Datasets', icon: Database },
            { id: 'models', label: 'Models', icon: Cpu },
            { id: 'competitions', label: 'Competitions', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSel = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id as any)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSel
                    ? 'bg-brand-blue text-white shadow-rj-blue'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder={`Search Kaggle ${activeSubTab} (e.g. credit score, financial risk, leads, gemma)...`}
            className="w-full bg-dark-surface2 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white border border-white/10 focus:border-brand-sky outline-none font-mono"
          />
        </div>
        <button
          onClick={() => handleSearch()}
          disabled={loading}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white text-sm font-medium shadow-rj-blue hover:brightness-110 active:scale-95 transition-all"
        >
          {loading ? 'Searching...' : 'Search Kaggle'}
        </button>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover p-5 rounded-xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="truncate">
                  <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
                    {activeSubTab.toUpperCase()}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-white truncate mt-1.5">
                    {item.title || item.ref}
                  </h3>
                </div>
                <a
                  href={`https://www.kaggle.com/${item.ref}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-sky transition-colors p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center space-x-4 mt-3 text-xs text-slate-400 font-mono">
                {item.downloadCount !== undefined && (
                  <span className="flex items-center space-x-1">
                    <Download className="w-3 h-3 text-brand-sky" />
                    <span>{item.downloadCount.toLocaleString()} DLs</span>
                  </span>
                )}
                {item.voteCount !== undefined && (
                  <span className="flex items-center space-x-1">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>{item.voteCount.toLocaleString()} Votes</span>
                  </span>
                )}
                {item.usabilityRating !== undefined && (
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{(item.usabilityRating * 10).toFixed(0)}/10 Rating</span>
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span className="truncate">Ref: {item.ref}</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Ready for GPU/Edge</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
