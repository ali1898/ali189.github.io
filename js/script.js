// Popup New Letter
const popup__closeEl = document.querySelector(".popup__close");
const popupNewLetterEl = document.querySelector(".popupNewLetter");
const popupbgEl = document.querySelector(".popupbg");
const popupForm__inputEl = document.querySelector(".popupForm__input");

popup__closeEl.addEventListener("click", () => {
  popupNewLetterEl.style.display = "none";
  popupbgEl.style.display = "none";
});
popupbgEl.addEventListener("click", () => {
  popupbgEl.style.display = "none";
});

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
// const swiper = new Swiper(".slider-container", {
//   effect: "fade",
//   speed: 1300,
//   autoplay: { delay: 4000 },
//   navigation: {
//     prevEl: "#slide-prev",
//     nextEl: "#slide-next",
//   },
// });

// const swiper2 = new Swiper(".wrapper", {
//   loop: true,
//   // autoplay: { delay: 4000 },
//   navigation: {
//     nextEl: ".centerWrap__arrowleft",
//     prevEl: ".centerWrap__arrowright",
//   },
// });

// Fixed Panel Sidebar
const fixedPanelSidebarEl = document.querySelectorAll(".columnsRowN");
const fixedPanelItems__LinkEl = document.querySelectorAll(
  ".fixedPanelItems__Link"
);

window.onscroll = () => {
  fixedPanelSidebarEl.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset - height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`.fixedPanelItems__Link[href*=` + id + `]`)
          .classList.add("active");
      });
    }
  });
};

// Product

// moreInfoBlock
const moreInfoBlock__itemEl = document.querySelector(".moreInfoBlock__item ");
const moreInfoBlockContentEl = document.querySelector(".moreInfoBlockContent");
const tabContentEl = document.querySelector(".tabContent");
const moreInfoBlock__linkEl = document.querySelector(".moreInfoBlock__link");
moreInfoBlock__itemEl.addEventListener("click", () => {
  moreInfoBlockContentEl.textContent = tabContentEl.textContent;
  moreInfoBlockContentEl.classList.add("tabContent__item--active");
  moreInfoBlock__linkEl.classList.add("moreInfoBlock__link--active");
  console.log(tabContentEl.textContent);
});

// Quantity
const productRowRightButtomQuantityCount__inputEl = document.querySelector(
  ".productRowRightButtomQuantityCount__input"
);
const productTorwRightButtomQuantity__plusEl = document.querySelector(
  ".productTorwRightButtomQuantity__plus"
);
const productTorwRightButtomQuantity__minesEl = document.querySelector(
  ".productTorwRightButtomQuantity__mines"
);
productTorwRightButtomQuantity__minesEl.addEventListener("click", () => {
  let currentValue = productRowRightButtomQuantityCount__inputEl.textContent;
  let converToInt = +currentValue;
  let newValue = converToInt - 1;
  if (newValue <= 0) {
    newValue = 1;
  }
  console.log(newValue);

  productRowRightButtomQuantityCount__inputEl.textContent = newValue;
  console.log(productRowRightButtomQuantityCount__inputEl.textContent);
});
productTorwRightButtomQuantity__plusEl.addEventListener("click", () => {
  let currentValue = productRowRightButtomQuantityCount__inputEl.textContent;
  let converToInt = +currentValue;
  let newValue = converToInt + 1;
  if (newValue >= 9) {
    newValue = 9;
  }
  console.log(newValue);
  productRowRightButtomQuantityCount__inputEl.textContent = newValue;
  console.log(productRowRightButtomQuantityCount__inputEl.textContent);
});
