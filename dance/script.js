document.addEventListener('DOMContentLoaded', function() {

    // --- Scroll-triggered Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // --- NEW: Hero Section Mouse Parallax Effect ---
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');

    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroSection;

        // Calculate the movement amount (e.g., from -20px to 20px)
        const moveX = (clientX / offsetWidth - 0.5) * 40; // 40 is the intensity
        const moveY = (clientY / offsetHeight - 0.5) * 40;

        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });


    // --- Active Navigation Link Styling ---
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main > section, footer'); // include footer in sections

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref && linkHref.includes(current)) {
                link.classList.add('active');
            }
        });
    });

});