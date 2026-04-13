import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import { ExternalLinkIcon } from './icons';

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Elementos decorativos de fundo para dar um tom futurista */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white dark:from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 dark:bg-cyan-900/20 blur-[120px] pointer-events-none" />
      
      <div className="relative container mx-auto max-w-7xl px-4 md:px-8">
        
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
              {t.projects_title}
            </h2>
            <div className="w-24 h-1.5 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </AnimatedComponent>

        {/* Grid moderno para os projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {t.projects.map((repo, index) => (
            <AnimatedComponent key={repo.id} delay={index * 150}>
              <div className="group relative flex flex-col h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2">
                
                {/* Efeito de brilho na borda superior no hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Área da Imagem */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-cyan-900/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                  {repo.imageUrl ? (
                    <img 
                      src={repo.imageUrl} 
                      alt={`Screenshot do projeto ${repo.name}`} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <span>Sem Imagem</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="flex flex-col flex-grow p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h3>
                  
                  <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                    {repo.description}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-2">
                    {repo.topics?.map(topic => (
                      <span key={topic} className="rounded-full bg-slate-100 dark:bg-slate-800/80 px-4 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm md:text-base hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 w-fit"
                    >
                      Acessar Projeto
                      <ExternalLinkIcon c="h-5 w-5" />
                    </a>
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