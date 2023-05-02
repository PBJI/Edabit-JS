/*
####  Powerful Numbers  ####

Given a positive number x:
_________
p = (p1, p2, …)
// Set of *prime* factors of x
_________

If the square of every item in p is also a factor of x, then x is said to be a powerful number.
Create a function that takes a number and returns true if it's powerful, false if it's not.


[Examples]

_________
isPowerful(36) ➞ true
// p = (2, 3) (prime factors of 36)
// 2^2 = 4 (factor of 36)
// 3^2 = 9 (factor of 36)

isPowerful(27) ➞ true

isPowerful(674) ➞ false
_________



[Notes]

N/A


[conditions] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Guide to Powerful Numbers
https://www.geeksforgeeks.org/powerful-number/
The idea is based on the fact that if a number n is powerful, then all prime factors of it and their squares should be divisible by n. We find all prime factors of give …
___________________________
___________________________
Powerful Number
https://en.wikipedia.org/wiki/Powerful_number
A positive integer m such that for every prime number p dividing m, p2 also divides m. Equivalently, a powerful number is the product of a square and a cube, that is, a …
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
While Loop
https://www.w3schools.com/js/js_loop_while.asp
Loops through a block of code as long as a specified condition is true.
___________________________

*/
//Your code should go here:

