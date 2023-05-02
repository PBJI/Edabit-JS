/*Disarium Number

A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
Create a function that determines whether a number is a Disarium or not.


[Examples]

_________
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544) ➞ false

isDisarium(518) ➞ true

isDisarium(8) ➞ true

isDisarium(466) ➞ false
_________



[Notes]

_________
*) Position of the digit is 1-indexed.
*) A recursive version of this challenge can be found via this link.
_________



[loops] [math] [numbers] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
String split() Method
https://www.w3schools.com/jsref/jsref_split.asp
Used to split a string into an array of substrings, and returns the new array.
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Given two arguments, base and exponent, returns baseexponent.
___________________________
___________________________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected …
___________________________
*/ 
// Your code should go here:

