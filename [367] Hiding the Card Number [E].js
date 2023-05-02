/*Hiding the Card Number

Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.


[Examples]

_________
cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"
_________



[Examples]

_________
*) Ensure you return a string.
*) The length of the string must remain the same as the input.
_________



[formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
Masking last 4 digits in JavaScript
https://stackoverflow.com/questions/27545202/masking-last-4-digits-in-javascript
Here I am using regex pattern to mask last 4 digits for Credit Card number. It is applicable for only 16 digit credit card numbers. But, I need to mask the incoming num …
___________________________
___________________________
Array splice() Method
https://www.w3schools.com/jsref/jsref_splice.asp
Adds/removes items to/from an array, and returns the removed item(s). Note: This method changes the original array.
___________________________
___________________________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
*/ 
// Your code should go here:

