// Assignment Code
// var generateBtn = document.querySelector("#generate");

const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = lowerAlpha.map(lowerAlpha => lowerAlpha.toUpperCase());
const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8","9"];


function generatePassword() {
var userlength =  prompt("What is the length of your desired password?");

if (userlength < 8) {
  alert("Enter a length that is at least 8 characters.");
}
else if (userlength > 7) {
  var userLowerCaseLet = prompt("Would you like lowercase letters?");
    if (userLowerCaseLet === "yes") {
      var lowerCaseLetNum = prompt("How many?");
      var randomlowercaselet = "";
      lowerAlphaLength = lowerAlpha.length;
      for (var i = 0; i < lowerCaseLetNum; i++) {
        randomlowercaselet += lowerAlpha.charAt(Math.floor(Math.random() * lowerAlphaLength));
        }
        console.log(randomlowercaselet);
      }
    }  
  }





// var userUpperCaseLet = prompt("Would you like uppercase letters?");
// var upperCaseLetNum = prompt("How many?");
// var userNum = prompt("Would you like numbers?");
// var userNumNum = prompt("How many?");
// var userSpecialChar = prompt("Would you like special characters?");
// var userSpecialCharNum = prompt("How many?");





// }






// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
