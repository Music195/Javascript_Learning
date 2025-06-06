const mini = 1;
const maxa = 100;
let randomNumber = Math.floor(Math.random() * (maxa - mini + 1)) + mini;
// Generate a random number between mini and maxa (inclusive)
const rn = document.getElementById('rn');
rn.textContent = `Random Number: ${randomNumber}`; // Display the random number in the HTML

let attempts = 0;
let guess;
let running = true;

const minSpan = document.getElementById('min');
minSpan.textContent = mini; // Set the minimum value in the HTML
const maxSpan = document.getElementById('max');
maxSpan.textContent = maxa; // Set the maximum value in the HTML

const resetButton = document.getElementById('resetButton');
resetButton.onclick = function() {
    attempts = 0; // Reset the number of attempts
    guess = null; // Reset the guess
    running = true; // Reset the running state
    const result = document.getElementById('result');
    result.textContent = ""; // Clear the result message
    const attempting = document.getElementById('attempting');
    attempting.textContent = `Attempts: ${attempts}`; // Reset the attempts display
    // Reset the random number
    randomNumber = Math.floor(Math.random() * (maxa - mini + 1)) + mini;
    rn.textContent = `Random Number: ${randomNumber}`; // Reset the random number display
};

const guessButton = document.getElementById('guessButton');
guessButton.onclick = function() {
    running = true; // Reset the running state
    guess = document.getElementById('guessInput').value; // Get the value from the input field
    guess = Number(guess); // Convert the input to a number
    const result = document.getElementById('result');
    while (running)  {
        
            if (isNaN(guess) || guess < mini || guess > maxa) {
                alert(`Please enter a valid number between ${mini} and ${maxa}.`);
                // continue; // Skip to the next iteration if input is invalid
            }
            else {
                attempts++;
                const attempting = document.getElementById('attempting');
                attempting.textContent = `Attempts: ${attempts}`;
                if (guess < randomNumber) {
                    window.alert("Too low! Try again.");
                } else if (guess > randomNumber) {
                    window.alert("Too high! Try again.");
                } else {
                    const result = document.getElementById('result');
                    result.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
                    attempting.textContent = "";
                    // window.alert(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
                  
                }
            }
            running = false; // Exit the loop when the correct number is guessed
            
    }

    // This function is called when the guess button is clicked
    // It will handle the logic for checking the user's guess
    // The main game loop is now handled in the while loop below
};


// while (running) {
//     guess = window.prompt(`Guess a number between ${min} and ${max}:`);
//     guess = Number(guess); // Convert the input to a number
//     if (isNaN(guess) || guess < min || guess > max) {
//         alert(`Please enter a valid number between ${min} and ${max}.`);
//         // continue; // Skip to the next iteration if input is invalid
//     }
//     else{
//         attempts++;
//         if (guess < randomNumber) {
//             window.alert("Too low! Try again.");
//         } else if (guess > randomNumber) {
//             window.alert("Too high! Try again.");
//         } else {
//             const result = document.getElementById('result');
//             result.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
//             // window.alert(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
//             running = false; // Exit the loop when the correct number is guessed
//         }
//     }
// }
// do {
//     guess = parseInt(prompt(`Guess a number between ${min} and ${max}:`));
//     attempts++;

//     if (guess < min || guess > max) {
//         alert(`Please enter a number between ${min} and ${max}.`);
//     } else if (guess < randomNumber) {
//         alert("Too low! Try again.");
//     } else if (guess > randomNumber) {
//         alert("Too high! Try again.");
//     } else {
//         alert(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
//     }
// }while (guess !== randomNumber);
// The game continues until the user guesses the correct number

