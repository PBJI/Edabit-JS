/*Sastry Numbers

In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.
Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.


[Examples]

_________
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)
_________



[Notes]

_________
*) A perfect square is a number with a square root equals to a whole integer.
*) You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
*) In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.
_________



[algorithms] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
___________________________
___________________________
Sastry Numbers
http://www.numbersaplenty.com/set/Sastry_number/
A number n is a Sastry number if concatenated with n+1 it gives a square. For example, 183 is a Sastry number because 183184 is the square of 428. F.Luca has proved …
___________________________
___________________________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
___________________________
___________________________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
___________________________
___________________________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs cal …
___________________________
*/ 
// Your code should go here:

