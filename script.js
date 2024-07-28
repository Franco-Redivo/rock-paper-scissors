//score variables
let humanScore = 0;
let machineScore = 0;

//getComputerChoice function creates a random number between 0 and 2.
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    
    if(randomNumber === 0){
        choice = "rock";
    }else if(randomNumber === 1){
        choice = "paper";
    }else{
        choice = "scissors";
    }
    
    return choice;
}

// asign the choice to the computerChoice variable
let computerChoice = getComputerChoice();


//a variable storing the users input choice
function getHumanChoice(){
    let choice = prompt("chose between rock, paper and scissors :");
    let possibleChoices = ["rock", "paper", "scissors"];

    choice = choice.toLowerCase();

    if(choice in possibleChoices){
        return choice;
    }else{
        console.log("Wrong input");
    }
}

//asign the choice to the userChoice variable
let userChoise = getHumanChoice();


//compare the 2 variables to see who one

//output telling the user who won