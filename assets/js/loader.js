// Loader de página
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    
    // Simular tiempo de carga y ocultar loader
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            
            // Remover el loader del DOM después de la transición
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000); // Mostrar loader por al menos 1 segundo
    });
});
