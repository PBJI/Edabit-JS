/*Divisible by Left Digit?

Create a function that takes a number n and checks if each digit is divisible by the digit on its left. Return a boolean array depending on the condition checks.


[Examples]

_________
divisibleByLeft(73312) ➞ [false, false, true, false, true]
// no element left to 7 = false
// 3/7 = false
// 3/3 = true
// 1/3 = false
// 2/1 = true

divisibleByLeft(1) ➞ [false]

divisibleByLeft(635) ➞ [false, false, false]
_________



[Notes]

The array should always start with false as there is no digit to the left of the first digit.


[logic] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a patter …
___________________________
*/ 
// Your code should go here:

