import { Activity, ShieldCheck, Zap, Layers, Sparkles, GitBranch, Globe, Wine, Flame, MapPin, Crosshair } from 'lucide-react';

export const Header: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="border-b border-white/10 bg-dark-surface/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-4">
            <img
              src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
              alt="RJ Business Solutions Logo"
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-brand-blue shadow-rj-blue"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold font-heading text-white tracking-tight">
                  RJ BUSINESS SOLUTIONS
                </span>
                <span className="mono-badge text-[10px] px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-sky border border-brand-sky/30">
                  OMEGA EDGE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Cloudflare Worker & GoHighLevel Multi-Location Hub
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: 'dirge-nexus', label: 'DIRGE & Nexus Warfare', icon: Crosshair },
              { id: 'google-maps-hunter', label: 'Google Maps Hunter', icon: MapPin },
              { id: 'social-omni', label: 'Social Sales Radar', icon: Flame },
              { id: 'integrations-suite', label: 'Integrations Suite', icon: Zap },
              { id: 'tasty-licka', label: 'Tasty Licka™ GHL', icon: Wine },
              { id: 'brand-universe', label: '25 Live Routes', icon: Globe },
              { id: 'subaccounts', label: 'Subaccounts Hub', icon: Layers },
              { id: 'ghl-theme', label: 'GHL Brand Theme', icon: Sparkles },
              { id: 'ai-studio', label: 'Omni AI Studio', icon: Zap },
              { id: 'huggingface', label: 'Hugging Face', icon: Sparkles },
              { id: 'kaggle', label: 'Kaggle Data', icon: ShieldCheck },
              { id: 'github', label: 'GitHub CI/CD', icon: GitBranch },
              { id: 'lead-pipeline', label: 'Lead Automation', icon: Activity },
              { id: 'vault', label: 'R2 Vault', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-rj-blue'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* System Status Indicator */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>5 LOCATIONS SYNCED</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
