document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!signUpForm.checkValidity()) {
      return;
    }

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!isValidEmail(email)) {
      return;
    }

    const user = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      password: password,
      cartItems: [],
      isAdmin: false,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    signUpForm.reset();

    window.location.href = "../pages/SignIn.html";
  });

  const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
  const navbar = document.getElementById("nav");

  if (signedInUser) {
    window.location.href = "../index.html";
  } else {
    const signUpLink = document.createElement("li");
    signUpLink.innerHTML = `<a href="#" class="active">SignUp</a>`;
    navbar.appendChild(signUpLink);

    const signInLink = document.createElement("li");
    signInLink.innerHTML = `<a href="SignIn.html">SignIn</a>`;
    navbar.appendChild(signInLink);

    const contactLink = document.createElement("li");
    contactLink.innerHTML = `<a href="Contact.html">Contact Us</a>`;
    navbar.appendChild(contactLink);

    const aboutLink = document.createElement("li");
    aboutLink.innerHTML = `<a href="About.html">About</a>`;
    navbar.appendChild(aboutLink);

    const homeLink = document.createElement("li");
    homeLink.innerHTML = `<a href="../index.html">Home</a>`;
    navbar.appendChild(homeLink);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
