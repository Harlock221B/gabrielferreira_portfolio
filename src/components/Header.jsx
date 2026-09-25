import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { GithubIcon, LinkedinIcon, MailIcon, LogoIcon } from './icons';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cvFile = language === 'pt' ? './Gabriel_Ferreira_CV-PT-BR.pdf' : './Gabriel_Ferreira_CV-EN.pdf';
  const cvText = language === 'pt' ? 'Currículo' : 'Resume';
  const statusText = language === 'pt' ? 'Disponível' : 'Available';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const targetId = href.replace('#', '');
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const headerOffset = 90;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6">
      <div className={`container mx-auto max-w-6xl transition-all duration-300 rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
        isScrolled 
          ? 'bg-white/85 dark:bg-[#070b14]/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-cyan-950/20' 
          : 'bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/40'
      }`}>
        
        {/* Brand / Logo using SVG Icon */}
        <div className="flex items-center gap-3">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
              <LogoIcon className="w-full h-full" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-white">
              GABRIEL<span className="text-cyan-500 font-mono text-sm ml-0.5">.DEV</span>
            </span>
          </a>

          {/* Systematic Live Status Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SYS: {statusText}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {t.nav_links.map((link) => (
            <a 
              key={link.text} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative group py-1 cursor-pointer"
            >
              <span className="text-cyan-500/60 mr-1">//</span>
              {link.text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social Quick Links */}
          <div className="hidden sm:flex items-center gap-1 border-r border-slate-200 dark:border-slate-800 pr-2">
            <a 
              href="https://github.com/Harlock221B" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-full transition-all"
            >
              <GithubIcon c="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gabriel-ferreira-souza/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-full transition-all"
            >
              <LinkedinIcon c="w-4 h-4" />
            </a>
          </div>

          {/* CV Button */}
          <a 
            href={cvFile} 
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white transition-all shadow-sm active:scale-95"
          >
            <FileText size={13} />
            <span>{cvText}</span>
          </a>

          {/* Language Switch */}
          <button 
            onClick={setLanguage}
            title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:border-cyan-500/50 border border-slate-200/80 dark:border-slate-700/80 text-xs font-mono font-semibold transition-all active:scale-95 shadow-sm"
          >
            <div className="rounded-full overflow-hidden w-4 h-4 flex items-center justify-center">
              <ReactCountryFlag 
                countryCode={language === 'pt' ? 'BR' : 'US'} 
                svg 
                style={{ width: '1.2em', height: '1.2em', objectFit: 'cover' }} 
              />
            </div>
            <span className="text-[11px] text-slate-700 dark:text-slate-300 uppercase">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-yellow-400 hover:text-cyan-500 dark:hover:text-yellow-300 hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} className="text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 active:scale-90 transition-transform"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={18} className="text-cyan-500" /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          />

          {/* Drawer Menu */}
          <div className="relative z-50 md:hidden mt-2 container mx-auto max-w-6xl rounded-3xl bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-2xl border border-slate-200 dark:border-cyan-500/20 p-5 sm:p-6 shadow-2xl shadow-cyan-950/40 flex flex-col gap-5 animate-in fade-in slide-in-from-top-3 duration-200">
            
            {/* Top Telemetry & CV Action */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold">{language === 'pt' ? 'SYS: ONLINE' : 'SYS: ONLINE'}</span>
              </div>
              
              <a 
                href={cvFile} 
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-bold shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
              >
                <FileText size={13} />
                <span>{cvText}</span>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1.5">
              {t.nav_links.map((link, idx) => (
                <a 
                  key={link.text} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-mono font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 active:bg-cyan-500/10 dark:active:bg-cyan-500/15 py-3 px-3.5 rounded-2xl flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-cyan-500 font-mono font-bold opacity-60 group-hover:opacity-100">0{idx + 1} //</span>
                    <span className="font-sans font-semibold text-base">{link.text}</span>
                  </span>
                  <span className="text-xs text-cyan-500 font-mono transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              ))}
            </nav>

            {/* Social Dock in Mobile Menu */}
            <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2">
              <a 
                href="https://github.com/Harlock221B" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 active:scale-95 transition-all"
              >
                <GithubIcon c="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/gabriel-ferreira-souza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 active:scale-95 transition-all"
              >
                <LinkedinIcon c="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:gabrielferreira47b@gmail.com" 
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 active:scale-95 transition-all"
              >
                <MailIcon c="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>
        </>
      )}
    </header>
  );
};

export default Header;