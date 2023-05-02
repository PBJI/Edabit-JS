/*Trace That Matrix

Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
As an example, for:
_________
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
_________

... the trace is 1 + 5 + 9 = 15.
Write a function that takes a square matrix and computes its trace.


[Examples]

_________
trace([
  [1, 4],
  [4, 1]
]) ➞ 2

// 1 + 1 = 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ 15

// 1 + 5 + 9 = 15

trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]) ➞ 10

// 1 + 2 + 3 + 4 = 10
_________



[Notes]

As in the examples, the size of the matrices will vary (but they will always be square).


[arrays] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
___________________________
___________________________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
___________________________
___________________________
Main Diagonal
https://chortle.ccsu.edu/VectorLessons/vmch13/vmch13_17.html
The main diagonal of a matrix consists of those elements that lie on the diagonal that runs from top left to bottom right.
___________________________
*/ 
// Your code should go here:

