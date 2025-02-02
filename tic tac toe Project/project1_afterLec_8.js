// Sab boxes (Tic Tac Toe ke grid ke cells) select karo
let boxes = document.querySelectorAll(".box");

// Reset button ko select karo game dobara shuru karne ke liye
let resetBtn = document.querySelector("#reset_button");

// New game button ko select karo nayi game shuru karne ke liye
let newGameBtn = document.querySelector("#new-btn");

// Winner ya draw ka message dikhane ke liye container select karo
let msgContainer = document.querySelector(".msg-container");

// Message paragraph ko select karo jo winner ya draw ka text dikhata hai
let msg = document.querySelector("#msg");

// Turn track karne ke liye boolean variable (true "O" ka turn, false "X" ka turn)
let turnO = true;

// Jeetne ke patterns define karo (rows, columns aur diagonals)
const winPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal (top-left to bottom-right)
  [2, 4, 6], // Diagonal (top-right to bottom-left)
];

// Jab koi box click kare
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // Agar turn "O" ka hai
      box.innerText = "O";
    } else {
      // Agar turn "X" ka hai
      box.innerText = "X";
    }
    box.disabled = true; // Click ke baad box disable kar do
    turnO = !turnO; // Turn switch karo
    checkWinner(); // Winner check karne ke liye function call karo
  });
});

// Winner check karne ka function
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // Har pattern ke boxes ke indexes nikalo
    let [a, b, c] = pattern;
    let pos1Val = boxes[a].innerText; // Pehla box ka value
    let pos2Val = boxes[b].innerText; // Doosra box ka value
    let pos3Val = boxes[c].innerText; // Teesra box ka value

    // Agar teeno boxes ka value same hai aur khali nahi hai
    if (pos1Val && pos1Val === pos2Val && pos1Val === pos3Val) {
      ShowWinner(pos1Val); // Winner dikhane ka function call karo
      disableAllBoxes(); // Sab boxes disable kar do
      return;
    }
  }

  // Agar koi winner nahi hai, to check karo sab boxes bhar chuke hain
  let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
  if (allFilled) {
    msg.innerText = "It's a Draw!"; // Agar sab boxes bhar chuke hain, to draw ka message dikhayein
    msgContainer.classList.remove("hide"); // Message container ko show karo
  }
};

// Winner ka message dikhane ka function
const ShowWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`; // Winner ka naam dikhayein
  msgContainer.classList.remove("hide"); // Message container ko show karo
};

// Sab boxes ko disable karne ka function
const disableAllBoxes = () => {
  boxes.forEach((box) => (box.disabled = true)); // Har box disable karo
};

// Reset button ke liye event listener
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = ""; // Har box ko khali kar do
    box.disabled = false; // Boxes phir se clickable banao
  });
  turnO = true; // Turn "O" se shuru karo
  msgContainer.classList.add("hide"); // Message container ko hide kar do
});

// New game button ke liye event listener
newGameBtn.addEventListener("click", () => {
  resetBtn.click(); // Reset button wale function ko call karo
});
