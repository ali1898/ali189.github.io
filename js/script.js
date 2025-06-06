// -----------------------------Slide Show------------------------------
let slideEl = document.getElementsByClassName("slide");
let nextEl = document.querySelector(".next");
let prevEl = document.querySelector(".prev");
//Number of slide
let n = 0;

function displayNone() {
  for (let i = 0; i < slideEl.length; i++) {
    slideEl[i].style.display = "none";
  }
}

function noActive() {
  for (let i = 0; i < slideEl.length; i++) {
    slideEl[i].classList.remove("active");
  }
}

const nextNav = () => {
  n++;
  if (n > slideEl.length - 1) {
    n = 0;
  }
  displayNone();
  noActive();
  slideEl[n].style.display = "block";
  slideEl[n].classList.add("active");
};
const prevNav = () => {
  n--;
  if (n < 0) {
    n = slideEl.length - 1;
  }
  displayNone();
  noActive();
  slideEl[n].style.display = "block";
  slideEl[n].classList.add("active");
};
nextEl.addEventListener("click", nextNav);
prevEl.addEventListener("click", prevNav);

setInterval(() => {
  nextNav();
}, 4000);
