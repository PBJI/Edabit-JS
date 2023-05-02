/*Stand in Line

Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.


[Examples]

_________
nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]

nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]

nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]

nextInLine([], 6) ➞ "No array has been selected"
_________



[Notes]

For an empty array input, return: "No array has been selected"


[arrays] [conditions] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
___________________________
___________________________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
___________________________
___________________________
Array push() Example
https://appdividend.com/2018/10/08/javascript-array-push-example-array-prototype-tutorial/
Adds a new item to the end of an array and returns the new length of an array. The push() method changes the length of the array or collection. If you want to add items …
___________________________
___________________________
typeof
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Destructuring assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
Conditional operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy f …
___________________________
___________________________
Pop, Push, Shift and Unshift Array Methods
https://alligator.io/js/push-pop-shift-unshift-array-methods/
JavaScript gives us four methods to add or remove items from the beginning or end of arrays.
___________________________
*/ 
// Your code should go here:

