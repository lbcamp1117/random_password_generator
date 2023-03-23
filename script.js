// Assignment code here
//var password = document.getElementById('password');
var numberChars = "0123456789"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var specialChars = "!@$&"
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword(){
    var passwordLength = parseInt(window.prompt("Enter desired password length"));
    console.log (passwordLength) 
    var chars = ""

    if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)){
        alert("Please select a valid password length")
        return"Please try again";
    }
    if (confirm("Would you like lowercase letters?")){
        chars += lowerChars
    }
    if (confirm("Would you like uppercase letters?")){
        chars += upperChars
    }
    if (confirm("Would you like number?")){
        chars += numberChars
    }
    if (confirm("Would you like special characters?")){
        chars += specialChars
    }
    if (chars.length === 0){
        alert("Please select at least one character type")
        return"Please try again"
    }
    console.log (chars)
    var password = "";
    for (var i =0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
