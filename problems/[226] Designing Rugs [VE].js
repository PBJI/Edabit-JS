/*Designing Rugs

Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
_________
*) The default character (hash #) repeating n times (if no proc is given).
*) The character passed in through the proc repeating n times.
_________



[Examples]

_________
makeRug(3, 5) ➞ [
  "#####",
  "#####",
  "#####"
]

makeRug(3, 5, '$')  ➞ [
  "$$$$$",
  "$$$$$",
  "$$$$$"
]

makeRug(2, 2, 'A')  ➞ [
  "AA",
  "AA"
]
_________



[Notes]

You can set a value for the parameter when creating the function e.g. function (x = 3)


[arrays] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
___________________________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
___________________________
Default Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
___________________________
___________________________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
*/ 
// Your code should go here:

