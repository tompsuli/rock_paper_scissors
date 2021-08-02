let playerScore = 0;
let computerScore = 0;

function game() {
    
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    
    function computerPlay() {
        const rps = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * rps.length);
        return(random, rps[random]);
    }

    function playerChoice() {
        return choice = window.prompt("Rock, paper or scissors?");
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == computerSelection){
            return "Its a tie!"
        }
        else if (playerSelection.toLowerCase() == "rock"){
            if (computerSelection == "paper"){
                computerScore++;
                return "Computer won!"
            }else{
                playerScore++;
                return "You won!"
            }
        }
        else if (playerSelection.toLowerCase() == "scissors"){
            if (computerSelection == "rock"){
                computerScore++;
                return "Computer won!"
            }else{
                playerScore++;
                return "You won!"
            }
        }
        else if (playerSelection.toLowerCase() == "paper"){
            if (computerSelection == "scissors"){
                computerScore++;
                return "Computer won!"
            }else{
                playerScore++;
                return "You won!"
            }
        }
    }

console.log(playRound(playerSelection, computerSelection));
console.log("Your score: " + playerScore);
console.log("Computer score: "+ computerScore);
}

game();
game();
game();
game();
game();