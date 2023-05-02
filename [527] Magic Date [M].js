/*Magic Date

You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date formatted d m yyyy (no error checking required).
Determine whether the entered date is a magic date. Here are the rules for a magic date:
_________
*) mm * dd is a 1-digit number that matches the last digit of yyyy or
*) mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
*) mm * dd is a 3-digit number that matches the last 3 digits of yyyy
_________

The program should then display true if the date is magic, or false if it is not.


[Examples]

_________
Magic("1 1 2011") ➞ true

Magic("4 1 2001") ➞ false

Magic("5 2 2010") ➞ true

Magic("9 2 2011") ➞ false
_________



[Notes]

N/A


[dates] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment in ES6 — Arrays
https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
Destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or pr …
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
___________________________
___________________________
Date Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
___________________________
*/ 
// Your code should go here:

