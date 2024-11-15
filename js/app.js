window.addEventListener("scroll", function() {
  const topBar = document.querySelector(".top-bar");
  const logoHeight = document.querySelector(".header").offsetHeight;

  if (window.scrollY > logoHeight) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
});
