import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, ExternalLink, CheckCircle2, Terminal, Sparkles } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const project = t.projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-200 font-mono px-4 text-center">
        <div className="text-cyan-500 text-4xl mb-4 font-black">404 // NOT_FOUND</div>
        <h1 className="text-xl sm:text-2xl font-bold mb-4 font-sans">
          {language === 'pt' ? 'Projeto não encontrado no registro do sistema' : 'Project not found in system registry'}
        </h1>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors text-xs font-bold">
          <ArrowLeft size={14} />
          {language === 'pt' ? 'Retornar ao Início' : 'Return Home'}
        </Link>
      </div>
    );
  }

  const hasLiveUrl = Boolean(project.url);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-200 pt-28 pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-500/10 dark:from-cyan-900/15 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-sm group"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" /> 
            <span>{t.prj_details_back}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Terminal size={12} />
            <span>ID: {project.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Header Block */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            <span>{t.prj_details_badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.topics.map((topic, index) => (
              <span 
                key={index} 
                className="bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 py-1.5 px-3.5 rounded-xl text-xs font-mono font-medium border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                #{topic}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        {project.imageUrl && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/20 mb-12 border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative group">
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700" 
            />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Column (Challenge & Solution) - 7 cols */}
          <div className="md:col-span-7 space-y-8">
            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
                <span>{t.prj_details_challenge}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
                <span>{t.prj_details_solution}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Sidebar Column (Features & Deploy CTA) - 5 cols */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Features Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-500" />
                <span>{t.prj_details_features}</span>
              </h3>
              
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                    <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Link Button */}
            {hasLiveUrl && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold py-4 px-6 rounded-2xl transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-95 text-sm"
              >
                <span>{t.prj_details_launch}</span>
                <ExternalLink size={16} />
              </a>
            )}

            {/* Telemetry metadata footer */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 text-[11px] font-mono text-slate-500 dark:text-slate-400 space-y-1.5">
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-emerald-500 font-bold">{hasLiveUrl ? t.prj_details_status_live : t.prj_details_status_archived}</span>
              </div>
              <div className="flex justify-between">
                <span>LEVEL:</span>
                <span className="text-cyan-500">{t.prj_details_arch_level}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}