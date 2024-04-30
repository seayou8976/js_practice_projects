// NUMBER GUESSING GAME

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let guess;
let correct = false;

while (!correct) {
    guess = window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
    } else if (guess < min || guess > max) {
        alert(`Please enter a number between ${min} and ${max}.`);
        continue;
    } else {
        attempts++;
        if (guess < randomNumber) {
        alert("Higher!");
        } else if (guess > randomNumber) {
        alert("Lower!");
        } else {
        correct = true;
        alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        }
    }
}
