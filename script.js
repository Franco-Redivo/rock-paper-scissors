
//getComputerChoice function creates a random number between 0 and 2 and asigns a number to a choice (rock, paper, scissors).
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    
    if(randomNumber === 0){
        choice = "rock";
        console.log("computer picked rock");
    }else if(randomNumber === 1){
        choice = "paper";
        console.log("computer picked paper");
    }else{
        choice = "scissors";
        console.log("computer picked scissors");
    }
    
    return choice;
}


//getHumanChoice function asks the user for a input(choice)
function getHumanChoice(){
    let choice = prompt("chose between rock, paper and scissors :");

    choice = choice.toLowerCase();

    console.log("you picked " + choice);
    return choice;
}

//playRound function takes the human and the computer choice as parameters and compares the two choices and returns "win" , "lose" or "draw" depending on the outcome.
function playRound(humanChoice, computerChoice){
    
    if((humanChoice==="rock" && computerChoice ==="paper")|| 
       (humanChoice==="paper" && computerChoice==="scissors")||
       (humanChoice==="scissors" && computerChoice==="rock")){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            return "lose";

    }else if(humanChoice === computerChoice){
        console.log("It's a draw!");
        return "draw";

    }else if((humanChoice==="rock" && computerChoice ==="scissors")||
             (humanChoice==="paper" && computerChoice==="rock")||
             (humanChoice==="scissors" && computerChoice==="paper")){
                console.log("You won! " + humanChoice + " beats " + computerChoice);
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

        console.log("Your score: " + humanScore + " Computer score: " + computerScore);
        console.log('\n');

    }
    
    return console.log("Final score. You : " + humanScore + " , computer : " + computerScore);
}

playGame();

