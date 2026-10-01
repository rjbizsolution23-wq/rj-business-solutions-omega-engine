import React, { useState } from 'react';
import { Header } from './components/Header';
import { SubaccountsGrid } from './components/SubaccountsGrid';
import { AIStudio } from './components/AIStudio';
import { HuggingFaceHub } from './components/HuggingFaceHub';
import { KaggleEngine } from './components/KaggleEngine';
import { GitHubHub } from './components/GitHubHub';
import { GHLBrandingHub } from './components/GHLBrandingHub';
import { LeadAutomation } from './components/LeadAutomation';
import { R2Vault } from './components/R2Vault';
import { BrandWebsiteUniverse } from './components/BrandWebsiteUniverse';
import { TastyLickaHub } from './components/TastyLickaHub';
import { IntegrationsSuiteHub } from './components/IntegrationsSuiteHub';
import { SocialOmniSalesHub } from './components/SocialOmniSalesHub';
import { GoogleMapsHunterHub } from './components/GoogleMapsHunterHub';
import { DIRGENexusDominationHub } from './components/DIRGENexusDominationHub';
import { UserGuideHub } from './components/UserGuideHub';
import { Shield, Zap, Lock, Cpu, Globe, CheckCircle, Database, Sparkles, GitBranch, Palette, Wine, Flame, MapPin, Crosshair } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('user-guide');

  return (
    <div className="min-h-screen bg-[#0b1220] flex flex-col selection:bg-brand-blue selection:text-white">
      {/* Brand Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Command Center Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Credentials & Infrastructure Banner */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
              <Globe className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">GHL AGENCY</p>
              <p className="text-xs font-mono font-semibold text-white truncate">0-908-802 · 5 Subs</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-brand-sky/20 text-brand-sky border border-brand-sky/30">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">CLOUDFLARE</p>
              <p className="text-xs font-mono font-semibold text-white truncate">Worker + R2</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Zap className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">AI ROUTER</p>
              <p className="text-xs font-mono font-semibold text-white truncate">Mistral · NVIDIA</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">HUGGING FACE</p>
              <p className="text-xs font-mono font-semibold text-white truncate">rjbiz · ZeroGPU</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <Database className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">KAGGLE HUB</p>
              <p className="text-xs font-mono font-semibold text-white truncate">100K+ Datasets</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-card border border-white/5 flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <GitBranch className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[9px] mono-badge text-slate-400">GITHUB CI/CD</p>
              <p className="text-xs font-mono font-semibold text-white truncate">rjbizsolution23</p>
            </div>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'user-guide' && <UserGuideHub />}
        {activeTab === 'dirge-nexus' && <DIRGENexusDominationHub />}
        {activeTab === 'google-maps-hunter' && <GoogleMapsHunterHub />}
        {activeTab === 'social-omni' && <SocialOmniSalesHub />}
        {activeTab === 'integrations-suite' && <IntegrationsSuiteHub />}
        {activeTab === 'tasty-licka' && <TastyLickaHub />}
        {activeTab === 'brand-universe' && <BrandWebsiteUniverse />}
        {activeTab === 'subaccounts' && <SubaccountsGrid />}
        {activeTab === 'ghl-theme' && <GHLBrandingHub />}
        {activeTab === 'ai-studio' && <AIStudio />}
        {activeTab === 'huggingface' && <HuggingFaceHub />}
        {activeTab === 'kaggle' && <KaggleEngine />}
        {activeTab === 'github' && <GitHubHub />}
        {activeTab === 'lead-pipeline' && <LeadAutomation />}
        {activeTab === 'vault' && <R2Vault />}
      </main>

      {/* Brand Footer */}
      <footer className="border-t border-white/5 bg-dark-surface py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">RJ Business Solutions</span>
            <span>·</span>
            <span>Rick Jefferson, CEO & Systems Architect</span>
          </div>
          <div className="text-slate-500">
            RJ Business Solutions provides software and automation technology. Not financial or legal advice.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
