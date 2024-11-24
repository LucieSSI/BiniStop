document.addEventListener('DOMContentLoaded', function() {
  // Top Bar Scroll Effect
  const topBar = document.querySelector(".top-bar");
  const header = document.querySelector(".header");
  let lastScroll = 0;
  let scrollTimeout;

  // Add logo click functionality
  const barLogo = document.querySelector(".barlogo");
  barLogo.style.cursor = "pointer";
  barLogo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener("scroll", function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        const currentScroll = window.pageYOffset;
        const headerBottom = header.offsetTop + header.offsetHeight;

        if (currentScroll > headerBottom) {
          topBar.classList.add("scrolled");
        } else {
          topBar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
        scrollTimeout = null;
      }, 50);
    }
  }, { passive: true });

  // Initialize Swiper with updated settings
  const swiper = new Swiper('.swiper-main', {
    effect: 'fade',
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
    // Updated breakpoints with specific heights
    breakpoints: {
      320: {
        slidesPerView: 1,
        height: 250 // Smaller height for mobile
      },
      480: {
        slidesPerView: 1,
        height: 300 // Slightly larger for larger phones
      },
      768: {
        slidesPerView: 1,
        height: 400 // Tablet and up
      },
      1024: {
        slidesPerView: 1,
        height: 500 // Desktop
      }
    },
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

  // Function to update swiper height based on viewport
  function updateSwiperHeight() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const swiperElement = document.querySelector('.swiper-main');

    if (vw <= 480) {
      swiperElement.style.height = '250px';
    } else if (vw <= 768) {
      swiperElement.style.height = '300px';
    } else if (vw <= 1024) {
      swiperElement.style.height = '400px';
    } else {
      swiperElement.style.height = '500px';
    }
  }

  // Initial call and add resize listener
  updateSwiperHeight();
  window.addEventListener('resize', updateSwiperHeight);

  // Rest of the code remains the same...
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

  // Menu tab functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const menuCategories = document.querySelectorAll('.menu-category');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      menuCategories.forEach(category => category.classList.remove('active'));

      button.classList.add('active');
      const categoryId = button.getAttribute('data-category');
      document.getElementById(categoryId).classList.add('active');
    });
  });
});
