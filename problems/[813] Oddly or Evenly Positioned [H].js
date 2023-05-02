/*
####  Oddly or Evenly Positioned  ####

Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).


[Examples]

_________
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// 4 & 8 occupy the 2nd & 4th positions

charAtPos("EDABIT", "odd") ➞ "EAI"
// "E", "A" and "I" occupy the 1st, 3rd and 5th positions

charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]
_________



[Notes]

_________
*) Arrays are zero-indexed, so, index+1 = position or position-1 = index.
*) There will not be an empty string or an empty array.
*) A slightly different version of this challenge can be found here.
*) A recursive version of this challenge can be found here.
_________



[arrays] [functional_programming] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Is a global object that is used in the construction of arrays; which are high-level, list-like objects.
___________________________

*/
//Your code should go here:

