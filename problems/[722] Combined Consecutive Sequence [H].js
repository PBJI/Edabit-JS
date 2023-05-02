/*
####  Combined Consecutive Sequence  ####

Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.


[Examples]

_________
consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true

consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false

consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false

consecutiveCombo([44, 46], [45]) ➞ true
_________



[Notes]

_________
*) The input arrays will have unique values.
*) The input arrays can be in any order.
_________



[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
What is the summation of consecutive numbers not starting from one?
https://www.quora.com/What-is-the-summation-of-consecutive-numbers-not-starting-from-one
As the numbers are consecutive, symmetry tells us that the average of the numbers must be the average of the first and last terms. Since the average is also the sum div …
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________

*/
//Your code should go here:

