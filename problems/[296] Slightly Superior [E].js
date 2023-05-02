/*Slightly Superior

You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
Create a function that returns whether the first array is slightly superior to that of the second.


[Examples]

_________
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
_________



[Notes]

_________
*) Both arrays will be the same length.
*) All values and their counterparts will always be of the same data type.
*) If the two arrays are the same, return false.
_________



[language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
String Comparison
https://javascript.info/comparison#string-comparison
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by- …
___________________________
___________________________
Array.prototype.join() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separa …
___________________________
___________________________
some() Method
https://www.w3schools.com/jsref/jsref_some.asp
Checks if any array elements pass a test (provided as a function). The some() method executes the function once for each array element:...
___________________________
___________________________
How do I compare two arrays in JavaScript?
https://www.30secondsofcode.org/articles/s/javascript-array-comparison
Learn how you can compare two arrays in JavaScript using various different techniques.
___________________________
___________________________
Array.prototype.reduce() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
*/ 
// Your code should go here:

