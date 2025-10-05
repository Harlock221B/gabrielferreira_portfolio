import { createContext, useState, useContext } from 'react';

// Importando as imagens que são usadas no conteúdo
import roadcarsImg from '../assets/img/roadcars.png';
import fonacaoImg from '../assets/img/fonacao.png';
import aprenderviverImg from '../assets/img/aprenderviver.png';

const LanguageContext = createContext();

const content = {
  en: {
    nav_links: [
      { href: "#about", text: "About" },
      { href: "#projects", text: "Projects" },
      { href: "#skills", text: "Skills" },
      { href: "#experience", text: "Experience" },
    ],
    nav_contact: "Contact",
    hero_subtitle: "Mid-Level Data Analyst & Front-End Developer",
    hero_description: "Over 3 years of experience transforming complex data into actionable insights. I build modern web interfaces with React, create interactive systems with Streamlit, and develop data studies using Python, Pandas, and Plotly, with experience using data for bioinformatics and passionate about using technology to solve complex challenges.",
    about_title: "About Me",
    about_description: "I am a developer passionate about technology and innovation. My journey has taken me through challenging projects where I was able to apply my knowledge to create solutions with purpose. I am always seeking new knowledge to face complex challenges with creative and efficient solutions.",
    languages_title: "Languages",
    languages: [
      { lang: "Portuguese", level: "Native" },
      { lang: "English", level: "C1 Advanced" },
    ],
    key_certifications: "Key Certifications",
    skills_title: "Technical Skills",
    skills_categories: [
      { name: "Front-End Development", skills: ["React", "Next.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"] },
      { name: "Data Science & Viz", skills: ["Power BI", "Streamlit", "Python (Pandas, Plotly)", "SQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"] },
      { name: "Back-End & Cloud", skills: ["Node.js", "Java (SpringBoot)", "Python (Django)", "AWS (Lambda, API Gateway, CDK)", "Docker"] },
      { name: "Methodologies", skills: ["Scrum", "Kanban", "Agile", "Clean Code"] }
    ],
    experience_title: "Professional Experience",
    experiences: [
      { role: "Mid-Level Data Analyst", company: "Hospital Israelita Albert Einstein", period: "Feb 2025 - Present", achievements: ["Developed automations and dashboards focused on presenting laboratory data and natural language processing studies.", "Created data visualizations using Power BI, Streamlit, and Python libraries (Pandas, Plotly).", "Analyzed clinical and genomic data to support innovative research and projects.", "Collaborated with multidisciplinary teams (IT, Bioinformatics, Clinical) to deliver data-driven solutions."] },
      { role: "Data Analyst", company: "Hospital Israelita Albert Einstein", period: "Nov 2023 - Feb 2025", achievements: ["Architected and developed serverless integration solutions for bioinformatics systems using Python and AWS services (Lambda, API Gateway, DynamoDB).", "Implemented data integrators to connect analysis and laboratory systems, optimizing data workflows.", "Maintained and developed tools and orchestration systems in bioinformatics using Python and CDK."] },
      { role: "Systems Development Intern", company: "CI&T", period: "Feb 2022 - Mar 2023", achievements: ["Developed responsive UI components for the 'BEES SOCIAL MEDIA' platform using React.js.", "Collaborated on a microservices-based architecture using Java and MongoDB.", "Actively participated in daily meetings and planning sessions with international teams, using English as the primary language of communication."] },
      { role: "Systems Development Intern", company: "Robert Bosch Ltda", period: "Nov 2021 - Feb 2022", achievements: ["Implemented and maintained front-end features for a B2B e-commerce platform using AngularJS and React.", "Collaborated with multicultural teams on web projects, conducting all technical communication in English."] },
      { role: "Project Manager (Entrepreneurship Program)", company: "Dell Technologies", period: "Mar 2019 - Dec 2019", achievements: ["Led the development of a startup from concept to MVP as part of a year-long high school entrepreneurship program.", "Pitched the final product to real investors and Dell managers, receiving positive feedback on market viability."] }
    ],
    english_cert_link: "https://cert.efset.org/d6Pcpi",
    projects_title: "Featured Projects",
    projects: [
      { id: 1, name: "Road Cars Consulting", url: "https://roadcarsconsulting.vercel.app", description: "A complete website for a custom vehicle sales company. Features user authentication (login, JWT token, registration), admin panel for car management, and appointment scheduling, all connected to a Firebase database.", topics: ["React", "Firebase", "Authentication"], imageUrl: roadcarsImg },
      { id: 2, name: "Fonação", url: "https://fonacao.com.br", description: "Institutional website and e-commerce platform for a speech therapy company, featuring a dynamic product catalog built with Django.", topics: ["Django", "HTML5", "CSS3", "Bootstrap"], imageUrl: fonacaoImg },
      { id: 4, name: "Aprender para a Vida (NGO)", url: "https://aprender-para-a-vida.vercel.app", description: "A website developed with Django, HTML, and Bootstrap for a local NGO. I acted as a mentor for a group of Univesp students in developing a complete and functional site for an integration project.", topics: ["Django", "Bootstrap", "HTML5", "Mentorship"], imageUrl: aprenderviverImg },
      { id: 3, name: "Zeróbito", url: "https://github.com/Harlock221B", description: "Full-stack development of a web platform to reduce workplace accidents. The backend API was built with Node.js and Express.js, and the frontend was constructed with React.js.", topics: ["React.js", "Node.js", "Express.js", "API"], imageUrl: null }
    ],
    education_title: "Education",
    education_history: [
      { degree: "Technology Degree in Systems Analysis and Development", institution: "UNICAMP - Campinas State University", period: "2021 - 2024", description: "Focused on the complete software development lifecycle, including requirements analysis, system design, database management, and project implementation using agile methodologies." },
      { degree: "Technical Degree in Systems Development", institution: "SENAI - Roberto Mange", period: "2021", description: "Intensive technical training focused on practical programming, logic, and the development of desktop and web applications." },
      { degree: "Technical Degree in Computer Science", institution: "ETEC Hortolândia", period: "2018 - 2020", description: "Solid foundation in computer science fundamentals, programming logic, computer networks, and hardware maintenance." }
    ],
    footer_text: "All rights reserved."
  },
  pt: {
    nav_links: [
      { href: "#about", text: "Sobre" },
      { href: "#projects", text: "Projetos" },
      { href: "#skills", text: "Habilidades" },
      { href: "#experience", text: "Experiência" },
    ],
    nav_contact: "Entre em Contato",
    hero_subtitle: "Analista de Dados Pleno & Desenvolvedor Front-End",
    hero_description: "Mais de 3 anos de experiência transformando dados complexos em insights acionáveis. Construo interfaces web modernas com React, crio sistemas interativos com Streamlit e desenvolvo estudos de dados com Python, Pandas e Plotly, com experiência no uso de dados para bioinformática e apaixonado por usar tecnologia para resolver desafios complexos.",
    about_title: "Sobre Mim",
    about_description: "Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada me levou por projetos desafiadores onde pude aplicar meu conhecimento para criar soluções com propósito. Estou sempre buscando novos conhecimentos para enfrentar desafios complexos com soluções criativas e eficientes.",
    languages_title: "Idiomas",
    languages: [
      { lang: "Português", level: "Nativo" },
      { lang: "Inglês", level: "C1 Avançado" },
    ],
    key_certifications: "Certificações em Destaque",
    skills_title: "Habilidades Técnicas",
    skills_categories: [
      { name: "Desenvolvimento Front-End", skills: ["React", "Next.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"] },
      { name: "Data Science & Visualização", skills: ["Power BI", "Streamlit", "Python (Pandas, Plotly)", "SQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"] },
      { name: "Back-End & Cloud", skills: ["Node.js", "Java (SpringBoot)", "Python (Django)", "AWS (Lambda, API Gateway, CDK)", "Docker"] },
      { name: "Metodologias", skills: ["Scrum", "Kanban", "Agile", "Clean Code"] }
    ],
    experience_title: "Experiência Profissional",
    experiences: [
      { role: "Analista de Dados Pleno", company: "Hospital Israelita Albert Einstein", period: "Fev 2025 - Presente", achievements: ["Desenvolvimento de automações e dashboards com foco na apresentação de dados laboratoriais e estudos de processamento de linguagem natural.", "Criação de visualizações de dados utilizando Power BI, Streamlit e bibliotecas Python (Pandas, Plotly).", "Análise de dados clínicos e genômicos para apoiar pesquisas e projetos inovadores.", "Colaboração com equipes multidisciplinares (TI, Bioinformática, Clínicas) para entregar soluções baseadas em dados."] },
      { role: "Analista de Dados", company: "Hospital Israelita Albert Einstein", period: "Nov 2023 - Fev 2025", achievements: ["Arquitetura e desenvolvimento de soluções de integração serverless para sistemas de bioinformática utilizando Python e serviços AWS (Lambda, API Gateway, DynamoDB).", "Implementação de integradores para conectar sistemas de análise e laboratoriais, otimizando os fluxos de dados.", "Manutenção e desenvolvimento de ferramentas e sistemas de orquestração em bioinformática com Python e CDK."] },
      { role: "Estagiário de Desenvolvimento de Sistemas", company: "CI&T", period: "Fev 2022 - Mar 2023", achievements: ["Desenvolvi componentes de UI responsivos para a plataforma 'BEES SOCIAL MEDIA' com React.js.", "Colaborei em uma arquitetura baseada em microsserviços usando Java e MongoDB.", "Participei ativamente de reuniões diárias e sessões de planejamento com times internacionais, utilizando o inglês como principal idioma de comunicação."] },
      { role: "Estagiário de Desenvolvimento de Sistemas", company: "Robert Bosch Ltda", period: "Nov 2021 - Fev 2022", achievements: ["Implementei e mantive funcionalidades de front-end para uma plataforma de e-commerce B2B usando AngularJS e React.", "Colaborei com equipes multiculturais em projetos web, conduzindo toda a comunicação técnica em inglês."] },
      { role: "Gerente de Projetos (Programa de Empreendedorismo)", company: "Dell Technologies", period: "Mar 2019 - Dez 2019", achievements: ["Liderei o desenvolvimento de uma startup do conceito ao MVP como parte de um programa de empreendedorismo de um ano durante o ensino médio.", "Apresentei o pitch final do produto para investidores reais e gerentes da Dell, recebendo feedback positivo sobre a viabilidade de mercado."] }
    ],
    english_cert_link: "https://cert.efset.org/d6Pcpi",
    projects_title: "Projetos em Destaque",
    projects: [
      { id: 1, name: "Road Cars Consulting", url: "https://roadcarsconsulting.vercel.app", description: "Site completo para uma empresa de venda de veículos personalizados. Possui autenticação de usuário (login, token JWT, registro), painel de admin para gestão de carros e agendamentos, tudo conectado ao Firebase.", topics: ["React", "Firebase", "Autenticação"], imageUrl: roadcarsImg },
      { id: 2, name: "Fonação", url: "https://fonacao.com.br", description: "Site institucional e plataforma de e-commerce para uma empresa de fonoaudiologia, com um catálogo de produtos dinâmico desenvolvido com Django.", topics: ["Django", "HTML5", "CSS3", "Bootstrap"], imageUrl: fonacaoImg },
      { id: 4, name: "ONG Aprender para a Vida", url: "https://aprender-para-a-vida.vercel.app", description: "Um site desenvolvido com Django, HTML e Bootstrap para uma ONG local, onde atuei como tutor para um grupo de estudantes da Univesp no desenvolvimento de um site completo e funcional para um projeto de integração.", topics: ["Django", "Bootstrap", "HTML5", "Tutoria"], imageUrl: aprenderviverImg },
      { id: 3, name: "Zeróbito", url: "https://github.com/Harlock221B", description: "Desenvolvimento full-stack de uma plataforma para redução de acidentes de trabalho. O back-end foi desenvolvido como uma API com Node.js e Express, enquanto o front-end foi construído em React.js.", topics: ["React.js", "Node.js", "Express.js", "API"], imageUrl: null }
    ],
    education_title: "Formação Acadêmica",
    education_history: [
      { degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas", institution: "UNICAMP - Universidade Estadual de Campinas", period: "2021 - 2024", description: "Foco no ciclo de vida completo de desenvolvimento de software, incluindo análise de requisitos, arquitetura de sistemas, gestão de bancos de dados e implementação de projetos com metodologias ágeis." },
      { degree: "Técnico em Desenvolvimento de Sistemas", institution: "SENAI - Roberto Mange", period: "2021", description: "Formação técnica intensiva com foco em programação prática, lógica e desenvolvimento de aplicações desktop e web." },
      { degree: "Técnico em Informática (Integrado ao Ensino Médio)", institution: "ETEC Hortolândia", period: "2018 - 2020", description: "Base sólida em fundamentos da ciência da computação, lógica de programação, redes de computadores e manutenção de hardware." }
    ],
    footer_text: "Todos os direitos reservados."
  }
};


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt');
    const toggleLanguage = () => { setLanguage(prev => prev === 'pt' ? 'en' : 'pt'); };
    const value = { language, setLanguage: toggleLanguage, t: content[language] };
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);