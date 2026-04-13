import React, { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';

const SkillCard = ({ category }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-[1px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Efeito de Lanterna (Glow) que segue o mouse */}
      {isHovered && (
        <div 
          className="absolute rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle 250px at center, rgba(6,182,212,0.4), transparent)',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            zIndex: 0
          }}
        />
      )}

      <div className="relative h-full bg-white dark:bg-slate-900 rounded-3xl p-8 z-10">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          {category.name}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map(skill => (
            <span 
              key={skill} 
              className="px-4 py-2 rounded-full text-sm font-semibold bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedComponent>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.skills_title}
            </h2>
            <div className="w-24 h-1.5 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.skills_categories.map((category, index) => (
            <AnimatedComponent key={category.name} delay={index * 150}>
              <SkillCard category={category} />
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;