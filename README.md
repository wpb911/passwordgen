# Random Password Generator

This is a project that requires the development of a random password generator that will allow for character choices from lowercase, uppercase, numbers and special character types.  The password must have at least one of the character types and be from a minimum of 8 to a maximum of 128 characters in length.  The app is required to run in the browser and to dynamically update and be responsive when used on multiple screen sizes. The password generator supports all of the special characters located at [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Enhancements 

The algorithm for the password generator creates the password using a random number generator which is seeded by the number of characters the user chooses for the length of the password and the character string length created by the concatenation of the requested character types.  Once the strings are created they are randomly chosen from till the requested length is satisfied.  The code verifies the users inputs for both length and required character types and notifies the user if the request for the password does not satisfy the minimum requirements.

## Usage

When viewing the page a sample rendering looks like [passwordgen screenshot](passwordgen.png)

To view the actual page in realtime please use the chrome browser to go to [passwordgen] (https://wpb911.github.io/passwordgen/)

## Contributing 
Pull request are welcome.  Feedback is appreciated.

## License
[The Unlicense](LICENSE)
