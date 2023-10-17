// Create a list of menu items

const createMenu = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //create a div for styling purposes

  const divMenu = document.createElement("div");
  divMenu.classList.add("menu");
  pageContent.appendChild(divMenu);

  const funnyGif = document.createElement("img");
  funnyGif.src = "https://media.giphy.com/media/SasDDqOSRclNu/giphy.gif";
  funnyGif.width = 300;
  funnyGif.height = 300;
  divMenu.appendChild(funnyGif);

  const menuHeader = document.createElement("h2");
  menuHeader.setAttribute("id", "menu-item");
  menuHeader.textContent = "Just Mandazi";
  divMenu.appendChild(menuHeader);

  content.appendChild(pageContent);
};

export default createMenu;
