/*Summing a Slice

Given an array and an integer n, return the sum of the first n numbers in the array.


[Worked Example]

_________
sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
_________



[Examples]

_________
sliceSum([1, 3, 2], 2) ➞ 4

sliceSum([4, 2, 5, 7], 4) ➞ 18

sliceSum([3, 6, 2], 0) ➞ 0
_________



[Notes]

If n is larger than the length of the array, return the sum of the whole array.


[arrays] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
reduce() Method
https://www.w3schools.com/jsref/jsref_reduce.asp
Reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right).
___________________________
___________________________
Array.prototype.length
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
slice() Method
https://www.w3schools.com/jsref/jsref_slice_array.asp
Returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does no …
___________________________
*/ 
// Your code should go here:

