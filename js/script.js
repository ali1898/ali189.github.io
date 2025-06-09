// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  navigation: {
    prevEl: "#slide-prev",
    nextEl: "#slide-next",
  },
});

const swiper2 = new Swiper(".wrapper", {
  loop: true,

  navigation: {
    nextEl: ".centerWrap__arrowleft",
    prevEl: ".centerWrap__arrowright",
  },
});

const swiper3 = new Swiper(".wrapperN", {
  loop: true,

  navigation: {
    nextEl: ".centerWrap__arrowleftN",
    prevEl: ".centerWrap__arrowrightN",
  },
});
