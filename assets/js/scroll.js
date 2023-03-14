const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.hash);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});