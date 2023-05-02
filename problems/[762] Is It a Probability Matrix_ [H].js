/*
####  Is It a Probability Matrix?  ####

In probability theory, a probability matrix is a matrix such that:
_________
*) The matrix is a square matrix (same number of rows as columns).
*) All entries are probabilities, i.e. numbers between 0 and 1.
*) All rows add up to 1.
_________

The following is an example of a probability matrix:
_________
[
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]
_________

Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.
Write a function that determines if a matrix is a probability matrix or not.


[Examples]

_________
isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]) ➞ true

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3]
]) ➞ false

// Not a square matrix.

isProbMatrix([
  [2, -1],
  [-1, 2]
]) ➞ false

// Entries not between 0 and 1.

isProbMatrix([
  [0, 1],
  [1, 0]
]) ➞ true

isProbMatrix([
  [0.5, 0.4],
  [0.5, 0.6]
]) ➞ false

// Rows do not add to 1.
_________



[Notes]

Fun fact: for most probability matrices M (for example, if M has no zero entries), the matrix powers M^n converge (as n increases) to a matrix where all rows are identical.


[arrays] [math] [numbers] [validation] 



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
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________

*/
//Your code should go here:

