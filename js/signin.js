
let signin = document.querySelector(".signinn");
let user = document.getElementById("userName");
let pass = document.getElementById("password");
let getUser = localStorage.getItem("userName");
let getpass = localStorage.getItem("password");

function validateName() {
    if (user.value === "") {
        nameEror.innerHTML = "name is rquired";
        return false;
    } else if (getUser !== user.value.trim()) {
        nameEror.innerHTML = 'wrong User Name';
        return false
    }
        nameEror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

function validatepassword() {
    if (pass.value === "") {
        passwordEror.innerHTML = "password is rquired";
        return false;
    } else if (getpass !== pass.value.trim()) {
        passwordEror.innerHTML = "wrong password";
        return false;
    }
        passwordEror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}



signin.addEventListener("click", (e) => {
    e.preventDefault()
    if (validateName() && validatepassword()) {
      if (
        getUser &&
        getUser === user.value.trim() &&
        getpass &&
        getpass === pass.value.trim()
      ) {
        setTimeout(() => {
          window.location = "index.html";
        }, 1000);
      } else  {
        alert("you haven't an acoount,please sign up");
      }
    } 
})

