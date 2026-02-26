// Contact form interactions
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
        this.setupLanguageSync();
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', async (event) => {
            event.preventDefault();
            await this.handleSubmit();
        });
    }

    setupLanguageSync() {
        document.addEventListener('languageChanged', () => {
            if (!this.submitBtn || this.submitBtn.disabled) return;
            this.submitBtn.querySelector('span').textContent = this.getText('sendButton', 'Enviar mensaje');
        });
    }

    getText(key, fallback) {
        return window.i18nManager?.getText?.(key) || fallback;
    }

    async handleSubmit() {
        this.setLoadingState(true, this.getText('sending', 'Enviando...'));

        try {
            const formData = new FormData(this.form);

            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            this.showStatus('success', this.getText('contactSuccess', 'Mensaje enviado. Te contactaré pronto.'));
            this.form.reset();
            this.createSuccessAnimation();
        } catch (error) {
            console.error('Contact form error:', error);
            this.showStatus('error', this.getText('contactError', 'Error al enviar. Intenta de nuevo.'));
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(isLoading, text = '') {
        if (!this.submitBtn) return;

        if (isLoading) {
            this.submitBtn.disabled = true;
            this.submitBtn.style.opacity = '0.7';
            if (text) {
                this.submitBtn.querySelector('span').textContent = text;
            }
            return;
        }

        this.submitBtn.disabled = false;
        this.submitBtn.style.opacity = '1';
        this.submitBtn.querySelector('span').textContent = this.getText('sendButton', 'Enviar mensaje');
    }

    showStatus(type, message) {
        if (!this.statusDiv) return;

        this.statusDiv.textContent = message;
        this.statusDiv.className = `form__status ${type}`;

        setTimeout(() => {
            this.statusDiv.style.opacity = '0';
            setTimeout(() => {
                this.statusDiv.className = 'form__status';
            }, 300);
        }, 5000);
    }

    setupInputAnimations() {
        const inputs = this.form?.querySelectorAll('.form__input, .form__textarea');
        inputs?.forEach((input) => {
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
            method.style.animationDelay = `${index * 0.1}s`;
            method.style.animation = 'fadeInUp 0.6s ease forwards';

            method.addEventListener('mouseenter', () => {
                method.style.transform = 'translateY(-4px) scale(1.02)';
            });

            method.addEventListener('mouseleave', () => {
                method.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    createSuccessAnimation() {
        const successElement = document.createElement('div');
        successElement.innerHTML = '✓';
        successElement.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            font-weight: 700;
            color: #16a34a;
            animation: successPop 1.6s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;

        this.form.style.position = 'relative';
        this.form.appendChild(successElement);

        setTimeout(() => {
            successElement.remove();
        }, 1600);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.simpleContactForm = new SimpleContactForm();
});

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
        transform: translate(-50%, -50%) scale(1.15);
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

.form__status {
    transition: all 0.3s ease;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
