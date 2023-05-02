/*ATM PIN Code Validation

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.


[Examples]

_________
validatePIN("1234") ➞ true

validatePIN("12345") ➞ false

validatePIN("a234") ➞ false

validatePIN("") ➞ false
_________



[Notes]

_________
*) Some test cases contain special characters.
*) Empty strings must return false.
_________



[regex] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Regexp
Creates a regular expression object for matching text with a pattern.
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
String.prototype.search()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Executes a search for a match between a regular expression and this String object.
___________________________
___________________________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
___________________________
___________________________
Match specific length x or y
https://stackoverflow.com/questions/12784338/match-specific-length-x-or-y
I'd like a regex that is either X or Y characters long. For example, match a string that is either 8 or 11 characters long. I have currently implemented this like so: ^ …
___________________________
*/ 
// Your code should go here:

