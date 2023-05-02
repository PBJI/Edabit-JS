/*Right Shift by Division

The right shift operation is similar to floor division by powers of two.
Sample calculation using the right shift operator ( >> ):
_________
80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
_________

Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.


[Examples]

_________
shiftToRight(80, 3) ➞ 10

shiftToRight(-24, 2) ➞ -6

shiftToRight(-5, 1) ➞ -3

shiftToRight(4666, 6) ➞ 72

shiftToRight(3777, 6) ➞ 59

shiftToRight(-512, 10) ➞ -1
_________



[Notes]

_________
*) There will be no negative values for the second parameter y.
*) This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
*) Alternatively, you can solve this challenge via recursion.
*) A recursive version of this challenge can be found via this link.
_________



[bit_operations] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
___________________________
___________________________
Bitwise Operators
https://www.w3schools.com/js/js_bitwise.asp
In JavaScript, a number is stored as a 64-bit floating-point number but the bit-wise operation is performed on a 32-bit binary number i.e. to perform a bit-operation Ja …
___________________________
___________________________
Exponentiation (**)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
Returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow, except it also accepts BigInts as operands.
___________________________
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
*/ 
// Your code should go here:

