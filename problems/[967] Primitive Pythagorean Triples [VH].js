/*
####  Primitive Pythagorean Triples  ####

A Pythagorean triple is a set of three integer numbers that form a right triangle. The sum of the squares of the two smaller numbers should equal the square of the largest number. Given three numbers a, b and c (c being the largest):
_________
a^2 + b^2 = c^2
_________

Furthermore, a Pythagorean triple is said to be primitive if the three numbers are pairwise coprime — that is, the greatest common prime factor between any two numbers is 1.
Create a function that takes an array of three numbers (unordered) and returns true if the numbers constitute a primitive Pythagorean triple, false otherwise.


[Examples]

_________
isPrimPythTriple([4, 5, 3]) ➞ true

isPrimPythTriple([7, 12, 13]) ➞ false

isPrimPythTriple([39, 15, 36]) ➞ false
// Pythagorean triple, but not primitive.

isPrimPythTriple([77, 36, 85]) ➞ true
_________



[Notes]

N/A


[algebra] [conditions] [higher_order_functions] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.hypot()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
Returns the square root of the sum of squares of its arguments.
___________________________
___________________________
Array.prototype.sort()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
___________________________
___________________________
Array.prototype.every()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________

*/
//Your code should go here:

