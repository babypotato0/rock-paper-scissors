const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random()*rps.length);
    let move = rps[choice];
    return move;
}


let playerPoint = 0;
let computerPoint = 0;

const computerSelection = getComputerChoice();

const chooseRock = document.querySelector("#rock");
const choosePaper = document.querySelector("#paper");
const chooseScissors = document.querySelector("#scissors");
const restartGame = document.querySelector("#restart");

chooseRock.addEventListener('click', playRock);
choosePaper.addEventListener('click', playPaper);
chooseScissors.addEventListener('click', playScissors);
restartGame.addEventListener('click', restartAll);

const showResult = document.querySelector(".result");
const playerScore = document.createElement("p");
const compScore = document.createElement("p");
const overall = document.createElement("p")

showResult.appendChild(playerScore);
showResult.appendChild(compScore);
showResult.appendChild(overall);


    function playRock() {

        const computerSelection = getComputerChoice();

        if(computerSelection === "paper") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + (computerPoint += 1);
            overall.textContent = "You lost! Paper beats rock";
        } else if(computerSelection === "scissors") {
            playerScore.textContent = 'Player: ' + (playerPoint += 1);
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "You win!";
        } else if(computerSelection === "rock") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "Its a tie!";
        }

        if (playerPoint == 5 || computerPoint ==5) {
            overall.textContent = "End of game!";
            removeEventListeners();
            }
    }

    function playPaper() {

        const computerSelection = getComputerChoice();

        if(computerSelection === "scissors") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + (computerPoint += 1);
            overall.textContent = "You lost! Scissors cut paper!";
        } else if(computerSelection === "rock") {
            playerScore.textContent = 'Player: ' + (playerPoint += 1);
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "You win! Rock lost to paper";
        } else if(computerSelection === "paper") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "Its a tie!";
        }

        if (playerPoint == 5 || computerPoint ==5) {
            overall.textContent = "End of game!";
            removeEventListeners();
            }

        }

    function playScissors() {

        const computerSelection = getComputerChoice();

        if(computerSelection === "rock") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + (computerPoint += 1);
            overall.textContent = "You lost! Rock beats scissors!";
        } else if(computerSelection === "paper") {
            playerScore.textContent = 'Player: ' + (playerPoint += 1);
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "You win! Paper is cut by scissors!";
        } else if(computerSelection === "scissors") {
            playerScore.textContent = 'Player: ' + playerPoint;
            compScore.textContent = 'Computer: ' + computerPoint;
            overall.textContent = "Its a tie!";
        }

        if (playerPoint == 5 || computerPoint ==5) {
            overall.textContent = "End of game!";
            removeEventListeners();
            }

    }

    function restartAll() {

        playerPoint = 0;
        computerPoint = 0;
        playerScore.textContent = 'Player: 0';
        compScore.textContent = 'Computer: 0';
        overall.textContent = '';

        chooseRock.addEventListener('click', playRock);
        choosePaper.addEventListener('click', playPaper);
        chooseScissors.addEventListener('click', playScissors);

    }
    

    function removeEventListeners() {
        chooseRock.removeEventListener('click', playRock);
        choosePaper.removeEventListener('click', playPaper);
        chooseScissors.removeEvenetListener('click', playScissors);
    }




   //const result = playRound(playerSelection, computerSelection);
    //console.log(result);

// for (let i = 1; i <= 5; i++) {    
// }


 /*
        function playRound(playerSelection, computerSelection) {

         if(playerSelection === "rock" && computerSelection === "paper") {
            console.log((computerPoint += 1));
            console.log(playerPoint);
            return "You lost! Paper beats rock";
        } 
         else if(playerSelection === "rock" && computerSelection === "scissors") {
            console.log((playerPoint += 1));
            console.log(computerPoint);
            return "You win!";
        } 
         else if(playerSelection === "paper" && computerSelection === "scissors"){
            console.log((computerPoint += 1));
            console.log(playerPoint);
            return "You lost! Scissors cut paper!";
        } 
         else if(playerSelection === "paper" && computerSelection === "rock"){
            console.log((playerPoint += 1));
            console.log(computerPoint);
            return "You win! Rock lost to paper";
        } 
         else if(playerSelection === "scissors" && computerSelection === "rock"){
            console.log((computerPoint += 1));
            console.log(playerPoint);
            return "You lost! Rock beats scissors!";
        } 
         else if(playerSelection === "scissors" && computerSelection === "paper"){
            console.log((playerPoint += 1));
            console.log(computerPoint);
            return "You win! Paper is cut by scissors!";
        } 
         else if(playerSelection === computerSelection){
            console.log(playerPoint);
            console.log(computerPoint);
            return "Its a tie!";
        } 
        else {
            return "Error";
        }
    }
    */