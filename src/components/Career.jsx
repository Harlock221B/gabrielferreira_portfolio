import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Career = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 relative">
        
        {/* Fundo Decorativo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <AnimatedComponent>
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4">
              {t.experience_title}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/20"></div>
          </div>
        </AnimatedComponent>

        <div className="relative space-y-16">
          {/* Linha Vertical Dinâmica */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2">
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </div>

          {t.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isCurrent = exp.period.toLowerCase().includes('present') || exp.period.toLowerCase().includes('presente');

            return (
              <AnimatedComponent key={index} delay={index * 150} className="relative z-10">
                <div className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Espaçador para o lado oposto no Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Círculo Central com Ícone */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 md:-translate-x-1/2 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-500">
                    <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-cyan-500 animate-ping' : 'bg-slate-400'}`}></div>
                    {isCurrent && <div className="absolute w-3 h-3 rounded-full bg-cyan-500"></div>}
                  </div>

                  {/* Card de Conteúdo */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5">
                      
                      {/* Badge de Data */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-4">
                        <Calendar size={12} />
                        {exp.period}
                      </div>

                      <h3 className="text-2xl font-bold dark:text-white text-slate-900 group-hover:text-cyan-500 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-6 italic">
                        {exp.company}
                      </p>

                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                            {item}
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