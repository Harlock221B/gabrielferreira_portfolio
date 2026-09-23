import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { ExternalLink, ArrowRight, Code2, Layers } from 'lucide-react';

const Projects = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter categorization logic
  const filteredProjects = t.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    const topicsLower = (p.topics || []).map(topic => topic.toLowerCase());
    
    if (activeFilter === 'frontend') {
      return topicsLower.some(topic => ['react', 'next.js', 'vite', 'ui/ux', 'tailwind css'].includes(topic));
    }
    if (activeFilter === 'data') {
      return topicsLower.some(topic => ['ai agent', 'finance', 'firebase'].includes(topic)) || p.id === 'finview' || p.id === 'autohub';
    }
    if (activeFilter === 'fullstack') {
      return topicsLower.some(topic => ['django', 'firebase', 'ai agent'].includes(topic));
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-[#070b14] transition-colors duration-500 overflow-hidden scroll-mt-28">
      
      {/* Background Systematic Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 z-10">
        
        {/* Section Header */}
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
              <Layers size={12} />
              <span>{t.projects_badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {t.projects_title}
            </h2>
            <div className="w-16 h-1 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              {t.projects_subtitle}
            </p>
          </div>
        </AnimatedComponent>

        {/* Filter Navigation Tabs */}
        <AnimatedComponent delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {[
              { id: 'all', label: t.filter_all || 'Todos' },
              { id: 'frontend', label: t.filter_frontend || 'Front-End' },
              { id: 'data', label: t.filter_data || 'Dados & IA' },
              { id: 'fullstack', label: t.filter_fullstack || 'Full-Stack' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedComponent>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((repo, index) => {
            const projectIndexStr = String(index + 1).padStart(2, '0');
            const hasLiveUrl = Boolean(repo.url);

            return (
              <AnimatedComponent key={repo.id} delay={index * 100}>
                <div className="group relative flex flex-col h-full bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1.5">
                  
                  {/* Top Beam Highlight */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                  {/* Image Container with Telemetry Overlay */}
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 dark:group-hover:bg-cyan-950/30 transition-colors duration-500 z-10 pointer-events-none"></div>
                    
                    {/* Index Tag */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-cyan-400">
                      PRJ_{projectIndexStr}
                    </div>

                    {/* Live Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      {hasLiveUrl ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>{t.projects_live_status}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-mono text-slate-400">
                          <span>{t.projects_app_status}</span>
                        </div>
                      )}
                    </div>

                    {repo.imageUrl ? (
                      <img 
                        src={repo.imageUrl} 
                        alt={repo.name} 
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 font-mono text-xs">
                        <Code2 size={32} className="mb-2 text-cyan-500/50" />
                        <span>{t.projects_preview_available}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {repo.name}
                      </h3>
                      {hasLiveUrl && (
                        <a 
                          href={repo.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                          title={language === 'pt' ? 'Acessar ao vivo' : 'Open live app'}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                      {repo.description}
                    </p>
                    
                    {/* Topics / Technologies */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {repo.topics?.map(topic => (
                        <span 
                          key={topic} 
                          className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    {/* Actions Row */}
                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4">
                      <Link 
                        to={`/projeto/${repo.id}`} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-mono font-bold text-xs hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
                      >
                        <span>{t.projects_case_study}</span>
                        <ArrowRight size={14} />
                      </Link>

                      {hasLiveUrl && (
                        <a 
                          href={repo.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                        >
                          <span>{t.projects_live_app}</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </AnimatedComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;