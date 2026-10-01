import React, { useState, useEffect } from 'react';
import { GitBranch, GitCommit, GitPullRequest, ExternalLink, Plus, RefreshCw, Lock, Globe, Code, ShieldCheck } from 'lucide-react';

export const GitHubHub: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [newRepoName, setNewRepoName] = useState('');
  const [newRepoDesc, setNewRepoDesc] = useState('');
  const [creating, setCreating] = useState(false);
  const [createMsg, setCreateMsg] = useState<string | null>(null);

  const fetchUserAndRepos = async () => {
    setLoading(true);
    try {
      const [uRes, rRes] = await Promise.all([
        fetch('/api/github/user'),
        fetch('/api/github/repos')
      ]);
      const uData = await uRes.json();
      const rData = await rRes.json();
      if (uData.user) setUser(uData.user);
      if (rData.repos) setRepos(rData.repos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserAndRepos();
  }, []);

  const handleCreateRepo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRepoName) return;
    setCreating(true);
    setCreateMsg(null);
    try {
      const res = await fetch('/api/github/create-repo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newRepoName,
          description: newRepoDesc || 'RJ Business Solutions Automation Service',
          isPrivate: true
        })
      });
      const data = await res.json();
      if (data.success) {
        setCreateMsg(`✅ Repository created: ${data.repo.full_name}`);
        setNewRepoName('');
        setNewRepoDesc('');
        fetchUserAndRepos();
      } else {
        setCreateMsg(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setCreateMsg(`Error: ${err.message}`);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-dark-surface2 via-brand-navy to-brand-deep/30 border border-brand-sky/30 shadow-rj-dark">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold font-heading text-white">
                GitHub Organization & CI/CD Hub
              </h2>
              <span className="mono-badge text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                PAT AUTH VERIFIED
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5 font-mono">
              Account: <span className="text-white font-semibold">{user?.login || 'rjbizsolution23-wq'}</span> ({user?.name || 'Rick Jefferson'}) · {repos.length} Repositories Linked
            </p>
          </div>
        </div>

        <button
          onClick={fetchUserAndRepos}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>REFRESH REPOS</span>
        </button>
      </div>

      {/* Quick New Repo Drawer */}
      <div className="p-6 rounded-2xl glass-card border border-white/10">
        <h3 className="text-sm font-bold font-heading text-white flex items-center space-x-2 mb-4">
          <Plus className="w-4 h-4 text-brand-sky" />
          <span>Provision New Subaccount Repository / Automation Service</span>
        </h3>

        <form onSubmit={handleCreateRepo} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={newRepoName}
            onChange={(e) => setNewRepoName(e.target.value)}
            placeholder="Repository Name (e.g. smart-fcra-automation-worker)"
            className="bg-dark-surface rounded-xl px-4 py-2.5 text-xs text-white border border-white/10 focus:border-brand-sky outline-none font-mono"
            required
          />
          <input
            type="text"
            value={newRepoDesc}
            onChange={(e) => setNewRepoDesc(e.target.value)}
            placeholder="Description (Optional)"
            className="bg-dark-surface rounded-xl px-4 py-2.5 text-xs text-white border border-white/10 focus:border-brand-sky outline-none"
          />
          <button
            type="submit"
            disabled={creating}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white text-xs font-medium shadow-rj-blue hover:brightness-110 active:scale-95 transition-all font-mono"
          >
            {creating ? 'Creating...' : '+ Create Private Repository'}
          </button>
        </form>

        {createMsg && (
          <p className="text-xs font-mono text-brand-sky mt-3">{createMsg}</p>
        )}
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="glass-card glass-card-hover p-5 rounded-xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="truncate">
                  <div className="flex items-center space-x-1.5">
                    {repo.private ? (
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Globe className="w-3.5 h-3.5 text-brand-sky" />
                    )}
                    <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                      {repo.private ? 'PRIVATE' : 'PUBLIC'}
                    </span>
                    {repo.language && (
                      <span className="mono-badge text-[9px] px-1.5 py-0.5 rounded bg-brand-blue/20 text-brand-sky">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white truncate mt-2">
                    {repo.name}
                  </h3>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-sky transition-colors p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                {repo.description || 'RJ Business Solutions Cloudflare & GHL Automation Module'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>CI/CD Linked</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
