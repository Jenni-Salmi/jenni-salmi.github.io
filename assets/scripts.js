// Keeps the current year updated
document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// Hides/show moblie menu bar when needed
var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  console.log(mobileMenu.style.display);
  if (mobileMenu.style.display === "none") {
    console.log("hello");
    mobileMenu.style.display = "flex";
  } else {
    console.log("goodbye");
    mobileMenu.style.display = "none";
  }
});
