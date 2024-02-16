const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
const navbar = document.getElementById("nav");

if (signedInUser) {
  const profileIcon = document.createElement("a");
  profileIcon.href = "#";
  profileIcon.innerHTML = `<li><img src="../resources/profile-icon.png" alt="Profile"></li>`;
  navbar.appendChild(profileIcon);

  const contactLink = document.createElement("li");
  contactLink.innerHTML = `<a href="Contact.html">Contact Us</a>`;
  navbar.appendChild(contactLink);

  const aboutLink = document.createElement("li");
  aboutLink.innerHTML = `<a href="About.html">About</a>`;
  navbar.appendChild(aboutLink);

  const homeLink = document.createElement("li");
  homeLink.innerHTML = `<a href="../index.html">Home</a>`;
  navbar.appendChild(homeLink);

  const addProductForm = document.getElementById("addProductForm");

  addProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const productImage = document.getElementById("productImage").value;
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
    };

    let existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    existingProducts.push(newProduct);

    localStorage.setItem("products", JSON.stringify(existingProducts));

    alert("Product added successfully!");
    window.location.href = "../index.html";
  });
} else {
  window.location.href = "../index.html";
}
