// Formulario de contacto - Estilo minimalista
class SimpleContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = this.form?.querySelector('.form__submit');
        this.statusDiv = document.getElementById('form-message');
        
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.setupFormSubmission();
        this.setupInputAnimations();
        this.setupMethodAnimations();
    }
    
    setupFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        const currentLang = window.i18nManager?.getCurrentLanguage() || 'es';
        const messages = this.getMessages(currentLang);
        
        this.setLoadingState(true, messages.sending);
        
        try {
            const formData = new FormData(this.form);
            
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                this.showStatus('success', messages.success);
                this.form.reset();
                this.createSuccessAnimation();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
            this.showStatus('error', messages.error);
        } finally {
            this.setLoadingState(false);
        }
    }
    
    getMessages(lang) {
        const messages = {
            es: {
                sending: 'Enviando...',
                success: '¡Mensaje enviado! Te contactaré pronto.',
                error: 'Error al enviar. Intenta de nuevo.'
            },
            en: {
                sending: 'Sending...',
                success: 'Message sent! I will contact you soon.',
                error: 'Error sending. Please try again.'
            }
        };
        
        return messages[lang] || messages.es;
    }
    
    setLoadingState(isLoading, text = '') {
        if (!this.submitBtn) return;
        
        if (isLoading) {
            this.submitBtn.disabled = true;
            this.submitBtn.style.opacity = '0.7';
            if (text) {
                this.submitBtn.querySelector('span').textContent = text;
            }
        } else {
            this.submitBtn.disabled = false;
            this.submitBtn.style.opacity = '1';
            // Restaurar texto original
            const originalText = window.i18nManager?.getText('sendButton') || 'Enviar mensaje';
            this.submitBtn.querySelector('span').textContent = originalText;
        }
    }
    
    showStatus(type, message) {
        if (!this.statusDiv) return;
        
        this.statusDiv.textContent = message;
        this.statusDiv.className = `form__status ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.statusDiv.style.opacity = '0';
            setTimeout(() => {
                this.statusDiv.className = 'form__status';
            }, 300);
        }, 5000);
    }
    
    setupInputAnimations() {
        const inputs = this.form?.querySelectorAll('.form__input, .form__textarea');
        
        inputs?.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }
    
    setupMethodAnimations() {
        const methods = document.querySelectorAll('.contact__method');
        
        methods.forEach((method, index) => {
            // Animación de entrada escalonada
            method.style.animationDelay = `${index * 0.1}s`;
            method.style.animation = 'fadeInUp 0.6s ease forwards';
            
            // Efecto hover personalizado
            method.addEventListener('mouseenter', () => {
                method.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            method.addEventListener('mouseleave', () => {
                method.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    createSuccessAnimation() {
        // Crear un elemento de éxito temporal
        const successElement = document.createElement('div');
        successElement.innerHTML = '✨';
        successElement.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            animation: successPop 2s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        this.form.style.position = 'relative';
        this.form.appendChild(successElement);
        
        setTimeout(() => {
            successElement.remove();
        }, 2000);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.simpleContactForm = new SimpleContactForm();
});

// CSS adicional para animaciones
const additionalStyles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes successPop {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
    }
}

.form__field.focused .form__label {
    color: var(--color-primario);
    transform: translateY(-2px);
}

/* Animación suave para el estado del formulario */
.form__status {
    transition: all 0.3s ease;
}
`;

// Inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
