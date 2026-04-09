'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Save, User, LayoutTemplate, Briefcase, Zap, Settings, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EditorPanels() {
  const { portfolio, updatePortfolio, updateProject, updateSkill } = useStore();
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', icon: User, label: 'Personal' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'theme', icon: Settings, label: 'Theme' }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`window.location.origin/u/${portfolio.username}`);
    alert('Public link copied!');
  };

  return (
    <div className="flex w-full h-full bg-card/10 border-r border-white/5">
      {/* Tiny Icon Sidebar */}
      <div className="w-16 flex-shrink-0 border-r border-white/5 flex flex-col items-center py-6 gap-4 bg-background">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 font-space font-bold border border-primary/30 shadow-[0_0_10px_rgba(138,43,226,0.2)]">
          X
        </div>
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === tab.id ? 'bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(138,43,226,0.3)]' : 'text-muted-foreground hover:bg-white/5 hover:text-white'}`}
          >
            <tab.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-background/50">
        <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10">
          <h2 className="text-xl font-bold font-space capitalize">{activeTab} Editor</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-2" onClick={handleCopyLink}>
              <Globe className="w-4 h-4" /> Share
            </Button>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-8">
          {activeTab === 'personal' && (
             <div className="flex flex-col gap-6">
                {/* Header Information */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2"><User className="w-4 h-4" /> Header Info</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      value={portfolio.header.name}
                      onChange={(e) => updatePortfolio({ header: { ...portfolio.header, name: e.target.value } })}
                      className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Tagline</label>
                    <input 
                      type="text" 
                      value={portfolio.header.tagline}
                      onChange={(e) => updatePortfolio({ header: { ...portfolio.header, tagline: e.target.value } })}
                      className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Headline Description</label>
                    <textarea 
                      rows={3}
                      value={portfolio.header.description}
                      onChange={(e) => updatePortfolio({ header: { ...portfolio.header, description: e.target.value } })}
                      className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                    />
                  </div>
                </div>

                {/* About Information */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2"><LayoutTemplate className="w-4 h-4" /> About Section</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Bio Paragraph</label>
                    <textarea 
                      rows={5}
                      value={portfolio.about.description}
                      onChange={(e) => updatePortfolio({ about: { ...portfolio.about, description: e.target.value } })}
                      className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                    />
                  </div>
                </div>

                 {/* Contact Links */}
                 <div className="glass p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2"><Globe className="w-4 h-4" /> Social Links</h3>
                  {Object.entries(portfolio.contact).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">{key}</label>
                      <input 
                        type={key === 'email' ? 'email' : 'url'}
                        value={value}
                        onChange={(e) => updatePortfolio({ contact: { ...portfolio.contact, [key]: e.target.value } })}
                        className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                      />
                    </div>
                  ))}
                </div>
             </div>
          )}

          {activeTab === 'projects' && (
             <div className="flex flex-col gap-6">
                {portfolio.projects.map((project, idx) => (
                  <div key={project.id} className="glass p-5 rounded-2xl border border-white/5 flex flex-col gap-4 relative">
                    <div className="absolute top-4 right-4 bg-white/5 px-2 py-1 rounded text-xs">#{idx + 1}</div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Project Title</label>
                      <input 
                        type="text" 
                        value={project.title}
                        onChange={(e) => updateProject(project.id, { title: e.target.value })}
                        className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none font-bold text-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Description</label>
                      <textarea 
                        rows={3}
                        value={project.description}
                        onChange={(e) => updateProject(project.id, { description: e.target.value })}
                        className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col gap-2">
                        <label className="text-xs text-muted-foreground uppercase tracking-wider">GitHub Link</label>
                        <input 
                          type="text" 
                          value={project.github}
                          onChange={(e) => updateProject(project.id, { github: e.target.value })}
                          className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-muted-foreground uppercase tracking-wider">Live Demo Link</label>
                        <input 
                          type="text" 
                          value={project.demo}
                          onChange={(e) => updateProject(project.id, { demo: e.target.value })}
                          className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Tags (comma separated)</label>
                      <input 
                        type="text" 
                        value={project.tags.join(', ')}
                        onChange={(e) => updateProject(project.id, { tags: e.target.value.split(',').map(tag => tag.trim()) })}
                        className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary/50 outline-none"
                      />
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="flex flex-col gap-4">
              <div className="glass p-5 rounded-2xl border border-white/5 flex flex-wrap gap-2">
                {portfolio.skills.map(skill => (
                  <div key={skill.id} className="relative group">
                     <input 
                        type="text" 
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                        className="bg-background border border-white/10 rounded-full px-4 py-2 text-sm focus:border-primary/50 outline-none text-center w-32"
                      />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
             <div className="flex flex-col gap-6">
                <div className="glass p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2"><Settings className="w-4 h-4" /> Global Colors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Primary Color</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="color" 
                          value={portfolio.theme.primaryColor}
                          onChange={(e) => updatePortfolio({ theme: { ...portfolio.theme, primaryColor: e.target.value } })}
                          className="w-10 h-10 rounded border-0 cursor-pointer"
                        />
                        <input type="text" value={portfolio.theme.primaryColor} readOnly className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm flex-1" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Accent Glow</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="color" 
                          value={portfolio.theme.accentGlow}
                          onChange={(e) => updatePortfolio({ theme: { ...portfolio.theme, accentGlow: e.target.value } })}
                          className="w-10 h-10 rounded border-0 cursor-pointer"
                        />
                        <input type="text" value={portfolio.theme.accentGlow} readOnly className="bg-background border border-white/10 rounded-lg px-3 py-2 text-sm flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
}
