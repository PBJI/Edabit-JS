/*Capitalize the First Letter of Each Word

Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.


[Examples]

_________
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
_________



[Notes]

_________
*) You can expect a valid string for each test case.
*) Some words may contain more than one uppercase letter (see example #4).
_________



[formatting] [loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Joins all elements of an array (or an array-like object) into a string.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
___________________________
___________________________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to upper case.
___________________________
___________________________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns a subset of a string between one index and another, or through the end of the string.
___________________________
___________________________
slice() Method
https://www.w3schools.com/jsref/jsref_slice_array.asp
Returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does n …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in this array.
___________________________
___________________________
RegExp Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Used for matching text with a pattern.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a st …
___________________________
___________________________
Lookahead and lookbehind
https://javascript.info/regexp-lookahead-lookbehind
Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern. There’s a special syntax for that, called “lookahead” and …
___________________________
*/ 
// Your code should go here:

