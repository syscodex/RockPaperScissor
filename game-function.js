const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');



const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    
    //resultText.textContent = checkWinner();
    result = checkWinner();
    resultText.textContent = result;


    updateScores(result);
    updateScoreboard();
}));

function computerTurn () {
    const randNum = Math.floor(Math.random() * 3 ) + 1;

    switch(randNum) {
        case 1:
        computer = "ROCK";
        break;
        case 2:
        computer = "PAPER";
        break;
        case 3:
        computer = "SCISSOR";
        break;
    }
}

// FUNCTION CHECK WINNER

function checkWinner () {
    if(player == computer) {
        return "DRAW"; 
    } 
    else if (computer == 'ROCK') {
        return (player == 'PAPER') ? "YOU WIN": "YOU LOSE";
    } 
    else if (computer == 'PAPER') {
        return (player == 'SCISSOR') ? "YOU WIN": "YOU LOSE";
    }
    else if (computer == 'SCISSOR') {
        return (player == 'ROCK') ? "YOU WIN": "YOU LOSE";
    }
}

function updateScores(result) {
    if (result === "YOU WIN") {
        playerScore++;
    } else if (result === "YOU LOSE") {
        computerScore++;
    }

    roundsPlayed++;

    if (roundsPlayed === 5) {
        // End of the game, determine the overall winner
        determineOverallWinner();
    }
}

function determineOverallWinner() {
    if (playerScore > computerScore) {
        resultText.textContent = "You are the overall winner!";
    } else if (playerScore < computerScore) {
        resultText.textContent = "Computer is the overall winner!";
    } else {
        resultText.textContent = "It's a draw in the best of five rounds.";
    }

    // Reset scores and roundsPlayed for a new game
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

function updateScoreboard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
    
    
