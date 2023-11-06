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


function gameRound(){
    let playerChoice = prompt("enter your choice:");
    let computerChoice = getComputerChoice();

    console.log(computerChoice);

    if (computerChoice === 'Rock'){
        console.log('pc-rock');
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
        console.log('pc-paper');
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
        console.log('pc-scissors');
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
    return result;
}


function game(){
    for (i=1;i<6;i++){
        gameRound();
    }
}