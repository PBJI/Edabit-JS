/*Filter out Strings from an Array

Create a function that takes an array of non-negative integers and strings and return a new array without the strings.


[Examples]

_________
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
_________



[Notes]

_________
*) Zero is a non-negative integer.
*) The given array only has integers and strings.
*) Numbers in the array should not repeat.
*) The original order must be maintained.
_________



[arrays] [formatting] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
typeof Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
___________________________
___________________________
Converting Strings to Numbers With Vanilla
https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
In JavaScript, you can represent a number is an actual number (ex. 42), or as a string (ex. '42'). If you were to use a strict comparison to compare the two, it would f …
___________________________
*/ 
// Your code should go here:

