import { createContext, useState, useContext } from 'react';

// Importando as imagens
import roadcarsImg from '../assets/img/roadcars.png';
import fonacaoImg from '../assets/img/fonacao.png';
import aprenderviverImg from '../assets/img/aprenderviver.png';
import adrianaImg from '../assets/img/site_adriana.png';
import finviewImg from '../assets/img/finview.png';
import worldCupGameImg from '../assets/img/world_cup_game.png';
import autohubImg from '../assets/img/autohub.png';

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
    hero_description: "Over 5 years of experience transforming complex data into actionable insights. I build modern web interfaces with React, create interactive systems with Streamlit, and develop data studies using Python, Pandas, and Plotly, with experience using data for bioinformatics and passionate about using technology to solve complex challenges.",
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
      { 
        id: "draft-selecoes", 
        name: "World Cup Game", 
        url: "https://world-cup-game-steel.vercel.app", 
        description: "Interactive real-time multiplayer application for managing national football teams, lineups, and tactics.", 
        topics: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"], 
        imageUrl: worldCupGameImg,
        challenge: "Creating an engaging, real-time multiplayer environment where users can collaboratively set up football tactics and lineups in synchronized lobbies.",
        solution: "Utilized Next.js and Firebase Realtime Database to build a responsive, interactive field interface that synchronizes user actions instantly across multiple clients.",
        features: ["Real-time Multiplayer Lobbies", "Interactive Tactics Board", "Team Management", "Live Synchronization"]
      },
      { 
        id: "autohub", 
        name: "AutoHub", 
        url: "https://autohub-mauve.vercel.app", 
        description: "Vehicle management platform built with React and Vite, featuring user authentication and administrative dashboards.", 
        topics: ["React", "Vite", "Firebase", "Tailwind CSS"], 
        imageUrl: autohubImg,
        challenge: "The need for a streamlined system to manage vehicle inventory, track history, and provide a secure administrative environment.",
        solution: "Built a fast Single Page Application (SPA) with React e Vite, integrated with Firebase for seamless authentication and data handling.",
        features: ["Authentication System", "Vehicle Management Dashboard", "History Tracking", "Responsive UI"]
      },
      { 
        id: "roadcars", 
        name: "Road Cars Consulting", 
        url: "https://www.roadcars.com.br", 
        description: "A complete website for a custom vehicle sales company. Features user authentication, an admin panel, and an integrated AI Agent.", 
        topics: ["React", "Firebase", "AI Agent", "Authentication"], 
        imageUrl: roadcarsImg,
        challenge: "The client needed a platform that not only showcased high-end custom vehicles but also provided a secure administrative panel for inventory management and automated initial customer service for lead qualification.",
        solution: "I developed a full-stack application using React for the front-end and Firebase for the back-end. I implemented JWT token authentication to protect admin routes. The standout feature is the integration of an Artificial Intelligence Agent to answer FAQs and capture leads 24/7.",
        features: ["Private Admin Dashboard", "Secure Authentication (Login/Register)", "AI Agent Chatbot", "Real-time Database Integration"]
      },
      { 
        id: "fonacao", 
        name: "Fonação", 
        url: "https://fonacao.com.br", 
        description: "Institutional website and e-commerce platform for a speech therapy company, featuring a dynamic product catalog.", 
        topics: ["Django", "HTML5", "CSS3", "Bootstrap"], 
        imageUrl: fonacaoImg,
        challenge: "A speech therapy clinic required a solid digital presence that could also function as an e-commerce platform to sell specialized therapeutic products.",
        solution: "Built a robust web application using the Python Django framework to manage the dynamic product catalog and administrative tasks, leveraging Bootstrap to ensure a responsive, accessible, and clean user interface.",
        features: ["Dynamic Product Catalog", "E-commerce Capabilities", "Responsive UI", "Content Management System (CMS)"]
      },
      { 
        id: "adriana", 
        name: "Dra. Adriana - Psychoanalyst", 
        url: "https://site-dr-adriana-catalani.vercel.app", 
        description: "Custom institutional website for a clinical psychologist focused on patient conversion and user experience.", 
        topics: ["React", "Tailwind CSS", "UI/UX", "Psychology"], 
        imageUrl: adrianaImg,
        challenge: "The client needed a welcoming and highly professional digital environment to increase patient conversion rates and simplify the appointment scheduling process.",
        solution: "Crafted a modern, SEO-optimized landing page using React and Tailwind CSS. The design strategy focused heavily on UX/UI principles—using calming colors and clear typography—to convey trust, empathy, and facilitate direct contact.",
        features: ["Conversion-Optimized UX", "Modern UI with Tailwind CSS", "Mobile-First Design", "Direct WhatsApp Scheduling"]
      },
      { 
        id: "ong", 
        name: "Aprender para a Vida (NGO)", 
        url: "https://aprender-para-a-vida.vercel.app", 
        description: "A website developed for a local NGO. I acted as a mentor for university students during its creation.", 
        topics: ["Django", "Bootstrap", "HTML5", "Mentorship"], 
        imageUrl: aprenderviverImg,
        challenge: "A local NGO needed a functional website to expand its reach and communicate its mission, but lacked the technical resources to build it.",
        solution: "I took on a mentorship role, guiding a group of Univesp students to develop a complete application using Django and Bootstrap. I helped them structure the project, implement best practices, and deliver a fully functional integration project.",
        features: ["Institutional Pages", "Responsive Layout", "Technical Mentorship Leadership", "Django Backend Architecture"]
      },
      { 
        id: "finview", 
        name: "Finview", 
        url: "https://fin-view-lyart.vercel.app", 
        description: "Financial management and visualization platform designed to offer an intuitive interface for tracking data.", 
        topics: ["React", "Finance", "Web Development"], 
        imageUrl: finviewImg,
        challenge: "Users often struggle to track personal or business finances without a unified, clean, and intuitive visual dashboard.",
        solution: "Developed a sleek financial dashboard using React, focusing on data visualization and a clean user interface. The goal was to make financial tracking accessible, visually appealing, and insightful at a glance.",
        features: ["Interactive Data Visualization", "Clean UI/UX", "Expense Tracking Interface", "Modern React Architecture"]
      }
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
    hero_description: "Mais de 5 anos de experiência transformando dados complexos em insights acionáveis. Construo interfaces web modernas com React, crio sistemas interativos com Streamlit e desenvolvo estudos de dados com Python, Pandas e Plotly, com experiência no uso de dados para bioinformática e apaixonado por usar tecnologia para resolver desafios complexos.",
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
      { 
        id: "draft-selecoes", 
        name: "World Cup Game", 
        url: "https://world-cup-game-steel.vercel.app", 
        description: "Aplicação multiplayer interativa em tempo real para gestão de seleções de futebol, escalações e táticas.", 
        topics: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"], 
        imageUrl: worldCupGameImg,
        challenge: "Criar um ambiente multiplayer em tempo real e envolvente onde os usuários pudessem configurar colaborativamente táticas e escalações de futebol em lobbies sincronizados.",
        solution: "Utilizei Next.js e Firebase Realtime Database para construir uma interface de campo interativa e responsiva que sincroniza instantaneamente as ações dos usuários entre múltiplos clientes.",
        features: ["Lobbies Multiplayer em Tempo Real", "Quadro Tático Interativo", "Gestão de Seleções", "Sincronização Ao Vivo"]
      },
      { 
        id: "autohub", 
        name: "AutoHub", 
        url: "https://autohub-mauve.vercel.app", 
        description: "Plataforma de gestão de veículos desenvolvida com React e Vite, com autenticação de usuários e dashboards administrativos.", 
        topics: ["React", "Vite", "Firebase", "Tailwind CSS"], 
        imageUrl: autohubImg,
        challenge: "A necessidade de um sistema simplificado para gerenciar o inventário de veículos, rastrear histórico e fornecer um ambiente administrativo seguro.",
        solution: "Desenvolvi uma Single Page Application (SPA) rápida com React e Vite, integrada ao Firebase para autenticação e manipulação de dados de forma contínua.",
        features: ["Sistema de Autenticação", "Dashboard de Gestão de Veículos", "Rastreamento de Histórico", "Interface Responsiva"]
      },
      { 
        id: "roadcars", 
        name: "Road Cars Consulting", 
        url: "https://www.roadcars.com.br", 
        description: "Site completo para uma empresa de venda de veículos personalizados. Possui autenticação de usuário, painel de admin e Agente de IA.", 
        topics: ["React", "Firebase", "Agente de IA", "Autenticação"], 
        imageUrl: roadcarsImg,
        challenge: "O cliente precisava de uma plataforma que não apenas exibisse o catálogo de veículos de alto padrão, mas que também oferecesse um painel administrativo seguro para gestão de estoque e automatizasse o atendimento inicial para qualificação de leads.",
        solution: "Desenvolvi uma aplicação full-stack utilizando React no front-end e Firebase no back-end. Implementei um sistema de autenticação via token JWT para proteger as rotas do administrador. O grande diferencial foi a integração de um Agente de Inteligência Artificial para responder dúvidas frequentes e captar contatos 24/7.",
        features: ["Painel Administrativo Privado", "Autenticação Segura (Login/Registro)", "Chatbot com Agente de IA", "Banco de dados em tempo real"]
      },
      { 
        id: "fonacao", 
        name: "Fonação", 
        url: "https://fonacao.com.br", 
        description: "Site institucional e plataforma de e-commerce para uma empresa de fonoaudiologia, com um catálogo de produtos dinâmico.", 
        topics: ["Django", "HTML5", "CSS3", "Bootstrap"], 
        imageUrl: fonacaoImg,
        challenge: "Uma clínica de fonoaudiologia exigia uma presença digital sólida que também funcionasse como uma plataforma de e-commerce para vender produtos terapêuticos especializados.",
        solution: "Construí uma aplicação web robusta utilizando o framework Django (Python) para gerenciar o catálogo dinâmico de produtos e as tarefas administrativas, aproveitando o Bootstrap para garantir uma interface de usuário responsiva, acessível e limpa.",
        features: ["Catálogo Dinâmico de Produtos", "Capacidades de E-commerce", "Interface Responsiva", "Sistema de Gestão de Conteúdo (CMS)"]
      },
      { 
        id: "adriana", 
        name: "Dra. Adriana - Psicanalista", 
        url: "https://site-dr-adriana-catalani.vercel.app", 
        description: "Site institucional personalizado para clínica de psicologia, focado em conversão de pacientes e experiência do usuário.", 
        topics: ["React", "Tailwind CSS", "UI/UX", "Psicologia"], 
        imageUrl: adrianaImg,
        challenge: "A cliente precisava de um ambiente digital acolhedor e altamente profissional para aumentar as taxas de conversão de pacientes e simplificar o processo de agendamento de consultas.",
        solution: "Criei uma landing page moderna e otimizada para SEO usando React e Tailwind CSS. A estratégia de design focou pesadamente em princípios de UX/UI — usando cores calmas e tipografia clara — para transmitir confiança, empatia e facilitar o contato direto.",
        features: ["UX Otimizada para Conversão", "UI Moderna com Tailwind CSS", "Design Mobile-First", "Agendamento Direto via WhatsApp"]
      },
      { 
        id: "ong", 
        name: "ONG Aprender para a Vida", 
        url: "https://aprender-para-a-vida.vercel.app", 
        description: "Site desenvolvido para uma ONG local, onde atuei como tutor para um grupo de estudantes da Univesp.", 
        topics: ["Django", "Bootstrap", "HTML5", "Tutoria"], 
        imageUrl: aprenderviverImg,
        challenge: "Uma ONG local precisava de um site funcional para expandir seu alcance e comunicar sua missão, mas carecia de recursos técnicos para construí-lo.",
        solution: "Assumi um papel de mentoria, guiando um grupo de alunos da Univesp no desenvolvimento de uma aplicação completa usando Django e Bootstrap. Ajudei-os a estruturar o projeto, implementar melhores práticas e entregar um projeto de integração totalmente funcional.",
        features: ["Páginas Institucionais", "Layout Responsivo", "Liderança em Mentoria Técnica", "Arquitetura Back-end em Django"]
      },
      { 
        id: "finview", 
        name: "Finview", 
        url: "https://fin-view-lyart.vercel.app", 
        description: "Plataforma de gestão e visualização financeira desenvolvida para oferecer uma interface intuitiva no acompanhamento de dados.", 
        topics: ["React", "Finanças", "Desenvolvimento Web"], 
        imageUrl: finviewImg,
        challenge: "Usuários frequentemente têm dificuldade em acompanhar finanças pessoais ou empresariais sem um painel visual unificado, limpo e intuitivo.",
        solution: "Desenvolvi um dashboard financeiro elegante usando React, focando na visualização de dados e em uma interface de usuário limpa. O objetivo foi tornar o acompanhamento financeiro acessível, visualmente atraente e fácil de entender rapidamente.",
        features: ["Visualização Interativa de Dados", "UI/UX Limpa e Moderna", "Interface de Controle de Despesas", "Arquitetura Moderna em React"]
      }
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

export const useLanguage = () => useContext(LanguageContext)