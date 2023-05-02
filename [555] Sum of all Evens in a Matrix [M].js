/*Sum of all Evens in a Matrix

Create a function that returns the sum of all even elements in a 2D matrix.


[Examples]

_________
sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]) ➞ 6

// 2 + 4 = 6

sumOfEvens([
  [1, 1],
  [1, 1]
]) ➞ 0

sumOfEvens([
  [42, 9],
  [16, 8]
]) ➞ 66

sumOfEvens([
  [],
  [],
  []
]) ➞ 0
_________



[Notes]

_________
*) Submatrices will be of equal length.
*) Return 0 if the 2D matrix only consists of empty submatrices.
_________



[arrays] [control_flow] [loops] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Array.flat() Method
https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
It was always complicated to flatten an array in #JavaScript. Not anymore! ES2019 introduced a new method that flattens arrays. And there’s a “depth” parameter, so you …
___________________________
*/ 
// Your code should go here:

