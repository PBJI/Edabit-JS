/*Return the Highest and Lowest Numbers

Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).


[Examples]

_________
highLow("1 2 3 4 5") ➞ "5 1"

highLow("1 2 -3 4 5") ➞ "5 -3"

highLow("1 9 3 4 -5") ➞ "9 -5"

highLow("13") ➞ "13 13"
_________



[Notes]

_________
*) All numbers are valid Int32, no need to validate them.
*) There will always be at least one number in the input string.
*) Output string must be two numbers separated by a single space, and highest number is first.
_________



[algorithms] [math] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Joins all elements of an array (or an array-like object) into a string.
___________________________
___________________________
Template Literals (template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "templ …
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array …
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
___________________________
*/ 
// Your code should go here:

