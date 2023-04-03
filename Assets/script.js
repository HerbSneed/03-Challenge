// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var userlength =  prompt("What is the length of your desired password?");
var userLowerCaseLet = prompt("Would you like lowercase letters?");
var lowerCaseLetNum = prompt("How many?");
var userUpperCaseLet = prompt("Would you like uppercase letters?");
var upperCaseLetNum = prompt("How many?");
var userNum = prompt("Would you like numbers?");
var userNumNum = prompt("How many?");
var userSpecialChar = prompt("Would you like special characters?");
var userSpecialCharNum = prompt("How many?");
const lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperAlpha = lowerAlpha.map(lowerAlpha => lowerAlpha.toUpperCase());
const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8","9"];

if (userlength < 8) {
  console.log("Please enter a number between 8 and 128.");
}
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
