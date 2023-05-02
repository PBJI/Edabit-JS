/*Sum of Evenly Divisible Numbers from a Range

Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.


[Examples]

_________
evenlyDivisible(1, 10, 20) ➞ 0
// No number between 1 and 10 can be evenly divided by 20.

evenlyDivisible(1, 10, 2) ➞ 30
// 2 + 4 + 6 + 8 + 10 = 30

evenlyDivisible(1, 10, 3) ➞ 18
// 3 + 6 + 9 = 18
_________



[Notes]

Return 0 if there is no number between a and b that can be evenly divided by c.


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
___________________________
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
___________________________
___________________________
Fill an Array with Sequential Values
https://davidwalsh.name/fill-array-javascript
Here's how you can fill a range within an array...
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

