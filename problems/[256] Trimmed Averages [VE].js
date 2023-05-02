/*Trimmed Averages

Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.


[Examples]

_________
trimmedAverages([4, 5, 7, 100]) ➞ 6
// Average of 5 and 7

trimmedAverages([10, 25, 5, 15, 20]) ➞ 15
// Average of 10, 15 and 20

trimmedAverages([1, 1, 1]) ➞ 1
// 1
_________



[Notes]

_________
*) Round to the nearest whole number.
*) Array size is greater than 2.
_________



[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
___________________________
___________________________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
___________________________
___________________________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
___________________________
*/ 
// Your code should go here:

