/*No Hidden Fees

Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.


[Examples]

_________
hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

hasHiddenFee(["$1"], "$4") ➞ true
_________



[Notes]

_________
*) Remember that each price is given as a string.
*) All $ signs will be at the beginning of the number.
_________



[arrays] [language_fundamentals] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

