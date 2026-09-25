import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import profileImageUrl from '../assets/img/profile.png';
import { FileText, ArrowRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Hero = () => {
  const { language, t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('data');
  
  const cvFile = language === 'pt' ? './Gabriel_Ferreira_CV-PT-BR.pdf' : './Gabriel_Ferreira_CV-EN.pdf';
  const cvText = language === 'pt' ? 'Baixar Currículo' : 'Download CV';

  const roles = t.hero_roles || [t.hero_subtitle];

  // Dynamic Multi-Role Typewriter
  useEffect(() => {
    const currentText = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 30 : 65;
    const delay = isDeleting && displayText === '' 
      ? 350 
      : (!isDeleting && displayText === currentText ? 2200 : typingSpeed);

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentText) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 md:py-36 flex items-center overflow-hidden bg-slate-50 dark:bg-[#070b14] transition-colors duration-500 scroll-mt-28">
      
      {/* Background Systematic Grids and Beams */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-20 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.15), transparent 70%)'
        }} 
      />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[128px] pointer-events-none" />

      {/* Corner Crosshair Accents */}
      <div className="hidden lg:block absolute top-28 left-8 font-mono text-xs text-slate-300 dark:text-slate-800 select-none">+ SYS.LAT_23.5505_LNG_46.6333</div>
      <div className="hidden lg:block absolute top-28 right-8 font-mono text-xs text-slate-300 dark:text-slate-800 select-none">+ NODE_PORTFOLIO_V2.5</div>

      <div className="container mx-auto max-w-6xl px-3.5 sm:px-6 relative z-10">
        
        {/* Top Telemetry HUD */}
        <AnimatedComponent>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ONLINE</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span>{t.system_status}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <MapPin size={12} className="text-cyan-500" />
              <span>{t.system_location}</span>
            </div>
          </div>
        </AnimatedComponent>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Info & Typography (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <AnimatedComponent delay={50}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="relative">
                  <img 
                    src={profileImageUrl} 
                    alt="Gabriel Ferreira" 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-cyan-500 shadow-lg shadow-cyan-500/20"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#070b14]"></span>
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block font-bold">
                    Gabriel Ferreira Souza
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {t.hero_badge_role}
                  </span>
                </div>
              </div>
            </AnimatedComponent>

            <AnimatedComponent delay={100}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mt-2">
                {t.hero_title_prefix} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
                  {t.hero_title_suffix}
                </span>
              </h1>
              
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-700 dark:text-slate-200 mt-3 sm:mt-4 tracking-tight">
                {t.hero_subtitle}
              </h2>
            </AnimatedComponent>

            {/* Dynamic Typewriter Command (min-h prevents layout shift on mobile wrap) */}
            <AnimatedComponent delay={150}>
              <div className="mt-3 min-h-[46px] sm:min-h-[36px] flex items-center justify-center lg:justify-start">
                <div className="font-mono text-xs sm:text-sm md:text-base font-semibold text-cyan-600 dark:text-cyan-400 flex items-center text-center lg:text-left">
                  <span className="text-cyan-500 mr-2 font-bold shrink-0">&gt;</span>
                  <span>{displayText}</span>
                  <span className="inline-block w-2 sm:w-2.5 h-4 bg-cyan-500 ml-1.5 animate-pulse shrink-0"></span>
                </div>
              </div>
            </AnimatedComponent>

            {/* Description */}
            <AnimatedComponent delay={200}>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero_description}
              </p>
            </AnimatedComponent>

            {/* Systematic Stats Badges */}
            <AnimatedComponent delay={250}>
              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-black text-cyan-500 font-mono">5+</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{t.stats_experience}</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-black text-blue-500 font-mono">AWS</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{t.stats_aws}</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-black text-indigo-500 font-mono">C1</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{t.stats_english}</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-black text-emerald-500 font-mono">9+</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{t.stats_projects}</div>
                </div>
              </div>
            </AnimatedComponent>

            {/* CTAs & Socials with Protected Dock Layout */}
            <AnimatedComponent delay={300}>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                
                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                  <a 
                    href="#projects" 
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:scale-95 transition-all text-center"
                  >
                    <span>{t.hero_explore_btn}</span>
                    <ArrowRight size={16} />
                  </a>

                  <a 
                    href={cvFile} 
                    download
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono font-bold text-xs sm:text-sm hover:border-cyan-500 dark:hover:border-cyan-500 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm text-center"
                  >
                    <FileText size={16} className="text-cyan-500" />
                    <span>{cvText}</span>
                  </a>
                </div>

                {/* Social Dock (Consolidated so LinkedIn NEVER gets orphaned!) */}
                <div className="flex items-center justify-center gap-1 p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
                  <a 
                    href="mailto:gabrielferreira47b@gmail.com"
                    className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    title="Enviar Email"
                    aria-label="Email"
                  >
                    <MailIcon c="w-4 h-4" />
                  </a>

                  <a 
                    href="https://github.com/Harlock221B" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    title="GitHub Profile"
                    aria-label="GitHub"
                  >
                    <GithubIcon c="w-4 h-4" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/gabriel-ferreira-souza/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon c="w-4 h-4" />
                  </a>
                </div>

              </div>
            </AnimatedComponent>
          </div>

          {/* Right Column: Interactive Code & Telemetry Window (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedComponent delay={200}>
              <div className="rounded-2xl overflow-hidden bg-[#0d131f] border border-slate-800 shadow-2xl shadow-cyan-950/40 text-left font-mono">
                
                {/* Window Titlebar */}
                <div className="px-4 py-3 bg-[#0a0e17] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-400 font-mono ml-2">sys://gabriel.terminal</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('data')}
                      className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                        activeTab === 'data' 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Python/Data
                    </button>
                    <button
                      onClick={() => setActiveTab('frontend')}
                      className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                        activeTab === 'frontend' 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      React/UI
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
                  {activeTab === 'data' ? (
                    <div>
                      <div className="text-slate-500 mb-2">{t.terminal_pipeline_comment}</div>
                      <div className="text-pink-400">import <span className="text-slate-200">pandas</span> as <span className="text-yellow-300">pd</span></div>
                      <div className="text-pink-400">import <span className="text-slate-200">boto3</span>, <span className="text-slate-200">plotly.express</span> as <span className="text-yellow-300">px</span></div>
                      <br />
                      <div className="text-slate-400">@serverless_task(runtime=<span className="text-emerald-400">"AWS_Lambda"</span>)</div>
                      <div><span className="text-blue-400 font-semibold">def</span> <span className="text-yellow-300">process_genomic_stream</span>(dataset_id):</div>
                      <div className="pl-4 text-slate-300">df = pd.read_parquet(f<span className="text-emerald-400">"s3://einstein-data/{'{'}dataset_id{'}'}"</span>)</div>
                      <div className="pl-4 text-slate-300">insights = df.pipe(nlp_clinical_analysis)</div>
                      <div className="pl-4 text-pink-400">return <span className="text-slate-300">{'{'}</span></div>
                      <div className="pl-8 text-cyan-300">"status": <span className="text-emerald-400">"SUCCESS"</span>,</div>
                      <div className="pl-8 text-cyan-300">"records_processed": <span className="text-orange-400">1_420_800</span>,</div>
                      <div className="pl-8 text-cyan-300">"accuracy": <span className="text-orange-400">0.994</span></div>
                      <div className="pl-4 text-slate-300">{'}'}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-slate-500 mb-2">{t.terminal_ui_comment}</div>
                      <div className="text-pink-400">import <span className="text-slate-200">{'{'} useState, useEffect {'}'}</span> from <span className="text-emerald-400">'react'</span>;</div>
                      <div className="text-pink-400">import <span className="text-slate-200">{'{'} motion {'}'}</span> from <span className="text-emerald-400">'framer-motion'</span>;</div>
                      <br />
                      <div><span className="text-blue-400 font-semibold">export const</span> <span className="text-yellow-300">InteractiveTelemetry</span> = () =&gt; {'{'}</div>
                      <div className="pl-4 text-slate-300">const [metrics, setMetrics] = useState(liveStream);</div>
                      <div className="pl-4 text-pink-400">return (</div>
                      <div className="pl-8 text-cyan-400">&lt;<span className="text-pink-400">div</span> <span className="text-purple-400">className</span>=<span className="text-emerald-400">"grid grid-cols-2 gap-4"</span>&gt;</div>
                      <div className="pl-12 text-slate-300">&lt;<span className="text-blue-300">RealtimeDataCard</span> telemetry={'{'}metrics{'}'} /&gt;</div>
                      <div className="pl-12 text-slate-300">&lt;<span className="text-blue-300">StreamlitBridge</span> active={'{'}true{'}'} /&gt;</div>
                      <div className="pl-8 text-cyan-400">&lt;/<span className="text-pink-400">div</span>&gt;</div>
                      <div className="pl-4 text-pink-400">);</div>
                      <div>{'}'};</div>
                    </div>
                  )}

                  {/* Micro Telemetry Bar inside code window */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>{t.terminal_execution}</span>
                    </div>
                    <span className="hidden sm:inline text-slate-500">UTF-8 // LF // React 19 + Python 3.12</span>
                    <span className="sm:hidden text-slate-500">React + Python</span>
                  </div>
                </div>

              </div>
            </AnimatedComponent>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;