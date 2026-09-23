import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Career from './components/Career';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Career />
  </>
);

const PortfolioContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          const headerOffset = 90;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-slate-50 dark:bg-[#070b14] text-slate-600 dark:text-slate-400 min-h-screen antialiased selection:bg-cyan-500 selection:text-white transition-colors duration-500">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <PortfolioContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}