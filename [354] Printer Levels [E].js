/*Printer Levels

Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.


[Examples]

_________
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0
_________



[Notes]

A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).


[numbers] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array …
___________________________
___________________________
Array sort() Method
https://www.w3schools.com/jsref/jsref_sort.asp
Sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
___________________________
___________________________
Array Iteration / Iterators
https://www.w3schools.com/js/js_array_iteration.asp
Array iteration methods operate on every array item.
___________________________
*/ 
// Your code should go here:

