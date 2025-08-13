// Manejo del toggle entre proyectos estáticos y dinámicos
document.addEventListener('DOMContentLoaded', function() {
    const staticProjectsData = `
        <div class="card swiper-slide" role="listitem" data-tech="react">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp11.png" alt="Landing FlyAlone vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Landing FlyAlone</h2>
                <p class="description">Sitio web responsivo, incluye landing page con proyección a convertirse en Market place. Desarrollado con React con Vite, Tailwind CSS y Material UI</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://app-fly.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/app-fly">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="next">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp4.png" alt="ToDo List app vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">ToDo List</h2>
                <p class="description">CRUD de tareas usando Next JS, PostgreSQL y Prisma ORM. Aplicamos POO para lograr ver, crear, editar y eliminar las tareas ingresadas</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://greetings-iota.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/greetings/">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="react">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp9.png" alt="Delta Ecommerce vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Delta Ecommerce</h2>
                <p class="description">Aplicación en desarrollo que servirá de ventana digital para mejorar y promocionar los productos de la empresa Delta Tactical Gear, desarrollado con React JS.</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://deltavite.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/deltavite">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="react">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp8.png" alt="Fake Shop vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Fake Shop</h2>
                <p class="description">Fake Shop es una aplicación que simula el comportamiento de un Ecommerce, desarrollado con tecnologías como Vite, React JS, Tailwind y FakeApi.</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://fake-store-fawn.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/fake-store">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="react">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp7.png" alt="Small Tube vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Small Tube</h2>
                <p class="description">SmallTube es una aplicación que guarda tus videos favoritos en un solo lugar, se puede personalizar las categorías, desarrollado con React JS y Material UI.</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://small-tube.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/SmallTube">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="wordpress">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp10.png" alt="Pediatra Perú sitio web" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Pediatra Perú</h2>
                <p class="description">Diseño e implementación de página web para el Dr. Cesar Zaambrano que proporciona información sobre servicios pediátricos. Construido con Wordpress</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://pediatraperu.com/">Demo</a></button>
                </div>
            </div>
        </div>
    `;

    const toggleButtons = document.querySelectorAll('.project-source-toggle .chip');
    const container = document.querySelector('.card-wrapper.swiper-wrapper');
    
    if (!toggleButtons.length || !container) return;
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const source = this.dataset.source;
            
            // Actualizar estado de botones
            toggleButtons.forEach(btn => btn.classList.remove('is-active'));
            this.classList.add('is-active');
            
            if (source === 'static') {
                // Cargar proyectos estáticos
                container.innerHTML = staticProjectsData;
                updateSwiper();
            } else if (source === 'github') {
                // Cargar proyectos desde GitHub
                if (window.githubProjects) {
                    window.githubProjects.init();
                }
            }
        });
    });
    
    function updateSwiper() {
        if (window.swiper) {
            setTimeout(() => {
                window.swiper.destroy(true, true);
                reinitializeSwiper();
            }, 100);
        }
    }
    
    function reinitializeSwiper() {
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
});
