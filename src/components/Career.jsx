import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { BriefcaseIcon, GraduationCapIcon } from './icons';

const Career = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <AnimatedComponent>
              <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">{t.experience_title}</h2>
            </AnimatedComponent>
            <div className="relative mt-12 border-l-2 border-slate-700">
              {t.experiences.map((exp, index) => (
                <AnimatedComponent key={index} delay={index * 100}>
                  <div className="mb-12 ml-8">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 ring-8 ring-[#1e293b]"><BriefcaseIcon c="h-5 w-5 text-slate-300" /></span>
                    <h3 className="text-xl font-semibold text-slate-200">{exp.role}</h3>
                    <p className="block text-md font-normal leading-none text-cyan-400">{exp.company}</p>
                    <time className="block text-sm font-normal leading-none text-slate-500 mt-1">{exp.period}</time>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-slate-400">
                      {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                    </ul>
                  </div>
                </AnimatedComponent>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <AnimatedComponent>
              <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">{t.education_title}</h2>
            </AnimatedComponent>
            <div className="relative mt-12 border-l-2 border-slate-700">
              {t.education_history.map((edu, index) => (
                <AnimatedComponent key={index} delay={index * 100}>
                  <div className="mb-12 ml-8">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 ring-8 ring-[#1e293b]"><GraduationCapIcon c="h-5 w-5 text-slate-300" /></span>
                    <h3 className="text-xl font-semibold text-slate-200">{edu.degree}</h3>
                    <p className="block text-md font-normal leading-none text-cyan-400">{edu.institution}</p>
                    <time className="block text-sm font-normal leading-none text-slate-500 mt-1">{edu.period}</time>
                    <p className="mt-2 text-slate-400">{edu.description}</p>
                  </div>
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;