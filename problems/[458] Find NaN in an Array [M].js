/*Find NaN in an Array

Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.


[Examples]

_________
findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1
_________



[Notes]

NaN will occur in the input array only once.


[arrays] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
___________________________
___________________________
Testing Against NaN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#Testing_against_NaN
NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value. Use Number.isNaN() or isNaN() to most clearly determine whether a …
___________________________
___________________________
isNaN()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
Determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined i …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
map() Method
https://www.w3schools.com/jsref/jsref_map.asp
Creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in …
___________________________
___________________________
toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Converts a number to a string.
___________________________
___________________________
How to find the index of NaN in a JavaScript array?
https://stackoverflow.com/questions/5294413/find-index-of-nan-in-a-javascript-array
You can use Array.prototype.includes to check if NaN is present in an array or not. It won't give you the index though !! It will return a boolean value. If NaN is pres …
___________________________
___________________________
How to filter out NaN, null, 0, false in an array?
https://stackoverflow.com/questions/31925323/how-to-filter-out-nan-null-0-false-in-an-array-js
Luckily I have answered the question but the thing is I really don't know how I came up with the answer or rather I don't know how it works. Specially on arr > 0 how di …
___________________________
*/ 
// Your code should go here:

