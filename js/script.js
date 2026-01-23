let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 1) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});