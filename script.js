function getComputerChoice (){
    //Array of choices which is R, P , S
    let computerChoice = ["Rock" , "Paper", "Scissors"];

    //Calculate a random index on the array
    let randomlyPick = Math.floor(Math.random() * computerChoice.length)
    let randomlyChoice = computerChoice[randomlyPick];

    return randomlyChoice;

}

function playRound(playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log("You win!");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        console.log("You lose!");
    } else {
        console.log("It's a draw!");
    }
}


let playerChoice = "Rock";
let computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);










