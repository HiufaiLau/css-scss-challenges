// script.js
const rightBtn = document.querySelector("#right-button");
const leftBtn = document.querySelector("#left-button");
const menuItems = document.querySelectorAll(".item");

rightBtn.addEventListener("click", function (event) {
  const conent = document.querySelector("#container");
  conent.scrollLeft += 80;
  event.preventDefault();
});

leftBtn.addEventListener("click", function (event) {
  const conent = document.querySelector("#container");
  conent.scrollLeft -= 80;
  event.preventDefault();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
