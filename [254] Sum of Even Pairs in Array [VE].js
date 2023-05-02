/*Sum of Even Pairs in Array

Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.
To illustrate:
_________
11, 15, 6, 8, 9, 10
_________

_________
*) 11 + 15 = 26 = true
*) 15 + 6 = 21 = false
*) 6 + 8 = 14 = true
*) 8+ 9 = 17 = false
*) 9 + 10 = 19 = false
_________

_________
Therefore, solution = [true, false, true, false, false]
_________



[Examples]

_________
oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]

oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]

oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]
_________



[Notes]

Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.


[arrays] [higher_order_functions] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Check if a Number Is Odd or Even
https://www.programiz.com/javascript/examples/even-odd
In this example, you will learn to write a JavaScript program to check if the number is odd or even. To understand this example, you should have the knowledge of the f …
___________________________
___________________________
Push Function
https://stackoverflow.com/questions/61070692/adding-consecutive-elements-of-array
Can be used to push consecutive integers into an array.
___________________________
*/ 
// Your code should go here:

