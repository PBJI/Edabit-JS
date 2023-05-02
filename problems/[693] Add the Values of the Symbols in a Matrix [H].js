/*Add the Values of the Symbols in a Matrix

Write a function that takes an array of arrays and returns the value of all of the symbols in it, where each symbol adds or takes something from the total score. Symbol values:
_________
*) # = 5
*) O = 3
*) X = 1
*) ! = -1
*) !! = -3
*) !!! = -5
_________

An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.
If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s and a X would be (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.


[Examples]

_________
checkScore([
  ["#", "!"],
  ["!!", "X"]
]) ➞ 2

checkScore([
  ["!!!", "O", "!"],
  ["X", "#", "!!!"],
  ["!!", "X", "O"]
]) ➞ 0

checkScore([
  ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
  ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
  ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
  ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
  ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
  ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
  ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
  ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
  ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
  ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
  ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
  ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
  ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
  ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]
]) ➞ 12
_________



[Notes]

Strings in the arrays will only be #, O, X, !, !! and !!!.


[functional_programming] [math] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Working With Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. …
___________________________
*/ 
// Your code should go here:

