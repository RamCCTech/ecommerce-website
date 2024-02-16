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
contactLink.innerHTML = `<a href="Contact.html">Contact Us</a>`;
navbar.appendChild(contactLink);

const aboutLink = document.createElement("li");
aboutLink.innerHTML = `<a href="#" class="active">About</a>`;
navbar.appendChild(aboutLink);

const homeLink = document.createElement("li");
homeLink.innerHTML = `<a href="../index.html">Home</a>`;
navbar.appendChild(homeLink);