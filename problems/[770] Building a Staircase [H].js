/*
####  Building a Staircase  ####

Create a function that builds a staircase given the height and the type of building block.


[Examples]

_________
buildStaircase(3, "#") ➞ [
  ["#", "_", "_"],
  ["#", "#", "_"],
  ["#", "#", "#"]
]

buildStaircase(4, "#") ➞ [
  ["#", "_", "_", "_"],
  ["#", "#", "_", "_"],
  ["#", "#", "#", "_"],
  ["#", "#", "#", "#"]
]

buildStaircase(3, "A") ➞ [
  ["A", "_", "_"],
  ["A", "A", "_"],
  ["A", "A", "A"]
]

// height = 3 and building block = "A"

buildStaircase(4, "$") ➞ [
  ["$", "_", "_", "_"],
  ["$", "$", "_", "_"],
  ["$", "$", "$", "_"],
  ["$", "$", "$", "$"]
]

// height = 4 and building block = "$"
_________



[Notes]

_________
*) If the height is 0, return an empty array [].
*) See Comments or Resources for help.
_________



[arrays] [formatting] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
10 JavaScript String Methods You Should Know
https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76
In this post I will summarize 10 javascript string methods you should at least known according to me. Here are 10 javascript string methods you should know.
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
___________________________
Array() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#Examples
Is used to create Array objects.
___________________________

*/
//Your code should go here:

