/*Frequency Distribution

Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.


[Examples]

_________
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
_________



[Notes]

_________
*) If given an empty array, return an empty object (see example #4).
*) The object should be in the same order as in the input array.
_________



[language_fundamentals] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Bracket Notation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that i …
___________________________
*/ 
// Your code should go here:

