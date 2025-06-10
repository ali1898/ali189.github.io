// Panel Tool
const panelbuttonEl = document.querySelector(".panelbutton");
const paneltoolcontrolEl = document.querySelector(".paneltoolcontrol");
const layoutcontrol__updateEl = document.querySelector(
  ".layoutcontrol__update"
);
let isActive = true;
const activePanelTool = () => {
  if (isActive) {
    paneltoolcontrolEl.classList.add("paneltoolcontrol--active");
    isActive = false;
    console.log("yes");
  } else {
    paneltoolcontrolEl.classList.remove("paneltoolcontrol--active");
    isActive = true;
    console.log("no");
  }
};
panelbuttonEl.addEventListener("click", activePanelTool);

let selected = true;
layoutcontrol__updateEl.addEventListener("click", () => {
  if (selected) {
    layoutcontrol__updateEl.classList.remove("layoutcontrol__update--active");
    selected = false;
    console.log("active", selected);
  } else {
    layoutcontrol__updateEl.classList.add("layoutcontrol__update--active");
    selected = true;
    console.log("deactive");
  }
});

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
