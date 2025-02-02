const counter = document.getElementById("counter");
const btns = document.getElementById("btns");
const Increase = document.getElementById("Increase");
const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");

let num = 0;
// myself code
// Increase.addEventListener("click", () => {
//   num += 1;
//   counter.textContent = num;
//     // if(num>0){
//     //     counter.style.color = "green"; }
// });
// Decrease.addEventListener("click", () => {
//   num -= 1;
//   counter.textContent = num;
// //   if(num<0){
// //     counter.style.color = "red";}
// });
// Reset.addEventListener("click", () => {
//   num = 0;
//   counter.textContent = num;
// //   if(num==0){
// //     counter.style.color = "black";}
// });

// Chatgpt code
// function updatecounter(){
//     counter.textContent = num;
//      if(num>0){
//          counter.style.color = "green"; }
//      else if(num<0){
//          counter.style.color = "red"; }
//      else{
//          counter.style.color = "black"; }
// }
// Increase.addEventListener("click", () => {
//   num += 1;
//   updatecounter()
// });
// Decrease.addEventListener("click", () => {
//   num -= 1;
//   updatecounter()
// });
// Reset.addEventListener("click", () => {
//   num = 0;
//   updatecounter()
// });

// Youtube code
const buttonElements = btns.querySelectorAll("button"); // Select all children buttons within btns
buttonElements.forEach(function (btn) {            //each loop for each button store in btn one by one
  btn.addEventListener("click", function (e) {      //clickevent for each button one by one
    if (e.target.classList.contains("Increase")) {
      num += 1;
      counter.textContent = num;
    } else if (e.target.classList.contains("Decrease")) {
      num -= 1;
      counter.textContent = num;
    } else {
      num = 0;
      counter.textContent = num;
    }
    if (num > 0) {
      counter.style.color = "green";
    } else if (num < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });
});
