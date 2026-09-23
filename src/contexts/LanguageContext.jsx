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
    hero_subtitle: "Mid-Level Data Analyst & Full-Stack Developer",
    hero_description: "Over 5 years of experience bridging Data Science and Modern Web Development. I build intelligent interfaces with React, create interactive platforms with Streamlit, and develop analytical studies using Python, Pandas, and Plotly, transforming complex data into high-performance digital products.",
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
    system_status: "Available for innovative challenges",
    system_location: "São Paulo, Brazil",
    stats_experience: "5+ Years Exp",
    stats_projects: "Production Apps",
    stats_english: "C1 Advanced",
    stats_aws: "AWS Certified",
    interactive_tabs: {
      data: "Data Engine (Python/Pandas)",
      frontend: "UI System (React/Tailwind)"
    },
    hero_roles: [
      "Data Science & Machine Learning (Python / NLP)",
      "Modern Front-End & UI Architecture (React / Tailwind)",
      "Full-Stack & Cloud Architecture (Node.js / AWS)",
      "Bioinformatics & Clinical Analytics (Albert Einstein)"
    ],
    hero_title_prefix: "Data Science",
    hero_title_suffix: "& Modern Front-End",
    hero_badge_role: "Hospital Israelita Albert Einstein • Mid-Level Analyst",
    hero_explore_btn: "Explore Projects",
    terminal_pipeline_comment: "# Pipeline: Clinical & Bioinformatics Ingestion",
    terminal_ui_comment: "// Architecture: Modern Responsive Interface",
    terminal_execution: "Execution: 42ms",
    about_section_badge: "SYS_IDENTITY // PROFILE",
    about_vision_title: "Vision & Trajectory",
    about_tag_nlp: "# Data Intelligence & NLP",
    about_tag_web: "# Modern Web & React Architecture",
    about_tag_cloud: "# AWS Serverless & CDK",
    about_tag_bio: "# Bioinformatics & Laboratory Data",
    about_c1_fluency: "C1 Advanced Fluency",
    about_verified_score: "Verified Score 61/100",
    about_cloud_comm: "Cloud & Global Communication",
    about_verified: "Verified ✓",
    about_lang_experience: "Daily experience in technical communication and agile alignments in English with international teams (CI&T / Bosch).",
    about_graduated_in: "Graduated in Systems Analysis and Development",
    projects_badge: "DEPLOYED_SYSTEMS // PORTFOLIO",
    projects_subtitle: "High-performance web systems, data platforms, and user-centric applications.",
    projects_live_status: "LIVE",
    projects_app_status: "SYSTEM_APP",
    projects_preview_available: "PREVIEW_AVAILABLE",
    projects_case_study: "Case Study",
    projects_live_app: "Live App",
    skills_badge: "STACK_ARCHITECTURE // MATRIX",
    skills_subtitle: "Refined technical stack developed over 5+ years of engineering and data analysis.",
    skills_validated: "Validated Stack",
    skills_prod_ready: "Production Ready",
    career_badge: "CAREER_CHANGELOG // EVOLUTION",
    career_subtitle: "Professional track record focused on analytical impact, data engineering, and scalable web solutions.",
    career_current_badge: "CURRENT_POSITION",
    footer_desc: "Mid-Level Data Analyst & Full-Stack Systems Analyst. Transforming clinical and laboratory data into scalable, high-impact interfaces.",
    footer_kernel: "SYS_KERNEL: v2.5.0 // STATUS_NORMAL",
    footer_nav_heading: "// Navigation",
    footer_connect_heading: "// Connect",
    footer_back_to_top: "Back to Top",
    footer_built_with: "Built with React 19 • Vite • Tailwind CSS • Framer Motion",
    prj_details_badge: "Case Study // Technical Architecture",
    prj_details_challenge: "The Engineering Challenge",
    prj_details_solution: "The Implemented Solution",
    prj_details_features: "Key Capabilities",
    prj_details_launch: "Launch Live Application",
    prj_details_status_live: "ONLINE_DEPLOYED",
    prj_details_status_archived: "ARCHIVED_REPO",
    prj_details_arch_level: "PRODUCTION_GRADE",
    prj_details_back: "Back to Portfolio",
    filter_all: "All",
    filter_frontend: "Front-End",
    filter_data: "Data & AI",
    filter_fullstack: "Full-Stack",
    academic_title: "Academic Background",
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
    hero_subtitle: "Analista de Dados Pleno & Desenvolvedor Full Stack",
    hero_description: "Mais de 5 anos de experiência unindo Ciência de Dados e Desenvolvimento Web Moderno. Construo interfaces inteligentes com React, crio plataformas analíticas com Streamlit e desenvolvo estudos de dados com Python, Pandas e Plotly, transformando dados complexos em produtos digitais de alta performance.",
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
    system_status: "Disponível para desafios inovadores",
    system_location: "São Paulo, Brasil",
    stats_experience: "5+ Anos de Exp",
    stats_projects: "Apps em Produção",
    stats_english: "C1 Avançado",
    stats_aws: "AWS Certificado",
    interactive_tabs: {
      data: "Engine de Dados (Python/Pandas)",
      frontend: "Sistema UI (React/Tailwind)"
    },
    hero_roles: [
      "Ciência de Dados & Inteligência Analítica (Python / NLP)",
      "Front-End Moderno & UI Architecture (React / Tailwind)",
      "Capacidade Full Stack & Cloud (Node.js / AWS Serverless)",
      "Bioinformática & Dados Clínicos (Albert Einstein)"
    ],
    hero_title_prefix: "Ciência de Dados",
    hero_title_suffix: "& Front-End Moderno",
    hero_badge_role: "Hospital Israelita Albert Einstein • Analista Pleno",
    hero_explore_btn: "Explorar Projetos",
    terminal_pipeline_comment: "# Pipeline: Ingestão de Dados Clínicos & Bioinformática",
    terminal_ui_comment: "// Arquitetura: Interface Moderna & Responsiva",
    terminal_execution: "Tempo de Execução: 42ms",
    about_section_badge: "IDENTIDADE DO SISTEMA // PERFIL",
    about_vision_title: "Visão & Trajetória",
    about_tag_nlp: "# Inteligência de Dados & NLP",
    about_tag_web: "# Web Moderna & Arquitetura React",
    about_tag_cloud: "# AWS Serverless & CDK",
    about_tag_bio: "# Bioinformática & Dados Laboratoriais",
    about_c1_fluency: "Fluência C1 Avançada",
    about_verified_score: "Pontuação Verificada 61/100",
    about_cloud_comm: "Nuvem & Comunicação Global",
    about_verified: "Verificado ✓",
    about_lang_experience: "Experiência diária em comunicação técnica e alinhamentos ágeis em inglês com equipes internacionais (CI&T / Bosch).",
    about_graduated_in: "Graduado em Análise e Dev. de Sistemas",
    projects_badge: "SISTEMAS EM PRODUÇÃO // PROJETOS",
    projects_subtitle: "Sistemas web de alta performance, plataformas de dados e aplicações orientadas ao usuário.",
    projects_live_status: "AO VIVO",
    projects_app_status: "APLICAÇÃO",
    projects_preview_available: "PRÉVIA DISPONÍVEL",
    projects_case_study: "Estudo de Caso",
    projects_live_app: "Deploy Ativo",
    skills_badge: "ARQUITETURA DE STACK // HABILIDADES",
    skills_subtitle: "Conjunto técnico refinado ao longo de mais de 5 anos de atuação em engenharia e análise de dados.",
    skills_validated: "Stack Validada",
    skills_prod_ready: "Pronta para Produção",
    career_badge: "TRAJETÓRIA PROFISSIONAL // EXPERIÊNCIA",
    career_subtitle: "Histórico de atuação profissional com foco em impacto analítico, engenharia de dados e soluções escaláveis.",
    career_current_badge: "CARGO ATUAL",
    footer_desc: "Analista de Dados Pleno e Analista de Sistemas Full Stack. Transformando dados laboratoriais e clínicos em interfaces escaláveis e de alto impacto.",
    footer_kernel: "SISTEMA: v2.5.0 // STATUS: OPERACIONAL",
    footer_nav_heading: "// Navegação",
    footer_connect_heading: "// Conecte-se",
    footer_back_to_top: "Voltar ao Topo",
    footer_built_with: "Desenvolvido com React 19 • Vite • Tailwind CSS • Framer Motion",
    prj_details_badge: "Estudo de Caso // Arquitetura Técnica",
    prj_details_challenge: "O Desafio de Engenharia",
    prj_details_solution: "A Solução Implementada",
    prj_details_features: "Funcionalidades-Chave",
    prj_details_launch: "Acessar Aplicação ao Vivo",
    prj_details_status_live: "ONLINE EM PRODUÇÃO",
    prj_details_status_archived: "REPOSITÓRIO",
    prj_details_arch_level: "NÍVEL DE PRODUÇÃO",
    prj_details_back: "Voltar para o Portfólio",
    filter_all: "Todos",
    filter_frontend: "Front-End",
    filter_data: "Dados & IA",
    filter_fullstack: "Full-Stack",
    academic_title: "Formação Acadêmica",
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