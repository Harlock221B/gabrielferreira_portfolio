import React, { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { Code2, Database, Server, Cpu, Terminal } from 'lucide-react';

const categoryIcons = {
  0: Code2,
  1: Database,
  2: Server,
  3: Cpu
};

const categoryThemeColors = [
  { dot: 'bg-cyan-400', border: 'hover:border-cyan-500/60', text: 'text-cyan-500' },
  { dot: 'bg-emerald-400', border: 'hover:border-emerald-500/60', text: 'text-emerald-500' },
  { dot: 'bg-blue-400', border: 'hover:border-blue-500/60', text: 'text-blue-500' },
  { dot: 'bg-purple-400', border: 'hover:border-purple-500/60', text: 'text-purple-500' }
];

const SkillCard = ({ category, index, t }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = categoryIcons[index] || Code2;
  const theme = categoryThemeColors[index % categoryThemeColors.length];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-[1px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200/80 dark:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Dynamic Cursor Spotlight Beam */}
      {isHovered && (
        <div 
          className="absolute rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle 280px at center, rgba(6, 182, 212, 0.25), transparent)',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '560px',
            height: '560px',
            zIndex: 0
          }}
        />
      )}

      <div className="relative h-full bg-white dark:bg-[#0b1120] rounded-2xl sm:rounded-3xl p-4 sm:p-8 z-10 flex flex-col justify-between">
        <div>
          {/* Card Category Header */}
          <div className="flex items-center justify-between pb-3.5 mb-4 sm:pb-5 sm:mb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                <IconComponent size={18} />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                {category.name}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-slate-400 dark:text-slate-600 shrink-0">
              [CAT_0{index + 1}]
            </span>
          </div>

          {/* Skills Chips */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
            {category.skills.map(skill => (
              <span 
                key={skill} 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-default"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0`}></span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
          <span>{t.skills_validated}</span>
          <span className="text-emerald-500 font-semibold">{t.skills_prod_ready}</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-[#070b14]/50 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-500 scroll-mt-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-3.5 sm:px-6 relative z-10">
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
              <Terminal size={12} />
              <span>{t.skills_badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {t.skills_title}
            </h2>
            <div className="w-16 h-1 mt-3 sm:mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-xl px-2">
              {t.skills_subtitle}
            </p>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {t.skills_categories.map((category, index) => (
            <AnimatedComponent key={category.name} delay={index * 120}>
              <SkillCard category={category} index={index} t={t} />
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;