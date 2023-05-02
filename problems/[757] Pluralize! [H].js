/*
####  Pluralize!  ####

Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.


[Examples]

_________
pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

pluralize(["table", "table", "table"]) ➞ ["tables"]

pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
_________



[Notes]

_________
*) This is an oversimplification of the English language so no edge cases will appear.
*) Only focus on whether or not to add an s to the ends of words.
*) All tests will be valid.
_________



[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
___________________________
___________________________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
___________________________
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________

*/
//Your code should go here:

