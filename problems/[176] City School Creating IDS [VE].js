/*City School Creating IDS

Many IDS (for emails or Google ID) are created using the person's name.
Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.


[Examples]

_________
createID("mary", "lamb") ➞ "mLam"

createID("John", "SMITH") ➞ "jSmi"

createID("mary", "smith") ➞ "mSmi"
_________



[Notes]

There is always one character in the first name and at least three in the last name.


[formatting] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
___________________________
___________________________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
___________________________
___________________________
String.prototype.charAt()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Converting Strings to Uppercase and Lowercase
https://gomakethings.com/converting-strings-to-uppercase-and-lowercase-with-vanilla-javascript/#:~:text=JavaScript%20provides%20two%20helpful%20functions,converts%20a%20string%20to%20uppercase.
JavaScript provides two helpful functions for converting text to uppercase and lowercase. String.toLowerCase() converts a string to lowercase, and String.toUpperCase() …
___________________________
___________________________
toLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolowercase.asp
Converts a string to lowercase letters.
___________________________
___________________________
toUpperCase() Method
https://www.w3schools.com/jsref/jsref_touppercase.asp
Converts a string to uppercase letters.
___________________________
___________________________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
___________________________
*/ 
// Your code should go here:

