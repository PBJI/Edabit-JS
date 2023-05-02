/*
####  Single Letter Swaps  ####

Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.


[Examples]

_________
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
➞ [true, false, false, false]
_________



[Notes]

Original string will consist of unique characters.


[arrays] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
___________________________
___________________________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________

*/
//Your code should go here:

