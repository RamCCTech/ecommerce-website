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

  const data = JSON.parse(localStorage.getItem("products"));

  document.getElementById("greet").innerHTML = `Hi, ${signedInUser["fname"]}`;

  let count = 0,
    totalPrice = 0;
  if (signedInUser["cartItems"] && signedInUser["cartItems"].length > 0) {
    signedInUser["cartItems"].forEach((element) => {
      const productIndex = data.findIndex((d) => d.id == element.id);
      if (productIndex !== -1) {
        count += element.quantity;
        totalPrice += data[productIndex].price * element.quantity;
      }
    });

    const productsContainer = document.getElementById("products");

    signedInUser["cartItems"].forEach((element) => {
      const userIndex = data.findIndex((d) => d.id == element.id);
      if (userIndex !== -1) {
        const productName =
          data[userIndex].name.length > 15
            ? data[userIndex].name.substring(0, 15) + "..."
            : data[userIndex].name;

        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
                    <img src=${data[userIndex].image} alt="Product Image">
                    <div class="product-details">
                        <h2>${productName}</h2>
                        <p>Price: ${data[userIndex].price * 80} Rs</p>
                        <p>Quantity: ${element.quantity}</p>
                        <p>Total Price: ${
                          data[userIndex].price * 80 * element.quantity
                        } Rs</p>
                        <button class="removeButton" style="font-size:18px">Remove Item <i class="fa fa-trash-o"></i></button>
                    </div>
                `;
        productsContainer.appendChild(productDiv);

        const removeButton = productDiv.querySelector(".removeButton");
        removeButton.addEventListener("click", () =>
          removeItemClicked(element.id)
        );
      }
    });
  } else {
    console.log("No cart items");
  }
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
      window.location.href = "../index.html";
    });

  document.getElementById(
    "cartItems"
  ).innerHTML = `Total cart items = ${count}`;
  document.getElementById("amount").innerHTML = `Total price = ${
    totalPrice * 80
  } Rs`;
  if (signedInUser.isAdmin) {
    document.getElementById("addProduct").addEventListener("click", () => {
      window.location.href = "AddProduct.html";
    });
  } else {
    document.getElementById("addProduct").style.display = "none";
  }
} else {
  window.location.href = "SignIn.html";
}

function removeItemClicked(itemId) {
  const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
  if (signedInUser) {
    const itemIndex = signedInUser.cartItems.findIndex(
      (item) => item.id === itemId
    );

    if (itemIndex !== -1) {
      signedInUser.cartItems.splice(itemIndex, 1);

      localStorage.setItem("currentUser", JSON.stringify(signedInUser));

      const usersData = JSON.parse(localStorage.getItem("users"));
      const userIndex = usersData.findIndex(
        (user) => user.username === signedInUser.username
      );

      if (userIndex !== -1) {
        usersData[userIndex].cartItems = signedInUser.cartItems;
        localStorage.setItem("users", JSON.stringify(usersData));
      }

      window.location.reload();
    }
  }
}
