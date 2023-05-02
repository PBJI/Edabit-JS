/*The DECIMATOR

Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).
Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!


[Examples]

_________
DECIMATOR("1234567890") ➞ "123456789"
// 10 characters, removed 1.

DECIMATOR("1234567890AB") ➞ "1234567890"
// 12 characters, removed 2.

DECIMATOR("123") ➞ "12"
// 3 characters, removed 1.

DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// 21 characters, removed 3.
_________



[Notes]

Make sure to remove characters from the end of the string.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
String.prototype.substr()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
___________________________
___________________________
String Length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
___________________________
___________________________
How do I chop/slice/trim off last character in string using Javascript?
https://stackoverflow.com/questions/952924/how-do-i-chop-slice-trim-off-last-character-in-string-using-javascript
I have looked at trim, but it looks like it is only trimming whitespace and slice which I don't see how this would work. Any suggestions?
___________________________
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
*/ 
// Your code should go here:

