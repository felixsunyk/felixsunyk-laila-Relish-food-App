"use scrict"

const page1 = document.querySelector(".index-page");
const page2 = document.querySelector(".index1home");
const indexEmail = document.getElementById("loginemail");
const indexPassword = document.getElementById("loginpassword");
const login = document.getElementById("login");
// welcome message on the main page
const nameSpan = document.getElementById("nameSpan");
// sign up page
 const nameInput = document.getElementById("signName");
// const signUp = document.getElementById("sign")

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

login.addEventListener("click", function () {
  if (
    indexEmail.value === "felix@gmail.com" &&
    indexPassword.value === "11111"
  ) {
    window.location.href = "Reset.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

const getInputName = () => {
  const name = nameInput.value;
    // Updateting the content of the span with the name
    nameSpan.textContent = name;
}


