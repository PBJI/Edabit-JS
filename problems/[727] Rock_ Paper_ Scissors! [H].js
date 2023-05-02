/*
####  Rock, Paper, Scissors!  ####

Abigail and Benson are playing Rock, Paper, Scissors.
Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
_________
*) R stands for Rock
*) P stands for Paper
*) S stands for Scissors
_________



[Examples]

_________
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
_________



[Notes]

N/A


[arrays] [conditions] [control_flow] [games] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
For Loop
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Object initializer
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list o …
___________________________
___________________________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition i …
___________________________
___________________________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
Work with JavaScript Arrays like a Boss
https://hackernoon.com/work-with-javascript-arrays-like-a-boss-97207a042e42
It is similar to any variable, in that you can use it to hold any type of data. However, it has one important difference: it can hold more than one item of data at a ti …
___________________________
___________________________
Array.prototype.includes()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Rock Paper Scissors
https://codereview.stackexchange.com/questions/54240/rock-paper-scissors-in-javascript
A few weeks I need to give a workshop about JavaScript to colleagues. They do not have much experience with JavaScript so I will explain the basics of JavaScript. At th …
___________________________

*/
//Your code should go here:

