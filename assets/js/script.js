// Assignment code here
//Create  Constant Variables Here
const upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numberCharacters = '1234567890';
const specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
const acceptableAnswers = ['yes', 'Yes', 'YES', 'no', 'No', 'NO'];

function generatePassword() {
  //Create All Other Variables
  var passwordLength = 8;
  var addUpperCase = true;
  var addLowerCase = true;
  var addNumbers = true;
  var addSpecialChars = true;
  var password = '';
  var randomCharacter = true;

  //Prompt for length
  passwordLength = getPasswordLength();  

  //Prompt for includeUpperCased (if yes, add one upper-cased character now & subtract 1 from the length)
  addUpperCase = userPreference('upper case');
  if(addUpperCase) {
    password += returnUpperCasedCharacter(generateNumber(upperCasedCharacters.length));
    passwordLength -= 1;
  }

  //Prompt for includeLowerCased (if yes, add one lower-cased character now & subtract 1 from the length)  
  addLowerCase = userPreference('lower case');
  if(addLowerCase) {
    password += returnLowerCasedCharacter(generateNumber(lowerCasedCharacters.length));
    passwordLength -= 1;
  }

  //Prompt for includeNumbers (if yes, add one number now & subtract 1 from the length)
  addNumbers = userPreference('number');
  if(addNumbers) {
    password += generateNumber(10);
    passwordLength -= 1;
  }

  //Prompt for includeSpecialCharacters (if yes, add one special character now & subtract 1 from the length)
  addSpecialChars = userPreference('special');
  if(addSpecialChars) {
    password += returnSpecialCharacter(generateNumber(specialCharacters.length));
    passwordLength -= 1;
  }

  if(!addUpperCase && !addLowerCase && !addNumbers && !addSpecialChars) {
    return "I really don't think you understand what the purpose of this tool is.";
  }

  //Generate rest of password
  for(var i = 0; i < passwordLength; i++) {
    randomCharacter = generateNumber(4) + 1;
    switch(randomCharacter) {
      case 1:
        if(addUpperCase) {
          password += returnUpperCasedCharacter(generateNumber(upperCasedCharacters.length));
        } else if(addLowerCase) {
            password += returnLowerCasedCharacter(generateNumber(lowerCasedCharacters.length));
        } else if(addNumbers) {
            password += generateNumber(10);
        } else {
            password += returnSpecialCharacter(generateNumber(specialCharacters.length));
        }
        break;
      case 2:
        if(addLowerCase) {
          password += returnLowerCasedCharacter(generateNumber(lowerCasedCharacters.length));
        } else if(addNumbers) {
            password += generateNumber(10);
        } else if(addSpecialChars) {
            password += returnSpecialCharacter(generateNumber(specialCharacters.length));
        } else {
            password += returnUpperCasedCharacter(generateNumber(upperCasedCharacters.length));
        }
        break;
      case 3:
        if(addNumbers) {
          password += generateNumber(10);
        } else if(addSpecialChars) {
            password += returnSpecialCharacter(generateNumber(specialCharacters.length));
        } else if(addUpperCase) {
            password += returnUpperCasedCharacter(generateNumber(upperCasedCharacters.length));
        } else {
          password += returnLowerCasedCharacter(generateNumber(lowerCasedCharacters.length));
        }
        break;
      default:
        if(addSpecialChars) {
          password += returnSpecialCharacter(generateNumber(specialCharacters.length));
        } else if(addUpperCase) {
            password += returnUpperCasedCharacter(generateNumber(upperCasedCharacters.length));
        } else if(addLowerCase) {
          password += returnLowerCasedCharacter(generateNumber(lowerCasedCharacters.length));
        } else {
            password += generateNumber(10);
        }
    }
  }
  
  //Create Functions
  //I used functions for the prompts so I could just recall the function when needed, and did not have to worry with a 'while' loop
  function getPasswordLength() {
    var length = window.prompt('Please enter the password length (a number from 8 - 128)');
    if(length < 8 || length > 128 || isNaN(length)) {
      window.alert('The password must be a number between 8 and 128. Please try again.');
      getPasswordLength();
    } else {
      return length;
    }
  }

  function userPreference(currentChoice) {
    var answer = window.prompt('Would you like ' + currentChoice + ' characters in the password (please enter "Yes" or "No")?');
    if(!acceptableAnswer(answer)) {
      window.alert('Please enter either "Yes" or "No" as your asnswer.');
      userPreference(currentChoice);
    } else {
      if(answer == 'no' || answer == 'No' || answer == 'NO' ) {
        return false;
      } else {
        return true;
      }
    }
  }

  function acceptableAnswer(answer) {
    for(var i = 0; i < acceptableAnswers.length; i++) {
      if(answer === acceptableAnswers[i]){
        return true;
      }
    }
    return false;
  }

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

  return scramblePassword(password);
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
