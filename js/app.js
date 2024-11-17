document.addEventListener('DOMContentLoaded', function() {
  // Top bar scroll handling
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
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    },

    touchEventsTarget: 'container',
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
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
