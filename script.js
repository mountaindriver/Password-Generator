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
  let characterAmount = prompt("Length of your password 8-128?", "8-128");
  
  // IF STATEMENTS that will then add more things to the array
  if (characterAmount < 8 || characterAmount > 128){
    alert("nah that ain't right")
    return writePassword()
    // How do i turn 8 into a range between 8-128?
  } 
  
  let LowerCase = confirm("Would you like LOWERCASE letters?");
  let UpperCase = prompt("Would you like UPPERCASE letters?", "yes");
  let num = prompt("Would you like NUMBERS?", "yes");
  let symbols = prompt("Would you like SYMBOLS?", "yes");

  if (LowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
    console.log("Lowercase letters");
  } else {
    console.log("no lower case letters");
  }

  if (UpperCase == "yes") {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
    console.log("Uppercase letters");
  } else {
    console.log("no Uppercase letters");
  }

  if (num == "yes") {
    passwordCharacters = passwordCharacters.concat(number);
    console.log("Numbers");
  } else {
    console.log("no numbers")
  }

  if (symbols == "yes") {
    passwordCharacters = passwordCharacters.concat(symbolsArr);
    console.log("Symbols")
  } else {
    console.log("no symbols")
  }

  var password = generatePassword(characterAmount)

  passwordText.value = password
};

// var sampleArr = ["milk", "eggs", "cereal"]
// sampleArr[2] //cereal
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


console.log(passwordCharacters);