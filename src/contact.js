// Create a contact form

const contactForm = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create div for the contact info
  const divContact = document.createElement("div");
  divContact.classList.add("contact-info"); // for styling

  // Add icon
  const contactIcon = document.createElement("img");
  contactIcon.src = "phone.png";

  // Create form header
  const contactHeader = document.createElement("h3");
  contactHeader.textContent = "Don't Contact Us";

  // Create paragraph content
  const contactPar = document.createElement("p");
  contactPar.textContent = "We'll contact you 📲";

  // Append contactHeader to divContact
  divContact.appendChild(contactIcon);
  divContact.appendChild(contactHeader);
  divContact.appendChild(contactPar);

  // Add the form to the page content div
  pageContent.appendChild(divContact);

  //Append the page content div to the DOM
  content.appendChild(pageContent);
};

export default contactForm;
