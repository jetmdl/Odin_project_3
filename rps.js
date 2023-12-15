function getComputerChoice(){

    max = 3;
    min = 1;

    min = Math.ceil(min);
    max = Math.floor(max);

    num = Math.floor(Math.random() * (max - min + 1)) + min;

    if(num === 1){
        choice = 'Rock';
    }
    else if (num === 2){
        choice = 'Paper';
    }
    else if (num === 3){
        choice = 'Scissors'
    }
    else{
        choice = 'something has gone wrong';
    }

    return choice;
}

function addGameListner() {
    document.querySelector('#start-game').addEventListener('click', gameRound);
}

addGameListner();

function gameRound(){

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const start = document.querySelector('#start-game');

    rock.style = 'display: block';
    paper.style = 'display: block';
    scissors.style = 'display: block';
    start.style = 'display: none';

    rock.addEventListener('click', setPlayerChoiceRock);
    paper.addEventListener('click', setPlayerChoicePaper);
    scissors.addEventListener('click', setPlayerChoiceScissors);
}

function setPlayerChoiceRock() {
    setPlayerChoice('Rock');
}

function setPlayerChoicePaper() {
    setPlayerChoice('Paper');
}

function setPlayerChoiceScissors() {
    setPlayerChoice('Scissors');
}

function setPlayerChoice(aValue) {
    
    let playerChoice = aValue;

    let computerChoice = getComputerChoice();
    let cont = document.querySelector('#content');

    console.log(computerChoice);

    if (computerChoice === 'Rock'){
        // console.log('pc-rock');
        if (playerChoice === 'Rock' || playerChoice === 'rock' || playerChoice ==='ROCK'){
            result = "Draw";
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Win";
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Lose";
        }
    }
    else if (computerChoice === 'Paper'){
        // console.log('pc-paper');
        if (playerChoice === 'Rock' || playerChoice === 'rock' || playerChoice === 'ROCK'){
            result = "Lose";
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Draw";
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Win";
        }
    }
    else if (computerChoice === 'Scissors'){
        // console.log('pc-scissors');
        if (playerChoice === 'Rock' || playerChoice === 'rock' || playerChoice === 'ROCK'){
            result = "Win";
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Lose";
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Draw";
        }
    }
    //return result;
    cont.innerHTML = result;
}

// function game(){
//     for (i=1;i<6;i++){
//         console.log(gameRound());
//     }
// }


//game();