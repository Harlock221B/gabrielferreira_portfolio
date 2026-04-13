import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import profileImageUrl from '../assets/img/profile.png';
import { FileText } from 'lucide-react';

const Hero = () => {
  const { language, t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Lógica para o Currículo com os nomes corretos
  const cvFile = language === 'pt' ? './Gabriel_Ferreira_CV-PT-BR.pdf' : './Gabriel_Ferreira_CV-EN.pdf';
  const cvText = language === 'pt' ? 'Baixar Currículo' : 'Download Resume';

  useEffect(() => {
    const text = t.hero_subtitle;
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting && displayText === '' ? 500 : (!isDeleting && displayText === text ? 2000 : typingSpeed);

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== text) {
        setDisplayText(text.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== '') {
        setDisplayText(text.substring(0, displayText.length - 1));
      } else {
        setIsDeleting(!isDeleting);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, t.hero_subtitle]);

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen flex items-center">
      
      {/* Background Animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/20 dark:bg-cyan-900/30 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-900/30 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="relative container mx-auto max-w-5xl px-4 py-24 flex flex-col items-center text-center z-10">
        <AnimatedComponent>
          <div className="group relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30 mb-8 transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
            <img 
              src={profileImageUrl} 
              alt="Gabriel Ferreira" 
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-white dark:border-slate-900" 
            />
          </div>
        </AnimatedComponent>
        
        <AnimatedComponent delay={100}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
            Gabriel Ferreira
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-medium text-cyan-600 dark:text-cyan-400 h-10 flex items-center justify-center">
            {displayText}
            <span className="w-1 h-8 bg-cyan-500 ml-1 animate-ping"></span>
          </h2>
        </AnimatedComponent>
        
        <AnimatedComponent delay={200}>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.hero_description}
          </p>
        </AnimatedComponent>
        
        <AnimatedComponent delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
            {/* Botão de Contacto */}
            <a 
              href="mailto:gabrielferreira47b@gmail.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-10 py-4 text-lg font-bold text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-500 hover:text-white transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              {t.nav_contact}
            </a>

            {/* Botão de Currículo Dinâmico */}
            <a 
              href={cvFile} 
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white dark:bg-slate-800 px-10 py-4 text-lg font-bold text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all hover:-translate-y-1 active:scale-95 shadow-sm"
            >
              <FileText size={20} className="text-cyan-500" />
              {cvText}
            </a>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
};

export default Hero;