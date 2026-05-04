import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Importação do provedor de tema
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Career from './components/Career';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails'; // Importe a nova página!

// Componente que agrupa todo o conteúdo da sua página inicial
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
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 min-h-screen antialiased selection:bg-cyan-300/70 selection:text-cyan-900 transition-colors duration-500">
      <Header />
      <main>
        {/* Aqui definimos as rotas da aplicação */}
        <Routes>
          {/* Rota raiz (Portfólio normal) */}
          <Route path="/" element={<Home />} />
          
          {/* Rota dinâmica para os detalhes do projeto */}
          <Route path="/projeto/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* O Router precisa envolver a área onde as rotas são chamadas */}
        <Router>
          <PortfolioContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}