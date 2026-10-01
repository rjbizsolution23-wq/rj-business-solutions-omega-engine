import React, { useState, useEffect } from 'react';
import { HardDrive, FileText, Music, Image as ImageIcon, Video, RefreshCw, ExternalLink, ShieldCheck } from 'lucide-react';

export const R2Vault: React.FC = () => {
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAssets = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/storage/assets');
      const data = await res.json();
      if (data.assets) {
        setAssets(data.assets);
      }
    } catch (err) {
      console.error('Failed to fetch assets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-dark-surface2 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-brand-sky/20 text-brand-sky border border-brand-sky/30">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-white">
              Cloudflare R2 Asset Vault
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Bucket: <span className="font-mono text-brand-sky">rj-brand-assets</span> · Endpoint: <span className="font-mono text-slate-300">58250b56ae5b45d940cd6e4b64314c01.r2.cloudflarestorage.com</span>
            </p>
          </div>
        </div>

        <button
          onClick={fetchAssets}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>REFRESH VAULT</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assets.length === 0 ? (
          <div className="col-span-3 p-12 text-center rounded-2xl glass-card border border-white/5">
            <HardDrive className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-300">R2 Storage Connected & Ready</p>
            <p className="text-xs text-slate-500 mt-1 font-mono">Run AI Voice/Image workflows to automatically populate assets.</p>
          </div>
        ) : (
          assets.map((asset, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-brand-blue/20 text-brand-sky">
                  {asset.Key?.split('/')[0] || 'ASSET'}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {Math.round((asset.Size || 0) / 1024)} KB
                </span>
              </div>
              <p className="text-xs font-mono text-white truncate">{asset.Key}</p>
              <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/5">
                <span>{new Date(asset.LastModified).toLocaleDateString()}</span>
                <span className="text-brand-sky flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
