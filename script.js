function getHumanChoice(getHumanChoice) {
    let userInput = prompt("Rock, Paper, or Siccors? Please enter your choice here").toLocaleLowerCase();
    if (userInput === 'rock') {
        return 'rock'
    } else if (userInput === 'paper') {
        return 'paper'
    } else if (userInput === 'siccors') {
        return 'siccors'
    } else {
        return "You failed to input a correct ansswer. Refresh the page to start again."
    }
     
}

function getComputerChoice(getComputerChoice) {
    let randomNumber = Math.floor(Math.random() * 3)
        switch(randomNumber) {
            case 0:
                return 'rock'
            case 1:
                return 'paper'
            case 2:
                return 'siccors'
        }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'siccors') ||
            (humanChoice === 'siccors' && computerChoice === 'rock')) {
                computerScore++;
                console.log('Win!');
                return;
        } else if ((computerChoice === 'rock' && humanChoice === 'paper') ||
            (computerChoice === 'paper' && humanChoice === 'siccors') ||
            (computerChoice === 'siccors' && humanChoice === 'rock')) {
                humanScore++;
                console.log('Lost');
                return;
        } else {
            console.log("Tie!");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    if (humanScore > computerScore){
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("You lost!");
    } else if (humanScore === computerScore) {
        console.log("Tie!");
    }
}

playGame();
