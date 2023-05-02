/*Pythagorean Triplet

Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.


[Examples]

_________
isTriplet(3, 4, 5) ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12) ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3) ➞ false
// 1² + 2² = 5
// 3² = 9
_________



[Notes]

Numbers may not be given in a sorted order.


[geometry] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
Math.hypot()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
Returns the square root of the sum of squares of its arguments, that is...
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow#:~:text=The%20Math.-,pow()%20function%20returns%20the%20base%20to%20the%20exponent%20power,(%20Math%20has%20no%20constructor).
Returns the base to the exponent power.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
Sorting Arrays
https://www.w3schools.com/js/js_array_sort.asp
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
___________________________
___________________________
Pythagoras Theorem
https://www.mathsisfun.com/pythagoras.html
In a right-angled triangle: the square of the hypotenuse is equal to the sum of the squares of the other two sides.
___________________________
*/ 
// Your code should go here:

