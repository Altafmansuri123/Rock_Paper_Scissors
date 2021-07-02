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
            result = `You Win! ${playerSelection} beats ${computerSelection} `;
            return result;
        }
        else {
            computerScore++;
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
game();

function game() {
    for (i = 1; i < 10; i++) {

        const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");

        if (playerSelection.toUpperCase() !== "ROCK" &&
            playerSelection.toUpperCase() !== "PAPER" &&
            playerSelection.toUpperCase() !== "SCISSOR") {
            alert("invalid input! Please Enter a valid input");
            i--;
            continue;
        }


        const computerSelection = computerPlay();
        console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));

        if (playerScore === 5 || computerScore === 5) {
            break;
        }
    }

    if (playerScore === 5) {
        console.log("You won the game! Reload the page to play again");
    }
    else {
        console.log("You Lose the game! Reload the page to play again");
    }

}
