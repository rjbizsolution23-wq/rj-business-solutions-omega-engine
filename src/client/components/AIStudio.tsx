import React, { useState } from 'react';
import { Bot, Mic, Image, Video, Sparkles, Send, Play, Check } from 'lucide-react';

export const AIStudio: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = useState<'mistral' | 'nvidia' | 'elevenlabs' | 'replicate' | 'runway' | 'base44'>('mistral');
  const [prompt, setPrompt] = useState('Analyze high-intent prospect for RJ Business Solutions credit technology infrastructure.');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleRun = async () => {
    setLoading(true);
    setResult(null);
    try {
      if (selectedEngine === 'mistral' || selectedEngine === 'nvidia') {
        const res = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, engine: selectedEngine })
        });
        const data = await res.json();
        setResult(data);
      } else if (selectedEngine === 'elevenlabs') {
        const res = await fetch('/api/ai/voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: prompt })
        });
        const data = await res.json();
        setResult(data);
      } else if (selectedEngine === 'replicate') {
        const res = await fetch('/api/ai/image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        setResult(data);
      } else if (selectedEngine === 'runway') {
        const res = await fetch('/api/ai/video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ promptText: prompt })
        });
        const data = await res.json();
        setResult(data);
      } else if (selectedEngine === 'base44') {
        const res = await fetch('/api/base44/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: prompt })
        });
        const data = await res.json();
        setResult(data);
      }
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Engine Selection Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {[
          { id: 'mistral', label: 'Mistral AI', icon: Bot, badge: 'REASONING' },
          { id: 'nvidia', label: 'NVIDIA NIM', icon: Sparkles, badge: 'LLAMA 3.1' },
          { id: 'elevenlabs', label: 'ElevenLabs', icon: Mic, badge: 'VOICE' },
          { id: 'replicate', label: 'Replicate', icon: Image, badge: 'FLUX/SDXL' },
          { id: 'runway', label: 'Runway Gen-3', icon: Video, badge: 'MOTION' },
          { id: 'base44', label: 'Base44 Agent', icon: Bot, badge: 'AUTONOMOUS' }
        ].map((eng) => {
          const Icon = eng.icon;
          const isSelected = selectedEngine === eng.id;
          return (
            <button
              key={eng.id}
              onClick={() => setSelectedEngine(eng.id as any)}
              className={`p-4 rounded-xl text-left transition-all glass-card ${
                isSelected
                  ? 'border-brand-sky bg-brand-blue/20 ring-1 ring-brand-sky shadow-rj-blue'
                  : 'hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-5 h-5 ${isSelected ? 'text-brand-sky' : 'text-slate-400'}`} />
                <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                  {eng.badge}
                </span>
              </div>
              <p className="font-heading font-semibold text-white mt-2 text-sm">{eng.label}</p>
            </button>
          );
        })}
      </div>

      {/* Execution Console */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold font-heading text-white flex items-center space-x-2">
            <span>Prompt & Execution Parameters</span>
          </label>
          <span className="mono-badge text-[10px] text-brand-sky bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/30">
            MODEL ACTIVE: {selectedEngine.toUpperCase()}
          </span>
        </div>

        <textarea
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-dark-surface rounded-xl p-4 text-sm text-slate-100 border border-white/10 focus:border-brand-sky focus:ring-1 focus:ring-brand-sky outline-none font-mono"
          placeholder="Enter prompt or trigger parameters..."
        />

        <div className="flex justify-end">
          <button
            onClick={handleRun}
            disabled={loading}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-medium shadow-rj-blue hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Processing with {selectedEngine}...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Execute AI Pipeline</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Response Viewer */}
      {result && (
        <div className="glass-card rounded-2xl p-6 border border-brand-sky/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-sky flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>OUTPUT RECEIVED ({selectedEngine.toUpperCase()})</span>
            </span>
          </div>

          <pre className="bg-dark-surface/90 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-x-auto border border-white/5 max-h-96">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
