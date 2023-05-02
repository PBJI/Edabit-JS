/*
####  Column With Maximum Sum  ####

Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.


[Example]

_________
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
_________

Gives the array:
_________
[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
_________

You would return 2, as the 2nd column has the greatest sum.


[Notes]

Nums will always divide into equal-length groups.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
___________________________

*/
//Your code should go here:

