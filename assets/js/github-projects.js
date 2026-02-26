// GitHub projects integration
class GitHubProjects {
    constructor() {
        this.username = 'AndresitoPEx';
        this.apiUrl = `https://api.github.com/users/${this.username}/repos`;
        this.container = document.querySelector('.card-wrapper.swiper-wrapper');
        this.loadingIndicator = null;
        this.cachedProjects = [];

        // Featured repositories to render in order
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

        this.techMapping = {
            javascript: 'js',
            typescript: 'js',
            react: 'react',
            nextjs: 'next',
            'next.js': 'next',
            node: 'node',
            nodejs: 'node',
            vue: 'vue',
            angular: 'angular',
            php: 'php',
            python: 'python',
            wordpress: 'wordpress'
        };
    }

    getCurrentLanguage() {
        return window.i18nManager?.getCurrentLanguage?.() || 'es';
    }

    t(key, fallback) {
        return window.i18nManager?.getText?.(key) || fallback;
    }

    async init() {
        this.showLoading();

        try {
            const projects = await this.fetchProjects();
            const filteredProjects = this.filterFeaturedProjects(projects);
            this.cachedProjects = filteredProjects;
            this.renderProjects(filteredProjects);
            this.hideLoading();
            this.reinitializeSwiper();
        } catch (error) {
            console.error('Error loading GitHub projects:', error);
            this.showError();
        }
    }

    rerenderFromCache() {
        if (!this.cachedProjects.length) return;
        this.renderProjects(this.cachedProjects);
        this.reinitializeSwiper();
    }

    async fetchProjects() {
        const response = await fetch(`${this.apiUrl}?sort=updated&per_page=50`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return response.json();
    }

    filterFeaturedProjects(projects) {
        return projects
            .filter((project) => this.featuredProjects.includes(project.name) && !project.fork)
            .sort((a, b) => this.featuredProjects.indexOf(a.name) - this.featuredProjects.indexOf(b.name));
    }

    getTechFromRepo(repo) {
        const language = repo.language?.toLowerCase() || 'js';
        const description = repo.description?.toLowerCase() || '';
        const name = repo.name.toLowerCase();

        if (description.includes('react') || name.includes('react')) return 'react';
        if (description.includes('next') || name.includes('next')) return 'next';
        if (description.includes('node') || name.includes('node')) return 'node';
        if (description.includes('wordpress') || name.includes('wordpress')) return 'wordpress';
        if (description.includes('vue') || name.includes('vue')) return 'vue';
        if (description.includes('angular') || name.includes('angular')) return 'angular';

        return this.techMapping[language] || 'js';
    }

    getProjectImage(repoName) {
        const imageMap = {
            'app-fly': 'exp11.png',
            greetings: 'exp4.png',
            deltavite: 'exp9.png',
            'fake-store': 'exp8.png',
            SmallTube: 'exp7.png',
            devs: 'exp6.png',
            'alura-geek': 'exp5.png',
            reto1: 'exp1.png',
            platcont: 'exp2.png',
            bat: 'exp3.png'
        };

        return imageMap[repoName] || 'exp1.png';
    }

    formatDescription(description) {
        const fallback = this.t('projectDefaultDescription', 'Project built with modern technologies.');
        if (!description) return fallback;
        return description.length > 120 ? `${description.substring(0, 120)}...` : description;
    }

    formatDate(dateString) {
        const lang = this.getCurrentLanguage();
        const locale = lang === 'es' ? 'es-PE' : 'en-US';
        const date = new Date(dateString);

        return date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'short'
        });
    }

    formatTitle(name) {
        const titleMap = {
            'app-fly': 'Landing FlyAlone',
            greetings: 'ToDo List',
            deltavite: 'Delta Ecommerce',
            'fake-store': 'Fake Shop',
            SmallTube: 'Small Tube',
            devs: 'Dev on Fire',
            'alura-geek': 'Geek Store',
            reto1: 'Encriptador de textos',
            platcont: 'PlatCont Landing Page',
            bat: 'Batman Blog'
        };

        return titleMap[name] || name.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    renderProjects(projects) {
        if (!this.container) return;

        const updatedLabel = this.t('projectUpdatedLabel', 'Updated');
        const demoText = this.t('viewDemo', 'Demo');
        const repoText = this.t('viewRepository', 'Repository');

        this.container.innerHTML = '';

        projects.forEach((project) => {
            const tech = this.getTechFromRepo(project);
            const image = this.getProjectImage(project.name);
            const hasDemo = project.homepage && project.homepage.trim() !== '';
            const previewAlt = `${project.name} preview`;

            const cardHTML = `
                <div class="card swiper-slide" role="listitem" data-tech="${tech}">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                            <img data-src="assets/img/${image}" alt="${previewAlt}" class="card-img swiper-lazy">
                            <div class="swiper-lazy-preloader"></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <h2 class="name">${this.formatTitle(project.name)}</h2>
                        <p class="description">${this.formatDescription(project.description)}</p>
                        <div class="project-meta">
                            <span class="tech-badge">${tech.toUpperCase()}</span>
                            <span class="stars">★ ${project.stargazers_count}</span>
                            <span class="updated">${updatedLabel}: ${this.formatDate(project.updated_at)}</span>
                        </div>
                        <div class="botones">
                            ${hasDemo ? `<button class="button"><a target="_blank" href="${project.homepage}" rel="noopener noreferrer">${demoText}</a></button>` : ''}
                            <button class="button"><a target="_blank" href="${project.html_url}" rel="noopener noreferrer">${repoText}</a></button>
                        </div>
                    </div>
                </div>
            `;

            this.container.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    showLoading() {
        if (!this.container) return;

        this.loadingIndicator = document.createElement('div');
        this.loadingIndicator.className = 'github-loading';
        this.loadingIndicator.innerHTML = `
            <div class="loading-spinner"></div>
            <p>${this.t('githubLoading', 'Loading projects from GitHub...')}</p>
        `;

        this.container.appendChild(this.loadingIndicator);
    }

    hideLoading() {
        if (!this.loadingIndicator) return;

        this.loadingIndicator.remove();
        this.loadingIndicator = null;
    }

    showError() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="github-error">
                <p>${this.t('githubError', 'Error loading projects from GitHub.')}</p>
                <button onclick="githubProjects.init()">${this.t('retry', 'Retry')}</button>
            </div>
        `;
    }

    reinitializeSwiper() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (window.swiper) {
            window.swiper.destroy(true, true);
        }

        window.swiper = new Swiper('.slide-content', {
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
                loadOnTransitionStart: true
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
                slideShadows: false
            },
            mousewheel: {
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            autoplay: reduceMotion
                ? false
                : {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
            a11y: {
                enabled: true,
                prevSlideMessage: this.t('swiperPrev', 'Previous'),
                nextSlideMessage: this.t('swiperNext', 'Next'),
                firstSlideMessage: this.t('swiperFirst', 'This is the first slide'),
                lastSlideMessage: this.t('swiperLast', 'This is the last slide'),
                slideLabelMessage: this.t('swiperSlideLabel', 'Slide')
            },
            breakpoints: {
                0: { slidesPerView: 1, centeredSlides: true, loop: true },
                520: { slidesPerView: 2, centeredSlides: true, loop: true },
                950: { slidesPerView: 3, centeredSlides: true, loop: true },
                1200: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true, loop: true }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.githubProjects = new GitHubProjects();
        window.githubProjects.init();
    }, 500);
});

document.addEventListener('languageChanged', () => {
    if (window.githubProjects) {
        window.githubProjects.rerenderFromCache();
    }
});
