/*Alternating Ones and Zeroes

Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.


[Examples]

_________
canAlternate("0001111") ➞ true
// Can make: "1010101"

canAlternate("01001") ➞ true
// Can make: "01010"

canAlternate("010001") ➞ false

canAlternate("1111") ➞ false
_________



[Notes]

_________
*) No substring of the output may contain more than one consecutive repeating character (e.g. 00 or 11 are not allowed).
*) Return false if a string only contains 0s or only contains 1s.
_________



[logic] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
String​.prototype​.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
*/ 
// Your code should go here:

