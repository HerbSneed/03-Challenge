// Assignment Code
// var generateBtn = document.querySelector("#generate");

const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
var orderedpassword = "";
var userLength =  prompt("What is the length of your desired password?");
if (userLength < 8) {
  alert("Enter a length that is at least 8 characters. Generate password again.");
}
else if (userLength > 7) {
  var userLowerCaseLet = prompt("Would you like lowercase letters?");
  if (userLowerCaseLet === "yes") {
    var lowerCaseLetNum = prompt("How many?");
    var randomLowerCaseLet = "";
    var remaining = userLength - lowerCaseLetNum;
    lowerAlphaLength = lowerAlpha.length;
    for (var i = 0; i < lowerCaseLetNum; i++) {
      randomLowerCaseLet += lowerAlpha.charAt(Math.floor(Math.random() * lowerAlphaLength));
    }
    console.log(randomLowerCaseLet);
    orderedpassword = randomLowerCaseLet;
    
    if (remaining > 0) {
      alert("You have " + (remaining) + " remaining.")
    }
    else {
      return randomLowerCaseLet;
    }
  } else if (userLowerCaseLet === yes || no) {
    var userUpperCaseLet = prompt("Would you like uppercase letters?");
    if (userUpperCaseLet === "yes") {
      var upperCaseLetNum = prompt("How many?");
      var randomUpperCaseLet = "";
      remaining = remaining - upperCaseLetNum;
      upperAlphaLength = upperAlpha.length;
      for (var i = 0; i < upperCaseLetNum; i++) {
        randomUpperCaseLet += upperAlpha.charAt(Math.floor(Math.random() * upperAlphaLength));
      }
      console.log(randomLowerCaseLet + randomUpperCaseLet);
      if (remaining > 0) {
        alert("You have " + (remaining) + " remaining.")
      }
      else {
        return randomLowerCaseLet + randomUpperCaseLet;
      }
    } 
  }
  var userNum = prompt("Would you like numbers?");
  if (userNum === "yes") {
    var userNumChoice = prompt("How many?");
    var randomNum = "";
    remaining = remaining - userNumChoice;
    numLength = numbers.length;
    for (var i = 0; i < userNumChoice; i++) {
      randomNum += numbers.charAt(Math.floor(Math.random() * numLength));
    }
    console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum);
    if (remaining > 0) {
      alert("You have " + (remaining) + " remaining.")
    }
    else {
      return randomLowerCaseLet + randomUpperCaseLet + randomNum;
    }
  }

  var userSpecialChar = prompt("Would you like special characters?");
  if (userSpecialChar === "yes") {
    var userSpeCharChoice = prompt("How many?");
    var randomSpecChar = "";
    remaining = remaining - userSpeCharChoice;
    specialCharLength = specialChar.length;
    for (var i = 0; i < userSpeCharChoice; i++) {
      randomSpecChar += numbers.charAt(Math.floor(Math.random() * specialCharLength));
    }
    console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum + randomSpecChar);
    if (remaining > 0) {
      alert("You have " + (remaining) + " remaining.")
    }
    else {
      return randomLowerCaseLet + randomUpperCaseLet + randomNum + randomSpecChar;
    }
  }
  
  
}
}




// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
