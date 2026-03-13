(function () {
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            nav.classList.toggle('nav-scrolled', window.scrollY > 10);
        });
    }

    const ham = document.getElementById('hamburger');
    const menu = document.getElementById('nav-links');

    if (ham && menu) {
        ham.addEventListener('click', function () {
            const isOpen = menu.classList.toggle('open');
            ham.setAttribute('aria-expanded', isOpen);
            ham.innerHTML = isOpen ? '✕' : '☰';
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    const yearElement = document.getElementById('getfullyear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
})();