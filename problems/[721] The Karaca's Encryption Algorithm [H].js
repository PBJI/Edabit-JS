/*
####  The Karaca's Encryption Algorithm  ####

Make a function that encrypts a given input with these steps:
Input: "apple"
Step 1: Reverse the input: "elppa"
Step 2: Replace all vowels using the following chart:
_________
a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
_________

Step 3: Add "aca" to the end of the word: "1lpp0aca"
Output: "1lpp0aca"


[Examples]

_________
encrypt("banana") ➞ "0n0n0baca"

encrypt("karaca") ➞ "0c0r0kaca"

encrypt("burak") ➞ "k0r3baca"

encrypt("alpaca") ➞ "0c0pl0aca"
_________



[Notes]

All inputs are strings, no uppercases and all output must be strings.


[algorithms] [cryptography] [formatting] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
___________________________
___________________________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
___________________________
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a patter …
___________________________

*/
//Your code should go here:

