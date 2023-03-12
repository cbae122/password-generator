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

// start of password generation code
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
      selections = window.alert('You must make at least one selection!');

      // 4 selections
  } else if (confirmSpecialCharacters && confirmNumber && confirmLower && confirmUpper) {
      selections = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

      // 3 selections
  } else if (confirmSpecialCharacters && confirmNumber && confirmLower) {
      selections = specialCharacters.concat(numericCharacters, lowerCasedCharacters);

  } else if (confirmSpecialCharacters && confirmNumber && confirmUpper) {
      selections = specialCharacters.concat(numericCharacters, upperCasedCharacters);

  } else if (confirmSpecialCharacters && confirmLower && confirmUpper) {
      selections = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);

  } else if (confirmNumber && confirmLower && confirmUpper) {
      selections = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);

      // 2 selections
  } else if (confirmSpecialCharacters && confirmNumber) {
      selections = specialCharacters.concat(numericCharacters);

  } else if (confirmSpecialCharacters && confirmLower) {
      selections = specialCharacters.concat(lowerCasedCharacters);

  } else if (confirmSpecialCharacters && confirmUpper) {
      selections = specialCharacters.concat(upperCasedCharacters);

  } else if (confirmNumber && confirmLower) {
      selections = numericCharacters.concat(lowerCasedCharacters);

  } else if (confirmNumber && confirmUpper) {
      selections = numericCharacters.concat(upperCasedCharacters);

  } else if (confirmLower && confirmUpper) {
      selections = lowerCasedCharacters.concat(upperCasedCharacters);

      // 1 selection
  } else if (confirmSpecialCharacters) {
      selections = specialCharacters;

  } else if (confirmNumber) {
      selections = numericCharacters;

  } else if (confirmLower) {
      selections = lowerCasedCharacters;

  } else if (confirmUpper) {
      selections = upperCasedCharacters;
  };

    console.log(selections);

    var generatedPassword = [];
    for (var i = 0; i < confirmPasswordLength; i++) {
      generatedPassword = generatedPassword + selections[Math.floor(Math.random() * selections.length)];
      console.log(generatedPassword);
    }

    return generatedPassword;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
