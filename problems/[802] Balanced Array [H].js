/*
####  Balanced Array  ####

Given an array of unknown length, but with an even amount of elements (numbers), copy the half with the highest sum of numbers to the other half of the array. If the sum of the first half equals the sum of the second half, return the original array.


[Examples]

_________
balanced([1, 2, 4, 6, 3, 1]) ➞ [6, 3, 1, 6, 3, 1]

balanced([88, 3, 27, 5, 9, 0, 13, 10]) ➞ [88, 3, 27, 5, 88, 3, 27, 5]

balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]) ➞ [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]
_________



[Notes]

Each array has an even amount of elements.


[arrays] [conditions] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.copyWithin()
https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
Shallow copies part of an array to another location in the same array and returns it without modifying its length.
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________

*/
//Your code should go here:

