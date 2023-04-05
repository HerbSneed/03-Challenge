
function generatePassword() {
  console.clear();
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomPassword = "";
  var orderedpassword = "";
  var userChoice = prompt("Enter a password length that is at between 8 & 128 characters.");
    
  if (userChoice > 7 && userChoice < 129) {
    var userLowerCaseLet = prompt("Would you like lowercase letters?");
    var userUpperCaseLet = prompt("Would you like uppercase letters?");
    var userNum = prompt("Would you like numbers?");
    var userSpecialChar = prompt("Would you like special characters?");  
  
    if (userLowerCaseLet === "yes") {
      orderedpassword += lowerAlpha;
    } else {
      orderedpassword = "";
    }
  
    if (userUpperCaseLet === "yes") {
      orderedpassword += upperAlpha;
    } else {
      orderedpassword = orderedpassword;
    }
  
    if (userNum === "yes") {
      orderedpassword += numbers;    
    } else {
      orderedpassword = orderedpassword;
    }
  
    if (userSpecialChar === "yes") {
      orderedpassword += specialChar;
    } else {
      orderedpassword = orderedpassword;
    }
  
    var orderedpasswordLength = orderedpassword.length;
    for (var i = 0; i < userChoice; i++) {
      randomPassword += orderedpassword.charAt(Math.floor(Math.random(i) * orderedpasswordLength));     
    }
      console.log(randomPassword);
      console.log(randomPassword.length);
      return randomPassword;
    
  } else {
      alert("Enter a password length that is at between 8 & 128 characters. Generate password again.");
  }
}  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}    




// var yes = "yes" || "Yes" || "YES" || "Y" || "y";
// var no = "no" || "No" || "NO" || "N" || "n";
