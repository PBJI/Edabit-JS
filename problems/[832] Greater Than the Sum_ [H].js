/*
####  Greater Than the Sum?  ####

For each number in an array, check if that number is greater than the sum of all numbers that appear before it in the array. If all numbers in the array pass this test, return true. Return false otherwise.


[Examples]

_________
greaterThanSum([2, 3, 7, 13, 28]) ➞ true

// 3 > 2 = true
// 7 > 2 + 3 = true
// 13 > 2 + 3 + 7 = true
// 28 > 2 + 3 + 7 + 13 = true

greaterThanSum([1, 2, 4, 6, 13]) ➞ false

// 2 > 1 = true
// 4 > 1 + 2 = true
// 6 > 1 + 2 + 4 = false
// 13 > 1 + 2 + 4 + 6 = false
_________



[Notes]

The first number in any array will always pass the test.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
___________________________

*/
//Your code should go here:

