import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl px-4 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Gabriel Ferreira Souza. {t.footer_text}</p>
      </div>
    </footer>
  );
};

export default Footer;