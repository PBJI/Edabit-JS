/*Join Two Portions of a Path

Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.


[Examples]

_________
joinPath("portion1", "portion2") ➞ "portion1/portion2"

joinPath("portion1/", "portion2") ➞ "portion1/portion2"

joinPath("portion1", "/portion2") ➞ "portion1/portion2"

joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
_________



[Notes]

Try not to solve this challenge using only if-else conditions.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
String.prototype.startsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separa …
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
*/ 
// Your code should go here:

