"use scrict"

// JavaScript (script.js):
// home page javascript
window.addEventListener("load", () => {
  // Automatically animate from page 1 to page 2
  setTimeout(() => {
    const page1 = document.querySelector(".index-page");
    page1.style.transform = "translateX(-100%)";
    setTimeout(() => {
        const page2 = document.querySelector(".index1home");
        page2.style.transform = "translateX(0%)";
      }, );
    }, 1000);
});
// JavaScript (script.js):
// javascript
// window.addEventListener("load", () => {
//   Automatically animate from page 1 to page 2
//   const page1 = document.querySelector(".page1");
//   setTimeout(() => {
//     page1.style.transform = "translateX(-100%)";
    
//     Show the second page after a delay (3 seconds)
//     setTimeout(() => {
//       const page2 = document.querySelector(".page2");
//       page2.style.transform = "translateX(0%)";
//     }, 3000);
//   }, 3000);
// });

