
function generatePassword() {
  console.clear();
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const yes = "yes" || "Yes" || "YES" || "Y" || "y";
  const no = "no" || "No" || "NO" || "N" || "n";
  var randomPassword = "";
  var orderedpassword = "";

  //Begining of code block for loop
  var userChoice = prompt("Enter a password length that is at between 8 & 128 characters.");
    
  if (userChoice > 7 && userChoice < 129) {
    var userLowerCaseLet = prompt("Would you like lowercase letters?");
    var userUpperCaseLet = prompt("Would you like uppercase letters?");
    var userNum = prompt("Would you like numbers?");
    var userSpecialChar = prompt("Would you like special characters?");  
  
    if (userLowerCaseLet === yes.valueOf()) {
      orderedpassword += lowerAlpha;
    } else {
      orderedpassword = "";
    }
  
    if (userUpperCaseLet === yes.valueOf()) {
      orderedpassword += upperAlpha;
    } else {
      orderedpassword = orderedpassword;
    }
  
    if (userNum === yes.valueOf()) {
      orderedpassword += numbers;    
    } else {
      orderedpassword = orderedpassword;
    }
  
    if (userSpecialChar === yes.valueOf()) {
      orderedpassword += specialChar;
    } else {
      orderedpassword = orderedpassword;
    }
    
// For Loop for orderedpassword string randomization
    var orderedpasswordLength = orderedpassword.length;
    for (var i = 0; i < userChoice; i++) {
      randomPassword += orderedpassword.charAt(Math.floor(Math.random(i) * orderedpasswordLength));     
    }
      console.log(randomPassword);
      console.log(randomPassword.length);
      return randomPassword;
    
  } else {
      alert("Enter a password length that is at between 8 & 128 characters. Generate password again.");
      return generatePassword();
  }
}  

// Function to write generated password into text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}    





