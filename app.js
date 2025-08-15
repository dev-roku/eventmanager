document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menu = document.querySelector("#menu-bars");
    const navbar = document.querySelector(".navbar");

    menu.addEventListener('click', () => {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    });

    // Theme toggler
    const themeToggler = document.querySelector(".theme-toggler");
    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener('click', () => {
        themeToggler.classList.toggle("active");
    });

    // Close menus on scroll
    window.onscroll = () => {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
        themeToggler.classList.remove("active");
    };

    // Theme color changer
    document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
        btn.addEventListener('click', () => {
            let color = btn.style.background;
            document.documentElement.style.setProperty("--theme-color", color);
        });
    });

    // Home slider (Swiper.js)
    var homeSwiper = new Swiper(".home-slider", {
        effect: "fade", // Using fade effect for full-screen background
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // Review slider (Swiper.js)
    var reviewSwiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // Scroll reveal animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                // Optional: remove active class to re-animate on scroll up
                // reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();
});
