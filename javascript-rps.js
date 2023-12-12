const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random()*rps.length);
    let move = rps[choice];
    return move;
}


function game() {

    let playerPoint = 0;
    let computerPoint = 0;

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerChoice = prompt("Your choice!");
        const playerSelection = playerChoice.toLowerCase();

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

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

}

console.log('Player points:', playerPoint);
console.log('Computer points:', computerPoint);

if (playerPoint > computerPoint) {
    console.log('Player wins!');
    } else if (playerPoint < computerPoint) {
    console.log('You lose, computer wins!');
    } else {
    console.log('Its a tie!');
    }
}

game();
