function validateForm() {
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

function validateFullName(name) {
  return name.length;
}
function validateContact(contact) {
  return /^\d+$/.test(contact);
}
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePassword(password) {
  return password.length >= 8;
}

//login
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateLoginForm()) {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const storedEmail = sessionStorage.getItem("email");
      const storedPassword = sessionStorage.getItem("password");
      console.log("email", email);
      console.log("storedEmail", storedEmail);
      if (email == storedEmail && password == storedPassword) {
        alert("Login successful!");
        console.log("document.location", document.location);
        window.location.href = "/";
      } else {
        alert("Wrong details");
      }
      form.reset();
    }
  });

  function validateLoginForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
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
});

//register
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateRegisterForm()) {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
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
});
