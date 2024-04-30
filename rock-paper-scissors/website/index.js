
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
let player = 0;
let computer = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'IT\'S A TIE!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'YOU WIN!';
    } else {
        result = 'YOU LOSE!';
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch(result) {
        case 'YOU WIN!':
            resultDisplay.classList.add('greenText');
            player++;
            playerScore.textContent = player;
            break;
        case 'YOU LOSE!':
            resultDisplay.classList.add('redText');
            computer++;
            computerScore.textContent = computer;
            break;
    }
}