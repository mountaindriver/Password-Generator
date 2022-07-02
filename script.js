// Assignment Code
var generateBtn = document.querySelector("#generate");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", "/", ":", ";", "<", ">", "?", "[", "]",];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
var passwordCharacters = [];

// 

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordCharacters = [];

  // Prompts appear after  button is pressed
  let characterAmount = prompt("Length of your password 8-128?", 8);
  
  // IF STATEMENTS that will then add more things to the array
  if (characterAmount < 8 || characterAmount > 128){
    alert("Please enter valid number 8-128");
    return writePassword();
  } 
  
  let lowerCase = confirm("Would you like LOWERCASE letters?");
  let upperCase = confirm("Would you like UPPERCASE letters?");
  let num = confirm("Would you like NUMBERS?");
  let symbols = confirm("Would you like SYMBOLS?");

  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
    console.log("include lowercase letters");
  } else {
    console.log("no lower case letters");
  }

  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
    console.log("include uppercase letters");
  } else {
    console.log("no Uppercase letters");
  }

  if (num) {
    passwordCharacters = passwordCharacters.concat(number);
    console.log("include numbers");
  } else {
    console.log("no numbers");
  }

  if (symbols) {
    passwordCharacters = passwordCharacters.concat(symbolsArr);
    console.log("include symbols");
  } else {
    console.log("no symbols");
  }

  if (lowerCase == false && upperCase == false && num == false && symbols == false){
    alert("Please select at least one form of character");
    return writePassword();
  }

  var password = generatePassword(characterAmount)

  passwordText.value = password
};


function generatePassword(characterAmount){
  var randomPass = "";
  for(i=0; i<characterAmount; i++){
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length)
    var randomChar = passwordCharacters[randomIndex];
    randomPass += randomChar;
    // randomPass = randomPass + randomChar
  }

  return randomPass
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
