
function playRound(playerSelection, computerSelection) {
    
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    
    // It is accepting string even though its not on the choices
    // TRY AGAIN TOMORROW
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
    } else if (playerSelection === computerSelection) {
        return "its a draw!";
    } else {
        return "Invalid input. Please enter ROCK , PAPER OR SCISSOR";
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
   //Outside the function to access it
    let playerScore = 0;
    let computerScore = 0;
    let validChoices = ["ROCK", "PAPER", "SCISSOR"];


function game() {

    

    for (let round = 1; round <= 5; round++) {
        let playerChoice = prompt(`Round ${round}: Choose between Rock, Paper, or Scissor`).toUpperCase();

        // Check if the user input is valid
        while (!validChoices.includes(playerChoice)) {
            alert("Invalid choice. Please choose Rock, Paper, or Scissor.");
            playerChoice = prompt("Choose between Rock, Paper, or Scissor").toUpperCase();
        }

        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    } 

    if (playerScore > computerScore) {
        console.log(`You win the game with a score of ${playerScore}-${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game with a score of ${playerScore}-${computerScore}.`);
    } else {
        console.log(`The game is a draw with a score of ${playerScore}-${computerScore}.`);
    }
 }

game();
console.log("Final Player Score:", playerScore + " Final Computer Score", computerScore );


    











