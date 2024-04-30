// TEMPERATURE CONVERSION

const tempInput = document.getElementById('tempInput');
const resultOutput = document.getElementById('resultOutput');
const errorMessage = document.getElementById('errorMessage');
const CtoF = document.getElementById('celsius');
const FtoC = document.getElementById('fahrenheit');
let temp;

function convertTemp() {
    if (CtoF.checked) {
        errorMessage.textContent = '';
        temp = tempInput.value * 9 / 5 + 32;
        resultOutput.placeholder = `${temp.toFixed(1)}°F`;
    } else if (FtoC.checked) {
        errorMessage.textContent = '';
        temp = (tempInput.value - 32) * 5 / 9;
        resultOutput.placeholder = `${temp.toFixed(1)}°C`;
    } else {
        errorMessage.textContent = 'Please select a conversion';
    }
}