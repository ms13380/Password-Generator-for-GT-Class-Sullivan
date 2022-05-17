//button for html use
const generateButton = document.getElementById('touchyclicky')
//trying to get this to use the button to start password generation prompts - not working
generateButton.addEventListener('click', writePassword())

//password randomizer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateString(length, num, abc, ABC, spec){

  characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[],./<>?'~".split("")
  passwordArray = [""]
  len = length + 1

  for(let i=0; i <= len; i++){

      if(num == true){
          passwordArray.push(getRandomInt(10))
          if(passwordArray.length == len){break}
      }
      if(abc == true){
          passwordArray.push(characters[getRandomInt(27) + 9])
          if(passwordArray.length == len){break}
      }
      if(ABC == true){
          passwordArray.push(characters[getRandomInt(27) + 35])
          if(passwordArray.length == len){break}
      }
      if(spec == true){
          passwordArray.push(characters[getRandomInt(27) + 61])
          if(passwordArray.length == len){break}
      }
  }
  randomPasswordGenerated = passwordArray.sort(() => Math.random() - 0.5).join('');
  return randomPasswordGenerated
}

//initial fuunction that starts the password creation process
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return
}

//sets parameters for the length of password to be between 8 and 128 characters
function passlength(){
  value =prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.")
  if((value < 8)||(value > 128)){
      confirm("Password too long or too short!!")
      passlength()
  } 
  return parseInt(value)
}

// questions that are asked to the user to generate a specified password
function generatePassword() {
  var passwordLength = passlength();
  
  var numbers = confirm("Would you like numbers in your password?");

  var lowerCase = confirm("Would you like lower case letters in your password?");

  var upperCase = confirm("Would you like upper case letters in your password?");

  var specials = confirm("Would you like special characters in your password?");
  
  var randomPasswordGenerated = generateString(passwordLength, numbers, lowerCase, upperCase, specials);
  
  return randomPasswordGenerated;
}