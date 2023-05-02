/*Snail Race

Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.
The function inputs:



[Examples]

_________
mauriceWins([3, 5, 10], [4, 7, 11]) ➞ true
// Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

mauriceWins([6, 8, 9], [7, 12, 14]) ➞ false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

mauriceWins([1, 8, 20], [2, 9, 100]) ➞ true
_________



[Notes]

_________
*) Maurice wins if his competing snail's speed strictly exceeds Steve's snail's speed.
*) Steve will always play in this order: [f, s, m].
*) The order you'll get the snails is always in ascending order.
_________



[arrays] [games] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Logical Operators
https://devdocs.io/javascript/operators/logical_operators
Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the val …
___________________________
___________________________
JavaScript if/else Statement
https://www.w3schools.com/jsref/jsref_if.asp#:~:text=The%20if%2Felse%20statement%20executes,of%20code%20can%20be%20executed.&text=Use%20else%20to%20specify%20a,the%20first%20condition%20is%20false
The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
___________________________
___________________________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Array.prototype.sort()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences …
___________________________
___________________________
For Loop
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
*/ 
// Your code should go here:

