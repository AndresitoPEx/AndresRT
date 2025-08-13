// Theme Toggle - Cambio entre modo claro y oscuro
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        this.init();
    }

    init() {
        // Aplicar tema inicial
        this.applyTheme(this.currentTheme);
        
        // Event listener para el botón
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Escuchar cambios en las preferencias del sistema
        this.watchSystemTheme();
    }

    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    getStoredTheme() {
        return localStorage.getItem('preferred-theme');
    }

    storeTheme(theme) {
        localStorage.setItem('preferred-theme', theme);
    }

    applyTheme(theme) {
        const root = document.documentElement;
        
        // Añadir clase de transición temporalmente
        root.style.transition = 'all 0.3s ease';
        
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        
        this.currentTheme = theme;
        this.updateToggleButton();
        
        // Remover la transición después del cambio
        setTimeout(() => {
            root.style.transition = '';
        }, 300);

        // Emitir evento personalizado para otros componentes
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme } 
        }));
    }

    updateToggleButton() {
        if (!this.themeToggle) return;
        
        const button = this.themeToggle;
        
        // Añadir clase de animación
        button.classList.add('switching');
        
        // Actualizar atributo aria-label
        const label = this.currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
        button.setAttribute('aria-label', label);
        
        // Efecto de pulso suave
        button.style.transform = 'scale(1.1)';
        
        // Restaurar después de la animación
        setTimeout(() => {
            button.classList.remove('switching');
            button.style.transform = '';
        }, 600);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        
        // Efecto de presionar el botón
        if (this.themeToggle) {
            this.themeToggle.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.themeToggle.style.transform = '';
            }, 150);
        }
        
        this.applyTheme(newTheme);
        this.storeTheme(newTheme);
        
        // Feedback háptico en dispositivos móviles
        if ('vibrate' in navigator) {
            navigator.vibrate([50, 30, 50]);
        }
        
        // Efecto de sonido (opcional, comentado por defecto)
        // this.playToggleSound();
    }

    watchSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            mediaQuery.addListener((e) => {
                // Solo cambiar si no hay preferencia guardada
                if (!this.getStoredTheme()) {
                    const systemTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(systemTheme);
                }
            });
        }
    }

    // Método público para forzar un tema
    setTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.applyTheme(theme);
            this.storeTheme(theme);
        }
    }

    // Método público para resetear a preferencias del sistema
    resetToSystem() {
        localStorage.removeItem('preferred-theme');
        const systemTheme = this.getSystemTheme();
        this.applyTheme(systemTheme);
    }

    // Método opcional para reproducir sonido (deshabilitado por defecto)
    playToggleSound() {
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }
    }

    // Método para detectar preferencias de animación reducida
    prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
}

// Inicializar el theme manager cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Aplicar tema inmediatamente para evitar flash
(function() {
    const stored = localStorage.getItem('preferred-theme');
    const system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = stored || system;
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();
