// Module for creating Home Page

const createRestaurantPage = () => {
  //Create a variable to hold the div content
  // that you'all append your elements to
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //Create a div to house the page content
  const divHome = document.createElement("div");
  divHome.classList.add("home-page");
  pageContent.appendChild(divHome);

  //add image to the page and append
  const image = document.createElement("img");
  image.setAttribute("id", "mandazi");
  image.src = "mandazi.png";
  image.height = "300";
  image.width = "300";
  divHome.appendChild(image);

  //create header for the page and append
  const h1 = document.createElement("h1");
  h1.textContent = "Mandazi! 😋";
  divHome.appendChild(h1);

  content.appendChild(pageContent);
};

export default createRestaurantPage;
