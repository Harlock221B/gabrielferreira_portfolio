import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { Calendar, Building2, Terminal } from 'lucide-react';

const Career = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-[#070b14] transition-colors duration-500 overflow-hidden border-t border-slate-200/50 dark:border-slate-900 scroll-mt-28">
      
      {/* Background Systematic Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
              <Terminal size={12} />
              <span>{t.career_badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {t.experience_title}
            </h2>
            <div className="w-16 h-1 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              {t.career_subtitle}
            </p>
          </div>
        </AnimatedComponent>

        {/* Dynamic Timeline */}
        <div className="relative space-y-12 sm:space-y-16">
          
          {/* Central Conduit Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2">
            <div className="sticky top-1/3 w-full h-40 bg-gradient-to-b from-cyan-500 to-blue-600 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
          </div>

          {t.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isCurrent = exp.period.toLowerCase().includes('present') || exp.period.toLowerCase().includes('presente');

            return (
              <AnimatedComponent key={index} delay={index * 120} className="relative z-10">
                <div className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Opposite desktop spacer */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Central Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#070b14] border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center transition-all duration-300 shadow-md">
                    {isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="w-4 h-4 rounded-full bg-cyan-500 animate-ping opacity-75"></span>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-bold">
                          <Calendar size={12} className="text-cyan-500" />
                          <span>{exp.period}</span>
                        </div>

                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            {t.career_current_badge}
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-5">
                        <Building2 size={15} className="text-cyan-500" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Achievements List */}
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                            <span className="text-cyan-500 font-mono mt-0.5 shrink-0">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

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

export default Career;