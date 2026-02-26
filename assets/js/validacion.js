// Real-time form validation
class FormValidator {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (!this.form) return;

        this.inputs = this.form.querySelectorAll('input, textarea');
        this.messages = this.getDefaultMessages();
        this.init();
    }

    getDefaultMessages() {
        return {
            nameMin: 'El nombre debe tener al menos 2 caracteres.',
            nameMax: 'El nombre no puede tener más de 50 caracteres.',
            emailInvalid: 'Por favor, ingresa un correo válido.',
            subjectMin: 'El asunto debe tener al menos 5 caracteres.',
            subjectMax: 'El asunto no puede tener más de 100 caracteres.',
            messageMin: 'El mensaje debe tener al menos 10 caracteres.',
            messageMax: 'El mensaje no puede tener más de 500 caracteres.'
        };
    }

    updateMessages(i18nMessages = {}) {
        if (!i18nMessages) return;

        const lang = window.i18nManager?.getCurrentLanguage?.() || 'es';
        if (lang === 'en') {
            this.messages = {
                nameMin: 'Name must contain at least 2 characters.',
                nameMax: 'Name cannot exceed 50 characters.',
                emailInvalid: i18nMessages.emailInvalid || 'Please enter a valid email.',
                subjectMin: 'Subject must contain at least 5 characters.',
                subjectMax: 'Subject cannot exceed 100 characters.',
                messageMin: 'Message must contain at least 10 characters.',
                messageMax: 'Message cannot exceed 500 characters.'
            };
            return;
        }

        this.messages = {
            nameMin: 'El nombre debe tener al menos 2 caracteres.',
            nameMax: 'El nombre no puede tener más de 50 caracteres.',
            emailInvalid: i18nMessages.emailInvalid || 'Por favor, ingresa un correo válido.',
            subjectMin: 'El asunto debe tener al menos 5 caracteres.',
            subjectMax: 'El asunto no puede tener más de 100 caracteres.',
            messageMin: 'El mensaje debe tener al menos 10 caracteres.',
            messageMax: 'El mensaje no puede tener más de 500 caracteres.'
        };
    }

    init() {
        this.inputs.forEach((input) => {
            let timeout;

            input.addEventListener('input', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    if (input.value.trim() !== '') {
                        this.validateField(input);
                    }
                }, 250);
            });

            input.addEventListener('blur', () => {
                if (input.value.trim() !== '') {
                    this.validateField(input);
                }
            });
        });

        this.form.addEventListener('submit', (event) => {
            let isValid = true;

            this.inputs.forEach((input) => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                const firstError = this.form.querySelector('.error-message');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailRegex.test(email);
    }

    removeErrorMessage(input) {
        const error = input.parentNode.querySelector('.error-message');
        if (error) error.remove();
    }

    createErrorMessage(input, message) {
        this.removeErrorMessage(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '5px';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }

    validateField(input) {
        const value = input.value.trim();

        switch (input.name) {
            case 'nombre':
                if (value.length < 2) {
                    this.createErrorMessage(input, this.messages.nameMin);
                    return false;
                }
                if (value.length > 50) {
                    this.createErrorMessage(input, this.messages.nameMax);
                    return false;
                }
                break;

            case 'email':
                if (!this.isValidEmail(value)) {
                    this.createErrorMessage(input, this.messages.emailInvalid);
                    return false;
                }
                break;

            case 'asunto':
                if (value.length < 5) {
                    this.createErrorMessage(input, this.messages.subjectMin);
                    return false;
                }
                if (value.length > 100) {
                    this.createErrorMessage(input, this.messages.subjectMax);
                    return false;
                }
                break;

            case 'mensaje':
                if (value.length < 10) {
                    this.createErrorMessage(input, this.messages.messageMin);
                    return false;
                }
                if (value.length > 500) {
                    this.createErrorMessage(input, this.messages.messageMax);
                    return false;
                }
                break;

            default:
                break;
        }

        this.removeErrorMessage(input);
        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.formValidator = new FormValidator();
});
