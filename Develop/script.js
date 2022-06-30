// Assignment Code
var generateBtn = document.querySelector("#generate");

const number = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", "/", ":", ";", "<", ">", "?", "[", "]",];
const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


function generatePassword() {
  console.log("Hey! You cliked the button")
  


// 1. prompt user for the password criteria  
//      a. password length 8-128
//      b.Lowercase, uppercase, numbers, Symbols
  let passwordlength = prompt("Please choose a password length between 8 and 128 characters", 8)
  
  let LowerCase = prompt("Would you like LOWERCASE letters?", true);
  if (LowerCase !=null) {
  }  

  let UpperCase = prompt("Would you like UPPERCASE letters?", true);

  let numbers = prompt("Would you like NUMBERS?", true);

  let symbols = prompt("Would you like SYMBOLS?", true);



// 2. Validate the input  
// 3. Generate passowrd based on criteria
for ( let i =0; i < characterAmount; i++) {
  con
}
// 4. display password to the page



return "Generated Password will go here!";
}  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
