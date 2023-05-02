/*Characters in Shapes

Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).


[Examples]

_________
countCharacters([
  "###",
  "###",
  "###"
]) ➞ 9

countCharacters([
  "22222222",
  "22222222",
]) ➞ 16

countCharacters([
  "------------------"
]) ➞ 18

countCharacters([]) ➞ 0

countCharacters(["", ""]) ➞ 0
_________



[Notes]

Return 0 if the given array is empty.


[arrays] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
JavaScript String length Property
https://www.w3schools.com/jsref/jsref_length_string.asp
Returns the length of a string (number of characters).
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
using .join method to convert array to string without commas
https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
I'm using .join() to convert my array to a string so I can output it in a text box as the user selects numbers in a calculator, I'm not entirely sure how I can remove t …
___________________________
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
*/ 
// Your code should go here:

