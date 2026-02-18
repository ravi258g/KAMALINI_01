// script.js - Kamalini website JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // 1. Smooth scrolling for any internal anchor links (#id)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Highlight active navigation link based on scroll position
    // (especially useful if you later decide to merge everything into one long page)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"], nav a[href$=".html"]');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${current}` || (href.endsWith('.html') && current === '')) {
                    link.classList.add('active');
                }
            });
        });

        // Trigger once on load in case page starts scrolled
        window.dispatchEvent(new Event('scroll'));
    }

    // 3. Optional future enhancements can be added here:
    // - Mobile menu toggle (hamburger)
    // - Image lazy loading
    // - Gallery lightbox / zoom on click
    // - Form validation if you add a contact form later
});