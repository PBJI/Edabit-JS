/*Amplify the Multiples of Four

In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).
Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.


[Examples]

_________
amplify(4) ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

amplify(3) ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
_________



[Notes]

_________
*) The given parameter num will always be equal to or greater than 1.
*) Remember to include the num as the higher bound of the sequence (see the Examples) above.
*) A number a amplified by a factor b can also be read as: a * b.
*) A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
_________



[algebra] [arrays] [loops] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
___________________________
Array.from() and Array.keys()
https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
Creating an array of numbers [1...n] without having to use a for-loop.
___________________________
___________________________
Hacks for Creating JavaScript Arrays
https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
A very important aspect of every programming language is the data types and structures available in the language. Most programming languages provide data types for repr …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.
___________________________
___________________________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
*/ 
// Your code should go here:

