// COUNTER PROGRAM

const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;


increaseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = () => {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}