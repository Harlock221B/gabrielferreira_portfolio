import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { CodeIcon, DatabaseIcon, ServerIcon, UsersIcon } from './icons';

const Skills = () => {
  const { t } = useLanguage();
  const icons = [<CodeIcon c="w-8 h-8 mb-4 text-cyan-500" />, <DatabaseIcon c="w-8 h-8 mb-4 text-cyan-500" />, <ServerIcon c="w-8 h-8 mb-4 text-cyan-500" />, <UsersIcon c="w-8 h-8 mb-4 text-cyan-500" />];
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedComponent>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl text-center">{t.skills_title}</h2>
        </AnimatedComponent>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.skills_categories.map((category, index) => (
            <AnimatedComponent key={category.name} delay={100 * (index + 1)}>
              <div className="skill-card rounded-xl bg-slate-50 dark:bg-slate-800/50 p-8 shadow-lg h-full text-center">
                {icons[index]}
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{category.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {category.skills.map(skill => (<span key={skill} className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>))}
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;