// Create a list of menu items

const createMenu = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //create a list of menu items

  const ugali = document.createElement("li");
  ugali.textContent = "Ugali";
  pageContent.appendChild(ugali);

  const chapati = document.createElement("li");
  chapati.textContent = "Chapati";
  pageContent.appendChild(chapati);

  const githeri = document.createElement("li");
  githeri.textContent = "Ugali";
  pageContent.appendChild(githeri);

  content.appendChild(pageContent);
};

export default createMenu;
