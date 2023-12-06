const rps = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random()*rps.length);
    let move = rps[choice];
    console.log(move);
}

