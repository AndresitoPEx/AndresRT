
  // Obtener el elemento de navegación
  const navbar = document.getElementById('navbar');

  // Obtener la posición inicial del desplazamiento
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Función para controlar el evento de desplazamiento
  function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verificar la dirección del desplazamiento
    if (currentScrollTop > scrollTop) {
      // Desplazamiento hacia abajo: ocultar el elemento de navegación
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Desplazamiento hacia arriba: mostrar el elemento de navegación
      navbar.style.transform = 'translateY(0)';
    }

    // Actualizar la posición del desplazamiento
    scrollTop = currentScrollTop;
  }

  // Agregar el evento de desplazamiento al objeto window
  window.addEventListener('scroll', handleScroll);

