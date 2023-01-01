const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeHamburger = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeHamburger.addEventListener("click", (e) => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
      lines = document.querySelectorAll(".skills__ratings-line span");


counters.forEach((counter, i) => {
    lines[i].style.width = counter.innerHTML;
});

 
