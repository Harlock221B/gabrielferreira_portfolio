import React, { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Career from './components/Career';
import Footer from './components/Footer';

const PortfolioContent = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
    };
    
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 antialiased selection:bg-cyan-300/70 selection:text-cyan-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Career />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}