import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { GithubIcon, LinkedinIcon, MailIcon, LogoIcon } from './icons';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#' || href === '#home') {
      scrollToTop();
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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-16 bg-slate-100/60 dark:bg-[#05080f] text-slate-600 dark:text-slate-400 font-mono text-xs transition-colors duration-500">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80 items-start">
          
          {/* Brand & System Status */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden shadow-md shadow-cyan-500/20 shrink-0">
                <LogoIcon className="w-full h-full" />
              </div>
              <span className="text-lg font-black text-slate-900 dark:text-white font-sans tracking-tight">
                GABRIEL<span className="text-cyan-500 font-mono text-sm ml-0.5">.DEV</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md font-sans leading-relaxed">
              {t.footer_desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.footer_kernel}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer_nav_heading}
            </div>
            <ul className="space-y-2">
              {t.nav_links.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-cyan-500 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-cyan-500/50">&gt;</span>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer_connect_heading}
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Harlock221B" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon c="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gabriel-ferreira-souza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon c="w-4 h-4" />
              </a>
              <a 
                href="mailto:gabrielferreira47b@gmail.com" 
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                title="Email"
                aria-label="Email"
              >
                <MailIcon c="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[11px] text-slate-500 hover:text-cyan-500 transition-colors pt-2 cursor-pointer"
            >
              <ArrowUp size={12} />
              <span>{t.footer_back_to_top}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Gabriel Ferreira Souza. {t.footer_text}
          </div>
          <div className="flex items-center gap-2">
            <span>{t.footer_built_with}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;