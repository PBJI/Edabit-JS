/*Difference of Volumes of Cuboids

Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.


[Examples]

_________
findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
_________



[Notes]

Each array element is greater than 0.


[arrays] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Difference of Volumes of Cuboids
https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript
We are required to write a JavaScript function that takes in two arrays, specifying the lengths, widths, and heights of two cuboids.
___________________________
*/ 
// Your code should go here:

