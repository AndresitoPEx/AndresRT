// Manejo simplificado del toggle entre proyectos estáticos y dinámicos
window.projectToggle = {
    staticProjectsData: `
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
                <p class="description">Sitio web responsivo, incluye landing page con proyección a convertirse en Market place. Desarrollado con React, Vite, Tailwind CSS y Material UI</p>
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
                    <img data-src="assets/img/exp8.png" alt="Fake Shop vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Fake Shop</h2>
                <p class="description">Aplicación que simula el comportamiento de un Ecommerce, desarrollado con Vite, React JS, Tailwind y FakeApi.</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://fake-store-fawn.vercel.app/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/fake-store">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="js">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp1.png" alt="Encriptador de textos vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Encriptador de textos</h2>
                <p class="description">Página web que encripta y desencripta textos ingresados de acuerdo a una lógica establecida. Construido con JS, HTML y CSS</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://andresitopex.github.io/reto1/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/reto1">Repo</a></button>
                </div>
            </div>
        </div>

        <div class="card swiper-slide" role="listitem" data-tech="js">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img data-src="assets/img/exp5.png" alt="Geek Store vista previa" class="card-img swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Geek Store</h2>
                <p class="description">Aplicación Web de una tienda geek donde se aprecian los productos en venta y ofertas. Hecho con JS, HTML y CSS.</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://andresitopex.github.io/alura-geek/">Demo</a></button>
                    <button class="button"><a target="_blank" href="https://github.com/AndresitoPEx/alura-geek">Repo</a></button>
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
                <p class="description">Diseño e implementación de página web para servicios pediátricos. Construido con WordPress</p>
                <div class="botones">
                    <button class="button"><a target="_blank" href="https://pediatraperu.com/">Demo</a></button>
                </div>
            </div>
        </div>
    `,

    loadStatic() {
        const container = document.querySelector('.card-wrapper.swiper-wrapper');
        if (container) {
            container.innerHTML = this.staticProjectsData;
            this.updateSwiper();
        }
    },

    updateSwiper() {
        if (window.swiper) {
            setTimeout(() => {
                window.swiper.destroy(true, true);
                this.reinitializeSwiper();
            }, 100);
        }
    },

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
};
