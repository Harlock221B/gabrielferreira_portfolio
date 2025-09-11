import React, { useState, useEffect, createContext, useContext, useRef } from 'react';

// Importando suas imagens locais
import profileImageUrl from './assets/img/perfil.png';
import roadcarsImg from './assets/img/roadcars.png';
import fonacaoImg from './assets/img/fonacao.png';
import awsBadgeImg from './assets/img/badge_cloud.png';
import englishCertImg from './assets/img/ingles.png';

// ===== HOOK PARA ANIMAÇÃO DE SCROLL =====
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

const AnimatedComponent = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};


// ===== CONTEXTO DE IDIOMA E CONTEÚDO =====
const LanguageContext = createContext();

const content = {
  en: {
    nav_contact: "Contact",
    hero_subtitle: "Mid-Level Data Analyst & Front-End Developer",
    hero_description: "Over 3 years of experience transforming complex data into actionable insights. I build modern web interfaces with React, create interactive systems with Streamlit, and develop data studies using Python, Pandas, and Plotly. Specialized in bioinformatics and passionate about using technology to solve complex challenges.",
    skills_title: "Technical Skills",
    skills_categories: [
      { name: "Front-End Development", skills: ["React", "Next.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"] },
      { name: "Data Science & Viz", skills: ["Power BI", "Streamlit", "Python (Pandas, Plotly)", "SQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"] },
      { name: "Back-End & Cloud", skills: ["Node.js", "Java (SpringBoot)", "Python (Django)", "AWS (Lambda, API Gateway, CDK)", "Docker"] },
      { name: "Methodologies", skills: ["Scrum", "Kanban", "Agile", "Clean Code"] }
    ],
    experience_title: "Professional Experience",
    experiences: [
      { role: "Mid-Level Data Analyst", company: "Hospital Israelita Albert Einstein", period: "Feb 2025 - Present", achievements: ["Engineered and automated ETL pipelines, reducing data processing time by 40%.", "Designed and deployed over 10 interactive dashboards in Power BI, improving clinical teams' decision-making speed by 25%.", "Implemented machine learning models to predict patient trends with 85% accuracy.", "Managed a multi-terabyte Data Lake, ensuring data integrity and compliance."] },
      { role: "Data Analyst", company: "Hospital Israelita Albert Einstein", period: "Nov 2023 - Feb 2025", achievements: ["Architected serverless integration solutions for bioinformatics systems using Python and AWS.", "Built robust data integrators that eliminated over 95% of manual data entry errors.", "Optimized code for critical bioinformatics tools, enhancing performance and reliability."] },
      { role: "Systems Development Intern", company: "CI&T", period: "Feb 2022 - Mar 2023", achievements: ["Developed responsive UI components for the 'BEES SOCIAL MEDIA' platform using React.js, contributing to a 20% improvement in user engagement.", "Collaborated on a microservices-based architecture using Java and MongoDB, adhering to Clean Code principles."] },
      { role: "Systems Development Intern", company: "Robert Bosch Ltda", period: "Nov 2021 - Feb 2022", achievements: ["Implemented and maintained front-end features for a B2B e-commerce platform using AngularJS and React.", "Contributed to a 10% increase in platform stability by refactoring legacy code and fixing critical bugs."] },
      { role: "Project Manager (Entrepreneurship Program)", company: "Dell Technologies", period: "Mar 2019 - Dec 2019", achievements: ["Led the development of a startup from concept to MVP as part of a year-long high school entrepreneurship program.", "Created the business plan, product strategy, and a functional prototype for a new service.", "Pitched the final product to real investors and Dell managers, receiving positive feedback on market viability."] }
    ],
    certifications_title: "Certifications & Dashboards",
    english_cert_link: "https://cert.efset.org/d6Pcpi",
    dashboards_title: "Dashboard Examples",
    dashboards: [
        { id: 1, title: "Clinical Research Dashboard", description: "Interactive dashboard to monitor patient recruitment and trial progress.", imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Dashboard+Print+1" },
        { id: 2, title: "Genomic Data Analysis", description: "Visualization of gene expression data to identify significant patterns for research.", imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Dashboard+Print+2" },
    ],
    projects_title: "Featured Projects",
    projects: [
        { id: 1, name: "Road Cars Consulting", url: "https://roadcarsconsulting.vercel.app", description: "A complete website for a custom vehicle sales company. Features user authentication (login, JWT token, registration), admin panel for car management, and appointment scheduling, all connected to a Firebase database.", topics: ["React", "Next.js", "Firebase", "Authentication"], imageUrl: roadcarsImg },
        { id: 2, name: "Fonação Clinic", url: "https://fonacao.com.br", description: "Institutional website and e-commerce platform for a speech therapy clinic, featuring a dynamic product catalog built with Django.", topics: ["Django", "HTML5", "CSS3", "Bootstrap"], imageUrl: fonacaoImg },
        { id: 3, name: "Zeróbito", url: "https://github.com/Harlock221B", description: "Web platform designed to reduce workplace accidents through real-time data analysis. Key achievement: implemented an incident reporting and alert feature that decreased emergency response time by approximately 30%.", topics: ["Node.js", "MongoDB", "Data Analysis"], imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Project+Print" }
    ],
    education_title: "Education",
    education_history: [
        { degree: "B.S. in Systems Analysis and Development", institution: "UNICAMP - Campinas State University", period: "2021 - 2024", description: "Focused on the complete software development lifecycle, including requirements analysis, system design, database management, and project implementation using agile methodologies." },
        { degree: "Technical Degree in Systems Development", institution: "SENAI - Roberto Mange", period: "2021", description: "Intensive technical training focused on practical programming, logic, and the development of desktop and web applications." },
        { degree: "Technical Degree in Computer Science", institution: "ETEC Hortolândia", period: "2018 - 2020", description: "Solid foundation in computer science fundamentals, programming logic, computer networks, and hardware maintenance." }
    ],
    footer_text: "All rights reserved."
  },
  pt: {
    nav_contact: "Entre em Contato",
    hero_subtitle: "Analista de Dados Pleno & Desenvolvedor Front-End",
    hero_description: "Mais de 3 anos de experiência transformando dados complexos em insights acionáveis. Construo interfaces web modernas com React, crio sistemas interativos com Streamlit e desenvolvo estudos de dados com Python, Pandas e Plotly. Especializado em bioinformática e apaixonado por usar tecnologia para resolver desafios complexos.",
    skills_title: "Habilidades Técnicas",
    skills_categories: [
      { name: "Desenvolvimento Front-End", skills: ["React", "Next.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"] },
      { name: "Data Science & Visualização", skills: ["Power BI", "Streamlit", "Python (Pandas, Plotly)", "SQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"] },
      { name: "Back-End & Cloud", skills: ["Node.js", "Java (SpringBoot)", "Python (Django)", "AWS (Lambda, API Gateway, CDK)", "Docker"] },
      { name: "Metodologias", skills: ["Scrum", "Kanban", "Agile", "Clean Code"] }
    ],
    experience_title: "Experiência Profissional",
    experiences: [
      { role: "Analista de Dados Pleno", company: "Hospital Israelita Albert Einstein", period: "Fev 2025 - Presente", achievements: ["Desenvolvi e automatizei pipelines de ETL, reduzindo o tempo de processamento de dados em 40%.", "Criei mais de 10 dashboards interativos em Power BI, melhorando a velocidade de decisão das equipes clínicas em 25%.", "Implementei modelos de machine learning para prever tendências de pacientes com 85% de acurácia.", "Gerenciei um Data Lake de múltiplos terabytes, garantindo integridade e conformidade dos dados."] },
      { role: "Analista de Dados", company: "Hospital Israelita Albert Einstein", period: "Nov 2023 - Fev 2025", achievements: ["Arquitetei soluções de integração serverless para sistemas de bioinformática com Python e AWS.", "Construí integradores de dados robustos que eliminaram mais de 95% dos erros de entrada manual.", "Otimizei códigos para ferramentas críticas de bioinformática, melhorando performance e confiabilidade."] },
      { role: "Estagiário de Desenvolvimento de Sistemas", company: "CI&T", period: "Fev 2022 - Mar 2023", achievements: ["Desenvolvi componentes de UI responsivos para a plataforma 'BEES SOCIAL MEDIA' com React.js, contribuindo para uma melhoria de 20% no engajamento do usuário.", "Colaborei em uma arquitetura baseada em microsserviços usando Java e MongoDB, seguindo os princípios de Clean Code."] },
      { role: "Estagiário de Desenvolvimento de Sistemas", company: "Robert Bosch Ltda", period: "Nov 2021 - Fev 2022", achievements: ["Implementei e mantive funcionalidades de front-end para uma plataforma de e-commerce B2B usando AngularJS e React.", "Contribuí para um aumento de 10% na estabilidade da plataforma ao refatorar código legado e corrigir bugs críticos."] },
      { role: "Gerente de Projetos (Programa de Empreendedorismo)", company: "Dell Technologies", period: "Mar 2019 - Dez 2019", achievements: ["Liderei o desenvolvimento de uma startup do conceito ao MVP como parte de um programa de empreendedorismo de um ano durante o ensino médio.", "Criei o plano de negócios, a estratégia de produto e um protótipo funcional para um novo serviço.", "Apresentei o pitch final do produto para investidores reais e gerentes da Dell, recebendo feedback positivo sobre a viabilidade de mercado."] }
    ],
    certifications_title: "Certificações e Dashboards",
    english_cert_link: "https://cert.efset.org/d6Pcpi",
    dashboards_title: "Exemplos de Dashboards",
    dashboards: [
        { id: 1, title: "Dashboard de Pesquisa Clínica", description: "Painel interativo para monitorar o recrutamento de pacientes e o progresso de estudos.", imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Print+Dashboard+1" },
        { id: 2, title: "Análise de Dados Genômicos", description: "Visualização de dados de expressão gênica para identificar padrões significativos para pesquisa.", imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Print+Dashboard+2" },
    ],
    projects_title: "Projetos em Destaque",
     projects: [
        { id: 1, name: "Road Cars Consulting", url: "https://roadcarsconsulting.vercel.app", description: "Site completo para uma empresa de venda de veículos personalizados. Possui autenticação de usuário (login, token JWT, registro), painel de admin para gestão de carros e agendamentos, tudo conectado ao Firebase.", topics: ["React", "Next.js", "Firebase", "Authentication"], imageUrl: roadcarsImg },
        { id: 2, name: "Clínica Fonação", url: "https://fonacao.com.br", description: "Site institucional e plataforma de e-commerce para uma clínica de fonoaudiologia, com um catálogo de produtos dinâmico desenvolvido com Django.", topics: ["Django", "HTML5", "CSS3", "Bootstrap"], imageUrl: fonacaoImg },
        { id: 3, name: "Zeróbito", url: "https://github.com/Harlock221B", description: "Plataforma web projetada para reduzir acidentes de trabalho através da análise de dados em tempo real. Principal conquista: implementei um recurso de alerta de incidentes que diminuiu o tempo de resposta a emergências em cerca de 30%.", topics: ["Node.js", "MongoDB", "Data Analysis"], imageUrl: "https://placehold.co/600x400/1E293B/94A3B8?text=Print+do+Projeto" }
    ],
    education_title: "Formação Acadêmica",
    education_history: [
        { degree: "Bacharelado em Análise e Desenvolvimento de Sistemas", institution: "UNICAMP - Universidade Estadual de Campinas", period: "2021 - 2024", description: "Foco no ciclo de vida completo de desenvolvimento de software, incluindo análise de requisitos, arquitetura de sistemas, gestão de bancos de dados e implementação de projetos com metodologias ágeis." },
        { degree: "Técnico em Desenvolvimento de Sistemas", institution: "SENAI - Roberto Mange", period: "2021", description: "Formação técnica intensiva com foco em programação prática, lógica e desenvolvimento de aplicações desktop e web." },
        { degree: "Técnico em Informática (Integrado ao Ensino Médio)", institution: "ETEC Hortolândia", period: "2018 - 2020", description: "Base sólida em fundamentos da ciência da computação, lógica de programação, redes de computadores e manutenção de hardware." }
    ],
    footer_text: "Todos os direitos reservados."
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const toggleLanguage = () => { setLanguage(prev => prev === 'pt' ? 'en' : 'pt'); };
  const value = { language, setLanguage: toggleLanguage, t: content[language] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
const useLanguage = () => useContext(LanguageContext);

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
    }, [theme]);
    const toggleTheme = () => { setTheme(prev => prev === 'dark' ? 'light' : 'dark'); };
    const value = { theme, toggleTheme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
const useTheme = () => useContext(ThemeContext);


// ===== ÍCONES SVG =====
const BriefcaseIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);
const GraduationCapIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>);
const GithubIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);
const LinkedinIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const MailIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>);
const ExternalLinkIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>);
const GlobeIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);
const SunIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>);
const MoonIcon = ({ c }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);


// ===== COMPONENTES DA PÁGINA =====

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/gabrielferreira-dev/",
    github: "https://github.com/Harlock221B",
    email: "mailto:gabrielferreira221b@gmail.com",
  };
  const iconStyle = "h-6 w-6";

  return (
    <header className="sticky top-0 z-30 w-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Gabriel F. Souza</a>
        <nav className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {theme === 'dark' ? <SunIcon c={iconStyle}/> : <MoonIcon c={iconStyle} />}
            </button>
            <button onClick={setLanguage} className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <GlobeIcon c={iconStyle}/>
                <span className="font-semibold">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><LinkedinIcon c={iconStyle} /></a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><GithubIcon c={iconStyle} /></a>
            <a href={socialLinks.email} aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><MailIcon c={iconStyle} /></a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
    const { t } = useLanguage();
    return (
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimatedComponent>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={profileImageUrl} alt="Gabriel Ferreira Souza" className="w-40 h-40 rounded-full object-cover border-4 border-slate-300 dark:border-slate-700 shadow-lg"/>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-200">Gabriel Ferreira Souza</h1>
                    <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-400">{t.hero_subtitle}</h2>
                </div>
            </div>
            </AnimatedComponent>
            <AnimatedComponent delay={100}>
                <p className="mt-8 max-w-3xl text-lg text-slate-600 dark:text-slate-400">{t.hero_description}</p>
            </AnimatedComponent>
             <AnimatedComponent delay={200}>
            <a href="mailto:gabrielferreira221b@gmail.com" className="mt-8 inline-block rounded-md bg-cyan-600 dark:bg-cyan-500 px-6 py-3 text-lg font-semibold text-white dark:text-slate-900 hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all transform hover:scale-105">{t.nav_contact}</a>
            </AnimatedComponent>
        </div>
      </section>
    );
};

const Skills = () => {
    const { t } = useLanguage();
    return (
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
            <AnimatedComponent>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.skills_title}</h2>
            </AnimatedComponent>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.skills_categories.map((category, index) => (
              <AnimatedComponent key={category.name} delay={100 * (index + 1)}>
              <div className="rounded-lg bg-white dark:bg-slate-800/50 p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">{category.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map(skill => ( <span key={skill} className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span> ))}
                </div>
              </div>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </section>
    );
};

const CareerSection = () => {
    const { t } = useLanguage();
    return (
        <section id="career" className="py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <AnimatedComponent>
                           <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.experience_title}</h2>
                        </AnimatedComponent>
                        <div className="relative mt-12 border-l-2 border-slate-300 dark:border-slate-700">
                            {t.experiences.map((exp, index) => (
                                <AnimatedComponent key={index} delay={index * 100}>
                                <div className="mb-12 ml-6">
                                    <span className="absolute -left-[11px] flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-700 ring-8 ring-slate-100 dark:ring-slate-900"><BriefcaseIcon c="h-4 w-4 text-cyan-600 dark:text-cyan-400" /></span>
                                    <h3 className="flex items-center text-xl font-semibold text-slate-900 dark:text-slate-200">{exp.role}</h3>
                                    <p className="block text-md font-normal leading-none text-slate-600 dark:text-slate-400">{exp.company}</p>
                                    <time className="block text-sm font-normal leading-none text-slate-500 dark:text-slate-500 mt-1">{exp.period}</time>
                                    <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                                    {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                    </ul>
                                </div>
                                </AnimatedComponent>
                            ))}
                        </div>
                    </div>
                     <div>
                        <AnimatedComponent>
                           <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.education_title}</h2>
                        </AnimatedComponent>
                         <div className="relative mt-12 border-l-2 border-slate-300 dark:border-slate-700">
                            {t.education_history.map((edu, index) => (
                                <AnimatedComponent key={index} delay={index * 100}>
                                <div className="mb-12 ml-6">
                                    <span className="absolute -left-[11px] flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-700 ring-8 ring-slate-100 dark:ring-slate-900"><GraduationCapIcon c="h-4 w-4 text-cyan-600 dark:text-cyan-400" /></span>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200">{edu.degree}</h3>
                                    <p className="block text-md font-normal leading-none text-slate-600 dark:text-slate-400">{edu.institution}</p>
                                    <time className="block text-sm font-normal leading-none text-slate-500 dark:text-slate-500 mt-1">{edu.period}</time>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">{edu.description}</p>
                                </div>
                                </AnimatedComponent>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CertificationsDashboards = () => {
    const { t } = useLanguage();
    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto max-w-6xl px-4">
                <AnimatedComponent>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl text-center">{t.certifications_title}</h2>
                </AnimatedComponent>
                <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center">
                    <AnimatedComponent delay={100}>
                    <img src={awsBadgeImg} alt="AWS Cloud Practitioner Badge" className="w-48 h-48 object-contain"/>
                    </AnimatedComponent>
                    <AnimatedComponent delay={200}>
                    <a href={t.english_cert_link} target="_blank" rel="noopener noreferrer">
                       <img src={englishCertImg} alt="English C1 Certificate" className="max-w-xs w-full object-contain rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105"/>
                    </a>
                    </AnimatedComponent>
                </div>
                <AnimatedComponent>
                <h3 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl text-center">{t.dashboards_title}</h3>
                </AnimatedComponent>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.dashboards.map((dash, index) => (
                         <AnimatedComponent key={dash.id} delay={100 * (index + 1)}>
                        <div className="rounded-lg bg-white dark:bg-slate-800/50 p-4 shadow-sm h-full">
                             <img src={dash.imageUrl} alt={dash.title} className="w-full h-auto object-cover rounded-md mb-4"/>
                             <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">{dash.title}</h4>
                             <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">{dash.description}</p>
                        </div>
                        </AnimatedComponent>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Projects = () => {
    const { t } = useLanguage();
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
             <AnimatedComponent>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">{t.projects_title}</h2>
            </AnimatedComponent>
          <div className="mt-12 grid grid-cols-1 gap-16">
            {t.projects.map((repo, index) => (
                 <AnimatedComponent key={repo.id} delay={index * 100}>
              <div className="group grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
                <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <img src={repo.imageUrl} alt={`Screenshot of ${repo.name}`} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-video object-cover w-full transform group-hover:scale-105 transition-transform duration-300" />
                    </a>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 flex items-center">
                        {repo.name}
                        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><ExternalLinkIcon c="h-5 w-5" /></a>
                    </h3>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{repo.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.topics?.map(topic => ( <span key={topic} className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300">{topic}</span> ))}
                  </div>
                </div>
              </div>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </section>
    );
};


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

const PortfolioContent = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 antialiased selection:bg-cyan-300/70 selection:text-cyan-900 transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <CareerSection />
                <CertificationsDashboards />
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PortfolioContent />
      </ThemeProvider>
    </LanguageProvider>
  )
}

