// app.js
document.addEventListener('DOMContentLoaded', function() {
  const topBar = document.querySelector(".top-bar");
  let lastScroll = 0;
  let scrollTimeout;

  // Throttled scroll handler
  window.addEventListener("scroll", function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
          topBar.classList.add("scrolled");
        } else {
          topBar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
        scrollTimeout = null;
      }, 50);
    }
  }, { passive: true });

  // Initialize Swiper with mobile-friendly settings
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    touchRatio: 1,
    touchAngle: 45,
    resistance: true,
    resistanceRatio: 0.65,
    speed: 400,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
