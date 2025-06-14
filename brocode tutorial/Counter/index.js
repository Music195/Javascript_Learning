const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const countLabel = document.getElementById('countLabel');

let count = 0;

incrementButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decrementButton.onclick = function() {
    if (count <= 0) {
        alert("Count cannot be less than zero.");
        return;
    } else {
        count--;
        countLabel.textContent = count;
    }
    
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}