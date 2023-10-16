// Create a contact form

const contactForm = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create form header
  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact Us";

  // Create the form
  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");

  //Create the name input
  const name = document.createElement("input");
  name.setAttribute("name", "name");
  name.setAttribute("placeholder", "Your Name");

  //Create the email input
  const email = document.createElement("input");
  email.setAttribute("name", "email");
  email.setAttribute("placeholder", "Your email");

  //Create the message input
  const message = document.createElement("textarea");
  message.setAttribute("name", "message");
  message.setAttribute("placeholder", "Your message");

  //Create the submit button
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");

  //Add the inputs to the form
  form.appendChild(contactHeader);
  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(message);
  form.appendChild(submit);

  // Add the form to the page content div
  pageContent.appendChild(form);

  //Append the page content div to the DOM
  content.appendChild(pageContent);
};

export default contactForm;
