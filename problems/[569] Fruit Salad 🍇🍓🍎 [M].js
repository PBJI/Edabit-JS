/*Fruit Salad 🍇🍓🍎

Fruit salads are served best when the fruits are sliced and diced into small chunks!
For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.


[Worked Example]

_________
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
_________



[Examples]

_________
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

fruitSalad(["banana"]) ➞ "anaban"
_________



[Notes]

_________
*) If a fruit has an odd number of letters, make the right side larger than the left.
*) For example: "apple" will be sliced into "ap" and "ple".
*) All fruits will be given in lowercase.
_________



[arrays] [loops] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
___________________________
___________________________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
___________________________
String Length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
*/ 
// Your code should go here:

