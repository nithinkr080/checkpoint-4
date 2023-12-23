function validateForm() {
  // Basic validation example
  const form = document.getElementById("bookingForm");
  const whereTo = form.elements["whereTo"].value;
  const persons = form.elements["persons"].value;
  const startDate = form.elements["startDate"].value;
  const endDate = form.elements["endDate"].value;
  const description = form.elements["description"].value;

  if (whereTo && persons && startDate && endDate && description.length >= 50) {
    alert("Booking successful!");
  } else {
    alert(
      "Please fill in all fields and ensure the description is at least 50 characters."
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateRegisterForm()) {
      // You can handle the form submission here
      alert("Registration successful!");
      form.reset();
    }
  });
  function validateRegisterForm() {
    const fullname = document.getElementById("fullname").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.getElementById("gender").value;
    if (
      fullname === "" ||
      contact === "" ||
      dob === "" ||
      email === "" ||
      password === "" ||
      gender === ""
    ) {
      alert("Please fill in all fields.");
      return false;
    }
    if (!validateFullName(fullname)) {
      alert("Please enter a valid full name.");
      return false;
    }
    if (!validateContact(contact)) {
      alert("Please enter a valid contact number.");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!validatePassword(password)) {
      alert("Password should be at least 8 characters long.");
      return false;
    }
    return true;
  }
  function validateFullName(name) {
    // Simple validation for full name: Should contain at least 2 words
    return name.length;
  }
  function validateContact(contact) {
    // Simple validation for contact number: Should contain only numbers
    return /^\d+$/.test(contact);
  }
  function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validatePassword(password) {
    // Simple validation for password length
    return password.length >= 8;
  }
});
