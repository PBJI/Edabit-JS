/*
####  Alt Facts, Semi Facts  ####

The factorial of a positive number n is the product of all numbers from 1 to n.
_________
5! = 5 x 4 x 3 x 2 x 1 = 120
_________

The semifactorial (also known as the double factorial) of a positive number n is the product of all numbers from 1 to n that have the same parity (i.e. odd or even) as n.
_________
12!! = 12 x 10 x 8 x 6 x 4 x 2 = 46,080

7!! = 7 x 5 x 3 x 1 = 105
_________

The alternating factorial of a positive number n is the sum of the consecutive factorials from n to 1, where every other factorial is multiplied by -1.
Alternating factorial of 1:
_________
af(1) = 1!
_________

Alternating factorial of 2:
_________
af(2) = 2! + (-1)x(1!) = 2! - 1! = 2 -1 = 1
_________

Alternating factorial of 3:
_________
af(3) = 3! - 2! + 1! = 6 - 2 + 1 = 5
_________

Create a function that takes a number n and returns the difference between the alternating factorial and semifactorial of n.


[Examples]

_________
altSemi(1) ➞ 0

altSemi(2) ➞ -1

altSemi(3)➞ 2
_________



[Notes]

N/A


[algebra] [math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

