window.addEventListener("scroll", function() {
  const topBar = document.querySelector(".top-bar");
  const logoHeight = document.querySelector(".header").offsetHeight;

  if (window.scrollY > logoHeight) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
});

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});
