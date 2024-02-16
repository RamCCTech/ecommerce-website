document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signInForm");

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!signInForm.checkValidity()) {
      return;
    }

    const signInEmail = document.getElementById("signInEmail").value;
    const signInPassword = document.getElementById("signInPassword").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (u) => u.email === signInEmail && u.password === signInPassword
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("Login successful!");
      window.location.href = "../index.html";
    } else {
      alert("Email or passord is invalid!");
      console.log("Invalid email or password");
    }
    signInForm.reset();
  });

  const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
  const navbar = document.getElementById("nav");

  if (signedInUser) {
    window.location.href = "../index.html";
  } else {
    const signUpLink = document.createElement("li");
    signUpLink.innerHTML = `<a href="SignUp.html">SignUp</a>`;
    navbar.appendChild(signUpLink);

    const signInLink = document.createElement("li");
    signInLink.innerHTML = `<a href="#" class="active">SignIn</a>`;
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
});
