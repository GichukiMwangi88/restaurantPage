// Create Restaurant Home Page

const createRestaurantPage = () => {
  //Create a variable to hold the div content
  // that you'all append your elements to
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //create header for the page
  const h1 = document.createElement("h1");
  h1.textContent = "East African Cuisine";
  pageContent.appendChild(h1);

  //add image to the page
  const image = document.createElement("img");
  image.src = "foodImage.jpeg";
  image.height = 300;
  image.width = 300;
  pageContent.appendChild(image);

  //add paragraph to the page
  const p1 = document.createElement("p");
  p1.textContent = "Enjoy our East African dishes!";
  pageContent.appendChild(p1);

  content.appendChild(pageContent);
};

export default createRestaurantPage;
