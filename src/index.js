import createNav from "./navbar";
import createMenu from "./menu";
import contactForm from "./contact";
import createRestaurantPage from "./createRestPage";
import "./styles/main.scss";
import foodImage from "./assets/foodImage.jpeg";

createNav();
createRestaurantPage();

const pageContent = document.querySelector(".page-content");

// Click home to get back to homepage
const homeNav = document.querySelector("#home");
homeNav.addEventListener("click", () => {
  content.innerHTML = "";
  createNav();
  createRestaurantPage();
});

// Upon clicking menu, menu page displays
const menuNav = document.querySelector("#menu");
menuNav.addEventListener("click", function () {
  pageContent.innerHTML = "";
  createMenu();
});

//Click contact nav item, contact form displays
const contactNav = document.querySelector("#contact");
contactNav.addEventListener("click", function () {
  pageContent.innerHTML = "";
  contactForm();
});
