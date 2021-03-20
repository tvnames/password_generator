// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Please enter a password between 8 and 128 characters \nMust be between 8 characters and 128 characters.");

  if (passwordLength > 7 || passwordLength < 129) {
    

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specChar = "!@#$%&^";
    var numbers = "0123456789";
    var options = "";  //the purpose of this variable is to contain all the categories in use
    var passWord = "";
// the purpose of this function is to add users choice and a character of user choice
    function userChoice (adds) {
      options = options + adds;
      const addNecessaryChar = Math.floor(Math.random() * adds.length);
      const adding = (adds.charAt(addNecessaryChar));
      passWord = passWord + adding;
    }

    var userLower = confirm("Do you want to use lower case?");
    var userUpper = confirm("Do you want to use upper case?");
    var userChar = confirm("Do you want to use a special character?");
    var userNumb = confirm("Do you want to use a number?");

    if (userLower || userUpper || userChar || userNumb) {
     
      if (userLower == true) {
       userChoice(lowerCase);
      }
      if (userUpper == true) {
       userChoice(upperCase);
      }

      if (userChar == true) {
        userChoice(specChar);
      }

      if (userNumb == true) {
        userChoice(numbers);
      }
    
      while (passWord.length < passwordLength) {
        var random = (Math.floor(Math.random() * options.length));
        var result = (options.charAt(random));
        passWord = passWord + result;
      }
      // Array Shuffle
      passwordText.value = passWord;
    }else {
      alert("Please select at least one category");
    }

  } else {
    alert("Please use a number between 8 and 128");

  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
