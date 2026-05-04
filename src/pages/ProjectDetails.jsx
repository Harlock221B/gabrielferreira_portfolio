import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLinkIcon } from "../components/icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  // Encontra o projeto pelo ID textual
  const project = t.projects.find(p => p.id === id);

  // Faz a página sempre abrir no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-4">
          {language === 'pt' ? 'Projeto não encontrado' : 'Project not found'}
        </h1>
        <Link to="/" className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition-colors">
          {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 py-24 px-4 sm:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-500/10 dark:from-cyan-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navegação de Volta */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold mb-10 transition-colors group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> 
          {language === 'pt' ? 'Voltar para o Portfólio' : 'Back to Portfolio'}
        </Link>

        {/* Cabeçalho */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {project.name}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.topics.map((topic, index) => (
              <span 
                key={index} 
                className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-1.5 px-4 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </header>

        {/* Imagem de Destaque */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-900/20 mb-16 border border-slate-200 dark:border-slate-800">
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
          />
        </div>

        {/* Grade de Conteúdo */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Coluna Principal (Textos) */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                {language === 'pt' ? 'O Desafio' : 'The Challenge'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                {language === 'pt' ? 'A Solução' : 'The Solution'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Coluna Lateral (Features e Call to Action) */}
          <div className="space-y-8">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'pt' ? 'Funcionalidades' : 'Key Features'}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              {language === 'pt' ? 'Visitar Projeto' : 'Visit Live Project'}
              <ExternalLinkIcon c="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}