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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var lengthOfPassword = window.prompt ('How many characters would you like your password to be? Make a selection between 8 and 128.');

  if (!lengthOfPassword.includes(lengthOfPassword < 7 || lengthOfPassword > 129)) {
    window.alert('You must make a selection between 8 and 128');
    var lengthOfPassword = window.prompt ('How many characters would you like your password to be? Make a selection between 8 and 128.');
  } else if (!lengthOfPassword.parseint('You must make a selection between 8 and 182')) {
    window.alert('You must make a selection between 8 and 128');
    var lengthOfPassword = window.prompt ('How many characters would you like your password to be? Make a selection between 8 and 128.');
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
