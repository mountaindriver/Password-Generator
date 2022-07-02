// Assignment Code
var generateBtn = document.querySelector("#generate");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", "/", ":", ";", "<", ">", "?", "[", "]",];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
var passwordCharacters = [];


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordCharacters = [];

  // Prompts appear after  button is pressed
  let characterAmount = prompt("Length of your password 8-128?", "8-128");
  let LowerCase = prompt("Would you like LOWERCASE letters?", "yes");
  let UpperCase = prompt("Would you like UPPERCASE letters?", "yes");
  let num = prompt("Would you like NUMBERS?", "yes");
  let symbols = prompt("Would you like SYMBOLS?", "yes");



  // IF STATEMENTS that will then add more things to the array

  if (characterAmount == 8){
    console.log(characterAmount);
    // How do i turn 8 into a range between 8-128?
  } else {
    console.log("no valid number selected");
    // Error message happens when a invalid number is selected
    // let badnumber = error("no valid number selected");
  }

  if (LowerCase == "yes") {
    lowerCaseLetters.push(passwordCharacters);
    console.log("Lowercase letters");
  } else {
    console.log("no lower case letters");
  }

  if (UpperCase == "yes") {
    passwordCharacters.push(upperCaseLetters);
    console.log("Uppercase letters");
  } else {
    console.log("no Uppercase letters");
  }

  if (num == "yes") {
    passwordCharacters.push(number);
    console.log("Numbers");
  } else {
    console.log("no numbers")
  }

  if (symbols == "yes") {
    passwordCharacters.push(symbols);
    console.log("Symbols")
  } else {
    console.log("no symbols")
  }
};
  // var password = generatePassword()
  //   Take form passwordcharater array at random till the amount is meet
// function generatePassword(passwordCharacters)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(passwordCharacters);