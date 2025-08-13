// Integración con GitHub API para mostrar proyectos dinámicamente
class GitHubProjects {
    constructor() {
        this.username = 'AndresitoPEx';
        this.apiUrl = `https://api.github.com/users/${this.username}/repos`;
        this.container = document.querySelector('.card-wrapper.swiper-wrapper');
        this.loadingIndicator = null;
        
        // Proyectos destacados que quieres mostrar (por nombre de repo)
        this.featuredProjects = [
            'app-fly',
            'greetings',
            'deltavite',
            'fake-store',
            'SmallTube',
            'devs',
            'alura-geek',
            'reto1',
            'platcont',
            'bat'
        ];
        
        // Mapeo de tecnologías para los filtros
        this.techMapping = {
            'javascript': 'js',
            'typescript': 'js',
            'react': 'react',
            'nextjs': 'next',
            'next.js': 'next',
            'node': 'node',
            'nodejs': 'node',
            'vue': 'vue',
            'angular': 'angular',
            'php': 'php',
            'python': 'python',
            'wordpress': 'wordpress'
        };
    }
    
    async init() {
        this.showLoading();
        try {
            const projects = await this.fetchProjects();
            const filteredProjects = this.filterFeaturedProjects(projects);
            this.renderProjects(filteredProjects);
            this.hideLoading();
            
            // Actualizar Swiper después de cargar los proyectos
            if (window.swiper) {
                setTimeout(() => {
                    window.swiper.destroy(true, true);
                    // Reinicializar Swiper con loop
                    this.reinitializeSwiper();
                }, 100);
            }
        } catch (error) {
            console.error('Error cargando proyectos de GitHub:', error);
            this.showError();
        }
    }
    
    async fetchProjects() {
        const response = await fetch(`${this.apiUrl}?sort=updated&per_page=50`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return await response.json();
    }
    
    filterFeaturedProjects(projects) {
        return projects.filter(project => 
            this.featuredProjects.includes(project.name) && 
            !project.fork
        ).sort((a, b) => {
            // Ordenar por el orden definido en featuredProjects
            const indexA = this.featuredProjects.indexOf(a.name);
            const indexB = this.featuredProjects.indexOf(b.name);
            return indexA - indexB;
        });
    }
    
    getTechFromRepo(repo) {
        const language = repo.language?.toLowerCase() || 'js';
        const description = repo.description?.toLowerCase() || '';
        const name = repo.name.toLowerCase();
        
        // Detectar tecnología basada en lenguaje principal y descripción
        if (description.includes('react') || name.includes('react')) return 'react';
        if (description.includes('next') || name.includes('next')) return 'next';
        if (description.includes('node') || name.includes('node')) return 'node';
        if (description.includes('wordpress') || name.includes('wordpress')) return 'wordpress';
        if (description.includes('vue') || name.includes('vue')) return 'vue';
        if (description.includes('angular') || name.includes('angular')) return 'angular';
        
        return this.techMapping[language] || 'js';
    }
    
    getProjectImage(repoName) {
        // Mapeo de imágenes existentes
        const imageMap = {
            'app-fly': 'exp11.png',
            'greetings': 'exp4.png',
            'deltavite': 'exp9.png',
            'fake-store': 'exp8.png',
            'SmallTube': 'exp7.png',
            'devs': 'exp6.png',
            'alura-geek': 'exp5.png',
            'reto1': 'exp1.png',
            'platcont': 'exp2.png',
            'bat': 'exp3.png'
        };
        
        return imageMap[repoName] || 'exp1.png'; // Imagen por defecto
    }
    
    formatDescription(description) {
        if (!description) return 'Proyecto desarrollado con tecnologías modernas.';
        if (description.length > 120) {
            return description.substring(0, 120) + '...';
        }
        return description;
    }
    
    renderProjects(projects) {
        if (!this.container) return;
        
        // Limpiar contenido existente
        this.container.innerHTML = '';
        
        projects.forEach(project => {
            const tech = this.getTechFromRepo(project);
            const image = this.getProjectImage(project.name);
            const hasDemo = project.homepage && project.homepage.trim() !== '';
            
            const cardHTML = `
                <div class="card swiper-slide" role="listitem" data-tech="${tech}">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                            <img data-src="assets/img/${image}" alt="${project.name} vista previa" class="card-img swiper-lazy">
                            <div class="swiper-lazy-preloader"></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <h2 class="name">${this.formatTitle(project.name)}</h2>
                        <p class="description">${this.formatDescription(project.description)}</p>
                        <div class="project-meta">
                            <span class="tech-badge">${tech.toUpperCase()}</span>
                            <span class="stars">⭐ ${project.stargazers_count}</span>
                            <span class="updated">Actualizado: ${this.formatDate(project.updated_at)}</span>
                        </div>
                        <div class="botones">
                            ${hasDemo ? `<button class="button"><a target="_blank" href="${project.homepage}" data-i18n="viewDemo">Demo</a></button>` : ''}
                            <button class="button"><a target="_blank" href="${project.html_url}" data-i18n="viewRepository">Repo</a></button>
                        </div>
                    </div>
                </div>
            `;
            
            this.container.insertAdjacentHTML('beforeend', cardHTML);
        });
        
        // Aplicar traducciones inmediatamente después de renderizar
        this.applyTranslations();
    }
    
    applyTranslations() {
        // Aplicar traducciones si i18nManager está disponible
        if (window.i18nManager) {
            const currentLang = window.i18nManager.getCurrentLanguage();
            const texts = window.i18nManager.translations[currentLang];
            
            // Actualizar botones de demo y repositorio
            document.querySelectorAll('[data-i18n="viewDemo"]').forEach(el => {
                el.textContent = texts.viewDemo;
            });
            
            document.querySelectorAll('[data-i18n="viewRepository"]').forEach(el => {
                el.textContent = texts.viewRepository;
            });
        }
    }

    formatTitle(name) {
        // Convertir nombres de repo a títulos legibles
        const titleMap = {
            'app-fly': 'Landing FlyAlone',
            'greetings': 'ToDo List',
            'deltavite': 'Delta Ecommerce',
            'fake-store': 'Fake Shop',
            'SmallTube': 'Small Tube',
            'devs': 'Dev on Fire',
            'alura-geek': 'Geek Store',
            'reto1': 'Encriptador de textos',
            'platcont': 'PlatCont Landing Page',
            'bat': 'Batman Blog'
        };
        
        return titleMap[name] || name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'short' 
        });
    }
    
    showLoading() {
        if (!this.container) return;
        
        this.loadingIndicator = document.createElement('div');
        this.loadingIndicator.className = 'github-loading';
        this.loadingIndicator.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Cargando proyectos desde GitHub...</p>
        `;
        
        this.container.appendChild(this.loadingIndicator);
    }
    
    hideLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.remove();
            this.loadingIndicator = null;
        }
    }
    
    showError() {
        if (!this.container) return;
        
        this.container.innerHTML = `
            <div class="github-error">
                <p>Error al cargar proyectos de GitHub</p>
                <button onclick="githubProjects.init()">Reintentar</button>
            </div>
        `;
    }
    
    reinitializeSwiper() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        window.swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            loopAdditionalSlides: 3,
            loopedSlides: 3,
            centeredSlides: true,
            speed: 600,
            grabCursor: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true,
            },
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 8,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: false,
            },
            mousewheel: {
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            autoplay: reduceMotion ? false : {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            a11y: {
                enabled: true,
                prevSlideMessage: 'Anterior',
                nextSlideMessage: 'Siguiente',
                firstSlideMessage: 'Este es el primer slide',
                lastSlideMessage: 'Este es el último slide',
                slideLabelMessage: 'Slide',
            },
            // pagination y navigation deshabilitados
            breakpoints:{
                0:   { slidesPerView: 1, centeredSlides: true, loop: true },
                520: { slidesPerView: 2, centeredSlides: true, loop: true },
                950: { slidesPerView: 3, centeredSlides: true, loop: true },
                1200:{ slidesPerView: 3, spaceBetween: 30, centeredSlides: true, loop: true }
            },
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un momento para que Swiper se inicialice
    setTimeout(() => {
        window.githubProjects = new GitHubProjects();
        window.githubProjects.init();
    }, 500);
});

// Escuchar cambios de idioma para actualizar traducciones
document.addEventListener('languageChanged', function(e) {
    if (window.githubProjects) {
        window.githubProjects.applyTranslations();
    }
});
