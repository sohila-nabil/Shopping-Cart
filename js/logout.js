let logout = document.getElementById("logout");
let header = document.querySelector("header");
logout.onclick = function() {
    localStorage.clear()
    setTimeout(() => {
        window.location = "signup.html";
    }, 1000)
    header.style.display = "none"
}