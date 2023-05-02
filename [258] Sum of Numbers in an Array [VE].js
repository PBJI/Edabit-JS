/*Sum of Numbers in an Array

Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.
Example:
_________
[2, 4, 9]  ➞ 23
2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
_________



[Examples]

_________
arraySum([1, 3, 3, 1, 10]) ➞ 105.46

arraySum([2, 3, 4, 5]) ➞ 23.97

arraySum([1, 31, 3, 11, 0]) ➞ 11.62
_________



[Notes]

_________
*) No empty array in Tests.
*) Each array element ≥ 0.
_________



[arrays] [language_fundamentals] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
If the value of x is negative, Math.sqrt() returns NaN. Because sqrt() is a static method of Math, you always use it as Math.sqrt(), rather than as a method of a Math …
___________________________
___________________________
Is zero an even number?
https://www.bbc.com/news/magazine-20559052
For mathematicians the answer is easy: zero is an even number. The rest of us may not feel completely sure...
___________________________
___________________________
How to Square a Number in Three Easy Ways
https://sebhastian.com/javascript-square/
Let's learn how to square a number in JavaScript.
___________________________
*/ 
// Your code should go here:

