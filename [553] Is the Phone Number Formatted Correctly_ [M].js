/*Is the Phone Number Formatted Correctly?

Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
This is what a valid phone number looks like:
_________
(123) 456-7890
_________



[Examples]

_________
isValidPhoneNumber("(123) 456-7890") ➞ true

isValidPhoneNumber("1111)555 2345") ➞ false

isValidPhoneNumber("098) 123 4567") ➞ false
_________



[Notes]

Don't forget the space after the closing parenthesis.


[formatting] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
regex.test V.S. string.match
https://stackoverflow.com/questions/10940137/regex-test-v-s-string-match-to-know-if-a-string-matches-a-regular-expression
Used to retrieve the matches when matching a string against a regular expression. Returns an array with the matches or null if there are none.
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the matches when matching a string against a regular expression.
___________________________
___________________________
A Practical Guide to Regular Expressions
https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
When you first encounter Regular Expressions, they may seem a bit weird, like a random string of gibberish. While they might look awkward (with a somewhat confusing syn …
___________________________
___________________________
Working with Phone Numbers in JavaScript
https://www.sitepoint.com/working-phone-numbers-javascript/
This article explores the pitfalls associated with working with phone numbers. It also shows some common ways of overcoming these pitfalls.
___________________________
*/ 
// Your code should go here:

