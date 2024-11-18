document.addEventListener('DOMContentLoaded', function() {
  // Top Bar Scroll Effect
  const topBar = document.querySelector(".top-bar");
  let lastScroll = 0;
  let scrollTimeout;

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

  // Initialize Swiper
  const swiper = new Swiper('.swiper-main', {
    effect: 'fade', // Fade effect between slides
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      }
    },
    // Events
    on: {
      init: function() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    }
  });

  // Smooth Scroll for Navigation
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
