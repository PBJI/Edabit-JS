/*
####  Spotlight Map  ####

Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.


[Examples]

_________
spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28]
]


spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]) ➞ [
  [21, 31, 28, 24, 14],
  [21, 31, 28, 24, 14]
]


spotlightMap([[3]]) ➞ [[3]]
_________



[Notes]

_________
*) Note that all numbers have a spotlight sum, including numbers on the edges.
*) All inputs will be valid grid (all rows will have the same length).
_________



[algorithms] [arrays] [conditions] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
___________________________

*/
//Your code should go here:

