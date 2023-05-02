/*
####  Flatten an Array  ####

Create a function that takes an array. This array can have all kinds of items, even other arrays. The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:



[Examples]

_________
flattenArray([1, "2", [3, function () { return 4; }, [ "five" ], "six", true, { prop: "val" }]])
➞ [1, "2", 3, 4, "five", "six", true, { prop: "val" }]

flattenArray([1, 2, [3, [4, 5], 6], 7, 8]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]

flattenArray() ➞ []
_________



[Notes]

If no input is given it should return an empty array: [].


[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
___________________________
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
typeof Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
Allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destru …
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________

*/
//Your code should go here:

