// Sistema de internacionalización (i18n)
class I18nManager {
    constructor() {
        this.currentLanguage = 'es'; // Idioma por defecto
        this.translations = {
            es: {
                // Meta y título
                title: 'Andres portafolio',
                description: 'Portafolio profesional de Jorge Andrés - Desarrollador Web',
                
                // Loader
                loading: 'Cargando portafolio...',
                
                // Navegación
                about: 'Sobre mi',
                skills: 'Skills',
                education: 'Formación',
                projects: 'Proyectos',
                contact: 'Contacto',
                resume: 'Currículum',
                
                // Botones de tema y idioma
                themeToggle: 'Cambiar tema',
                languageToggle: 'Change to English',
                
                // Sección titular
                greeting: 'Hola Mi nombre es Jorge Andrés .',
                
                // Sección sobre mi
                aboutTitle: 'Sobre mi',
                aboutText: 'Apasionado por el aprendizaje continuo, avanzo profesionalmente liderando el desarrollo integral de aplicaciones web. Mi enfoque se centra en alcanzar la excelencia, optimizar el rendimiento y fomentar la mejora continua. He superado retos, consolidando mi experiencia y capitalizando oportunidades para destacar en este dinámico campo tecnológico. Siempre ansío adquirir y aplicar nuevas habilidades, contribuyendo al éxito continuo de cada proyecto.',
                aboutChipPerformance: 'Rendimiento',
                aboutChipCleanCode: 'Código limpio',
                aboutChipTeamwork: 'Trabajo en equipo',
                aboutChipUX: 'UX primero',
                
                // Sección skills
                skillsTitle: 'Skills',
                
                // Sección hobbies
                hobbiesTitle: 'Hobbies',
                
                // Sección formación
                educationTitle: 'Formación académica y cursos',
                
                // Sección proyectos
                projectsTitle: 'Experiencia Profesional',
                viewRepository: 'Ver repositorio',
                viewDemo: 'Ver demo',
                
                // Sección contacto
                contactTitle: 'Contacto',
                contactSubtitle: '¿Quieres contactarme?',
                contactText: 'Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.',
                contactNameLabel: 'Nombre Completo',
                contactEmailLabel: 'Correo Electrónico',
                contactSubjectLabel: 'Asunto',
                contactMessageLabel: 'Mensaje',
                contactPhone: 'Teléfono',
                contactEmail: 'Email',
                contactCallMe: 'Llámame',
                contactEmailMe: 'Escríbeme',
                contactWhatsApp: 'Chatear',
                contactConnect: 'Conectar',
                sendButton: 'Enviar mensaje',
                
                // Validaciones
                nameRequired: 'Por favor, ingrese su nombre',
                emailRequired: 'Por favor, ingrese su correo electrónico',
                emailInvalid: 'Por favor, ingrese un correo electrónico válido',
                subjectRequired: 'Por favor, ingrese el asunto',
                messageRequired: 'Por favor, ingrese su mensaje',
                
                // Footer
                footerText: 'JART Desarrollo & Tecnología',
                footerYear: '2024'
            },
            en: {
                // Meta y título
                title: 'Andres Portfolio',
                description: 'Professional portfolio of Jorge Andrés - Web Developer',
                
                // Loader
                loading: 'Loading portfolio...',
                
                // Navegación
                about: 'About me',
                skills: 'Skills',
                education: 'Education',
                projects: 'Projects',
                contact: 'Contact',
                resume: 'Resume',
                
                // Botones de tema y idioma
                themeToggle: 'Toggle theme',
                languageToggle: 'Cambiar a Español',
                
                // Sección titular
                greeting: 'Hello, My name is Jorge Andrés .',
                
                // Sección sobre mi
                aboutTitle: 'About me',
                aboutText: 'Passionate about continuous learning, I advance professionally leading the comprehensive development of web applications. My focus is on achieving excellence, optimizing performance and fostering continuous improvement. I have overcome challenges, consolidating my experience and capitalizing on opportunities to excel in this dynamic technological field. I always look forward to acquiring and applying new skills, contributing to the continued success of every project.',
                aboutChipPerformance: 'Performance',
                aboutChipCleanCode: 'Clean Code',
                aboutChipTeamwork: 'Teamwork',
                aboutChipUX: 'UX-first',
                
                // Sección skills
                skillsTitle: 'Skills',
                
                // Sección hobbies
                hobbiesTitle: 'Hobbies',
                
                // Sección formación
                educationTitle: 'Academic Education and Courses',
                
                // Sección proyectos
                projectsTitle: 'Professional Experience',
                viewRepository: 'View repository',
                viewDemo: 'View demo',
                
                // Sección contacto
                contactTitle: 'Contact',
                contactSubtitle: 'Want to contact me?',
                contactText: 'Complete the following form and I will get in touch with you as soon as possible.',
                contactNameLabel: 'Full Name',
                contactEmailLabel: 'Email Address',
                contactSubjectLabel: 'Subject',
                contactMessageLabel: 'Message',
                contactPhone: 'Phone',
                contactEmail: 'Email',
                contactCallMe: 'Call me',
                contactEmailMe: 'Email me',
                contactWhatsApp: 'Chat',
                contactConnect: 'Connect',
                sendButton: 'Send message',
                emailLabel: 'Email',
                emailPlaceholder: 'your-email@example.com',
                subjectLabel: 'Subject',
                subjectPlaceholder: 'Message subject',
                messageLabel: 'Message',
                messagePlaceholder: 'Your message...',
                sendButton: 'Send message',
                
                // Validaciones
                nameRequired: 'Please enter your name',
                emailRequired: 'Please enter your email',
                emailInvalid: 'Please enter a valid email',
                subjectRequired: 'Please enter the subject',
                messageRequired: 'Please enter your message',
                
                // Footer
                footerText: 'JART Dev & Tech',
                footerYear: '2024'
            }
        };
        
        this.init();
    }
    
    init() {
        // Obtener idioma guardado o detectar idioma del navegador
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
        
        // Aplicar idioma inicial
        this.applyLanguage(this.currentLanguage);
        
        // Configurar el botón de cambio de idioma
        this.setupLanguageToggle();
        
        // Actualizar atributo lang del HTML
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
        
        // Efectos visuales
        this.createLanguageToggleEffect();
    }
    
    applyLanguage(language) {
        this.currentLanguage = language;
        const texts = this.translations[language];
        
        // Actualizar título de la página
        document.title = texts.title;
        
        // Actualizar meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = texts.description;
        }
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = language;
        
        // Actualizar todos los textos con atributos data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit' || element.type === 'button') {
                        element.value = texts[key];
                    } else {
                        element.placeholder = texts[key];
                    }
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        
        // Actualizar textos con atributos aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (texts[key]) {
                element.setAttribute('aria-label', texts[key]);
            }
        });
        
        // Actualizar el botón de cambio de idioma
        this.updateLanguageToggle(language);
        
        // Actualizar validaciones del formulario si existe
        this.updateFormValidations(texts);
        
        // Evento personalizado para notificar el cambio de idioma
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: language, texts: texts }
        }));
    }
    
    updateLanguageToggle(language) {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            const texts = this.translations[language];
            languageToggle.setAttribute('aria-label', texts.languageToggle);
            languageToggle.setAttribute('title', texts.languageToggle);
            
            // Actualizar el texto del botón
            const flagSpan = languageToggle.querySelector('.flag-text');
            if (flagSpan) {
                flagSpan.textContent = language === 'es' ? 'EN' : 'ES';
            }
        }
    }
    
    updateFormValidations(texts) {
        // Si hay un sistema de validación, actualizarlo
        if (window.formValidator) {
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
        
        // Efecto de rotación
        languageToggle.style.transform = 'rotateY(180deg)';
        
        setTimeout(() => {
            languageToggle.style.transform = '';
        }, 300);
        
        // Vibración en dispositivos móviles
        if ('vibrate' in navigator) {
            navigator.vibrate(30);
        }
    }
    
    // Método para obtener texto traducido
    getText(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
    
    // Método para cambiar idioma programáticamente
    setLanguage(language) {
        if (this.translations[language]) {
            this.applyLanguage(language);
            this.storeLanguage(language);
        }
    }
    
    // Método para obtener el idioma actual
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Inicializar el i18n manager cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.i18nManager = new I18nManager();
});

// Aplicar idioma inmediatamente para evitar flash
(function() {
    const stored = localStorage.getItem('preferred-language');
    const browser = navigator.language || navigator.userLanguage;
    const defaultLang = browser.startsWith('es') ? 'es' : 'en';
    const language = stored || defaultLang;
    
    document.documentElement.lang = language;
})();
