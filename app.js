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


function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = "";

    if (playerSelection !== computerSelection) {
        if (playerSelection === "ROCK" && computerSelection === "SCISSOR" ||
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            result = `You Win! ${playerSelection} beats ${computerSelection} `;
            return result;
        }
        else {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return result;
        }

    } else {
        result = "Match Draws";
        return result;
    }



}

const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");
const computerSelection = computerPlay();
console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
