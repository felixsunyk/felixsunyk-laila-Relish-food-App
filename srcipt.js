"use scrict"
const page1 = document.querySelector(".index-page");
const page2 = document.querySelector(".index1home");
const indexemail = document.getElementById("loginemail");
const indexPassword = document.getElementById("loginpassword");
const log = document.getElementById("log");
// const signUpName = document.getElementById("signname");
const namespan = document.getElementById("namespan")
const forgetInput = document.getElementById("forgetinput");
const forgetbtn = document.getElementById("forgetbtn");
const forgetbutton2 = document.getElementById("forgetbutton2");
const shopping = document.getElementsByClassName("shopping");
const subtraction = document.getElementById("subtract");
const dsp = document.getElementById("dsp");
// const display = document.getElementById("display")
const adition = document.getElementById("adition");
const span = document.getElementById("span");
const price = document.getElementById("price");
const rice = document.getElementById("rice");
const sh = document.getElementById("sh");
// loginemail


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
document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
log.addEventListener("click", function () {
  if (indexemail.value === "felix@gmail.com" && indexPassword.value === "felix"){
    window.open("main.html");
    greetings();
  }else{ 
    alert("Invalid email or password. Please try again.")
  }
})
});

// sign up page
document.addEventListener("DOMContentLoaded", function () {
  const signUpName = document.getElementById("signname")
  const signUpEmail = document.getElementById("signemail")
  const signUppassword = document.getElementById("signpassword")
  const signUpbtn = document.getElementById("signbutton")
  const confirmationMessage = document.getElementById("confirmationMessage");
  const verificationdiv = document.getElementById("verificationdiv");
  const nameSpan = document.getElementById("nameSpan");

signUpbtn.addEventListener("click", function () {
  // e.preventDefault(); 
  const username = signUpName.value.trim();
  const useremail = signUpEmail.value.trim();
  const userpassword = signUppassword.value.trim();

if (username !== "" && useremail !== "" && userpassword !== ""){ 
    window.open("main.html");
    
  }else{
    alert("Please fill in all the required fields.");
  }
});

});

// forget page
document.addEventListener("DOMContentLoaded", function () {
  // const input = ;
  forgetbtn.addEventListener("click", function(){
    if( forgetInput.value.trim()!== ""){
      window.open("reset.html")
    }else {
      alert("plase enter your email")
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const verificationcode = document.getElementById("verificationcode")
const verificationbtn = document.getElementById("verificationbtn")
  verificationbtn.addEventListener("click", function(){
    if(verificationcode.value.trim() !== ""){
      window.open("reset-form.html")
    }else{
      alert("please enter your verification code")
    }
  })
})



// const cartdisp = document.getElementById("sh").style.display = "block";
document.addEventListener("DOMContentLoaded", function () {
  log.addEventListener("click", function () {
    if (indexemail.value === "felix@gmail.com" && indexPassword.value === "felix"){
      window.open("main.html");
      greetings();
    }else{ 
      alert("Invalid email or password. Please try again.")
    }
  })
  });

let value = 0;
function increment() {
  value++;
  updateprice()
  updateDisplay();
  // priceformore();
}
function decrement() {
  value--;
  updateprice()
  updateDisplay();
}
document.getElementById("display")
function updateDisplay(){
 display.innerText=value;
}
// price.innerText = "3,000.00"
// let p =+(price.innerText);
let prise = price.innerHTML;
function order() {
  // cartdisp();
  display.innerText=1;
  updateName();
 span.innerHTML = prise;
  value++
}

const updateName =()=>{
  document.getElementById("list").innerText= rice.innerText;
}
// const cartdisp = () => {
//     window.open('cartpage.html', '_self'); 
// }


// has not work yet
const priceformore = () =>{
  span.innerText = aditionalprice;
}

function updateprice() {
  currentNumber = parseInt(price.innerText);
    let newPrice = currentNumber *2;
     span.innerText = newPrice;
 }
// function updateprice1() {
//   // currentNumber = parseInt(price.innerText);
//     let newPrice1 = currentNumber - 3000;
//      span.innerText = newPrice1;
//  }


dsp.addEventListener('click', function() {
  const hiddenText = sh;
  if (hiddenText.style.display !== 'none') {
    hiddenText.style.display = 'block';
    // this.innerText = sh.innerHTML;
  } else {
    hiddenText.style.display = 'none';
    // this.innerText = sh.innerHTML;
  }
});



// let frieds = friedrice.innerHTML;
// let fried =document.getElementById("rice").innerText;
// function updateName() {
//   document.getElementById("list").innerText = fried;
// }


