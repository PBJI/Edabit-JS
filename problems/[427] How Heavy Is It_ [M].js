/*How Heavy Is It?

Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.
How to solve:
_________
*) Calculate the volume of the cylinder.
*) Convert cm³ into dm³.
*) 1dm³ = 1L, 1L is 1Kg.
_________



[Examples]

_________
weight(4, 10) ➞ 0.5

weight(30, 60) ➞ 169.65

weight(15, 10) ➞ 7.07
_________



[Notes]

If you get stuck on a challenge, find help in Resources.


[math] [physics] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Math.PI
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
Represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
___________________________
___________________________
Volume of a Cylinder
https://www.varsitytutors.com/hotmath/hotmath_help/topics/volume-of-a-cylinder#:~:text=The%20formula%20for%20the%20volume,V%3Dπr2h%20.
A cylinder is a solid composed of two congruent circles in parallel planes, their interiors, and all the line segments parallel to the segment containing the centers of …
___________________________
___________________________
Conversion Cubic Centimetre to Cubic Decimetre
https://www.conversionunites.com/converter-cubic-centimetre-to-cubic-decimetre
Formula and table of conversion of cm3 in dm3.
___________________________
___________________________
Liters to Cubic Decimeters Conversion L to dm³
https://www.milliliter.org/liters-to-cubic-decimeters-conversion
Conversion calculator of volume metric units, unit value of Liters (L) is equal to 1 Cubic Decimeters (dm³).
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
___________________________
___________________________
Exponentiation (**)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
Returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow, except it also accepts BigInts as operands.
___________________________
___________________________
Converting Strings to Numbers
https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
Converting strings to numbers with vanilla JavaScript.
___________________________
___________________________
math.pi Constant
https://www.w3schools.com/python/ref_math_pi.asp
Returns the value pi: 3.141592653589793. It is defined as the ratio of the circumference to the diameter of a circle.
___________________________
___________________________
Arrow Function Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
Is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
___________________________
*/ 
// Your code should go here:

