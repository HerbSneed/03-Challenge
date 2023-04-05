// Assignment Code
// var generateBtn = document.querySelector("#generate");

const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
var orderedpassword = "";
// var yes = "yes" || "Yes" || "YES" || "Y" || "y";
// var no = "no" || "No" || "NO" || "N" || "n";
var userLength = prompt("What is the length of your desired password?");
if (userLength > 7 && userLength < 128) {
  var userLowerCaseLet = prompt("Would you like lowercase letters?");

} else if (userLength < 8 || userLength > 128) {
    alert("Enter a length that is at between 8 & 128 characters. Generate password again.");
}

if (userLowerCaseLet === "yes") {
  var lowerCaseLetNum = prompt("How many?");
  var randomLowerCaseLet = "";
  var remaining = userLength - lowerCaseLetNum;
  alert("You have " + (remaining) + " remaining.");
  lowerAlphaLength = lowerAlpha.length;
  for (var i = 0; i < lowerCaseLetNum; i++) {
    randomLowerCaseLet += lowerAlpha.charAt(Math.floor(Math.random() * lowerAlphaLength));     
    orderedpassword = randomLowerCaseLet;
  }
  console.log(orderedpassword);

} else if (userLowerCaseLet === "yes" || userLowerCaseLet === "no") {
    var userUpperCaseLet = prompt("Would you like uppercase letters?");
    if (userUpperCaseLet === "yes") {
      var upperCaseLetNum = prompt("How many?");
      var randomUpperCaseLet = "";
      remaining += remaining - upperCaseLetNum;      
      upperAlphaLength = upperAlpha.length;
      for (var i = 0; i < upperCaseLetNum; i++) {
        randomUpperCaseLet += upperAlpha.charAt(Math.floor(Math.random() * upperAlphaLength));
        orderedpassword = orderedpassword + randomUpperCaseLet;
      }        
      alert("You have " + (remaining) + " remaining.");
      console.log(orderedpassword);
}
}

//   } else if (userUpperCaseLet === "yes" || userUpperCaseLet === "no") {
//     var userNum = prompt("Would you like numbers?");
//     remaining = remaining - userNumChoice;
//     if (userNum === "yes" || "Yes" || "YES" || "Y" || "y") {
//       var userNumChoice = prompt("How many?");
//       var randomNum = "";
//       numLength = numbers.length;
//       for (var i = 0; i < userNumChoice; i++) {
//         randomNum += numbers.charAt(Math.floor(Math.random() * numLength));
//       }
//       console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum);
//       orderedpassword = orderedpassword + randomNum;
//       alert("You have " + (remaining) + " remaining.");

//     } else if (userNum === "yes" || "Yes" || "YES" || "Y" || "y" || "no" || "No" || "NO" || "N" || "n") {
//     var userSpecialChar = prompt("Would you like special characters?");
//     if (userSpecialChar === "yes" || "Yes" || "YES" || "Y" || "y") {
//       var userSpeCharChoice = prompt("How many?");
//       var randomSpecChar = "";
//       remaining = remaining - userSpeCharChoice;
//       specialCharLength = specialChar.length;
//       for (var i = 0; i < userSpeCharChoice; i++) {
//         randomSpecChar += numbers.charAt(Math.floor(Math.random() * specialCharLength));
//       }
//       console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum + randomSpecChar);
//       orderedpassword = orderedpassword + randomSpecChar;

//   } if (userSpecialChar === "no" || "No" || "NO" || "N" || "n") {
//       console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum);
//       orderedpassword = randomLowerCaseLet;
// }

 }







// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
