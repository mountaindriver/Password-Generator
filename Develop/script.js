// Assignment Code
var generateBtn = document.querySelector("#generate");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", "/", ":", ";", "<", ">", "?", "[", "]",];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());




// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    var passwordCharaters = [" "];

  let charaterAmount = prompt("Length of your password 8-128?");
  let LowerCase = prompt("Would you like LOWERCASE letters?", true);
  let UpperCase = prompt("Would you like UPPERCASE letters?", true);
  let num = prompt("Would you like NUMBERS?", true);
  let symbols = prompt("Would you like SYMBOLS?", true);
  
  
  if (LowerCase == true){
      passwordCharaters.push(lowerCaseLetters);
    }
    
    if (UpperCase ==true){
        passwordCharaters.push(upperCaseLetters);
    }
    
    if (num == true){
        passwordCharaters.push(number);
    }
    
    if (symbols == true){
        passwordCharaters.push(symbols);
    }
    
    var password = generatePassword(){
    //   Take form passwordcharater array at random till the amount is meet
    };
    
    // Some way to stop the function if the number is below 8 or above 128

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(passwordCharaters);