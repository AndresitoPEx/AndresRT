// Animaciones de scroll - Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Función callback para cuando los elementos entran en vista
    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Elementos a observar
    const elementsToAnimate = document.querySelectorAll(
        '.about, .skills, .academic, .experience, .formcontacto, .skills__box, .academic__courses__box, .card'
    );
    
    // Agregar clase inicial y observar elementos
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
    
    // Animación especial para las skills (con delay escalonado)
    const skillBoxes = document.querySelectorAll('.skills__box');
    skillBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.1}s`;
    });
});

// Efecto parallax suave para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.titular');
    const heroImage = document.querySelector('.title__profile');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});
