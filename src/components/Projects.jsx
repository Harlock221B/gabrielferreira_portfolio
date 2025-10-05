import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { ExternalLinkIcon } from './icons';

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedComponent>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.projects_title}</h2>
        </AnimatedComponent>
        <div className="mt-12 grid grid-cols-1 gap-16">
          {t.projects.map((repo, index) => (
            <AnimatedComponent key={repo.id} delay={index * 100}>
              <div className="group grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">

                {repo.imageUrl && (
                  <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <img src={repo.imageUrl} alt={`Screenshot of ${repo.name}`} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-video object-cover w-full transform group-hover:scale-105 transition-transform duration-300" />
                    </a>
                  </div>
                )}

                <div className={repo.imageUrl ? "md:col-span-2" : "md:col-span-5"}>
                  <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 flex items-center">
                    {repo.name}
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><ExternalLinkIcon c="h-5 w-5" /></a>
                  </h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">{repo.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.topics?.map(topic => (<span key={topic} className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300">{topic}</span>))}
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;