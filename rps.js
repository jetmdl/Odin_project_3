let computerScore = 0;
let playerScore = 0;
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

function resetScores() {
    computerScore = 0;
    playerScore = 0;
}

function incramentPlayerScore() {
    playerScore ++;
}

function incramentComputerScore() {
    computerScore ++;
}

function addGameListner() {
    document.querySelector('#start-game').addEventListener('click', gameRound);
}

function addReplayListner() {
    document.querySelector('#play-again').addEventListener('click', replayGame);
}

function replayGame() {
    resetScores();
    gameRound();
}

function checkScores() {
    console.log('player score:');
    console.log(playerScore);
    console.log('-------');
    console.log('comp score:');
    console.log(computerScore);
    let cont = document.querySelector('#content');
    if (playerScore === 5){
        cont.innerHTML = 'You Win';
        configureButtons('endState');
    } else if (computerScore === 5){
        cont.innerHTML = 'You Lose';
        configureButtons('endState');
    }
}

function configureButtons(aState) {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const start = document.querySelector('#start-game');
    let cont = document.querySelector('#content');
    const again = document.querySelector('#play-again');

    if (aState === 'playState') {

        rock.style = 'display: block';
        paper.style = 'display: block';
        scissors.style = 'display: block';
        start.style = 'display: none';
        again.style = 'display: none';
        cont.innerHTML = 'Make your choice below:';

        rock.addEventListener('click', setPlayerChoiceRock);
        paper.addEventListener('click', setPlayerChoicePaper);
        scissors.addEventListener('click', setPlayerChoiceScissors);

    } else if (aState === 'endState') {

        rock.style = 'display: none';
        paper.style = 'display: none';
        scissors.style = 'display: none';
        start.style = 'display: none';
        again.style = 'display: block';

    } else if (aState === 'startState') {

        rock.style = 'display: none';
        paper.style = 'display: none';
        scissors.style = 'display: none';
        start.style = 'display: block';
        again.style = 'display: none';
    }
}

function gameRound(){

    configureButtons('playState');
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
            cont.innerHTML = result;
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Win";
            cont.innerHTML = result;
            incramentPlayerScore();
            checkScores();
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Lose";
            cont.innerHTML = result;
            incramentComputerScore();
            checkScores();
        }
    }
    else if (computerChoice === 'Paper'){
        // console.log('pc-paper');
        if (playerChoice === 'Rock' || playerChoice === 'rock' || playerChoice === 'ROCK'){
            result = "Lose";
            cont.innerHTML = result;
            incramentComputerScore();
            checkScores();
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Draw";
            cont.innerHTML = result;
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Win";
            cont.innerHTML = result;
            incramentPlayerScore();
            checkScores();
        }
    }
    else if (computerChoice === 'Scissors'){
        // console.log('pc-scissors');
        if (playerChoice === 'Rock' || playerChoice === 'rock' || playerChoice === 'ROCK'){
            result = "Win";
            cont.innerHTML = result;
            incramentPlayerScore();
            checkScores();
        }
        if (playerChoice === 'Paper' || playerChoice === 'paper' || playerChoice === 'PAPER'){
            result = "Lose";
            cont.innerHTML = result;
            incramentComputerScore();
            checkScores();
        }
        if (playerChoice === 'Scissors' || playerChoice === 'scissors' || playerChoice === 'SCISSORS'){
            result = "Draw";
            cont.innerHTML = result;
        }
    }
    //return result;
    // cont.innerHTML = result;
}

// function game(){
//     for (i=1;i<6;i++){
//         console.log(gameRound());
//     }
// }


//game();



configureButtons('startState');
addGameListner();
addReplayListner();