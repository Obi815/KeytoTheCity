// Assignment code here
var getSymbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 



// Generator functions 
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");  

  // Get the minimum count of characters allowed
  var minimumLength = 0 ;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol() {
  return symbols [Math.floor(Math.random()* getSymbols.length)];
};


// now check to see if user selected ok for all uses above 
// check if user inputed the right character length 
if (number === true) {
  minimumNumbers = generatePassword();
  minimumLength++;
} 
//else { "not enoguh characters"
//}

if (lowerCases === true) {
  minimumLowerCases = generatePassword();
  minimumCount++;
}

if (upperCases === true) {
  minimumUpperCases = generatePassword();
  minimumCount++;
}

if (special === true) {
  minimumSpecialCharacters = generatePassword();
  minimumCount++;
}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;
}

if (upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}
randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;
};


