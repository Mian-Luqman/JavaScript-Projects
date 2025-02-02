// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice buttons and message display elements
const choices = document.querySelectorAll(".choice"); // Rock, Paper, Scissors buttons
const msg = document.querySelector("#msg"); // Element to display messages
const userScorePara = document.querySelector("#user-score"); // Element to display user's score
const compScorePara = document.querySelector("#comp-score"); // Element to display computer's score

// Add click event listeners to all choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the ID of the clicked button (user's choice)
    const userChoice = choice.getAttribute("id");
    // Call the main game function with the user's choice
    playGame(userChoice);
  });
});

// Function to generate a random choice for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // Available choices
  const randIdx = Math.floor(Math.random() * 3); // Generate a random index (0, 1, or 2)
  return options[randIdx]; // Return the choice corresponding to the random index
};

// Function to update the game message dynamically
const updateMessage = (text, color) => {
  msg.innerText = text; // Update the message text
  msg.style.backgroundColor = color; // Change the message background color
};

// Function to handle a draw scenario
const drawGame = () => {
  updateMessage("Game was Draw. Play again.", "gray"); // Display a draw message with gray background
};

// Main game function that processes the user's choice and determines the winner
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice();

  // Check if the game is a draw
  if (userChoice === compChoice) {
    drawGame(); // Call the draw function if choices match
  } else {
    let userWin = true; // Assume the user wins by default
    // Determine if the user loses based on their choice and the computer's choice
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true; // Rock loses to Paper, wins against Scissors
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true; // Paper loses to Scissors, wins against Rock
    } else {
      userWin = compChoice === "rock" ? false : true; // Scissors lose to Rock, win against Paper
    }
    // Call the function to display the result and update scores
    showWinner(userWin, userChoice, compChoice);
  }
};

// Function to update the game result and scores
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // Increment user's score if they win
    userScorePara.innerText = userScore; // Update the user's score display
    updateMessage(`You win! Your ${userChoice} beats ${compChoice}`, "green"); // Display win message with green background
  } else {
    compScore++; // Increment computer's score if user loses
    compScorePara.innerText = compScore; // Update the computer's score display
    updateMessage(`You lost. ${compChoice} beats your ${userChoice}`, "red"); // Display lose message with red background
  }
};
