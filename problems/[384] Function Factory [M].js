/*Function Factory

Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
Please check the examples below for a clearer representation of the behavior expected.


[Examples]

_________
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15
_________



[Notes]

All inputs will be valid numbers.


[closures] [functional_programming] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
___________________________
Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
A closure is the combination of a function and the lexical environment within which that function was declared.
___________________________
___________________________
Function Closures
https://www.w3schools.com/js/js_function_closures.asp
A closure is a function having access to the parent scope, even after the parent function has closed. A local variable can only be used inside the function where it is …
___________________________
*/ 
// Your code should go here:

