// Internationalization manager (i18n)
class I18nManager {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {
            es: {
                // Meta
                title: 'Portafolio de Andrés Romo',
                description: 'Consultor freelance Zoho: implementación de CRM/Desk, automatizaciones con Deluge/COQL e integraciones para equipos comerciales y de soporte.',

                // Loader
                loading: 'Cargando portafolio...',

                // Navigation
                about: 'Sobre mí',
                servicesNav: 'Servicios',
                skills: 'Habilidades',
                education: 'Formación',
                experience: 'Experiencia',
                projects: 'Proyectos',
                contact: 'Contacto',
                resume: 'Currículum',

                // Toggles
                themeToggle: 'Cambiar tema',
                languageToggle: 'Change to English',

                // Hero
                greeting: 'Implemento y optimizo Zoho para que tu equipo venda más, atienda mejor y pierda menos tiempo.',
                headline: 'Zoho Developer & CRM Consultant freelance enfocado en automatización, integración y adopción del CRM.',
                heroCtaExperience: 'Ver experiencia',
                heroCtaContact: 'Contactar',
                heroCtaSummary: 'Resumen ejecutivo',

                // Executive summary
                summaryEyebrow: 'Resumen rápido',
                summaryTitle: 'Resumen Ejecutivo',
                summarySubtitle: 'Consultor freelance orientado a implementación, soporte y optimización continua de Zoho CRM y Zoho Desk para equipos comerciales y de atención.',
                summaryCloseAria: 'Cerrar resumen ejecutivo',
                metricYearsValue: '+3',
                metricYearsLabel: 'Años de experiencia profesional',
                metricZohoValue: '11',
                metricZohoLabel: 'Productos Zoho implementados y soportados',
                metricScopeValue: 'LATAM + USA',
                metricScopeLabel: 'Experiencia con partners y clientes finales',
                metricLangValue: 'B2',
                metricLangLabel: 'Inglés intermedio profesional',

                // About
                aboutTitle: 'Sobre mí',
                aboutText: 'Trabajo con empresas que necesitan convertir Zoho en un sistema operativo comercial real: implemento CRM y Desk, automatizo procesos con Deluge y COQL, integro herramientas y capacito al equipo para asegurar adopción.',
                aboutChipSupport: 'Implementación end-to-end',
                aboutChipAutomation: 'Automatización con Deluge y COQL',
                aboutChipProcesses: 'Integraciones API y Zoho Sign',
                aboutChipCustomer: 'Soporte y capacitación',

                // Services
                servicesTitle: 'Servicios Freelance',
                servicesSubtitle: 'Soluciones orientadas a resultados para ventas, soporte y operación.',
                service1Title: 'Implementación Zoho',
                service1Text: 'Configuración de Zoho CRM, Desk, SalesIQ, Books, Analytics, Flow, Forms, Inventory y Projects.',
                service2Title: 'Automatización',
                service2Text: 'Workflows, blueprints, validaciones y reportes automáticos con Deluge y COQL.',
                service3Title: 'Integraciones',
                service3Text: 'Conexión de Zoho con Zoho Sign, pasarelas de pago y APIs externas.',
                service4Title: 'Bots y atención',
                service4Text: 'Diseño de bots en Zoho SalesIQ integrados con CRM y Desk.',
                service5Title: 'Soporte post-implementación',
                service5Text: 'Resolución de incidencias, mantenimiento evolutivo y mejora continua.',
                service6Title: 'Capacitación y documentación',
                service6Text: 'Entrenamiento a usuarios y documentación técnica reutilizable para tu equipo.',

                // Skills
                skillsTitle: 'Stack técnico Zoho y desarrollo',
                skillZohoCrm: 'Zoho CRM',
                skillZohoDesk: 'Zoho Desk',
                skillSalesIQ: 'Zoho SalesIQ',
                skillWorkflows: 'Workflows y Blueprints',
                skillDelugeCoql: 'Deluge y COQL',
                skillFlowIntegrations: 'Zoho Flow / APIs',
                skillAnalytics: 'Zoho Analytics',
                skillJsTs: 'Zoho Sign',
                skillReactAngular: 'Zoho Books / Inventory',
                skillNodeExpress: 'Zoho Forms / Projects',
                skillDatabases: 'JavaScript / TypeScript',
                skillGitGithub: 'Soporte y capacitación',
                hobbiesTitle: 'Hobbies',

                // Education
                educationTitle: 'Formación académica y certificaciones',
                eduOneTitle: 'Programa Oracle Next Education Front-end',
                eduContiTitle: 'Técnico en Desarrollo de Sistemas de Información',
                eduCertTitle: 'Cursos y certificaciones técnicas (SQL, Cloud, IA, Scrum)',
                eduCertPeriod: '2021 - 2024',
                certsTitle: 'Certificaciones destacadas',
                cert1: 'Fundamentos profesionales de IA generativa (Microsoft - LinkedIn, 2024)',
                cert2: 'Oracle Cloud Infrastructure (ONE Alura Latam, 2023)',
                cert3: 'Python, Data Science y Oracle Analytics (ONE Alura Latam, 2023)',
                cert4: 'Gestión de datos con Microsoft 365 (LinkedIn Learning, 2023)',
                cert5: 'Formación SQL con MySQL (ONE Alura Latam, 2023)',
                cert6: 'SCRUM Fundamentals (SCRUMstudy, 2021)',
                languagesTitle: 'Idiomas',
                languageLevel: 'Inglés: Intermedio B2',

                // Experience
                experienceTitle: 'Experiencia Profesional',
                experienceIntro: 'Implementación, soporte y optimización del ecosistema Zoho para clientes de LATAM y USA.',

                expInterRole: 'Zoho CRM & Desk Specialist / Support Consultant',
                expInterCompany: 'InterConnecta - Zoho Premium Partner | Ago 2025 - Dic 2025 | Remoto',
                expInterImpact: 'Impacto: reducción de tiempos de respuesta y +30 soluciones técnicas documentadas.',
                expInter1: 'Gestión diaria de tickets en Zoho Desk y soporte a usuarios finales.',
                expInter2: 'Diagnóstico y resolución de incidencias en Zoho CRM y Zoho Desk.',
                expInter3: 'Capacitación a usuarios finales para mejorar adopción y continuidad operativa.',

                expSmfRole: 'Zoho Developer / CRM Support',
                expSmfCompany: 'SMF360 - Zoho Partner (USA / LATAM) | Dic 2024 - Feb 2025 | Remoto',
                expSmfImpact: 'Impacto: menos tareas manuales y menor tasa de error operativo.',
                expSmf1: 'Automatización de procesos con Deluge y COQL para eliminar tareas repetitivas.',
                expSmf2: 'Desarrollo de bots en Zoho SalesIQ integrados con CRM y Desk.',
                expSmf3: 'Optimización de blueprints y workflows para estandarizar operación.',

                expCableRole: 'Zoho Developer',
                expCableCompany: 'Cable Red Perú | Feb 2024 - Jun 2025 | Huancayo, Perú',
                expCableImpact: 'Impacto: centralización comercial y automatización del ciclo de contratos.',
                expCable1: 'Implementación de Zoho SalesIQ integrado con CRM y Desk para ventas y soporte.',
                expCable2: 'Automatización de contratos con Zoho Sign + CRM.',
                expCable3: 'Centralización de información comercial y documental del equipo de ventas.',

                expDeltaRole: 'Full Stack Developer',
                expDeltaCompany: 'Delta Tactical Gear | May 2022 - Dic 2023 | Lima, Perú',
                expDeltaImpact: 'Impacto: implementación de e-commerce y automatización del flujo comercial.',
                expDelta1: 'Desarrollo de e-commerce con React, Tailwind y Vite.',
                expDelta2: 'Backend con Node.js, Express, Prisma y PostgreSQL.',
                expDelta3: 'Automatización de reportes de ventas e integración de pagos.',

                // Projects
                projectsTitle: 'Proyectos destacados',
                projectsIntro: 'Proyectos enfocados en automatización de procesos, integraciones y desarrollo web aplicado a negocio.',
                viewRepository: 'Ver repositorio',
                viewDemo: 'Ver demo',
                projectUpdatedLabel: 'Actualizado',
                projectDefaultDescription: 'Proyecto desarrollado con tecnologías modernas.',
                githubLoading: 'Cargando proyectos desde GitHub...',
                githubError: 'Error al cargar proyectos desde GitHub.',
                retry: 'Reintentar',

                // Contact
                contactTitle: 'Contacto',
                contactSubtitle: '¿Necesitas implementar Zoho, automatizar procesos o integrar herramientas?',
                contactAvailable: 'Disponible para proyectos freelance de implementación y consultoría Zoho',
                contactFormTitle: 'Envíame un mensaje',
                contactText: 'Cuéntame tu proceso actual y te propongo una solución clara, escalable y medible.',
                contactNameLabel: 'Nombre completo',
                contactEmailLabel: 'Correo electrónico',
                contactSubjectLabel: 'Asunto',
                contactMessageLabel: 'Mensaje',
                contactPhone: 'Teléfono',
                contactEmail: 'Email',
                contactCallMe: 'Llámame',
                contactEmailMe: 'Escríbeme',
                contactWhatsApp: 'Chatear',
                contactConnect: 'Conectar',
                contactRole: 'Zoho Developer & CRM Consultant Freelance',
                sendButton: 'Enviar mensaje',
                sending: 'Enviando...',
                contactSuccess: 'Mensaje enviado. Te contactaré pronto.',
                contactError: 'Error al enviar. Intenta de nuevo.',

                // Validation
                nameRequired: 'Por favor, ingresa tu nombre.',
                emailRequired: 'Por favor, ingresa tu correo electrónico.',
                emailInvalid: 'Por favor, ingresa un correo electrónico válido.',
                subjectRequired: 'Por favor, ingresa el asunto.',
                messageRequired: 'Por favor, ingresa tu mensaje.',

                // Swiper a11y
                swiperPrev: 'Anterior',
                swiperNext: 'Siguiente',
                swiperFirst: 'Este es el primer slide',
                swiperLast: 'Este es el último slide',
                swiperSlideLabel: 'Slide',

                // Footer
                footerText: 'JART Desarrollo y Tecnología',
                footerYear: '2026'
            },
            en: {
                // Meta
                title: 'Andrés Romo Portfolio',
                description: 'Freelance Zoho consultant: CRM/Desk implementation, Deluge/COQL automation, and integrations for sales and support teams.',

                // Loader
                loading: 'Loading portfolio...',

                // Navigation
                about: 'About me',
                servicesNav: 'Services',
                skills: 'Skills',
                education: 'Education',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact',
                resume: 'Resume',

                // Toggles
                themeToggle: 'Toggle theme',
                languageToggle: 'Cambiar a Español',

                // Hero
                greeting: 'I implement and optimize Zoho so your team sells more, serves better, and wastes less time.',
                headline: 'Freelance Zoho Developer & CRM Consultant focused on automation, integration, and CRM adoption.',
                heroCtaExperience: 'View experience',
                heroCtaContact: 'Contact',
                heroCtaSummary: 'Executive summary',

                // Executive summary
                summaryEyebrow: 'Quick snapshot',
                summaryTitle: 'Executive Summary',
                summarySubtitle: 'Freelance consultant focused on implementation, support, and continuous optimization of Zoho CRM and Zoho Desk for sales and support teams.',
                summaryCloseAria: 'Close executive summary',
                metricYearsValue: '+3',
                metricYearsLabel: 'Years of professional experience',
                metricZohoValue: '11',
                metricZohoLabel: 'Zoho products implemented and supported',
                metricScopeValue: 'LATAM + USA',
                metricScopeLabel: 'Experience with partners and end clients',
                metricLangValue: 'B2',
                metricLangLabel: 'Professional intermediate English',

                // About
                aboutTitle: 'About me',
                aboutText: 'I work with companies that need to turn Zoho into a real commercial operating system: I implement CRM and Desk, automate processes with Deluge and COQL, integrate tools, and train teams to ensure adoption.',
                aboutChipSupport: 'End-to-end implementation',
                aboutChipAutomation: 'Deluge and COQL automation',
                aboutChipProcesses: 'API and Zoho Sign integrations',
                aboutChipCustomer: 'Support and training',

                // Services
                servicesTitle: 'Freelance Services',
                servicesSubtitle: 'Result-driven solutions for sales, support, and operations.',
                service1Title: 'Zoho Implementation',
                service1Text: 'Setup of Zoho CRM, Desk, SalesIQ, Books, Analytics, Flow, Forms, Inventory, and Projects.',
                service2Title: 'Automation',
                service2Text: 'Workflows, blueprints, validations, and automated reports with Deluge and COQL.',
                service3Title: 'Integrations',
                service3Text: 'Connect Zoho with Zoho Sign, payment gateways, and external APIs.',
                service4Title: 'Bots and support',
                service4Text: 'Design of Zoho SalesIQ bots integrated with CRM and Desk.',
                service5Title: 'Post-implementation support',
                service5Text: 'Incident resolution, continuous improvement, and evolutionary maintenance.',
                service6Title: 'Training and documentation',
                service6Text: 'User onboarding and reusable technical documentation for your team.',

                // Skills
                skillsTitle: 'Zoho and Development Stack',
                skillZohoCrm: 'Zoho CRM',
                skillZohoDesk: 'Zoho Desk',
                skillSalesIQ: 'Zoho SalesIQ',
                skillWorkflows: 'Workflows and Blueprints',
                skillDelugeCoql: 'Deluge and COQL',
                skillFlowIntegrations: 'Zoho Flow / APIs',
                skillAnalytics: 'Zoho Analytics',
                skillJsTs: 'Zoho Sign',
                skillReactAngular: 'Zoho Books / Inventory',
                skillNodeExpress: 'Zoho Forms / Projects',
                skillDatabases: 'JavaScript / TypeScript',
                skillGitGithub: 'Support and training',
                hobbiesTitle: 'Hobbies',

                // Education
                educationTitle: 'Education and Certifications',
                eduOneTitle: 'Oracle Next Education Front-end Program',
                eduContiTitle: 'Information Systems Development Technician',
                eduCertTitle: 'Technical courses and certifications (SQL, Cloud, AI, Scrum)',
                eduCertPeriod: '2021 - 2024',
                certsTitle: 'Highlighted Certifications',
                cert1: 'Generative AI Professional Foundations (Microsoft - LinkedIn, 2024)',
                cert2: 'Oracle Cloud Infrastructure (ONE Alura Latam, 2023)',
                cert3: 'Python, Data Science and Oracle Analytics (ONE Alura Latam, 2023)',
                cert4: 'Data Management with Microsoft 365 (LinkedIn Learning, 2023)',
                cert5: 'SQL with MySQL Training (ONE Alura Latam, 2023)',
                cert6: 'SCRUM Fundamentals (SCRUMstudy, 2021)',
                languagesTitle: 'Languages',
                languageLevel: 'English: Intermediate B2',

                // Experience
                experienceTitle: 'Professional Experience',
                experienceIntro: 'Implementation, support, and optimization of the Zoho ecosystem for LATAM and USA clients.',

                expInterRole: 'Zoho CRM & Desk Specialist / Support Consultant',
                expInterCompany: 'InterConnecta - Zoho Premium Partner | Aug 2025 - Dec 2025 | Remote',
                expInterImpact: 'Impact: faster response times and 30+ reusable technical solutions documented.',
                expInter1: 'Daily ticket management in Zoho Desk and end-user support.',
                expInter2: 'Incident diagnosis and resolution in Zoho CRM and Zoho Desk.',
                expInter3: 'End-user training to improve CRM adoption and operational continuity.',

                expSmfRole: 'Zoho Developer / CRM Support',
                expSmfCompany: 'SMF360 - Zoho Partner (USA / LATAM) | Dec 2024 - Feb 2025 | Remote',
                expSmfImpact: 'Impact: fewer manual tasks and lower operational error rates.',
                expSmf1: 'Process automation with Deluge and COQL to eliminate repetitive manual work.',
                expSmf2: 'Development of Zoho SalesIQ bots integrated with CRM and Desk.',
                expSmf3: 'Blueprint and workflow optimization to standardize operations.',

                expCableRole: 'Zoho Developer',
                expCableCompany: 'Cable Red Perú | Feb 2024 - Jun 2025 | Huancayo, Peru',
                expCableImpact: 'Impact: centralized sales operations and contract-cycle automation.',
                expCable1: 'Implementation of Zoho SalesIQ integrated with CRM and Desk for sales and support.',
                expCable2: 'Contract automation with Zoho Sign + CRM.',
                expCable3: 'Centralization of sales and documentation data for the commercial team.',

                expDeltaRole: 'Full Stack Developer',
                expDeltaCompany: 'Delta Tactical Gear | May 2022 - Dec 2023 | Lima, Peru',
                expDeltaImpact: 'Impact: e-commerce launch and commercial workflow automation.',
                expDelta1: 'E-commerce development with React, Tailwind, and Vite.',
                expDelta2: 'Backend development with Node.js, Express, Prisma, and PostgreSQL.',
                expDelta3: 'Sales report automation and payment integration.',

                // Projects
                projectsTitle: 'Featured Projects',
                projectsIntro: 'Projects focused on process automation, integrations, and business-oriented web development.',
                viewRepository: 'View repository',
                viewDemo: 'View demo',
                projectUpdatedLabel: 'Updated',
                projectDefaultDescription: 'Project built with modern technologies.',
                githubLoading: 'Loading projects from GitHub...',
                githubError: 'Error loading projects from GitHub.',
                retry: 'Retry',

                // Contact
                contactTitle: 'Contact',
                contactSubtitle: 'Need Zoho implementation, process automation, or tool integrations?',
                contactAvailable: 'Available for freelance Zoho implementation and consulting projects',
                contactFormTitle: 'Send me a message',
                contactText: 'Tell me about your current process and I will propose a clear, scalable, and measurable solution.',
                contactNameLabel: 'Full name',
                contactEmailLabel: 'Email address',
                contactSubjectLabel: 'Subject',
                contactMessageLabel: 'Message',
                contactPhone: 'Phone',
                contactEmail: 'Email',
                contactCallMe: 'Call me',
                contactEmailMe: 'Email me',
                contactWhatsApp: 'Chat',
                contactConnect: 'Connect',
                contactRole: 'Freelance Zoho Developer & CRM Consultant',
                sendButton: 'Send message',
                sending: 'Sending...',
                contactSuccess: 'Message sent. I will contact you soon.',
                contactError: 'Error sending message. Please try again.',

                // Validation
                nameRequired: 'Please enter your name.',
                emailRequired: 'Please enter your email.',
                emailInvalid: 'Please enter a valid email.',
                subjectRequired: 'Please enter the subject.',
                messageRequired: 'Please enter your message.',

                // Swiper a11y
                swiperPrev: 'Previous',
                swiperNext: 'Next',
                swiperFirst: 'This is the first slide',
                swiperLast: 'This is the last slide',
                swiperSlideLabel: 'Slide',

                // Footer
                footerText: 'JART Development and Technology',
                footerYear: '2026'
            }
        };

        this.init();
    }

    init() {
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.applyLanguage(this.currentLanguage);
        this.setupLanguageToggle();
        document.documentElement.lang = this.currentLanguage;
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('es') ? 'es' : 'en';
    }

    getStoredLanguage() {
        return localStorage.getItem('preferred-language');
    }

    storeLanguage(language) {
        localStorage.setItem('preferred-language', language);
    }

    setupLanguageToggle() {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        this.applyLanguage(newLanguage);
        this.storeLanguage(newLanguage);
        this.createLanguageToggleEffect();
    }

    applyLanguage(language) {
        this.currentLanguage = language;
        const texts = this.translations[language];

        document.title = texts.title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = texts.description;
        }

        document.documentElement.lang = language;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (!texts[key]) return;

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = texts[key];
                } else {
                    element.placeholder = texts[key];
                }
            } else {
                element.textContent = texts[key];
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            const key = element.getAttribute('data-i18n-aria');
            if (texts[key]) {
                element.setAttribute('aria-label', texts[key]);
            }
        });

        this.updateLanguageToggle(language);
        this.updateFormValidations(texts);

        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language, texts }
        }));
    }

    updateLanguageToggle(language) {
        const languageToggle = document.getElementById('language-toggle');
        if (!languageToggle) return;

        const texts = this.translations[language];
        languageToggle.setAttribute('aria-label', texts.languageToggle);
        languageToggle.setAttribute('title', texts.languageToggle);

        const flagSpan = languageToggle.querySelector('.flag-text');
        if (flagSpan) {
            flagSpan.textContent = language === 'es' ? 'EN' : 'ES';
        }
    }

    updateFormValidations(texts) {
        if (window.formValidator && typeof window.formValidator.updateMessages === 'function') {
            window.formValidator.updateMessages({
                nameRequired: texts.nameRequired,
                emailRequired: texts.emailRequired,
                emailInvalid: texts.emailInvalid,
                subjectRequired: texts.subjectRequired,
                messageRequired: texts.messageRequired
            });
        }
    }

    createLanguageToggleEffect() {
        const languageToggle = document.getElementById('language-toggle');
        if (!languageToggle) return;

        languageToggle.style.transform = 'rotateY(180deg)';

        setTimeout(() => {
            languageToggle.style.transform = '';
        }, 300);

        if ('vibrate' in navigator) {
            navigator.vibrate(30);
        }
    }

    getText(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    setLanguage(language) {
        if (this.translations[language]) {
            this.applyLanguage(language);
            this.storeLanguage(language);
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.i18nManager = new I18nManager();
});

(function() {
    const stored = localStorage.getItem('preferred-language');
    const browser = navigator.language || navigator.userLanguage;
    const defaultLang = browser.startsWith('es') ? 'es' : 'en';
    const language = stored || defaultLang;

    document.documentElement.lang = language;
})();
