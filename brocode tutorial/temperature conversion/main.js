// function isEven(x) {
//     return x % 2 === 0;
// }

// console.log(isEven(10));// true
const tx = document.getElementById('tempInput');
const celsiusInput = document.getElementById('toCelsius');
const fahrenheitInput = document.getElementById('toFahrenheit');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');
  
let temp = 0;

function convert() {
    if (celsiusInput.checked) {
        temp = Number(tx.value);
        result.textContent = `${temp}°C is equal to ${((temp * 9/5) + 32).toFixed(1)}°F`;
    } 
    else if (fahrenheitInput.checked) {
        temp = Number(tx.value);
        result.textContent = `${temp}°F is equal to ${((temp - 32) * 5/9).toFixed(1)}°C`;
    } else {
        alert("Please enter a temperature to convert.");
    }
}