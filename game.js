
// FOR TEXT INPUT

/*function playerChoice() {
    let choice = prompt("What is your choice:");
    let choices = ["rock", "paper", "scissors"];
    while(!(choices.includes(choice.toLowerCase()))){
        choice = prompt("Wrong input. Please type rock, paper or scissors");
    }
    return choice.toLowerCase();
}
*/
const buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(button => button.addEventListener('click', game));

let playerScore = document.querySelector('#player-score');
let playerCurrentScore = parseInt(playerScore.innerText);

let computerScore = document.querySelector('#computer-score');
let computerCurrentScore = parseInt(computerScore.innerText);

let message = document.querySelector("#info-output");

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choices.length);
    let result = choices[index].toLowerCase();
    console.log(result);
    return result;
}


function win(score, phrase){
    if(score  === 5){
        buttons.forEach(button => button.removeEventListener('click',game))
        message.innerText = phrase;
    }
}

function playerGetScore(){
    message.innerText = "Congratulation! You win!";
    playerCurrentScore++;
    playerScore.innerText = playerCurrentScore;
    win(playerCurrentScore, "You win! The final result is:");
}

function computerGetScore(){
    message.innerText = "Sorry, you lost.";
    computerCurrentScore++;
    computerScore.innerText = computerCurrentScore;
    win(computerCurrentScore, "You lost. The final result is:");
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "scissors"){
            playerGetScore();
        } else if(computerSelection === "paper"){
            computerGetScore();
        } else{message.innerText = "It's a tie";}
    } else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "paper"){
            playerGetScore();
        } else if(computerSelection === "rock"){
            computerGetScore();
        } else{message.innerText ="It's a tie";}
    } else {
        if(computerSelection === "rock"){
            playerGetScore();
        } else if(computerSelection === "scissors"){
            computerGetScore();
        } else{message.innerText ="It's a tie";}
    }

}




function game(e){

    const playerSelection = e.target.innerText.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}



