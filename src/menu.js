// Create a list of menu items

const createMenu = () => {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add("menu-items");

  //create a list of menu items

  const ugali = document.createElement("li");
  ugali.textContent = "Ugali";
  menu.appendChild(ugali);

  const chapati = document.createElement("li");
  chapati.textContent = "Chapati";
  menu.appendChild(chapati);

  const githeri = document.createElement("li");
  githeri.textContent = "Ugali";
  menu.appendChild(githeri);

  content.appendChild(menu);
};

export default createMenu;
