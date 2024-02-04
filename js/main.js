
let products = document.querySelector(".products");
let bodyi = document.querySelector(".body");
let total = document.getElementById("total");
let cart = document.querySelector(".cart");
let active = document.querySelector(".active");
let left = document.querySelector(".left");
let view = document.getElementById("view");
let quantity = document.getElementById("quantity");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counter = document.getElementById("counter");
let ptotal = document.querySelector(".ptotal");

let allProducts = [
  {
    id: 1,
    name: "setItemcarve",
    price: 60,
    imgUrl: "images/blouse1.png",
    qty: 1,
    category: "female",
  },
  {
    id: 2,
    name: "sweaters",
    price: 100,
    imgUrl: "images/blouse2.png",
    qty: 1,
    category: "female",
  },
  {
    id: 3,
    name: "coat",
    price: 85,
    imgUrl: "images/blouse3.png",
    qty: 1,
    category: "female",
  },
  {
    id: 4,
    name: "men shirt",
    price: 23,
    imgUrl: "images/t-shirt1.png",
    qty: 1,
    category: "male",
  },
  {
    id: 5,
    name: "men shirt",
    price: 86,
    imgUrl: "images/t-shirt6.png",
    qty: 1,
    category: "male",
  },
  {
    id: 6,
    name: "t-shirt",
    price: 99,
    imgUrl: "images/t-shirt5.png",
    qty: 1,
    category: "male",
  },
];


// Draw Items in main Page
function drawItems(allProducts = []) {
  products.innerHTML = ""
  allProducts.map((item) => {
  products.innerHTML += `<div class="pro-item">
                    <a href="details.html" onclick="SaveId(${item.id})">
                      <img src="${
                        item.imgUrl
                      }" alt="Product Image" id="productImage"/>
                    </a>
                    <div class="info">
                        <a class="name" href="details.html" onclick="SaveId(${
                          item.id
                        }">${item.name}</a>
                        <p class="price">price : $${item.price}</p>
                    </div>
                    <button id="addToCart" onclick="addCart(${
                      item.id
                    })">Add to Cart</button>
                    <i class="fa-solid fa-heart heart" style="color: ${
                      item.liked === true ? "red" : ""
                    }" onclick="addToFav(${item.id})"></i>
                </div>
`;
  });
  
}

drawItems(JSON.parse(localStorage.getItem("allProducts")) || allProducts);


// Save Data of Cart at local Storage
let stordProducts = JSON.parse(localStorage.getItem("stordProducts")) || [];
updateCart()


function addCart(id) {
  if (localStorage.getItem("userName")) {
    if (stordProducts.some((item) => item.id === id)) {
      changeNumberOfPro("plus", id);
    } else {
      let cart = allProducts.find((item) => item.id == id);
      stordProducts.push({ ...cart });
      quantity.style.display = "flex";
      quantity.innerHTML = stordProducts.length;
    }
    updateCart();
  } else {
    setTimeout(() => {
      window.location = 'signin.html'
    }, 1000)
  }
}



function updateCart() {
  drawCartItem();
  getTotal();

  localStorage.setItem("stordProducts", JSON.stringify(stordProducts));
}

function getTotal() {
  let toatlPrice = 0, totalItems = 0;
  stordProducts.map((item) => {
    toatlPrice += item.price * item.qty;
    totalItems += item.qty;

  })
  ptotal.style.display = "none"
  total.innerHTML = toatlPrice.toFixed(2);
}


function drawCartItem() {
  bodyi.innerHTML = "";
  stordProducts.map((item) =>{
  bodyi.innerHTML += `<div class="body-item">
                  <img src="${item.imgUrl}"  id="productImage" onclick="removeFromCart(${item.id})"/>
                  <div class="info" onclick="removeFromCart(${item.id})">
                      <p class="name">${item.name}</p>
                      <p class="price">price : $${item.price}</p>
                  </div>
                  <div class="count">
                      <i class="fa-solid fa-minus minus" onclick="changeNumberOfPro('minus',${item.id})"></i>
                      <span id="counter">${item.qty}</span>
                      <i class="fa-solid fa-plus plus" onclick="changeNumberOfPro('plus',${item.id})"></i>
                  </div>
              </div>`;
  })
}


function removeFromCart(id) {
  if (localStorage.getItem("userName")) {
    stordProducts = stordProducts.filter((item) => item.id !== id);
    updateCart();
  } else {
    setTimeout(() => {
      window.location = "signin.html";
    }, 1000);
  }
}

function changeNumberOfPro(action, id) {
  stordProducts = stordProducts.map((item) => {
    let qty = item.qty;
    if (item.id === id) {
      if (action === "minus" && qty > 1) {
        qty--;
      } else if (action === "plus") {
        qty++;
      }
    }
    return {
      ...item,
      qty,
    };
  });

  updateCart();
}

// Local Storage for Favourite Products
let favPro = JSON.parse(localStorage.getItem("favProducts"))
  ? JSON.parse(localStorage.getItem("favProducts"))
  : [];

//  Add Products at Favourite
function addToFav(id) {
  let favItem = allProducts.find((item) => item.id == id);
  favItem.liked = true;
  if (localStorage.getItem("userName")) {
    if (favPro.some((item) => item.id == favItem.id)) {
      favPro = favPro.filter((item) => item.id !== favItem.id);
      localStorage.setItem("favProducts", JSON.stringify(favPro));
      allProducts.map((item) => {
        if (item.id === favItem.id) {
          delete item.liked;
        }
      });
      localStorage.setItem("allProducts", JSON.stringify(allProducts));
    } else {
      favPro = [...favPro, favItem];
      localStorage.setItem("favProducts", JSON.stringify(favPro));
      allProducts.map((item) => {
        if (item.id === favItem.id) {
          item.liked = true;
        }
      });
    }
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    drawItems(allProducts);
  } else {
    setTimeout(() => {
      window.location = "signin.html";
    }, 1000);
  }
}






cart.addEventListener("click", openCart)
left.addEventListener("click", closeCart)

function openCart() {
        active.style.display = "grid";
}
function closeCart() {
    active.style.display = "none";
}

view.onclick = function () {
    setTimeout(() => {
        window.location = "carts.html"
    },100)
}


// Save id of the Products to use it to show the details of the products in the Details page
function SaveId(id) {
  localStorage.setItem("productId", id)
  window.location = "details.html"
}



// {Search for Products with Name and Category(Male or Female)}
let select = document.getElementById("select");
let search = document.getElementById("search");
let all = JSON.parse(localStorage.getItem("allProducts"));

search.addEventListener("keyup", ()=> {
  if (search.value) {
    if (select.value == 'name') {
       let filterd = all.filter((item) =>
         item.name.toLowerCase().includes(search.value.toLowerCase())
       );
       drawItems(filterd);
    } else {
      let filterd = all.filter((item) =>
        item.category.toLowerCase().includes(search.value.toLowerCase())
      );
      drawItems(filterd);
    }
  }
})

 