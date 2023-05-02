/*
####  Splitting Objects Inside an Array  ####

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.


[Examples]

_________
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
_________



[Notes]

_________
*) The input array will never be empty.
*) Objects will always have a name and quantity over 0.
*) The returned object should have each fruit in the same order as the original.
_________



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________

*/
//Your code should go here:

