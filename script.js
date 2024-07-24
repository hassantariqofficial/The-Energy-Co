// document.addEventListener("scroll", function () {
//   const navbar = document.getElementById("thirdnav");
//   if (window.scrollY > 100) {
//     navbar.classList.add("visible");
//   } else {
//     navbar.classList.remove("visible");
//   }
// });
const swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  grabCursor: true,
  spaceBetween: 30,
  speed: 900,
  centeredSlides: true,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Autoplay settings
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
