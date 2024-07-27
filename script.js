//a variable storing the users input choice
let userChoice;

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

let computerChoice = getComputerChoice();





//compare the 2 variables to see who one

//output telling the user who won