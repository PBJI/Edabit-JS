/*Chocolate Dilemma

Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].
Write a function that returns true if the total area of chocolate is the same for each sister.
To illustrate:
_________
testFairness([[4, 3], [2, 4], [1, 2]],
[[6, 2], [4, 2], [1, 1], [1, 1]])
➞ true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
_________



[Examples]

_________
testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true

testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false

testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true

testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false
_________



[Notes]

N/A


[arrays] [conditions] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

