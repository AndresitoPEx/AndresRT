// Validación en tiempo real del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Función para crear mensajes de error
    function createErrorMessage(input, message) {
        removeErrorMessage(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '5px';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    
    // Función para remover mensajes de error
    function removeErrorMessage(input) {
        const errorMsg = input.parentNode.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
    
    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailRegex.test(email);
    }
    
    // Validación por campo
    function validateField(input) {
        const value = input.value.trim();
        
        switch(input.name) {
            case 'nombre':
                if (value.length < 2) {
                    createErrorMessage(input, 'El nombre debe tener al menos 2 caracteres');
                    return false;
                } else if (value.length > 50) {
                    createErrorMessage(input, 'El nombre no puede tener más de 50 caracteres');
                    return false;
                }
                break;
                
            case 'email':
                if (!isValidEmail(value)) {
                    createErrorMessage(input, 'Por favor ingresa un email válido');
                    return false;
                }
                break;
                
            case 'asunto':
                if (value.length < 5) {
                    createErrorMessage(input, 'El asunto debe tener al menos 5 caracteres');
                    return false;
                } else if (value.length > 100) {
                    createErrorMessage(input, 'El asunto no puede tener más de 100 caracteres');
                    return false;
                }
                break;
                
            case 'mensaje':
                if (value.length < 10) {
                    createErrorMessage(input, 'El mensaje debe tener al menos 10 caracteres');
                    return false;
                } else if (value.length > 500) {
                    createErrorMessage(input, 'El mensaje no puede tener más de 500 caracteres');
                    return false;
                }
                break;
        }
        
        removeErrorMessage(input);
        return true;
    }
    
    // Agregar eventos a cada input
    inputs.forEach(input => {
        // Validar mientras el usuario escribe (con debounce)
        let timeout;
        input.addEventListener('input', function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (this.value.trim() !== '') {
                    validateField(this);
                }
            }, 300);
        });
        
        // Validar cuando pierde el foco
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                validateField(this);
            }
        });
        
        // Efectos visuales
        input.addEventListener('focus', function() {
            this.style.borderLeft = '3px solid var(--color-primario)';
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderLeft = 'none';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Validación completa del formulario
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            // Hacer scroll al primer error
            const firstError = form.querySelector('.error-message');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});