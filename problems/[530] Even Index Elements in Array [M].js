/*Even Index Elements in Array

Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.
For example:
_________
[2, 3, 4, 5] ➞ 30
(2 + 4) * 5 ➞ 30

[1, 4, 5, 6, 7, 2, 3] ➞ 48
(1 + 5 + 7 + 3) * 3 ➞ 48
_________



[Examples]

_________
evenLast([]) ➞ 0

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([-11, 3, 3, 1, 10]) ➞ 20
_________



[Notes]

If the array is empty, return 0.


[arrays] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
___________________________
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) …
___________________________
*/ 
// Your code should go here:

