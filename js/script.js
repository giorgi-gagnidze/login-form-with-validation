"use strict";
let btn = document.getElementById("btn");
let user;
let password;
const validRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let messageUser = document.getElementById("message-top");
let messagePassword = document.getElementById("message-bottom");

// Username validation
function userValidation() {
  user = document.getElementById("message-user").value;
  if (user.match(validRegex)) {
    messageUser.innerHTML = "OK";
    messageUser.classList.add("message");
  } else if (user === "") {
    messageUser.innerHTML = "Field must not be empty";
    messageUser.classList.add("message");
  } else {
    messageUser.innerHTML = "Enter valid email address";
    messageUser.classList.add("message");
  }
}

// Password validation
function passwordValidation() {
  password = document.getElementById("message-password").value;
  if (password.match(passwordRegex)) {
    messagePassword.innerHTML = "OK";
    messagePassword.classList.add("message");
  } else if (password.length < 8) {
    messagePassword.innerHTML = "Password must be minimum 8 simbol";
    messagePassword.classList.add("message");
  } else {
    messagePassword.innerHTML = "Password needs to meet minimum criteria";
    messagePassword.classList.add("message");
  }
}

// Click events on button
btn.addEventListener("click", userValidation);
btn.addEventListener("click", passwordValidation);
