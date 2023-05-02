/*Burglary Series (15): Number of Occurrences

To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.


[Examples]

_________
countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }


countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c:"moron"
}) ➞ { moron: 3 }


countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
}) ➞ { idiot: 1, scumbag: 1 }
_________



[Notes]

N / A


[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the pro …
___________________________
___________________________
Array.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
___________________________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
___________________________
___________________________
for...of Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and use …
___________________________
___________________________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
___________________________
*/ 
// Your code should go here:

