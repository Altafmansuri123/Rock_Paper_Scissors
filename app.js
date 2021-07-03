function computerPlay() {
    let rand = Math.floor(Math.random() * 3 + 1);
    console.log(rand);
    if (rand == 1) {
        return "Rock";
    }
    else if (rand == 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }


}

let result = "";
let playerScore = 0;
let computerScore = 0;
let i = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!


    if (playerSelection !== computerSelection) {
        if (playerSelection === "ROCK" && computerSelection === "SCISSOR" ||
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            playerScore++;
            p1Score.innerHTML = `Player Score : ${playerScore}`
            result = `You Win! ${playerSelection} beats ${computerSelection} `;
            return result;
        }
        else {
            computerScore++;
            c1Score.innerHTML = `Computer Score : ${computerScore}`
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return result;
        }

    } else {
        result = `It's a tie. You both chose ${playerSelection}`;
        i--;
        return result;
    }



}

// const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
let p1Score = document.querySelector("#playerScore");
let c1Score = document.querySelector("#computerScore");
let singleRoundResult = document.querySelector("#result");
let overallResult = document.querySelector("#overallResult");

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", function () {

        game1(button.innerHTML);
    });
}

function game1(playerSelection) {
    const computerSelection = computerPlay();
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
        if (playerScore === 5) {

            overallResult.innerHTML = "You won the game! Reload the page to play again";
        }
        else {
            overallResult.innerHTML = "You Lose the game! Reload the page to play again";
        }
        return;
    }
    singleRoundResult.innerHTML = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());

}


function disableButtons() {
    for (let button of buttons) {
        button.disabled = true;
    }
}





















// function game() {
//     for (i = 1; i < 10; i++) {

//         const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");

//         if (playerSelection.toUpperCase() !== "ROCK" &&
//             playerSelection.toUpperCase() !== "PAPER" &&
//             playerSelection.toUpperCase() !== "SCISSOR") {
//             alert("invalid input! Please Enter a valid input");
//             i--;
//             continue;
//         }


//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));

//         if (playerScore === 5 || computerScore === 5) {
//             break;
//         }
//     }

//     if (playerScore === 5) {
//         console.log("You won the game! Reload the page to play again");
//     }
//     else {
//         console.log("You Lose the game! Reload the page to play again");
//     }

// }
