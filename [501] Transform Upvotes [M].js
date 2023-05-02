/*Transform Upvotes

Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.


[Examples]

_________
transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
_________



[Notes]

Return the upvotes as an array.


[arrays] [higher_order_functions] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
Number.parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
Parses a string argument and returns a floating point number.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
replace() Method
https://www.w3schools.com/jsref/jsref_replace.asp
Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. Note: If you are replacing a value …
___________________________
___________________________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() method …
___________________________
___________________________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
How to Convert a String to a Number in JavaScript
https://flaviocopes.com/how-to-convert-string-to-number-javascript/
The best way in my opinion is to use the Number object, in a non-constructor context (without the new keyword): const count = Number('1234') //1234 This takes care of …
___________________________
*/ 
// Your code should go here:

