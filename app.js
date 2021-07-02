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
let winCount = 0;
let loseCount = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!


    if (playerSelection !== computerSelection) {
        if (playerSelection === "ROCK" && computerSelection === "SCISSOR" ||
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            winCount++;
            result = `You Win! ${playerSelection} beats ${computerSelection} `;
            return result;
        }
        else {
            loseCount++;
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return result;
        }

    } else {
        result = "Match Draws";
        return result;
    }



}

// const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
game();

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Your Choice Either Rock,Paper or Scissor");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
    }

    if (winCount > loseCount) {
        console.log("HURRAY YOU WIN!!!!");
    }
    else if (winCount < loseCount) {
        console.log("YOU LOSE BETTER LUCK NEXT TIME!");
    }
    else {
        console.log("MATCH TIE");
    }
}
