// Menú hamburguesa para móviles
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuLinks = document.querySelectorAll('#main-nav a');
    
    // Función para abrir/cerrar el menú
    function toggleMenu() {
        mainNav.classList.toggle('active');
        
        // Cambiar el ícono del botón
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Event listener para el botón hamburguesa
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Cerrar el menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});
