// Respetar usuarios con "reducir movimiento"
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var swiper = new Swiper(".slide-content", {
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

// Exponer global para que otros scripts puedan actualizarlo
window.swiper = swiper;