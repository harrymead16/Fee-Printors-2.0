
// DOMContentLoaded event to load navbar and initialize it
document.addEventListener('DOMContentLoaded', () => {
    // Load the navbar into the placeholder
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
            initializeNavbar();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });

    function initializeNavbar() {
        const burger = document.querySelector('.burger');
        const closeBtn = document.querySelector('.close');
        const navLinks = document.querySelector('.nav-links');
        let isMenuOpen = false;

        function openMenu() {
            if (!isMenuOpen) {
                navLinks.classList.add('active', 'open');
                burger.style.display = 'none';
                closeBtn.style.display = 'block';
                isMenuOpen = true;
            }
        }

        function closeMenu() {
            if (isMenuOpen) {
                closeBtn.classList.add('animate');
                navLinks.classList.remove('open');
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    closeBtn.style.display = 'none';
                    burger.style.display = 'block';
                    closeBtn.classList.remove('animate');
                }, 300);
                isMenuOpen = false;
            }
        }

        if (burger) burger.addEventListener('click', openMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);

        const currentPage = document.body.getAttribute('data-page');
        const navLinksItems = document.querySelectorAll('.nav-links li a');
        navLinksItems.forEach(link => {
            if (link.getAttribute('href') === currentPage) link.classList.add('active');
            link.addEventListener('click', function () {
                navLinksItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        function handleMediaQueryChange(e) {
            if (e.matches) {
                navLinksItems.forEach(link => {
                    link.style.backgroundColor = '';
                });
            }
        }
    }
});