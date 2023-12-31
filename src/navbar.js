// Create tabs at top of page
import createMenu from "./menu";
import contactForm from "./contact";
import createRestaurantPage from "./homePage";

const createNav = () => {
  // Grab the div content
  const content = document.querySelector("#content");

  // Create 3 divs that will contain the navbar elements
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  // Set attributes to the divs

  div1.setAttribute("id", "home-btn");
  div2.setAttribute("id", "menu-btn");
  div3.setAttribute("id", "contact-btn");

  // Add class to the div elements

  div1.classList.add("tab");
  div2.classList.add("tab");
  div3.classList.add("tab");

  // Add text to the div elements

  div1.textContent = "Home";
  div2.textContent = "Menu";
  div3.textContent = "Contact";

  //Append the div elements to the div content main

  content.appendChild(div1);
  content.appendChild(div2);
  content.appendChild(div3);

  div1.addEventListener("click", (home) => {
    clearContent();
    createRestaurantPage();
  });

  div2.addEventListener("click", (menu) => {
    clearContent();
    createMenu();
  });

  div3.addEventListener("click", (contact) => {
    clearContent();
    contactForm();
  });
};
// Clear page content
const clearContent = () => {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
};

export default createNav;
