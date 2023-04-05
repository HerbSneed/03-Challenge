// Assignment Code
// var generateBtn = document.querySelector("#generate");



const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var randomPassword = "";

function generatePassword() {
console.clear();
var orderedpassword = "";
var userChoice = prompt("Enter a password length that is at between 8 & 128 characters.");

if (userChoice > 7 && userChoice < 129) {
  var userLowerCaseLet = prompt("Would you like lowercase letters?");
  var userUpperCaseLet = prompt("Would you like uppercase letters?");
  var userNum = prompt("Would you like numbers?");
  var userSpecialChar = prompt("Would you like special characters?");  

  if (userLowerCaseLet === "yes") {
    orderedpassword += lowerAlpha;
    console.log(orderedpassword);
  } else {
    orderedpassword = "";
  }

  if (userUpperCaseLet === "yes") {
    orderedpassword += upperAlpha;
    console.log(orderedpassword);
  } else {
    orderedpassword = orderedpassword;
  }

  if (userNum === "yes") {
    orderedpassword += numbers;
    console.log(orderedpassword);

  } else {
    orderedpassword = orderedpassword;
  }

  if (userSpecialChar === "yes") {
    orderedpassword += specialChar;
    console.log(orderedpassword);

  } else {
    orderedpassword = orderedpassword;
  }

  var orderedpasswordLength = orderedpassword.length;
  for (var i = 0; i < userChoice; i++) {
    randomPassword += orderedpassword.charAt(Math.floor(Math.random(i) * orderedpasswordLength));     

  }
    console.log(randomPassword);
    console.log(randomPassword.length);

} else {
    alert("Enter a password length that is at between 8 & 128 characters. Generate password again.");
}

}



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);








// function randomPasswordGen (orderedpassword) {
//   var orderedpasswordarray = orderedpassword.split("");

//   orderedpasswordarray.sort (function () {
//     return 0.5 - Math.random();
//   })
//   orderedpassword = orderedpasswordarray.join("");
//   return orderedpassword; 
// }

// orderedpassword = randomPasswordGen(orderedpassword);
// console.log(orderedpassword);





//       for (var i = 0; i < userSpeCharChoice; i++) {
//         randomSpecChar += numbers.charAt(Math.floor(Math.random() * specialCharLength));
//       }
//       console.log(randomLowerCaseLet + randomUpperCaseLet + randomNum + randomSpecChar);
//       orderedpassword = orderedpassword + randomSpecChar;


// var yes = "yes" || "Yes" || "YES" || "Y" || "y";
// var no = "no" || "No" || "NO" || "N" || "n";







