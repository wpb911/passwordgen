// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var password = "testPassword"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    // lower case array
    var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //upper case array 
    var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //number array 
    var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
    //special character arrauy 
    var specialArr = [" ","!","\"","#","$","%","&","'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    // total character array based on choices 
    var wholeChar = [];
    //final password array 
    var pwdArr = [];
    //prompt for number of characters in password 
    var numCount = prompt("How many characters do you want in your password (choose between 8 - 128");
    // logical choices 
    var lowerLet = confirm("Do you desire lower case letters in your password");
    var upperLet = confirm("Do you desire upper case letters in your password");
    var numbers = confirm("Do you desire numbers in your password");
    var specials = confirm("Do you desire special characters in your password");
    
    
    if ( (parseInt(numCount) >= 8 && parseInt(numCount) <= 128) && (lowerLet || upperLet || numbers || specials) ) {
        alert("Your password will be generated.");
        if (lowerLet){
            wholeChar = wholeChar.concat(lowerArr) ;

        }
        if (upperLet){
            wholeChar = wholeChar.concat(upperArr) ;

        }
        
        if (numbers){
            wholeChar = wholeChar.concat(numberArr) ;

        }
        if (specials){
            wholeChar = wholeChar.concat(specialArr) ;

        }

        for(var i = 0; i < numCount; i++){
            var num = Math.floor(Math.random() * 10)
            pwdArr.push(wholeChar[num]);
            console.log("numCount = " + numCount);
            
            console.log(" num = " + num);
            console.log(" pwd = " + pwdArr[i]);




        }
        return (pwdArr.join(''));
        
    }   
    else {
        alert("You must pick at least one character type and password length between 8 - 128 to generate a password.");
    }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
