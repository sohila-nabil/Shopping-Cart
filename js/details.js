let datailProducts = document.querySelector(".detail-products");
let data = JSON.parse(localStorage.getItem("allProducts"));
let proId = localStorage.getItem("productId");


let proDetail = data.find((item) => item.id == proId);

datailProducts.innerHTML = `
                <div class="detail-product">
                    <img src="${proDetail.imgUrl}" alt="blouse"/>
                    <div class="datils">
                        <h2>${proDetail.name}</h2>
                        <p>Price : $${proDetail.price}</p>
                    </div>
                </div>
`;

