const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
const navbar = document.getElementById("nav");
if (signedInUser) {
  const profileIcon = document.createElement("a");
  profileIcon.href = "Profile.html";
  profileIcon.innerHTML = `<li><img src="../resources/profile-icon.png" alt="Profile"></li>`;
  navbar.appendChild(profileIcon);
} else {
  const signUpLink = document.createElement("li");
  signUpLink.innerHTML = `<a href="SignUp.html">SignUp</a>`;
  navbar.appendChild(signUpLink);

  const signInLink = document.createElement("li");
  signInLink.innerHTML = `<a href="SignIn.html">SignIn</a>`;
  navbar.appendChild(signInLink);
}
const contactLink = document.createElement("li");
contactLink.innerHTML = `<a href="#" class="active">Contact Us</a>`;
navbar.appendChild(contactLink);

const aboutLink = document.createElement("li");
aboutLink.innerHTML = `<a href="About.html">About</a>`;
navbar.appendChild(aboutLink);

const homeLink = document.createElement("li");
homeLink.innerHTML = `<a href="../index.html">Home</a>`;
navbar.appendChild(homeLink);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
  };

  const existingData =
    JSON.parse(localStorage.getItem("formSubmissions")) || [];
  existingData.push(formData);

  localStorage.setItem("formSubmissions", JSON.stringify(existingData));

  form.reset();

  alert("Form submitted successfully!");
});
