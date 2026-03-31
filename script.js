// script.js - Kamalini premium optimized version

document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       1. Smooth Scroll (with header offset fix)
    ========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });


    /* =========================
       2. Active Nav Highlight (throttled)
    ========================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"], nav a[href$=".html"]');

    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= sectionTop - 150) {
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
    }

    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveNav();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    window.dispatchEvent(new Event('scroll'));
	const videos = document.querySelectorAll('video');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		});
	});

	videos.forEach(video => {
		observer.observe(video);
	});

    /* =========================
       3. Scroll Reveal Animation
    ========================== */
    const revealElements = document.querySelectorAll('section');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);


    /* =========================
       4. WhatsApp Prefilled Message
    ========================== */
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const message = encodeURIComponent(
                "Hi Kamalini, I'm interested in your saree collection."
            );

            const phone = "916281353964"; // 🔴 replace with your number

            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    });


    /* =========================
       5. Header Scroll Effect
    ========================== */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 247, 246, 0.95)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
        } else {
            header.style.background = "rgba(255, 247, 246, 0.85)";
            header.style.boxShadow = "none";
        }
    });


    /* =========================
       6. Lazy Loading Images
    ========================== */
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });

});
