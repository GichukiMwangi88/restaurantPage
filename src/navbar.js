// Select the main div content containing all the HTML elements
function createNav() {
  const content = document.querySelector("#content");
  const navbar = document.createElement("div"); // div containing the navbar
  navbar.classList.add("nav-bar"); // created a class to style the navbar

  //Create a list of navbar items
  const home = document.createElement("li");
  home.setAttribute("id", "home");
  home.textContent = "Home";
  navbar.appendChild(home);

  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");
  menu.textContent = "Menu";
  navbar.appendChild(menu);

  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  contact.textContent = "Contact";
  navbar.appendChild(contact);

  content.appendChild(navbar);
}

export default createNav;
