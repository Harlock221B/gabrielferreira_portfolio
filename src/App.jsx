import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Importação do provedor de tema
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Career from './components/Career';
import Footer from './components/Footer';

const PortfolioContent = () => {
  // O useEffect antigo foi removido daqui! O ThemeContext gerencia o dark mode agora.
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 min-h-screen antialiased selection:bg-cyan-300/70 selection:text-cyan-900 transition-colors duration-500">
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
    // Agora sim! O ThemeProvider está abraçando toda a aplicação
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}