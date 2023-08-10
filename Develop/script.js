

function generatePassword() {
  // Assignment code here
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specials = "!#$%&<=>?@^_
  var password = "";
  var passwordLength = prompt('How long would you like your password to be? (Password needs to be longer than 7 characters and less than 129)'); // these are the input VALIDATIONS (>= 8 && >=128;)
  
  // We want to VALIDATE the USER INPUT
  if(passwordLength < 8) {
      alert('Password Length must be greater that 7 and less than 129!');
      return;
  } else if(passwordLength > 128) {
      alert('Password Length must be greater that 7 and less than 129!');
      return;
  }
  console.log("User input: ", passwordLength)  // ex length input is 10
  console.log("Number of Chars: ", chars.length);

 //  for (var i = 0; i <= 5; i++) {    
  for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);  // Math.random() --> 0 - 1 || 0.5632 * 74 --> 41.6768  --> after MAth.floor() -> 41
      
      console.log("rando number: ", randomNumber);
      console.log("Character at random number index: ", chars[randomNumber]);
      password = password + chars[randomNumber];
    //  password += chars[randomNumber];   // both of these lines are equivilent

      // ex Random number is 15 
      // password += chars.substring(randomNumber, randomNumber +1);
  }


  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
