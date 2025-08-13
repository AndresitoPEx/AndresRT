// Manejo simplificado de filtros de experiencia
document.addEventListener('DOMContentLoaded', function() {
    const filterContainer = document.querySelector('.exp-controls');
    
    // Agregar eventos de filtro después de la inicialización
    setTimeout(() => {
        attachFilterEvents();
    }, 500);

    function attachFilterEvents() {
        // Limpiar eventos existentes
        if (filterContainer) {
            filterContainer.removeEventListener('click', handleFilterClick);
            filterContainer.addEventListener('click', handleFilterClick);
        }
    }

    function handleFilterClick(e) {
        e.preventDefault();
        
        if (e.target.classList.contains('filter-chip')) {
            handleCategoryFilter(e.target);
        } else if (e.target.classList.contains('source-btn')) {
            handleSourceToggle(e.target);
        }
    }

    function handleCategoryFilter(button) {
        const filterValue = button.dataset.filter;
        
        // Actualizar estado visual
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
        });
        
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        
        // Aplicar filtro
        if (filterValue === 'all') {
            showAllSlides();
        } else {
            filterSlidesByTech(filterValue);
        }
        
        updateSwiper();
    }

    function handleSourceToggle(button) {
        const sourceType = button.dataset.source;
        
        // Actualizar estado visual
        document.querySelectorAll('.source-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        
        // Cambiar fuente de datos
        if (sourceType === 'static') {
            window.projectToggle.loadStatic();
        } else if (sourceType === 'github' && window.githubProjects) {
            window.githubProjects.displayProjects();
        }
        
        // Resetear filtros de categoría
        resetCategoryFilters();
    }

    function showAllSlides() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            slide.style.display = '';
            slide.classList.remove('filtered-out');
        });
    }

    function filterSlidesByTech(tech) {
        const slides = document.querySelectorAll('.swiper-slide');
        
        slides.forEach(slide => {
            const slideTechs = slide.dataset.tech ? slide.dataset.tech.split(' ') : [];
            
            if (slideTechs.includes(tech)) {
                slide.style.display = '';
                slide.classList.remove('filtered-out');
            } else {
                slide.style.display = 'none';
                slide.classList.add('filtered-out');
            }
        });
    }

    function resetCategoryFilters() {
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
        });
        
        // Activar "Todos"
        const allButton = document.querySelector('.filter-chip[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
            allButton.setAttribute('aria-pressed', 'true');
        }
        
        showAllSlides();
    }

    function updateSwiper() {
        if (window.swiper) {
            setTimeout(() => {
                window.swiper.update();
                window.swiper.updateProgress();
                window.swiper.updateSlidesClasses();
            }, 100);
        }
    }

    // Exponer función para uso global
    window.expFilters = {
        attachEvents: attachFilterEvents,
        reset: resetCategoryFilters
    };
});
