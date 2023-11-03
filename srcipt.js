"use scrict"

const page1 = document.querySelector(".index-page");
const page2 = document.querySelector(".index1home");
const indexEmail = document.getElementById("loginemail");
const indexPassword = document.getElementById("loginpassword");
const log = document.getElementById("log");
// welcome message on the main page
const nameSpan = document.getElementById("nameSpan");
// sign up page
//  const nameInput = document.getElementById("signname");
 // sign-up page
//  const signUpName = document.getElementById("signname")
//  const signUpEmail = document.getElementById("signemail")
//  const signUppassword = document.getElementById("signpassword")
//  const signUpbtn = document.getElementById("signbutton")
//  const confirmationMessage = document.getElementById("confirmationMessage");

// JavaScript (script.js):
// home page javascript
window.addEventListener("load", () => {
  // Automatically animate from page 1 to page 2
  setTimeout(() => {
    page1.style.transform = "translateX(-100%)";
    setTimeout(() => {
      page2.style.transform = "translateX(0%)";
    });
  });
});

// login page
document.addEventListener("DOMContentLoaded", function () {
log.addEventListener("click", function () {
  if (indexEmail.value === "felix@gmail.com" && indexPassword.value === "felix"){
    window.open("main.html")
  }else{ 
    alert("Invalid email or password. Please try again.")
  }
})
});

document.addEventListener("DOMContentLoaded", function () {
  const signUpName = document.getElementById("signname")
  const signUpEmail = document.getElementById("signemail")
  const signUppassword = document.getElementById("signpassword")
  const signUpbtn = document.getElementById("signbutton")
  const confirmationMessage = document.getElementById("confirmationMessage");

signUpbtn.addEventListener("click", function () {
  // e.preventDefault(); 
  const username = signUpName.value.trim();
  const useremail = signUpEmail.value.trim();
  const userpassword = signUppassword.value.trim();
if (username !== "" && useremail !== "" && userpassword !== ""){ 
  // confirmationMessage.display = "block";
  // setTimeout(function () {
    window.open("main.html"); 
  // }, 4000)
}else{
  alert("Please fill in all the required fields.");
}
});
if (username){
  nameSpan.textContent =`Hello, ${username}`;
 }
});



