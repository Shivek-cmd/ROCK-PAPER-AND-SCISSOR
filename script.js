// Function to get the user's score from local storage, or return 0 if not found
function getUserScoreFromLocalStorage() {
  return parseInt(localStorage.getItem("userScore")) || 0;
}

// Function to get the computer's score from local storage, or return 0 if not found
function getComputerScoreFromLocalStorage() {
  return parseInt(localStorage.getItem("computerScore")) || 0;
}

// Initialize userScore and computerScore with values from local storage
let userScore = getUserScoreFromLocalStorage();
let computerScore = getComputerScoreFromLocalStorage();

// Function to update the scores in local storage
function updateScoresInLocalStorage() {
  localStorage.setItem("userScore", userScore.toString());
  localStorage.setItem("computerScore", computerScore.toString());
}

// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to show the game rules
function showRules() {
  const rulesPopup = document.querySelector(".game-rules");
  rulesPopup.style.display = "block";
}

// Function to hide the game rules
function hideRules() {
  const rulesPopup = document.querySelector(".game-rules");
  rulesPopup.style.display = "none";
}

// Function to refresh the game
function refresh1() {
  document.querySelector(".play-game").style.display = "block";
  document.querySelector(".game-start").style.display = "none";
  document.querySelector(".next-button").style.display = "none"; // Show the NEXT button
  document.querySelector(".rule-button").style.right = "10px";
}
function refresh2() {
  document.querySelector(".play-game").style.display = "block";
  document.querySelector(".game-nav").style.display = "flex";
  document.querySelector(".hurray").style.display = "none";
  document.querySelector(".winning-button").style.display = "none";
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE UP";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!<br>Against PC";
  } else {
    return "You lost!<br>Against PC";
  }
}

// Function to handle the user's choice
function handleUserChoice(userChoice) {
  document.querySelector(".play-game").style.display = "none";
  document.querySelector(".game-start").style.display = "flex";

  const userSelectedIcon = document.querySelector(".user-selected");
  const computerSelectedIcon = document.querySelector(".computer-selected");

  // Reset border classes for user and computer selected icons
  userSelectedIcon.classList.remove(
    "rock-border",
    "scissors-border",
    "paper-border"
  );
  computerSelectedIcon.classList.remove(
    "rock-border",
    "scissors-border",
    "paper-border"
  );

  // Set inner HTML content for user and computer selected icons
  if (userChoice === "rock") {
    userSelectedIcon.innerHTML =
      '<img src="icons/icons8-fist-67 1.png" alt="" class="icon" />';
  } else if (userChoice === "scissors") {
    userSelectedIcon.innerHTML =
      '<img src="icons/17911 1.png" alt="" class="icon" />';
  } else if (userChoice === "paper") {
    userSelectedIcon.innerHTML =
      '<img src="icons/icons8-hand-64 1.png" alt="" class="icon" />';
  }

  const computerChoice = getComputerChoice();

  // Set inner HTML content for computer selected icon
  if (computerChoice === "rock") {
    computerSelectedIcon.innerHTML =
      '<img src="icons/icons8-fist-67 1.png" alt="" class="icon" />';
  } else if (computerChoice === "scissors") {
    computerSelectedIcon.innerHTML =
      '<img src="icons/17911 1.png" alt="" class="icon" />';
  } else if (computerChoice === "paper") {
    computerSelectedIcon.innerHTML =
      '<img src="icons/icons8-hand-64 1.png" alt="" class="icon" />';
  }

  // Add border classes based on user and computer choices
  if (userChoice === "rock") {
    userSelectedIcon.classList.add("rock-border");
  } else if (userChoice === "scissors") {
    userSelectedIcon.classList.add("scissors-border");
  } else if (userChoice === "paper") {
    userSelectedIcon.classList.add("paper-border");
  }

  if (computerChoice === "rock") {
    computerSelectedIcon.classList.add("rock-border");
  } else if (computerChoice === "scissors") {
    computerSelectedIcon.classList.add("scissors-border");
  } else if (computerChoice === "paper") {
    computerSelectedIcon.classList.add("paper-border");
  }

  const result = determineWinner(userChoice, computerChoice);
  const button = document.querySelector(".result-show button");
  document.querySelector(".result-show h1").innerHTML = result;
  // Remove box-shadow from both icons
  userSelectedIcon.classList.remove("box-shadow");
  computerSelectedIcon.classList.remove("box-shadow");

  if (result === "You win!<br>Against PC") {
    userScore++;
    button.textContent = "PLAY AGAIN";
    userSelectedIcon.classList.add("box-shadow", "icon");
    document.querySelector(".next-button").style.display = "block"; // Show the NEXT button
    document.querySelector(".rule-button").style.right = "125px"; // Update the right property of the RULE button
  } else if (result === "You lost!<br>Against PC") {
    computerScore++;
    computerSelectedIcon.classList.add("box-shadow");
    button.textContent = "PLAY AGAIN";
  } else {
    button.textContent = "REPLAY";
  }

  // Update the score only if it's not a tie
  if (result !== "TIE UP") {
    document.querySelector(".user-score .score-number").innerHTML = userScore;
    document.querySelector(".computer-score .score-number").innerHTML =
      computerScore;

    updateScoresInLocalStorage();
  }
}

// Call this function whenever you want to reset the scores
function resetScores() {
  userScore = 0;
  computerScore = 0;
  updateScoresInLocalStorage();
}

// Initialize scores on page load
window.onload = function () {
  document.querySelector(".user-score .score-number").innerHTML = userScore;
  document.querySelector(".computer-score .score-number").innerHTML =
    computerScore;
};

function hideAll() {
  const elements = document.querySelectorAll(
    ".game-nav, .play-game, .game-start, .game-rules, .next-button"
  );

  elements.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelector(".hurray").style.display = "flex";
  document.querySelector(".winning-button").style.display = "block";
  document.querySelector(".rule-button").style.top = "580px";
  document.querySelector(".rule-button").style.right = "20px";
   document.querySelector(".winning-button").style.display = "flex";
}
