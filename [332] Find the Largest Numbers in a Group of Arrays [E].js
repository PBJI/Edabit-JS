/*Find the Largest Numbers in a Group of Arrays

Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.


[Examples]

_________
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
_________



[Notes]

Watch out for negative integers (numbers).


[arrays] [loops] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in this array.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.c …
___________________________
___________________________
push() Method
https://www.w3schools.com/jsref/jsref_push.asp
Adds new items to the end of an array, and returns the new length.
___________________________
___________________________
Function.prototype.apply()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
Calls a function with a given this value, and arguments provided as an array (or an array-like object).
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
___________________________
___________________________
Return the Largest Numbers in Arrays in JavaScript
https://medium.com/@DylanAttal/return-largest-numbers-in-arrays-in-javascript-9bbc43c7b264
This is a good challenge to test your understanding of bracket notation. In order to find the solution, we’re going to have to iterate through a two-dimensional array. …
___________________________
___________________________
How can I easily obtain the min or max element of a JavaScript Array?
https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
How about augmenting the built-in Array object to use Math.max/Math.min instead. Augmenting the built-ins can cause collisions with other libraries (some see), so you m …
___________________________
___________________________
Three Ways You Can Find the Largest Number in an Array
https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
Three ways you can find the largest number in an array using JavaScript.
___________________________
*/ 
// Your code should go here:

