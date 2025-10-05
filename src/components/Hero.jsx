import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import profileImageUrl from '../assets/img/profile.png';

const Hero = () => {
  const { t } = useLanguage();
  const heroStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop')`
  };

  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white" style={heroStyle}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-32 text-center">
        <AnimatedComponent>
          <img src={profileImageUrl} alt="Gabriel Ferreira Souza" className="mx-auto w-40 h-40 rounded-full object-cover border-4 border-slate-500 shadow-lg" />
        </AnimatedComponent>
        <AnimatedComponent delay={100}>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-white">Gabriel Ferreira Souza</h1>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-300">{t.hero_subtitle}</h2>
        </AnimatedComponent>
        <AnimatedComponent delay={200}>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300">{t.hero_description}</p>
        </AnimatedComponent>
        <AnimatedComponent delay={300}>
          <a href="mailto:gabrielferreira47b@gmail.com" className="mt-8 inline-block rounded-md bg-cyan-500 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-cyan-400 transition-all transform hover:scale-105">{t.nav_contact}</a>
        </AnimatedComponent>
      </div>
    </section>
  );
};

export default Hero;