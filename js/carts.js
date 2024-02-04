let boughtPro = document.querySelector(".carts");
let parsedItem = JSON.parse(localStorage.getItem("stordProducts")) || pros;
let totalStored = document.getElementById("totalStored");


function drawItems(pros= []) {
  let parsedItem = JSON.parse(localStorage.getItem("stordProducts")) || pros;
  const productItem = parsedItem.map((item) => {
    return `<div class="pro-item">
                    <img src="${item.imgUrl}" alt="Product Image" id="productImage"/>
                    <div class="details">
                      <div class="info">
                        <p class="name">${item.name}</p>
                        <p class="price">price : $${item.price}</p>
                       <button id="addToCart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
                    </div>
                    <div class="count">
                      <i class="fa-solid fa-minus minus" onclick="changeNumberOfPro('minus',${item.id})"></i>
                      <span id="counter">${item.qty}</span>
                      <i class="fa-solid fa-plus" onclick="changeNumberOfPro('plus',${item.id})"></i>
                  </div>
                    </div>
            </div>
`;
  });
    
  boughtPro.innerHTML = productItem.join("");
}

drawItems(parsedItem);


function changeNumberOfPro(action, id) {
  parsedItem = parsedItem.map((item) => {
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
  localStorage.setItem("stordProducts", JSON.stringify(parsedItem));
  const productItem = parsedItem.map((item) => {
    return `<div class="pro-item">
                    <img src="${item.imgUrl}" alt="Product Image" id="productImage"/>
                    <div class="details">
                      <div class="info">
                        <p class="name">${item.name}</p>
                        <p class="price">price : $${item.price}</p>
                       <button id="addToCart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
                    </div>
                    <div class="count">
                      <i class="fa-solid fa-minus minus" onclick="changeNumberOfPro('minus',${item.id})"></i>
                      <span id="counter">${item.qty}</span>
                      <i class="fa-solid fa-plus" onclick="changeNumberOfPro('plus',${item.id})"></i>
                  </div>
                    </div>
            </div>
`;
  });
  boughtPro.innerHTML = productItem.join("");
  getTotal()
}




function removeFromCart(id) {
    if (localStorage.getItem("stordProducts")) {
      let items = JSON.parse(localStorage.getItem("stordProducts"));
        let filterdItems = items.filter((item) => item.id !== id);
        localStorage.setItem("stordProducts", JSON.stringify(filterdItems));
        const productItem = filterdItems.map((item) => {
          return `<div class="pro-item">
                    <img src="${item.imgUrl}" alt="Product Image" id="productImage"/>
                    <div class="details">
                      <div class="info">
                        <p class="name">${item.name}</p>
                        <p class="price">price : $${item.price}</p>
                       <button id="addToCart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
                    </div>
                    <div class="count">
                      <i class="fa-solid fa-minus minus" onclick="changeNumberOfPro('minus',${item.id})"></i>
                      <span id="counter">${item.qty}</span>
                      <i class="fa-solid fa-plus" onclick="changeNumberOfPro('plus',${item.id})"></i>
                  </div>
                    </div>
            </div>
`;
        });
      boughtPro.innerHTML = productItem.join("");;
      getTotal()
    }
}

function getTotal() {
  if (parsedItem) {
    let toatlPrice = 0;
    parsedItem.map((item) => {
      toatlPrice += item.price * item.qty;
      totalStored.innerHTML = `Total : ${toatlPrice.toFixed(2)}`;
    });
  }
  else {
    totalStored.innerHTML =  "Your Cart Is Empty";
  }
}

getTotal()


