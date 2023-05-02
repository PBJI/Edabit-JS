/*
####  Two Product Problem  ####

Create a function that takes an array arr and a number n and returns an array of two integers from arr whose product is that of the number n of the following form:
_________
[value_at_lower_index, value_at_higher_index]
_________

Make sure that you return an array of two integers that exactly divides n (product of n) and that the indices coincide the above format. The sorting of the values therefore is based on the indices ascendingly.


[Examples]

_________
twoProduct([1, 2, 3, 9, 4, 5, 15, 3], 45) ➞ [9, 5]
// at index 5 which has the value 5 is  a full match
// to the value at index 3 which is 9
// the closest gap between indices that equates
// to the product which is 45

twoProduct([1, 2, 3, 9, 4, 15, 3, 5], 45) ➞ [3, 15]
// at index 5 which has the value 15 is a full match
// to the value at index 2 which is 3
// the closest gap between indices that equates
// to the product which is 45

twoProduct([1,  2, -1,  4,  5,  6,  10, 7], 20) ➞ [4, 5]
// at index 4 which has the value 5 is a full match
// to the value at index 3 which is 4
// a full match can only be achieved  if you've found the multiplier at an
// index lower than the current index, thus, 5 (@ index 4) has a pair lower
// than its index which is the value 4 (@ index 3), so, 5*4 = 20, in which 5
// has a higher index (4) than 4 which has an index value of 3

twoProduct([1, 2, 3, 4, 5,  6, 7, 8, 9, 10], 10) ➞ [2, 5]

twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined
_________



[Notes]

_________
*) There will be no duplicates.
*) Return undefined if no match is found.
*) Always consider that the pair of the element-in-question (the current item pointed to during the search), is at its left-side.
*) In the array, there can be multiple solutions so return the solution with the lowest sum of indexes of product pairs (i.e. N = 10, solutions = [[2, 5], [10, 1]], indexes = [[600, 3000], [800, 900]], return [10, 1]).
*) The array can have multiple solutions that share the lowest sum of indexes, so return the first full match that's found (as described above) that also has the lowest sum of indexes.
_________



[conditions] [data_structures] [loops] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________

*/
//Your code should go here:

