var data = [
  {
    id: 1,
    name: "iPhone 9",
    price: 549,
    image: "https://i.dummyjson.com/data/products/1/1.jpg",
  },
  {
    id: 2,
    name: "iPhone X",
    price: 899,
    image: "https://i.dummyjson.com/data/products/2/1.jpg",
  },
  {
    id: 3,
    name: "Samsung Universe 9",
    price: 1249,
    image: "https://i.dummyjson.com/data/products/3/1.jpg",
  },
  {
    id: 4,
    name: "OPPOF19",
    price: 280,
    image: "https://i.dummyjson.com/data/products/4/1.jpg",
  },
  {
    id: 5,
    name: "Huawei P30",
    price: 499,
    image: "https://i.dummyjson.com/data/products/5/1.jpg",
  },
  {
    id: 6,
    name: "MacBook Pro",
    price: 1749,
    image: "https://i.dummyjson.com/data/products/6/1.png",
  },
  {
    id: 7,
    name: "Samsung Galaxy Book",
    price: 1499,
    image: "https://i.dummyjson.com/data/products/7/1.jpg",
  },
  {
    id: 8,
    name: "Microsoft Surface Laptop 4",
    price: 1499,
    image: "https://i.dummyjson.com/data/products/8/1.jpg",
  },
  {
    id: 9,
    name: "Infinix INBOOK",
    price: 1099,
    image: "https://i.dummyjson.com/data/products/9/1.jpg",
  },
  {
    id: 10,
    name: "HP Pavilion 15-DK1056WM",
    price: 1099,
    image: "https://i.dummyjson.com/data/products/10/1.jpg",
  },
  {
    id: 11,
    name: "perfume Oil",
    price: 13,
    image: "https://i.dummyjson.com/data/products/11/1.jpg",
  },
  {
    id: 12,
    name: "Brown Perfume",
    price: 40,
    image: "https://i.dummyjson.com/data/products/12/1.jpg",
  },
  {
    id: 13,
    name: "Eau De Perfume Spray",
    price: 30,
    image: "https://i.dummyjson.com/data/products/13/1.jpg",
  },
  {
    id: 14,
    name: "Hyaluronic Acid Serum",
    price: 19,
    image: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
  },
  {
    id: 15,
    name: "Tree Oil 30ml",
    price: 12,
    image: "https://i.dummyjson.com/data/products/15/1.jpg",
  },
  {
    id: 16,
    name: "Oil Free Moisturizer 100ml",
    price: 40,
    image: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
  },
  {
    id: 17,
    name: "Skin Beauty Serum.",
    price: 46,
    image: "https://i.dummyjson.com/data/products/17/1.jpg",
  },
  {
    id: 18,
    name: "- Daal Masoor 500 grams",
    price: 20,
    image: "https://i.dummyjson.com/data/products/21/3.jpg",
  },
  {
    id: 19,
    name: "Elbow Macaroni - 400 gm",
    price: 14,
    image: "https://i.dummyjson.com/data/products/19/1.jpg",
  },
  {
    id: 20,
    name: "cereals muesli fruit nuts",
    price: 46,
    image: "https://i.dummyjson.com/data/products/20/1.jpg",
  },
  {
    id: 21,
    name: "Gulab Powder 50 Gram",
    price: 70,
    image: "https://i.dummyjson.com/data/products/21/1.png",
  },
  {
    id: 22,
    name: "Plant Hanger For Home",
    price: 41,
    image: "https://i.dummyjson.com/data/products/22/1.jpg",
  },
  {
    id: 23,
    name: "Flying Wooden Bird",
    price: 51,
    image: "https://i.dummyjson.com/data/products/23/1.jpg",
  },
  {
    id: 24,
    name: "Handcraft Chinese style",
    price: 60,
    image: "https://i.dummyjson.com/data/products/24/1.jpg",
  },
  {
    id: 25,
    name: "Key Holder",
    price: 30,
    image: "https://i.dummyjson.com/data/products/30/2.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let dataString = JSON.stringify(data);
  if (!localStorage.getItem("products"))
    localStorage.setItem("products", dataString);

  let products = document.getElementById("products");
  const signedInUser = JSON.parse(localStorage.getItem("currentUser"));
  function addProducts() {
    let newData = localStorage.getItem("products");
    let data1 = JSON.parse(newData);

    for (let i = 0; i < data1.length; i++) {
      var div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
            <p class="productId" hidden>${data1[i].id}</p>
            <img src=${data1[i].image} alt="">
            <div  class="prodDisc">
                <p class="prodName">${data1[i].name}</p>
                <p class="prodPrice">Price: <span>${
                  data1[i].price * 80
                } Rs</span></p>
                <div class="buttons">
                <button class="cartButton">Add to Cart</button>
                ${
                  signedInUser && signedInUser.isAdmin
                    ? `<button class="deleteButton"><i class="fa fa-trash-o" style="font-size:18px"></i></button>`
                    : ``
                }
                </div>
            </div>
        `;
      products.appendChild(div);
    }
  }
  function initializeListeners() {
    const productsContainer = document.getElementById("products");
    const products1 = productsContainer.querySelectorAll(".product");

    products1.forEach((product) => {
      const productId = product.querySelector(".productId").innerHTML;
      const addToCartButton = product.querySelector(".cartButton");
      const deleteProductButton = product.querySelector(".deleteButton");

      addToCartButton.addEventListener("click", function () {
        addToCartClicked(productId);
      });
      deleteProductButton &&
        deleteProductButton.addEventListener("click", function () {
          console.log("Product ID: ++" + productId);
          deleteProductClicked(productId);
          refreshProducts();
        });
    });
  }
  addProducts();

  const navbar = document.getElementById("nav");

  if (signedInUser) {
    const profileIcon = document.createElement("a");
    profileIcon.href = "pages/Profile.html";
    profileIcon.innerHTML = `<li><img src="resources/profile-icon.png" alt="Profile"></li>`;
    navbar.appendChild(profileIcon);
  } else {
    const signUpLink = document.createElement("li");
    signUpLink.innerHTML = `<a href="pages/SignUp.html">SignUp</a>`;
    navbar.appendChild(signUpLink);

    const signInLink = document.createElement("li");
    signInLink.innerHTML = `<a href="pages/SignIn.html">SignIn</a>`;
    navbar.appendChild(signInLink);
  }
  const contactLink = document.createElement("li");
  contactLink.innerHTML = `<a href="pages/Contact.html">Contact Us</a>`;
  navbar.appendChild(contactLink);

  const aboutLink = document.createElement("li");
  aboutLink.innerHTML = `<a href="pages/About.html">About</a>`;
  navbar.appendChild(aboutLink);

  const homeLink = document.createElement("li");
  homeLink.innerHTML = `<a href="#" class="active">Home</a>`;
  navbar.appendChild(homeLink);
  
  function refreshProducts() {
    products.innerHTML = "";
    addProducts();
    initializeListeners();
  }
  function addToCartClicked(itemId) {
    const signedInUser = JSON.parse(localStorage.getItem("currentUser"));

    if (signedInUser) {
      let userCartItems = signedInUser.cartItems || [];

      const existingCartItem = userCartItems.find((item) => item.id === itemId);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        userCartItems.push({ id: itemId, quantity: 1 });
      }

      signedInUser.cartItems = userCartItems;
      localStorage.setItem("currentUser", JSON.stringify(signedInUser));

      const updatedUserDetails = JSON.parse(localStorage.getItem("users"));
      const userIndex = updatedUserDetails.findIndex(
        (user) => user.username === signedInUser.username
      );
      if (userIndex !== -1) {
        updatedUserDetails[userIndex] = signedInUser;
        localStorage.setItem("users", JSON.stringify(updatedUserDetails));
      }

      alert("Item added to the cart!");
    } else {
      alert("Please sign in to add items to the cart.");
    }
  }
  function deleteProductClicked(itemId) {
    let newData = localStorage.getItem("products");
    let productsData = JSON.parse(newData);

    const productIndex = productsData.findIndex(
      (product) => product.id == itemId
    );

    if (productIndex !== -1) {
      productsData.splice(productIndex, 1);

      localStorage.setItem("products", JSON.stringify(productsData));
      refreshProducts();
      alert("Product deleted successfully!");
    } else {
      alert("Product not found!");
    }
  }

  initializeListeners();
});
