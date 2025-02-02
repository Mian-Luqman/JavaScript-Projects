const SimpleColor = document.getElementById("SimpleColor");
const HexColor = document.getElementById("HexColor");
const btn = document.getElementById("btn");
const colorcode = document.getElementById("Color-Code");
const SimpleColors = [
  "red",
  "green",
  "black",
  "White",
  "yellow",
  "pink",
  "aqua",
  "purple",
];
const HexColors = [
  "#f5733a",
  "#ecc33b",
  "#b6ec3b",
  "#68ec3b",
  "#76ec3b",
  "#9e5a9c",
  "#3bdeec",
  "#3b3b9c",
];
function SimpleColornav() {
  return btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * SimpleColors.length);
    const randomColor = SimpleColors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorcode.textContent = randomColor;
})};
function HexColornav() {
  return btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * HexColors.length);
    const randomColor = HexColors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorcode.textContent = randomColor;
  });
}
SimpleColor.addEventListener("click", function () {
  colorcode.textContent = SimpleColor.textContent;
  SimpleColornav();
});

HexColor.addEventListener("click", function () {
  colorcode.textContent = HexColor.textContent;
  HexColornav();
});

SimpleColornav()






// Define active mode variable
// let activeMode = "simple";

// // Automatically bind event listeners
// (function SimpleColornav() {
//   btn.addEventListener("click", function () {
//     if (activeMode === "simple") {
//       const randomIndex = Math.floor(Math.random() * SimpleColors.length);
//       const randomColor = SimpleColors[randomIndex];
//       document.body.style.backgroundColor = randomColor;
//       colorcode.textContent = randomColor;
//     }
//   });
// })();

// (function HexColornav() {
//   btn.addEventListener("click", function () {
//     if (activeMode === "hex") {
//       const randomIndex = Math.floor(Math.random() * HexColors.length);
//       const randomColor = HexColors[randomIndex];
//       document.body.style.backgroundColor = randomColor;
//       colorcode.textContent = randomColor;
//     }
//   });
// })();

// // Update active mode on button clicks
// SimpleColor.addEventListener("click", function () {
//   activeMode = "simple";
//   colorcode.textContent = "Simple Colors Mode Active";
// });

// HexColor.addEventListener("click", function () {
//   activeMode = "hex";
//   colorcode.textContent = "Hex Colors Mode Active";
// });




