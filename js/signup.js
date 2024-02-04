let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signupBtn = document.querySelector(".signup");
let nameEror = document.querySelector(".nameEror");
let emailEror = document.querySelector(".emailEror");
let passwordEror = document.querySelector(".passwordEror");
let signinBtn = document.querySelector(".signin");

function validateName() {
    if (userName.value === "") {
        nameEror.innerHTML = "name is rquired";
        return false;
    }
        nameEror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true
}

function validateEmail() {
    if (email.value === "") {
        emailEror.innerHTML = "email is rquired";
        return false;
    }
        emailEror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

function validatepassword() {
    if (password.value === "") {
        passwordEror.innerHTML = "password is rquired";
        return false;
    }
        passwordEror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

signupBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateName() && validateEmail() && validatepassword()) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(() => {
            window.location = "signin.html";
        }, 1000)
    }
});
signinBtn.addEventListener("click", () => {
    setTimeout(() => {
        window.location = "signin.html";
    }, 1000);
})