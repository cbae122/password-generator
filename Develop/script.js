// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var confirmPasswordLength;
var confirmSpecialCharacters;
var confirmNumber;
var confirmLower;
var confirmUpper;

var selections;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var confirmPasswordLength = (window.prompt ('How many characters would you like your password to be? Make a selection between 8 and 128.'));

  if (!confirmPasswordLength) {
      window.alert("This needs a number selection")
  } else if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
      confirmPasswordLength = (window.alert('You must make a selection between 8 and 128'));
      // generatePassword ();
  } else {
      confirmNumber = window.confirm ('Will this have numbers?');
      confirmSpecialCharacters = window.confirm ('Will this have special characters?');
      confirmLower = window.confirm ('Will this have Lowercase?');
      confirmUpper = window.confirm ('Will this have Uppercase?');
  };
  
  if (confirmSpecialCharacters === false && confirmNumber === false && confirmLower === false && confirmUpper === false) {
      window.alert('You must make at least one selection!');
      // generatePassword ();
  } else if (confirmSpecialCharacters && confirmNumber && confirmLower && confirmUpper) {

  }



};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
