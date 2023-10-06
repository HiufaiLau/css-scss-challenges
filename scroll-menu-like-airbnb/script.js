// script.js
const button = document.getElementById("slide");

button.onclick = () => {
  document.getElementById("container").scrollLeft += 20;
};

// const menuContainer = document.querySelector(".menu-container");
// const menuItems = document.querySelectorAll(".menu-item");
// const scrollLeftButton = document.getElementById("scroll-left");
// const scrollRightButton = document.getElementById("scroll-right");

// scrollLeftButton.addEventListener("click", () => {
//   menuContainer.scrollLeft -= 100; // Adjust the scroll offset as needed
// });

// scrollRightButton.addEventListener("click", () => {
//   menuContainer.scrollLeft += 100; // Adjust the scroll offset as needed
// });

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.scrollIntoView({ behavior: "smooth", block: "center" });
//   });
// });
