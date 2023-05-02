/*Transform into an Array with No Duplicates

A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
_________
[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
_________

Create a function that sorts an array and removes all duplicate items from it.


[Examples]

_________
set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

set([4, 4, 4, 4]) ➞ [4]

set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
_________



[Notes]

_________
*) For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
*) See resources for a hint if you get stuck.
_________



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
How to Remove Array Duplicates in ES6
https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
Here are three ways to filter out duplicates from an array and return only the unique values. My favorite is using Set cause it’s the shortest and simplest 😁 In order …
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
___________________________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
Set vs Array — What and when?
https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a
Everyone who works with JS until now is familiar with Array (don’t tell me you don’t). But what exactly is Array? Well, in general, Array is type of structure represent …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Introduction to Sets in JavaScript
https://alligator.io/js/sets-introduction/
Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values. The values in a set can be either simple primitives like strings or integ …
___________________________
*/ 
// Your code should go here:

