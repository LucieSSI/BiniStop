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

  // Fixed Swiper initialization
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    loopedSlides: 3,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      }
    },
    on: {
      init: function () {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
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
