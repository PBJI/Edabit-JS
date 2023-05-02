/*
####  Persistence  ####

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
Create two functions that take an integer as an argument and:



[Examples: Additive Persistence]

_________
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
_________



[Examples: Multiplicative Persistence]

_________
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
_________



[Notes]

The input n is never negative.


[loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
___________________________
___________________________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object. This method is meant to be overridden by derived objects for custom type conversion logic.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. …
___________________________
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________

*/
//Your code should go here:

