let userInfo = document.getElementById("userInfo");
let username = document.getElementById("userName");
let links = document.getElementById("links");

if (localStorage.getItem("userName")) {
  links.remove();
  userInfo.style.display = "flex";
  username.innerHTML = localStorage.getItem("userName");
}
