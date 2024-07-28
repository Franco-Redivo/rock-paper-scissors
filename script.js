
//getComputerChoice function creates a random number between 0 and 2 and asigns a number to a choice (rock, paper, scissors).
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


//getHumanChoice function asks the user for a input(choice)
function getHumanChoice(){
    let choice = prompt("chose between rock, paper and scissors :");

    choice = choice.toLowerCase();

    return choice;
}

//playRound function takes the human and the computer choice as parameters and compares the two choices and returns "win" , "lose" or "draw" depending on the outcome.
function playRound(humanChoice, computerChoice){
    
    
    if(humanChoice==="rock" && computerChoice ==="paper"){
        
        return "lose";

    }else if(humanChoice==="paper" && computerChoice==="scissors"){
        
        return "lose";

    }else if(humanChoice==="scissors" && computerChoice==="rock"){
        
        return "lose";

    }else if(humanChoice === computerChoice){
        
        return "draw";
    }else if(humanChoice==="rock" && computerChoice ==="scissors"){

        return "win";

    }else if(humanChoice==="paper" && computerChoice==="rock"){

        return "win";

    }else if(humanChoice==="scissors" && computerChoice==="paper"){

        return "win";

    }else{
        
        return "error";
    }


}

//function playGame declares score variables and uses a loop to run the playRound function 5 times, addin 1 to the scores variables depending on who won.
function playGame(){
    //score variables
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0 ; i < 5 ; i++){

        let round;
        // asign the choice to the computerChoice variable
        let humanChoice = getHumanChoice();
        // asign the choice to the computerChoice variable
        let computerChoice = getComputerChoice();

        
        round = playRound(humanChoice, computerChoice);

        if(round == "error"){
            console.log("wrong input");
        }
        

        if(round == "lose"){
            computerScore = computerScore + 1;
        }else if(round =="win"){
            humanScore = humanScore + 1;
        }

    }
    
    return console.log("Final score. Human : " + humanScore + " , computer : " + computerScore);
}

playGame();

