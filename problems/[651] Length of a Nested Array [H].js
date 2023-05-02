/*Length of a Nested Array

The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
_________
[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
_________

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
Write a function that returns the total number of non-nested items in a nested array.


[Examples]

_________
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
_________



[Notes]

An empty array should return 0.


[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
Array.length
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that  …
___________________________
___________________________
Flatten Array using Array.flat()
https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
It was always complicated to flatten an array in JavaScript. ES2019 introduced a new method that flattens arrays. And there’s a “depth” parameter, so you can pass in AN …
___________________________
___________________________
Learn and Understand Recursion in JavaScript
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Hint: If you are stuck, think about using the .length property on each item in the array. What is the result of using .length on a number vs. an array?
___________________________
___________________________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Infinity
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
Is a numeric value representing infinity.
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
___________________________
___________________________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
___________________________
___________________________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a …
___________________________
*/ 
// Your code should go here:

