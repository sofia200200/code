let rawPrice = prompt("Enter the raw price:");
let finalPrice = rawPrice * 1.185;
console.log("Final price with VAT: $" + finalPrice.toFixed(2));
-----------
let num = Number(prompt("Enter a number (2-9):"));

if (num < 2 || num > 9) {
  console.log("Please enter a number between 2 and 9.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}
-----------
const values = [3, 11, 7, 2, 9, 10];


let sum = values.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum); 


function average(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
console.log("Average:", average(values)); 


function maxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}
console.log(maxMin(values)); 
-----------
let celsius = Number(prompt("Enter temperature in Celsius:"));
let fahrenheit = celsius * 9/5 + 32;
console.log(celsius + "°C = " + fahrenheit + "°F");

function toCelsius(f) {
  return (f - 32) / 9 * 5;
}
console.log(fahrenheit + "°F = " + toCelsius(fahrenheit) + "°C");
-----------
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 
-----------
function countVowels(str) {
  return str.toLowerCase().split("").filter(c => "aeiou".includes(c)).length;
}

console.log(countVowels("hello world")); 