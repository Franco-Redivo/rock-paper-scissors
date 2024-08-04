
//getComputerChoice function creates a random number between 0 and 2 and asigns a number to a choice (rock, paper, scissors).
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    const choices = ["rock","paper","scissors"];
    const choice = choices[randomNumber];
    return choice;
}


//playRound function takes the human and the computer choice as parameters and compares the two choices and returns "win" , "lose" or "draw" depending on the outcome.
function playRound(humanChoice, computerChoice){
    
    if((humanChoice==="rock" && computerChoice ==="paper")|| 
       (humanChoice==="paper" && computerChoice==="scissors")||
       (humanChoice==="scissors" && computerChoice==="rock")){
            return "lose";

    }else if(humanChoice === computerChoice){
        return "draw";

    }else{
        return "win";
    }

}

//function playGame declares score variables and uses a loop to run the playRound function 5 times, addin 1 to the scores variables depending on who won.
function playGame(){
    //score variables
    let humanScore = 0;
    let computerScore = 0;
    


    const div = document.querySelector("#results");
    
    const updateScore = (humanScore,computerScore) => {
        div.textContent = `User score: ${humanScore}. Computer score: ${computerScore}.`;
    }


    const handleClick = (humanChoice) => {
        if(humanScore < 5 && computerScore < 5){
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice,computerChoice);

            if(result === "win"){
                humanScore ++;
            }else if(result ==="lose"){
                computerScore ++;
            }

            updateScore(humanScore, computerScore);

            if(humanScore === 5 || computerScore === 5){
                div.textContent = `Final score. You: ${humanScore}, Computer: ${computerScore}.`;
            }
        }
        
    };
    document.querySelector("#rock-btn").addEventListener("click",() => handleClick("rock"));
    document.querySelector("#paper-btn").addEventListener("click",() => handleClick("paper"));
    document.querySelector("#scissors-btn").addEventListener("click", () => handleClick("scissors"));
    
}

playGame();

