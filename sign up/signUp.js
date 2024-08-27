"use strict"
var userName = document.querySelector("#name");
var userPhoto = document.querySelector("#image");
var signUpEmail = document.querySelector("#email");
var signUpPassword = document.querySelector("#password");
var signUpBtn = document.querySelector("#signUp")
signUpEmail.addEventListener("input", validateEmail);
signUpPassword.addEventListener("input", validatePassword);
var usersList;
localStorage.getItem("usersList") == null ? usersList = [] : usersList = JSON.parse(localStorage.getItem("usersList"));
signUpBtn.addEventListener("click",signUp);
function signUp() {
  var  user = {
        name: userName.value,
        photo: userPhoto.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    };
    if (validateEmail() && validatePassword()) {
        if(usersList.length==0){
            document.getElementById("exist").classList.replace("text-danger","text-success")
            document.getElementById("exist").innerText = `Success`;
            usersList.push(user);
            localStorage.setItem("usersList", JSON.stringify(usersList));
        }
        else{
        for (let i = 0; i < usersList.length; i++) {
            if(signUpEmail.value==usersList[i].email){
                document.getElementById("exist").classList.replace("text-success","text-danger");
                document.getElementById("exist").innerText = `email already exists`;
            }
            else{
                document.getElementById("exist").classList.replace("text-danger","text-success");
                document.getElementById("exist").innerText = `Success`;
                usersList.push(user);
                localStorage.setItem("usersList", JSON.stringify(usersList));
                break;
            }
        }
    }
        validateEmail();
        validatePassword();
    }
    
}
function validateEmail() {
    var regex = /^\w+\@\w+\.\w+/ig;
    if (regex.test(signUpEmail.value)) {
        signUpEmail.classList.replace("is-invalid", "is-valid");
        return true;
    }
    else {
        signUpEmail.classList.add("is-invalid")
        return false;
    }
}
function validatePassword() {
    var regex = /^\w{8}$/ig;
    if (regex.test(signUpPassword.value)) {
        signUpPassword.classList.replace("is-invalid", "is-valid");
        return true;
    }
    else {
        signUpPassword.classList.add("is-invalid")
        return false;
    }
}
