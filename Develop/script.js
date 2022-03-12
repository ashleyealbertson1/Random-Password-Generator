// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create Function to Generate Random Password (global)

function generatePassword() {


  //Create perameters for the length of the password with prompts
  var choiceLength = prompt("How many characters would you like your password to contain? You may choose a password length from 7 to 128 characters.");

  // Validating length
  if (choiceLength >= 7 || choiceLength <= 128) {
    alert('You have selected for your password to contain ' + choiceLength + ' characters.');
  } else if (choiceLength < 7) {
    alert('You must select a password containing at least 7 characters.');
  } else if (choiceLength > 128) {
    alert('You must select a password containing no more than 128 characters.');
  }

  //Create parameters for the user's lower case preferences
  var choiceLowerCase = confirm('Would you like your password to contain lower case letters? Click "OK" to confirm.');
  // Let the user know their choice
  if (choiceLowerCase === true) {
    alert('You have chosen for your password to contain lower case letters');
  } else if (choiceLowerCase === false) {
    alert('You have chosen for your password not to contain any lower case letters.')
  }
  console.log(choiceLowerCase)

  //Create parameters for the user's upper case preferences 
  var choiceUpperCase = confirm('Would you like your password to contain upper case letters? Click "OK" to confirm.');

  // Let user know their uppercase preference
  if (choiceUpperCase === true) {
    alert('You have chosen for your password to contain upper case letters');
  } else if (choiceUpperCase === false) {
    alert('You have chosen for your password not to contain any upper case letters');
  }
  console.log(choiceUpperCase)

  //Create parameters for the user's numeric preferences 
  var choiceNumber = confirm('Would you like your password to contain any numeric values? Click "OK" to confirm.');

  // Let user know their numeric preference
  if (choiceNumber === true) {
    alert('You have chosen for your password to contain numbers.')
  } else if (choiceNumber === true) {
    alert('You have chosen for your password not to contain any numbers.')
  }
  console.log(choiceNumber)

  var choiceSpecialChar = confirm('Would you like your password to contain any numeric values? Click "OK" to confirm.');

  // Let user know their numeric preference
  if (choiceSpecialChar === true) {
    alert('You have chosen for your password to contain special characters.')
  } else if (choiceSpecialChar === true) {
    alert('You have chosen for your password not to contain any numbers.')
  }
  //If minmum password criteria not met: 

  // If they chose nothing, we can't create a password
  if (choiceLowerCase === false && choiceUpperCase === false && choiceNumber === false && choiceSpecialChar === false) {
    alert('Your password must contain at least one of these characters: Lower Case Letter, Upper Case Letter, Number, or Special Character. Please Try again.');
  }
  console.log(choiceLength);


  //Arrays
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', "'", ':', ';', ',', '<', '>', '/', '|', '[', ']', '}', '{', '.', '?'];


  // Should be a collection of all available options (one large array)
  var chars = [];

  // If the user wants lower case 
  if (choiceLowerCase === true) {
    // Add all lowercase options to chars array by loops through lowercase and pushing each one to the array
    for (i = 0; i < lowerCase.length; i++) {
      chars.push(lowerCase[i]);
    }
  }
  //If the user wants upper case
  if (choiceUpperCase === true) {
    //Add all uppercase options to chars array by looping through uppercase and pushing each one to the array
    for (i = 0; i < upperCase.length; i++); {
      chars.push(upperCase[i]);
    }
  }

  //If the user wants numbers
  if (choiceNumber === true) {
    //Add all number options to chars array by looping through numbers and pushing each one to the array
    for (i = 0; i < number.length; i++);
    chars.push(number[i]);
  }

  //If the user wants special characters
  if (choiceSpecialChar === true) {
    //Add all special character options to chars array by looping throuh numbers and pushing each one to the array
    for (i = 0; i < specialChar.length; i++); {
      chars.push(specialChar[i]);
    }
  }
  console.log(chars);
  password = ''
  for (i = 0; i < choiceLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    var randomChars = chars[randomIndex];
    password = password + randomChars;

    return password;
  }
  console.log(password);ww
  

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

