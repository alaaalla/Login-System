"use strict"
var userEmail = document.querySelector("#userEmail");
var userPassword =document.querySelector("#userPassword");
var incorrect = document.querySelector("#incorrect");
var openPage = document.querySelector("#openPage");
var usersList;
localStorage.getItem("usersList") == null ? usersList = [] : usersList = JSON.parse(localStorage.getItem("usersList"));
function inputs() {
    for (let i = 0; i < usersList.length; i++) {
    if(userEmail.value==''||userPassword.value==''){
        document.getElementById("incorrect").innerText = `All inputs is required`
    }
    else if (userEmail.value != usersList[i].email || userPassword.value!=usersList[i].password) {
        document.getElementById("incorrect").innerText = `incorrect email or password`;
    } else{
        openPage.setAttribute("href","./welcome/index.html");
        localStorage.setItem("myEmail",userEmail.value);
        break;
    }
}
}


