/*
####  Identical Row and Column?  ####

Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.
To illustrate:
_________
[
  [1, 2, 3, 4],
  [2, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0]
]

// 2nd row + 2nd column are identical: [2, 4, 9, 8]
_________



[Examples]

_________
hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ true

hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ false

hasIdentical([
  [4, 4]
  [2, 1]
]) ➞ false

hasIdentical([
  [4, 2]
  [2, 1]
]) ➞ true
_________



[Notes]

Non-square matrices should return false.


[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Object comparison in JavaScript
https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
What is the best way to compare objects in JavaScript? I know that two objects are equal if they refer to the exact same object, but is there a way to check if they hav …
___________________________
___________________________
JSON.stringify()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
___________________________
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for whic …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

