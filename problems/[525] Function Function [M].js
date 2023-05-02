/*Function Function

Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.


[Examples]

_________
const first = factory(15)
// returns a function first.

const arr = [30, 45, 60]
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

first(arr) ➞ [2, 3, 4]
_________

_________
const second = factory(2)
// returns a function second.

const arr = [2, 4, 6]
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

second(arr) ➞ [1, 2, 3]
_________



[Notes]

Rounding not required.


[arrays] [closures] [functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
Closures
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
Is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you acc …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

