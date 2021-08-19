const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const tieScore = document.querySelector("#tie-score");

let playerWins = 0;
let computerWins = 0;
let tieWins = 0;

btnRock.addEventListener("click", function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener("click", function(){
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener("click", function(){
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    return(random, rps[random]);
}

function playerWin() {
    ++playerWins;
    playerScore.textContent = "Your score: " + playerWins; 
}

function computerWin() {
    ++computerWins;
    computerScore.textContent = "Computer score: " + computerWins;
}

function tieWin() {
    ++tieWins;
    tieScore.textContent = "Ties: " + tieWins;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection){
        tieWin();
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            computerWin();
        }else{
            playerWin();
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            computerWin();
        }else{
            playerWin();
        }
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "scissors"){
            computerWin();
        }else{
            playerWin();
        }
    }
    
    if (computerWins === 5){
        alert("You lost!");
        reset();
    } else if (playerWins === 5) {
        alert("You won!");
        reset();
    }
}

function reset() {
    playerWins = 0;
    computerWins = 0;
    tieWins = 0;
    playerScore.textContent = "Your score: 0";
    computerScore.textContent = "Computer score: 0";
    tieScore.textContent = "Ties: 0";
}