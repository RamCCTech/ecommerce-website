document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signInForm");

  const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
  const navbar = document.getElementById("nav");

  if (signedInUser) {
    window.location.href = "../index.html";
  } else {
    const signUpLink = document.createElement("li");
    signUpLink.innerHTML = `<a href="SignUp.html">SignUp</a>`;
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
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("signInEmail").value;
    const newPassword = document.getElementById("signInPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      // Update the user's password
      users[userIndex].password = newPassword;

      // Update local storage with the modified users data
      localStorage.setItem("users", JSON.stringify(users));

      // Optionally, you can redirect the user to the sign-in page after changing the password
      alert("Password changed successfully!");
      window.location.href = "SignIn.html";
    } else {
      alert("User not found. Please enter a valid email.");
    }
  });
});
