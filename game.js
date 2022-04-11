function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choices.length);
    let result = choices[index].toLowerCase();
    console.log(result);
    return result;
}

function playerChoice() {
    let choice = prompt("What is your choice:");
    let choices = ["rock", "paper", "scissors"];
    while(!(choices.includes(choice.toLowerCase()))){
        choice = prompt("Wrong input. Please type rock, paper or scissors");
    }
    return choice.toLowerCase();
}


function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "scissors"){
            console.log("Congratulation! You win!");
        } else if(computerSelection === "paper"){
            console.log("Sorry, you lost.")
        } else{console.log("It's a tie")}
    } else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "paper"){
            console.log("Congratulation! You win!");
        } else if(computerSelection === "rock"){
            console.log("Sorry, you lost.")
        } else{console.log("It's a tie")}
    } else {
        if(computerSelection === "rock"){
            console.log("Congratulation! You win!");
        } else if(computerSelection === "scissors"){
            console.log("Sorry, you lost.")
        } else{console.log("It's a tie")}
    }

}

function game(){
    
    for (let i=0; i < 5; i++){
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();

