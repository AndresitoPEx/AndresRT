// Internationalization manager (i18n)
class I18nManager {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {
            es: {
                // Meta
                title: 'Portafolio de Andrés Romo',
                description: 'Portafolio profesional de Jorge Andrés Romo Turco - Zoho Developer & Desk Support',

                // Loader
                loading: 'Cargando portafolio...',

                // Navigation
                about: 'Sobre mí',
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
                greeting: 'Optimizo Zoho CRM y Zoho Desk para mejorar tiempos de atención y operación.',
                headline: 'Zoho Developer & Desk Support enfocado en automatización, soporte y experiencia del cliente.',
                heroCtaExperience: 'Ver experiencia',
                heroCtaContact: 'Contactar',
                heroCtaSummary: 'Resumen ejecutivo',

                // Executive summary
                summaryEyebrow: 'Resumen rápido',
                summaryTitle: 'Resumen Ejecutivo',
                summarySubtitle: 'Perfil orientado a implementación, soporte y optimización continua de Zoho CRM y Zoho Desk en entornos empresariales.',
                summaryCloseAria: 'Cerrar resumen ejecutivo',
                metricYearsValue: '+3',
                metricYearsLabel: 'Años de experiencia profesional',
                metricZohoValue: '3',
                metricZohoLabel: 'Roles enfocados en Zoho CRM/Desk',
                metricScopeValue: 'LATAM + USA',
                metricScopeLabel: 'Experiencia con partners y clientes finales',
                metricLangValue: 'B2',
                metricLangLabel: 'Inglés intermedio profesional',

                // About
                aboutTitle: 'Sobre mí',
                aboutText: 'Especialista en Zoho CRM y Zoho Desk con experiencia práctica en soporte técnico, gestión de tickets y automatización de procesos. He trabajado con Zoho Partners y empresas finales resolviendo incidencias, documentando soluciones y optimizando flujos para mejorar la atención al cliente.',
                aboutChipSupport: 'Soporte técnico',
                aboutChipAutomation: 'Automatización',
                aboutChipProcesses: 'Mejora de procesos',
                aboutChipCustomer: 'Atención al cliente',

                // Skills
                skillsTitle: 'Habilidades Técnicas',
                skillZohoCrm: 'Zoho CRM',
                skillZohoDesk: 'Zoho Desk',
                skillSalesIQ: 'Zoho SalesIQ',
                skillWorkflows: 'Workflows y Blueprints',
                skillDelugeCoql: 'Deluge y COQL',
                skillFlowIntegrations: 'Zoho Flow / Integraciones',
                skillAnalytics: 'Zoho Analytics',
                skillJsTs: 'JavaScript / TypeScript',
                skillReactAngular: 'React / Angular',
                skillNodeExpress: 'Node.js / Express',
                skillDatabases: 'PostgreSQL / SQL Server',
                skillGitGithub: 'Git / GitHub',
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
                experienceIntro: 'Implementación, soporte y optimización de procesos en Zoho CRM y Zoho Desk para clientes LATAM y USA.',

                expInterRole: 'Zoho CRM & Desk Specialist / Support Consultant',
                expInterCompany: 'InterConnecta - Zoho Premium Partner | Ago 2025 - Dic 2025 | Remoto',
                expInterImpact: 'Impacto: mejora en tiempos de respuesta y continuidad del soporte.',
                expInter1: 'Gestión diaria de tickets en Zoho Desk y soporte a usuarios finales.',
                expInter2: 'Diagnóstico y resolución de incidencias en Zoho CRM y Zoho Desk.',
                expInter3: 'Documentación de soluciones y escalamiento técnico cuando fue requerido.',

                expSmfRole: 'Zoho Developer / CRM Support',
                expSmfCompany: 'SMF360 - Zoho Partner (USA / LATAM) | Dic 2024 - Feb 2025 | Remoto',
                expSmfImpact: 'Impacto: reducción de errores operativos al optimizar blueprints y workflows.',
                expSmf1: 'Implementación y ajuste de blueprints, workflows, validaciones y automatizaciones.',
                expSmf2: 'Desarrollo de bots en Zoho SalesIQ para atención y soporte.',
                expSmf3: 'Uso de Deluge y COQL para consultas, validaciones y lógica de negocio.',

                expCableRole: 'Zoho Developer',
                expCableCompany: 'Cable Red Perú | Feb 2024 - Jun 2025 | Huancayo, Perú',
                expCableImpact: 'Impacto: centralización comercial y adopción más efectiva del CRM.',
                expCable1: 'Automatización de procesos comerciales en Zoho CRM.',
                expCable2: 'Integración de Zoho SalesIQ, Zoho Desk y Zoho Sign con CRM.',
                expCable3: 'Generación de reportes automáticos para el área comercial.',

                expDeltaRole: 'Full Stack Developer',
                expDeltaCompany: 'Delta Tactical Gear | May 2022 - Dic 2023 | Lima, Perú',
                expDeltaImpact: 'Impacto: implementación de e-commerce y automatización del flujo comercial.',
                expDelta1: 'Desarrollo de e-commerce con React, Tailwind y Vite.',
                expDelta2: 'Backend con Node.js, Express, Prisma y PostgreSQL.',
                expDelta3: 'Automatización de reportes de ventas e integración de pagos.',

                // Projects
                projectsTitle: 'Proyectos destacados',
                projectsIntro: 'Selección de proyectos de desarrollo web y frontend publicados en GitHub.',
                viewRepository: 'Ver repositorio',
                viewDemo: 'Ver demo',
                projectUpdatedLabel: 'Actualizado',
                projectDefaultDescription: 'Proyecto desarrollado con tecnologías modernas.',
                githubLoading: 'Cargando proyectos desde GitHub...',
                githubError: 'Error al cargar proyectos desde GitHub.',
                retry: 'Reintentar',

                // Contact
                contactTitle: 'Contacto',
                contactSubtitle: '¿Buscas soporte Zoho o implementación CRM?',
                contactAvailable: 'Disponible para proyectos y consultoría',
                contactFormTitle: 'Envíame un mensaje',
                contactText: 'Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.',
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
                contactRole: 'Zoho Developer & Desk Support',
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
                description: 'Professional portfolio of Jorge Andrés Romo Turco - Zoho Developer & Desk Support',

                // Loader
                loading: 'Loading portfolio...',

                // Navigation
                about: 'About me',
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
                greeting: 'I optimize Zoho CRM and Zoho Desk to improve response times and operations.',
                headline: 'Zoho Developer & Desk Support focused on automation, support, and customer experience.',
                heroCtaExperience: 'View experience',
                heroCtaContact: 'Contact',
                heroCtaSummary: 'Executive summary',

                // Executive summary
                summaryEyebrow: 'Quick snapshot',
                summaryTitle: 'Executive Summary',
                summarySubtitle: 'Profile focused on implementation, support, and continuous optimization of Zoho CRM and Zoho Desk in business environments.',
                summaryCloseAria: 'Close executive summary',
                metricYearsValue: '+3',
                metricYearsLabel: 'Years of professional experience',
                metricZohoValue: '3',
                metricZohoLabel: 'Roles focused on Zoho CRM/Desk',
                metricScopeValue: 'LATAM + USA',
                metricScopeLabel: 'Experience with partners and end clients',
                metricLangValue: 'B2',
                metricLangLabel: 'Professional intermediate English',

                // About
                aboutTitle: 'About me',
                aboutText: 'Zoho CRM and Zoho Desk specialist with hands-on experience in technical support, ticket management, and process automation. I have worked with Zoho Partners and end clients, resolving incidents, documenting solutions, and improving service workflows.',
                aboutChipSupport: 'Technical Support',
                aboutChipAutomation: 'Automation',
                aboutChipProcesses: 'Process Improvement',
                aboutChipCustomer: 'Customer Service',

                // Skills
                skillsTitle: 'Technical Skills',
                skillZohoCrm: 'Zoho CRM',
                skillZohoDesk: 'Zoho Desk',
                skillSalesIQ: 'Zoho SalesIQ',
                skillWorkflows: 'Workflows and Blueprints',
                skillDelugeCoql: 'Deluge and COQL',
                skillFlowIntegrations: 'Zoho Flow / Integrations',
                skillAnalytics: 'Zoho Analytics',
                skillJsTs: 'JavaScript / TypeScript',
                skillReactAngular: 'React / Angular',
                skillNodeExpress: 'Node.js / Express',
                skillDatabases: 'PostgreSQL / SQL Server',
                skillGitGithub: 'Git / GitHub',
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
                experienceIntro: 'Implementation, support, and process optimization in Zoho CRM and Zoho Desk for LATAM and USA clients.',

                expInterRole: 'Zoho CRM & Desk Specialist / Support Consultant',
                expInterCompany: 'InterConnecta - Zoho Premium Partner | Aug 2025 - Dec 2025 | Remote',
                expInterImpact: 'Impact: improved response times and support continuity.',
                expInter1: 'Daily ticket management in Zoho Desk and end-user support.',
                expInter2: 'Incident diagnosis and resolution in Zoho CRM and Zoho Desk.',
                expInter3: 'Solution documentation and technical escalation when required.',

                expSmfRole: 'Zoho Developer / CRM Support',
                expSmfCompany: 'SMF360 - Zoho Partner (USA / LATAM) | Dec 2024 - Feb 2025 | Remote',
                expSmfImpact: 'Impact: reduced operational errors by optimizing blueprints and workflows.',
                expSmf1: 'Implementation and tuning of blueprints, workflows, validations, and automations.',
                expSmf2: 'Development of Zoho SalesIQ bots for support and customer service.',
                expSmf3: 'Use of Deluge and COQL for queries, validations, and business logic.',

                expCableRole: 'Zoho Developer',
                expCableCompany: 'Cable Red Perú | Feb 2024 - Jun 2025 | Huancayo, Peru',
                expCableImpact: 'Impact: commercial information centralization and stronger CRM adoption.',
                expCable1: 'Commercial process automation in Zoho CRM.',
                expCable2: 'Integration of Zoho SalesIQ, Zoho Desk, and Zoho Sign with CRM.',
                expCable3: 'Automated reporting for the sales area.',

                expDeltaRole: 'Full Stack Developer',
                expDeltaCompany: 'Delta Tactical Gear | May 2022 - Dec 2023 | Lima, Peru',
                expDeltaImpact: 'Impact: e-commerce launch and commercial workflow automation.',
                expDelta1: 'E-commerce development with React, Tailwind, and Vite.',
                expDelta2: 'Backend development with Node.js, Express, Prisma, and PostgreSQL.',
                expDelta3: 'Sales report automation and payment integration.',

                // Projects
                projectsTitle: 'Featured Projects',
                projectsIntro: 'Selection of web development and frontend projects published on GitHub.',
                viewRepository: 'View repository',
                viewDemo: 'View demo',
                projectUpdatedLabel: 'Updated',
                projectDefaultDescription: 'Project built with modern technologies.',
                githubLoading: 'Loading projects from GitHub...',
                githubError: 'Error loading projects from GitHub.',
                retry: 'Retry',

                // Contact
                contactTitle: 'Contact',
                contactSubtitle: 'Need Zoho support or CRM implementation?',
                contactAvailable: 'Available for projects and consulting',
                contactFormTitle: 'Send me a message',
                contactText: 'Complete the form below and I will get back to you as soon as possible.',
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
                contactRole: 'Zoho Developer & Desk Support',
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
