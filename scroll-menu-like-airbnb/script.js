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

// click item

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".item");

//   items.forEach((item) => {
//     item.addEventListener("click", function (event) {
//       event.preventDefault();
//       items.forEach((i) => i.classList.remove("active"));
//       item.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      items.forEach((i) => {
        i.style.borderBottom = "none"; // Remove border from all items
      });
      item.style.borderBottom = "2px solid #0074d9"; // Add border to the clicked item
    });
  });
});
