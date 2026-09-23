import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import awsBadgeImg from '../assets/img/badge_cloud.png';
import { Award, GraduationCap, Globe, ExternalLink, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative bg-white/50 dark:bg-[#070b14]/50 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-500 scroll-mt-28">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
              <Terminal size={12} />
              <span>{t.about_section_badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {t.about_title}
            </h2>
            <div className="w-16 h-1 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </AnimatedComponent>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Bio & Mission Statement (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatedComponent delay={100} className="h-full">
              <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2">
                      <Sparkles size={14} />
                      {t.about_vision_title}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600">01 // CORE</span>
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t.about_description}
                  </p>
                </div>

                {/* Key Technical Highlights Pills */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2.5">
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/60 dark:border-cyan-800/40 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300">
                    {t.about_tag_nlp}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40 text-xs font-mono font-medium text-blue-800 dark:text-blue-300">
                    {t.about_tag_web}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 text-xs font-mono font-medium text-purple-800 dark:text-purple-300">
                    {t.about_tag_cloud}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300">
                    {t.about_tag_bio}
                  </span>
                </div>
              </div>
            </AnimatedComponent>
          </div>

          {/* Card 2: Official Certifications (4 Cols) */}
          <div className="lg:col-span-4">
            <AnimatedComponent delay={150} className="h-full">
              <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2">
                      <Award size={14} />
                      {t.key_certifications}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600">02 // CERTS</span>
                  </div>

                  {/* Certifications List */}
                  <div className="space-y-4 mt-2">
                    
                    {/* AWS Badge Card */}
                    <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50">
                      <img src={awsBadgeImg} alt="AWS Certified Cloud Practitioner" className="w-14 h-14 object-contain shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">AWS Certified</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate">Cloud Practitioner</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                          <ShieldCheck size={11} className="text-emerald-500" />
                          <span>Amazon Web Services</span>
                        </div>
                      </div>
                    </div>

                    {/* EF SET C1 Advanced Badge */}
                    <a 
                      href={t.english_cert_link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 hover:border-cyan-500/50 transition-colors group/link"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-800 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                        <span className="text-[10px] font-mono leading-none font-semibold">EF SET</span>
                        <span className="text-base font-black leading-tight">C1</span>
                        <span className="text-[9px] font-mono opacity-80">61/100</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
                          <span>EF SET Certified</span>
                          <ExternalLink size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{t.about_c1_fluency}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{t.about_verified_score}</div>
                      </div>
                    </a>

                  </div>
                </div>

                <div className="mt-6 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{t.about_cloud_comm}</span>
                  <span className="text-emerald-500 font-bold">{t.about_verified}</span>
                </div>
              </div>
            </AnimatedComponent>
          </div>

          {/* Card 3: Languages & Fluency (4 Cols) */}
          <div className="lg:col-span-4">
            <AnimatedComponent delay={200} className="h-full">
              <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2">
                      <Globe size={14} />
                      {t.languages_title}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600">03 // LANG</span>
                  </div>

                  <div className="space-y-5 mt-4">
                    {t.languages.map((item, idx) => {
                      const percentage = idx === 0 ? 100 : 90;
                      return (
                        <div key={item.lang} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="font-bold text-slate-900 dark:text-white">{item.lang}</span>
                            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{item.level}</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-normal">
                  {t.about_lang_experience}
                </div>
              </div>
            </AnimatedComponent>
          </div>

          {/* Card 4: Academic Background / Formação Acadêmica (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatedComponent delay={250} className="h-full">
              <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2">
                      <GraduationCap size={15} />
                      {t.education_title}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600">04 // ACADEMIC</span>
                  </div>

                  {/* Education Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {t.education_history?.map((edu, i) => (
                      <div 
                        key={i} 
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-700/50 flex flex-col justify-between"
                      >
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-2">
                            {edu.period}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                            {edu.institution}
                          </h4>
                          <p className="text-xs font-medium text-cyan-700 dark:text-cyan-300/80 mt-1">
                            {edu.degree}
                          </p>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 line-clamp-3">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>UNICAMP • SENAI • ETEC</span>
                  <span className="text-cyan-500">{t.about_graduated_in}</span>
                </div>
              </div>
            </AnimatedComponent>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;