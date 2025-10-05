import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedComponent from './AnimatedComponent';
import awsBadgeImg from '../assets/img/badge_cloud.png';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <AnimatedComponent>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.about_title}</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{t.about_description}</p>
          </AnimatedComponent>
        </div>
        <div className="space-y-8">
          <AnimatedComponent delay={100}>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200">{t.languages_title}</h3>
              <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                {t.languages.map(lang => (
                  <li key={lang.lang} className="flex justify-between"><span>{lang.lang}</span> <strong>{lang.level}</strong></li>
                ))}
              </ul>
            </div>
          </AnimatedComponent>
          <AnimatedComponent delay={200}>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200">{t.key_certifications}</h3>
              <div className="mt-4 flex items-center justify-start gap-4">
                <img src={awsBadgeImg} alt="AWS Cloud Practitioner Badge" className="h-20 object-contain" />
                <a href={t.english_cert_link} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
                  <div className="relative w-40 h-20">
                    <img src="https://cdn.efset.org/efset-widget/img/v2/social-media/certificate/cefr-badge-C1.svg" role="img" alt="EF SET C1 Advanced Badge" className="absolute inset-0 w-full h-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <img className="h-5 mb-1" src="https://a.storyblok.com/f/246158/103x24/eb1cf2418f/efset-logo_white.svg" alt="EF SET Logo" />
                      <p className="text-2xl font-bold">61/100</p>
                      <p className="text-sm font-semibold">C1 Advanced</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
};

export default About;