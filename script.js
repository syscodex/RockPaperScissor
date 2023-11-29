
function playRound(playerSelection, computerSelection) {
    
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    
    // It is accepting string even though its not on the choices
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
        return "You win!";
    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
        (playerSelection === "SCISSOR" && computerSelection === "ROCK")
    ) {
        return "You lose!";
    } else {
        return "its a draw!";
    }
}

function getComputerChoice (){
    
    //Array of choices which is R, P , S
    let computerChoice = ["ROCK" , "PAPER", "SCISSOR"];

    //Calculate a random index on the array
    let randomlyPick = Math.floor(Math.random() * computerChoice.length)
    let randomlyChoice = computerChoice[randomlyPick];

    return randomlyChoice;

}


let computerChoice = getComputerChoice();
let playerChoice = prompt("choose between rock paper and scissor").toUpperCase();


let result = playRound(playerChoice, computerChoice);
console.log(result);










