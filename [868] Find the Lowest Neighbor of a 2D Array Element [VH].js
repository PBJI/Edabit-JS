/*
####  Find the Lowest Neighbor of a 2D Array Element  ####

Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.
_________
 arr,  x,  y
_________

_________
*) arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
*) x will hold the row coordinate, while y will hold the column coordinate.
_________

You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.


[Examples]

_________
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
_________

_________
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1


[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
_________



[Notes]

N/A


[algorithms] [arrays] [loops] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
JavaScript Multidimensional Array
https://www.javascripttutorial.net/javascript-multidimensional-array/
JavaScript does not provide the multidimensional array natively. However, you can create a multidimensional array by defining an array of elements, where each element i …
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________

*/
//Your code should go here:

