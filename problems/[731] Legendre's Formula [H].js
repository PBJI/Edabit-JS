/*
####  Legendre's Formula  ####

Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.
Legendre's formula example (p = 2 and n = 27):

So 2^23 is the largest power of 2 that divides 27!.
The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.
To illustrate:
_________
p = 5
n = 100

int(100/5) + int(100/25)
// No 100/125 because 125 > 100.
_________

_________
p = 2
n = 128

int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)
_________

Given p and n, return the result of Legendre's formula (see Resources).


[Examples]

_________
legendre(5, 100) ➞ 24

legendre(2, 128) ➞ 127

legendre(3, 50) ➞ 22
_________



[Notes]

_________
*) p and n will be positive integers.
*) When p exceeds n, the result should be 0.
_________



[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Legendre's Formula
https://en.wikipedia.org/wiki/Legendre%27s_formula
Gives an expression for the exponent of the largest power of a prime p that divides the factorial n!. It is named after Adrien-Marie Legendre. It is also sometimes know …
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, base exponent.
___________________________
___________________________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
___________________________
___________________________
Math.floor()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Legendre’s Formula
https://www.geeksforgeeks.org/legendres-formula-highest-power-of-prime-number-that-divides-n/
Given an integer n and a prime number p, find the largest x such that px (p raised to power x) divides n! (factorial).
___________________________

*/
//Your code should go here:

