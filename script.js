// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    // lower case array
    var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // upper case array 
    var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // number array 
    var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
    // special character array 
    var specialArr = [" ","!","\"","#","$","%","&","'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    
    // complete character array based on choices 
    var wholeChar = [];
    
    // verify the variables meet the required criteria
    var verify = false ;

    // final password array after password computation
    var pwdArr = [];
    
    // prompt for number of characters in password 
    var numCount = prompt("How many characters do you want in your password (choose between 8 - 128).");
    
    // logical choices for charater types desired 
    var lowerLet = confirm("Do you desire lower case letters in your password");
    var upperLet = confirm("Do you desire upper case letters in your password");
    var numbers = confirm("Do you desire numbers in your password");
    var specials = confirm("Do you desire special characters in your password");

    if ( (parseInt(numCount) >= 8 && parseInt(numCount) <= 128) && (lowerLet || upperLet || numbers || specials) ) {
        
        //alert("Your password will be generated with. lower = "  + lowerLet + " upper = " + upperLet + " numeric = " + numbers + " special= " + specials);
        
        verify = true ;

        // only lower case letters in password 
        if (lowerLet && !upperLet && !numbers && !specials ) {
            wholeChar = wholeChar.concat(lowerArr);
                        
        }
        // only upper case letters in password
        else if (!lowerLet && upperLet && !numbers && !specials ) {
            wholeChar = wholeChar.concat(upperArr);
                       
        }
        // only numbers in password  
        else if (!lowerLet && !upperLet && numbers && !specials ) {
            wholeChar = wholeChar.concat(numberArr);
                       
        }
        // only special characters in password 
        else if (!lowerLet && !upperLet && !numbers && specials ) {
            wholeChar = wholeChar.concat(specialArr);
            
        }
        // only lowercase and uppercase characters in password 
        else if (lowerLet && upperLet && !numbers && !specials) {
            wholeChar = wholeChar.concat(lowerArr);
            wholeChar = wholeChar.concat(upperArr);
                        
        }
        // only lowercase and numeric characters in password 
        else if (lowerLet && !upperLet && numbers && !specials) {
            wholeChar = wholeChar.concat(lowerArr);
            wholeChar = wholeChar.concat(numberArr);
                       
        }
        // only lowercase and special characters in password 
        else if (lowerLet && !upperLet && !numbers && specials) {
            wholeChar = wholeChar.concat(lowerArr); 
            wholeChar = wholeChar.concat(specialArr); 

        }
        // only uppercase and numeric characters in password 
        else if (!lowerLet && upperLet && numbers && !specials) {
            wholeChar = wholeChar.concat(upperArr) ;
            wholeChar = wholeChar.concat(numberArr) ;
            
        }
        // only uppercase and special characters in password 
        else if (!lowerLet && upperLet && !numbers && specials) {
            wholeChar = wholeChar.concat(upperArr) ;
            wholeChar = wholeChar.concat(specialArr) ;

        }
        // only numeric and special characters in password 
        else if (!lowerLet && !upperLet && numbers && specials) {
            wholeChar = wholeChar.concat(numberArr) ;
            wholeChar = wholeChar.concat(specialArr) ;

        }
        // only lower, upper and numeric characters in password 
        else if (lowerLet && upperLet && numbers && !specials)  {
            wholeChar = wholeChar.concat(lowerArr) ;
            wholeChar = wholeChar.concat(upperArr) ;
            wholeChar = wholeChar.concat(numberArr) ;

        }
        // only lower, upper and special characters in password 
        else if (lowerLet && upperLet && !numbers && specials) {
            wholeChar = wholeChar.concat(lowerArr) ;         
            wholeChar = wholeChar.concat(upperArr) ;
            wholeChar = wholeChar.concat(specialArr) ;   
        
        }
        // only lower, numeric and special characters in password 
        else if (lowerLet && !upperLet && numbers && specials) {
            wholeChar = wholeChar.concat(lowerArr) ;        
            wholeChar = wholeChar.concat(numberArr) ;
            wholeChar = wholeChar.concat(specialArr) ;   
        
        }
        // only upper, numeric and special characters in password 
        else if (!lowerLet && upperLet && numbers && specials) {           
            wholeChar = wholeChar.concat(upperArr) ; 
            wholeChar = wholeChar.concat(numberArr) ;
            wholeChar = wholeChar.concat(specialArr) ;
       
        }
       // all character types should be in the password 
        else if (lowerLet && upperLet && numbers && specials) {
            wholeChar = wholeChar.concat(lowerArr) ;
            wholeChar = wholeChar.concat(upperArr) ;
            wholeChar = wholeChar.concat(numberArr) ;
            wholeChar = wholeChar.concat(specialArr) ; 
    
        }  
    }
    
        // generate a random password from the concatenated string of the user's choices
        if (verify) {
            for(var i = 0; i < numCount; i++){
                var num = Math.floor(Math.random() * wholeChar.length)
                pwdArr.push(wholeChar[num]);
                
            }
        }
        else {
            alert("You must pick at least one valid character type and password length between 8 - 128 to generate a password.");
            verify = false;
        }
        
        // return the generated password
        return (pwdArr.join(''));

}