document.addEventListener("DOMContentLoaded", function () {
    // Initialize Bootstrap Carousel
    const carouselElement = document.querySelector('.carousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4000, // Adjust interval as needed (in milliseconds)
        wrap: true // Whether to wrap the carousel when reaching the end
    });

    // Optional: Pause carousel on hover
    carouselElement.addEventListener('mouseenter', () => {
        carousel.pause();
    });

    carouselElement.addEventListener('mouseleave', () => {
        carousel.cycle();
    });

    // Optional: Handle manual navigation with buttons (if needed)
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');

    prevBtn.addEventListener('click', () => {
        carousel.prev();
    });

    nextBtn.addEventListener('click', () => {
        carousel.next();
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -80; // Adjust as needed to offset for fixed header
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });

                // Close the navbar menu for mobile view
                const navbar = document.querySelector('.navbar');
                navbar.classList.remove('open');
            }
        });
    });
});
