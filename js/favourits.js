let p = document.querySelector(".gallery");
let container = document.querySelector(".fav-container");
let favData = JSON.parse(localStorage.getItem("favProducts"));




function drawItems(allProducts = []) {
  container.innerHTML = ""
  allProducts.map((item) => {
  container.innerHTML += `
                        <div class="pro-item">
                            <a href="details.html">
                            <img src="${
                              item.imgUrl
                            }" alt="Product Image" id="productImage" />
                            </a>
                            <div class="info">
                            <a class="name" href="details.html">
                                ${item.name}
                            </a>
                            <p class="price">price : ${item.price}</p>
                            </div>
                            <button id="addToCart" onclick= "removeFromFav(${
                              item.id
                            })">Remove From Favourit</button>
                            <i class="fa-solid fa-heart heart" onclick="removeFromFav(${item.id})" style="color: ${
                              item.liked === true ? "red" : ""
                            }" onclick="addToFav(${item.id})"></i>
                        </div>
`;
  })
}
drawItems(favData);


function removeFromFav(id) {
  let favData = JSON.parse(localStorage.getItem("favProducts"));
  let favs = favData.filter((item) => item.id !== id)
  localStorage.setItem("favProducts", JSON.stringify(favs));
  allprods = JSON.parse(localStorage.getItem("allProducts"));
  allprods.map((item) => {
      if (item.id == id) {
        delete item.liked;
      }
    });
  localStorage.setItem("allProducts", JSON.stringify(allprods));
  
  drawItems(favs)
  
}


