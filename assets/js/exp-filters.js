// Filtros por tecnología en la sección de experiencia
(function(){
  const toolbar = document.querySelector('.experience__filters');
  const filterBtns = document.querySelectorAll('.filter-chip');
  const sourceBtns = document.querySelectorAll('.source-btn');
  const slides = document.querySelectorAll('.card.swiper-slide');

  if (!toolbar) return;

  function applyFilter(filter) {
    const currentSlides = document.querySelectorAll('.card.swiper-slide');
    let visibleCount = 0;

    currentSlides.forEach(slide => {
      const tech = (slide.getAttribute('data-tech') || '').toLowerCase();
      const show = filter === 'all' || tech.includes(filter);
      
      if (show) {
        slide.style.display = '';
        visibleCount++;
      } else {
        slide.style.display = 'none';
      }
    });

    // Actualizar Swiper después de cambiar display
    if (window.swiper && visibleCount > 0) {
      setTimeout(() => {
        try {
          window.swiper.update();
        } catch (e) {
          console.log('Swiper update error:', e);
        }
      }, 50);
    }

    // Mostrar contador de resultados
    updateResultsCounter(visibleCount);
  }

  function updateResultsCounter(count) {
    let counter = document.querySelector('.results-counter');
    if (!counter) {
      counter = document.createElement('div');
      counter.className = 'results-counter';
      toolbar.parentNode.insertBefore(counter, toolbar.nextSibling);
    }
    counter.textContent = count > 0 ? `${count} proyecto${count !== 1 ? 's' : ''}` : 'Sin resultados';
  }

  // Event listeners para filtros
  toolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;

    // Actualizar estado visual
    filterBtns.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');

    const filter = (btn.dataset.filter || 'all').toLowerCase();
    applyFilter(filter);
  });

  // Event listeners para toggle de fuente
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.source-btn');
    if (!btn) return;

    const source = btn.dataset.source;
    
    // Actualizar estado visual del toggle
    sourceBtns.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');

    if (source === 'static') {
      // Cargar proyectos estáticos
      if (window.projectToggle && window.projectToggle.loadStatic) {
        window.projectToggle.loadStatic();
      }
    } else if (source === 'github') {
      // Cargar proyectos desde GitHub
      if (window.githubProjects) {
        window.githubProjects.init();
      }
    }

    // Aplicar filtro actual después de cambiar fuente
    setTimeout(() => {
      const activeFilter = document.querySelector('.filter-chip.active');
      if (activeFilter) {
        applyFilter(activeFilter.dataset.filter || 'all');
      }
    }, 200);
  });

  // Inicializar con 'all'
  setTimeout(() => {
    applyFilter('all');
  }, 500);
})();
