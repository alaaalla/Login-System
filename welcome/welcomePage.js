"use strict"
var userName = document.querySelector("#userName");
var userPhoto = document.querySelector("#userPhoto");
var usersList;
localStorage.getItem("usersList") == null ? usersList = [] : usersList = JSON.parse(localStorage.getItem("usersList"));
var logOut = document.querySelector(".logOut");
var menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
    if (logOut.classList.contains("show")) {
        logOut.classList.remove("show");
    }
    else {
        logOut.classList.add("show");
    }
});
var myEmail = localStorage.getItem("myEmail");
for (let i = 0; i < usersList.length; i++) {
    if (myEmail==usersList[i].email){
        document.getElementById("userName").innerText = `Welcome ${usersList[i].name}`;
        userPhoto.getAttribute("src").replace("../imgs/user.png",`${usersList[i].photo}`);
        // userPhoto.src = usersList[i].photo;
        break;
    }
}
