const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("please enter an email format");
  } else {
    email.setCustomValidity("");
  }
});