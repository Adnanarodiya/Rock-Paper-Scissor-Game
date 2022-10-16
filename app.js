let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
var myPix = new Array("image/rock.png","image/paper.png","image/scissor.png");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  document.getElementById("computer_choice").src = myPix[randomNumber];
  return choices[randomNumber];
}

function convertToWord(latter) {
  if (latter === "r") return "Rock";
  if (latter === "p") return "Paper";
  if (latter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = ` ${convertToWord(userChoice)}   Beats   ${convertToWord(
    computerChoice
  )} . You win! 🔥`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 3000);
}

function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = ` ${convertToWord(userChoice)}   Beats   ${convertToWord(
    computerChoice
  )} . You lost.... 💩`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 3000);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = ` ${convertToWord(
    userChoice
  )}   Equals   ${convertToWord(computerChoice)} . it's a draw  😊`;
  document.getElementById(userChoice).classList.add("yellow-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("yellow-glow");
  }, 3000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
  });
}

main();
