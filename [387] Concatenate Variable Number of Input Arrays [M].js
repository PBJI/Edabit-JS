/*Concatenate Variable Number of Input Arrays

Create a function that concatenates n input arrays, where n is variable.


[Examples]

_________
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
_________



[Notes]

Arrays should be concatenated in order of the arguments.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
arguments Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
An Array-like object accessible inside functions that contains the values of the arguments passed to that function.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
Flatten Array using Array.flat()
https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
It was always complicated to flatten an array in #JavaScript. Not anymore! ES2019 introduced a new method that flattens arrays. And there’s a “depth” parameter, so you …
___________________________
*/ 
// Your code should go here:

