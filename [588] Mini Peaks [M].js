/*Mini Peaks

Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.


[Examples]

_________
miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.

miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]

miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []
_________



[Notes]

_________
*) Do not count boundary numbers, since they only have one left/right neighbor.
*) If no such numbers exist, return an empty array.
_________



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Array​.prototype​.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array​.prototype​.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Comparison and Logical Operators
https://www.w3schools.com/js/js_comparisons.asp
Comparison and Logical operators are used to test for true or false.
___________________________
*/ 
// Your code should go here:

