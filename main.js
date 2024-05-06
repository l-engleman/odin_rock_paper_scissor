console.log("hi");

//array for possible options in the game of rock, paper, scissors
const options = ["rock", "paper", "scissors"];


//function for the computer's choice by random:
    //the following line of code takes a random number between 0 and 1 (using math.random),
    //then takes that number and rounds to a whole number (to pick between the 3 options in the array),
    //then takes that number and multiplies the number of items in the array of "options" i.e. 3,
    //then returns the result

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


//function for the human choice
    //must include a way to check and accept an "option" with any type of case
function getHumanChoice(){
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//another function to check for the winner: 
    //check for a winner and check for a tie
function checkWinner(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return "Tie";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

//function that will play a single round
function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);
    if(result == "Tie") {
        return "It's a tie!"
    } else if(result == "Player") {
        return `Congratulations, you won! ${humanChoice} beats ${computerChoice}`
    } else {
        return `You lost. ${computerChoice} beats ${humanChoice}`
    }
}

//function that will play 5 rounds which will equal 1 "game"
    //function will keep score and declare a winner at the end
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("--------");
        if(checkWinner(humanChoice, computerChoice) == "Player") {
            humanScore++;
        } else if(checkWinner(humanChoice, computerChoice) == "Computer") {
            computerScore++;
        }
    }
    console.log("Game Over")
//code that will announce the winner
    if(humanScore > computerScore) {
        console.log("Human beat the computer!")
    } else if(computerScore > humanScore) {
        console.log("Computer beat the puny human!")
    } else {
        console.log("It's a tie!")
    }
}

playGame();
