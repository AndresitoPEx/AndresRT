// GitHub projects integration: renders a static grid of minimal repo cards
class GitHubProjects {
    constructor() {
        this.username = 'AndresitoPEx';
        this.apiUrl = `https://api.github.com/users/${this.username}/repos`;
        this.container = document.querySelector('.repo-grid');
        this.loadingIndicator = null;
        this.cachedProjects = [];

        // Featured repositories to render in order
        this.featuredProjects = [
            'app-fly',
            'deltavite',
            'fake-store',
            'SmallTube',
            'devs',
            'platcont'
        ];

        // Curated bilingual descriptions (GitHub repos lack descriptions)
        this.descriptions = {
            'app-fly': {
                es: 'Landing page de viajes con diseño responsive.',
                en: 'Travel landing page with responsive design.'
            },
            deltavite: {
                es: 'E-commerce con React, Tailwind y Vite para Delta Tactical Gear.',
                en: 'E-commerce built with React, Tailwind, and Vite for Delta Tactical Gear.'
            },
            'fake-store': {
                es: 'Tienda demo construida sobre la API pública de Fake Store.',
                en: 'Demo store built on the public Fake Store API.'
            },
            SmallTube: {
                es: 'Reproductor de videos inspirado en YouTube.',
                en: 'Video player inspired by YouTube.'
            },
            devs: {
                es: 'Sitio web para una comunidad de desarrolladores.',
                en: 'Website for a developer community.'
            },
            platcont: {
                es: 'Landing page corporativa en HTML y CSS.',
                en: 'Corporate landing page in HTML and CSS.'
            }
        };

        // GitHub-style language dot colors
        this.languageColors = {
            javascript: '#f1e05a',
            typescript: '#3178c6',
            html: '#e34c26',
            css: '#563d7c',
            vue: '#41b883',
            python: '#3572A5',
            php: '#4F5D95'
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
            this.hideLoading();
            this.renderProjects(filteredProjects);
        } catch (error) {
            console.error('Error loading GitHub projects:', error);
            this.showError();
        }
    }

    rerenderFromCache() {
        if (!this.cachedProjects.length) return;
        this.renderProjects(this.cachedProjects);
    }

    async fetchProjects() {
        const response = await fetch(`${this.apiUrl}?sort=updated&per_page=100`);
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

    getLanguageColor(language) {
        return this.languageColors[(language || '').toLowerCase()] || '#8b949e';
    }

    formatDescription(project) {
        const curated = this.descriptions[project.name];
        if (curated) {
            return curated[this.getCurrentLanguage()] || curated.es;
        }

        const description = project.description;
        const fallback = this.t('projectDefaultDescription', 'Project built with modern technologies.');
        if (!description) return fallback;
        return description.length > 120 ? `${description.substring(0, 120)}...` : description;
    }

    formatTitle(name) {
        const titleMap = {
            'app-fly': 'Landing FlyAlone',
            deltavite: 'Delta Ecommerce',
            'fake-store': 'Fake Shop',
            SmallTube: 'Small Tube',
            devs: 'Dev on Fire',
            platcont: 'PlatCont Landing Page'
        };

        return titleMap[name] || name.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    renderProjects(projects) {
        if (!this.container) return;

        const demoText = this.t('viewDemo', 'Demo');
        const repoText = this.t('viewRepository', 'Repository');

        this.container.innerHTML = '';

        projects.forEach((project) => {
            const hasDemo = project.homepage && project.homepage.trim() !== '';
            const language = project.language || 'JavaScript';

            const cardHTML = `
                <article class="repo-card" role="listitem">
                    <div class="repo-card__head">
                        <i class="fa-solid fa-book-bookmark repo-card__glyph" aria-hidden="true"></i>
                        <h3 class="repo-card__name">${this.formatTitle(project.name)}</h3>
                    </div>
                    <p class="repo-card__desc">${this.formatDescription(project)}</p>
                    <div class="repo-card__foot">
                        <span class="repo-card__lang">
                            <span class="repo-card__lang-dot" style="background: ${this.getLanguageColor(language)}" aria-hidden="true"></span>${language}
                        </span>
                        <span class="repo-card__links">
                            ${hasDemo ? `<a href="${project.homepage}" class="repo-card__link" target="_blank" rel="noopener noreferrer" title="${demoText}" aria-label="${demoText}: ${this.formatTitle(project.name)}"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ''}
                            <a href="${project.html_url}" class="repo-card__link" target="_blank" rel="noopener noreferrer" title="${repoText}" aria-label="${repoText}: ${this.formatTitle(project.name)}"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
                        </span>
                    </div>
                </article>
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
