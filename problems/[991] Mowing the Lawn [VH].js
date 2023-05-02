/*
####  Mowing the Lawn  ####

Create a function that takes in an array of grass heights and a variable sequence of lawn mower cuts and outputs the array of successive grass heights.
If after a cut, any single element in the array reaches zero or negative, return "Done" instead of the array of new heights.
A demo:
_________
cuttingGrass([3, 4, 4, 4], 1, 1, 1) ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]

// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".
_________



[Examples]

_________
cuttingGrass([5, 6, 7, 5], 1, 2, 1)
➞ [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]]

cuttingGrass([4, 4, 4, 4], 1, 1, 1, 1)
➞ [[3, 3, 3, 3], [2, 2, 2, 2], [1, 1, 1, 1], "Done"]

cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1)
➞ [[6, 7, 7, 6, 6], [3, 4, 4, 3, 3], [1, 2, 2, 1, 1], "Done"]

cuttingGrass([1, 0, 1, 1], 1, 1, 1) ➞ ["Done", "Done", "Done"]
_________



[Notes]

_________
*) The number of lawn cuts is variable.
*) There will be at least one cut.
*) Return "Done" onwards for each additional cut if the grass has already been completely mowed (see fourth example).
_________



[arrays] [higher_order_functions] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows us to represent an indefinite number of arguments as an array.
___________________________

*/
//Your code should go here:

