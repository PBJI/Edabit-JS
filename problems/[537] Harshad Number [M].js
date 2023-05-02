/*Harshad Number

A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.


[Examples]

_________
isHarshad(75) ➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12

isHarshad(171) ➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171

isHarshad(481) ➞ true

isHarshad(89) ➞ false

isHarshad(516) ➞ true

isHarshad(200) ➞ true
_________



[Notes]

_________
*) A recursive version of this challenge can be found here.
_________



[loops] [math] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
___________________________
*/ 
// Your code should go here:

