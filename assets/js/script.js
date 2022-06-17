// Assignment code here
//Create  Constant Variables Here
const upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numberCharacters = '1234567890';
const specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

//Create All Other Variables


function generatePassword() {
  //Prompt for length


  //Prompt for includeUpperCased (if yes, add one upper-cased character now & subtract 1 from the length)


  //Prompt for includeLowerCased (if yes, add one lower-cased character now & subtract 1 from the length)  


  //Prompt for includeNumbers (if yes, add one number now & subtract 1 from the length)


  //Prompt for includeSpecialCharacters (if yes, add one special character now & subtract 1 from the length)


  //Generate rest of password
  
  //Create Functions
  function generateNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function returnUpperCasedCharacter(index) {
    return upperCasedCharacters.charAt(index);
  }

  function returnLowerCasedCharacter(index) {
    return lowerCasedCharacters.charAt(index);
  }

  function returnSpecialCharacter(index) {
    return specialCharacters.charAt(index);
  }

  function scramblePassword(password) {
    password = password.split('');
    var length = password.length;
    var tempChar = '';
    var randomNumber = null;

    for(var i = 0; i < length; i++) {
      randomNumber = generateNumber(length);
      tempChar = password[i];
      password[i] = password[randomNumber];
      password[randomNumber] = tempChar;
    }

    return password.join('');
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
