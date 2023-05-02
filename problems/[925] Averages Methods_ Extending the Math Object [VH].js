/*
####  Averages Methods: Extending the Math Object  ####

In this exercise the goal is to extend the Math() object adding four methods for calculate different types of averages.
_________
*) Arithmetic Mean: The division of the sum of the numbers by the quantity of numbers.
avg of [A, B, C] ➞ (A + B + C) / 3
*) Quadratic Mean: Also called Root Mean Square, is the square root of the arithmetic mean of the squared numbers.
qAvg of [A, B, C] ➞ ²√ ( (A² + B² + C²) / 3 )
*) Harmonic Mean: is the reciprocal of the arithmetic mean of the numbers reciprocals.
hAvg of [A, B, C] ➞ ( (A⁻¹ + B⁻¹ + C⁻¹) / 3 )⁻¹
*) Geometric Mean: is the n-th root of the product of the numbers, where n is the quantity of numbers.
gAvg of [A, B, C] ➞ ³√ (A * B * C)
_________

For each average type build a function that, given a required parameter (the array containing the numbers) and an optional one (the precision, or number of floating digits to return) returns the result as a number.


[Examples]

_________
Math.avg([3, 5, 7])➞ 5
//Precision is an optional parameter.
// (3 + 5 + 7) / 3 = 15 / 3 = 5

Math.qAvg([3, 5, 7], 1) ➞ 5.3
// ²√ ( (3² + 5² + 7²) / 3 ) = ²√ (83 / 3) = 5.3

Math.hAvg([3, 5, 7], 1) ➞ 4.4
// Precision is required only for the final result.
// (3⁻¹ + 5⁻¹ + 7⁻¹) / 3 )⁻¹ = (0.676... / 3)⁻¹ = 4.4

Math.gAvg([3, 5, 7], 1) ➞ 4.7
// ³√ (3 * 5 * 7) = ³√ 105 = 4.7
_________



[Notes]

_________
*) Pay attention to cumulative rounding errors! Precision is required only if the parameter is indicated and only for the final result.
*) All given arrays are valid ones containing positive numbers greater than zero, either integers or float.
*) REVISION NOTE: Implementing a method for to get the n-th root of a number can lead to rounding imprecisions if you use a combination of exponential and logarithm instead of a direct formula. Thanks to @Pustur and @xAlien95, see the Comments tab for more info. After the update, some old solution could fail the last test for the geometric average.
_________



[language_fundamentals] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Geometric Mean
https://en.wikipedia.org/wiki/Geometric_mean
A mean or average, which indicates the central tendency or typical value of a set of numbers by using the product of their values (as opposed to the arithmetic mean whi …
___________________________
___________________________
Arithmetic Mean
https://en.wikipedia.org/wiki/Arithmetic_mean
The arithmetic mean, or simply the mean or average when the context is clear, is the sum of a collection of numbers divided by the count of numbers in the collection. T …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Math Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
___________________________
___________________________
Harmonic Mean
https://en.wikipedia.org/wiki/Harmonic_mean
One of several kinds of average, and in particular one of the Pythagorean means. Typically, it is appropriate for situations when the average of rates is desired.
___________________________
___________________________
Root Mean Square
https://en.wikipedia.org/wiki/Root_mean_square
Defined as the square root of the mean square (the arithmetic mean of the squares of a set of numbers). The RMS is also known as the quadratic mean and is a particular …
___________________________
___________________________
Calculate the Nth Root of a Number
https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number
I'm trying to get the nth root of a number using JavaScript, but I don't see a way to do it using the built in Math object. Am I overlooking something? If not...
___________________________

*/
//Your code should go here:

