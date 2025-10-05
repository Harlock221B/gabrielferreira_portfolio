import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon, LinkedinIcon, GithubIcon, MailIcon } from './icons';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/gabriel-ferreira221b",
    github: "https://github.com/Harlock221B",
    email: "mailto:gabrielferreira47b@gmail.com",
  };
  const iconStyle = "h-5 w-5";

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Gabriel Ferreira Souza</a>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {t.nav_links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{link.text}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={setLanguage} className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <GlobeIcon c={iconStyle} />
            <span className="text-sm font-bold">{language === 'pt' ? 'EN' : 'PT'}</span>
          </button>
          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700"></div>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><LinkedinIcon c={iconStyle} /></a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><GithubIcon c={iconStyle} /></a>
          <a href={socialLinks.email} aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><MailIcon c={iconStyle} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;