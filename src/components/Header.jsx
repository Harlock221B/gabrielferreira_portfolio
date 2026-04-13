import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, FileText } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para o ficheiro e texto do currículo com base no idioma
  const cvFile = language === 'pt' ? './Gabriel_Ferreira_CV-PT-BR.pdf' : './Gabriel_Ferreira_CV-EN.pdf'
  const cvText = language === 'pt' ? 'Currículo' : 'Resume';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-md' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
        
        {/* Marca GABRIEL.DEV */}
        <a href="#" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
          GABRIEL<span className="text-cyan-500">.DEV</span>
        </a>

        {/* Navegação Orgânica */}
        <nav className="hidden md:flex items-center gap-8">
          {t.nav_links.map((link) => (
            <a 
              key={link.text} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all relative group"
            >
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          
          {/* Download do Currículo Dinâmico */}
          <a 
            href={cvFile} 
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white transition-all shadow-sm"
          >
            <FileText size={16} />
            {cvText}
          </a>

          {/* Toggle de Idioma */}
          <button 
            onClick={setLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all shadow-sm"
          >
            <div className="rounded-full overflow-hidden w-5 h-5 flex items-center justify-center border border-slate-200 dark:border-slate-600">
              <ReactCountryFlag 
                countryCode={language === 'pt' ? 'BR' : 'US'} 
                svg 
                style={{ width: '1.5em', height: '1.5em', objectFit: 'cover' }} 
              />
            </div>
          </button>

          {/* Toggle de Tema */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;