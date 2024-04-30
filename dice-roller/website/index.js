// DICE ROLLER

function rollDice() {

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];
    
    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="images/dice-${roll}.png" alt="dice-${roll}" />`);
    }

    diceResult.textContent = values.join(', ');
    diceImages.innerHTML = images.join('');

}