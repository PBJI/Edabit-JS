/*
####  Recursion: Left Shift by Powers of Two  ####

The left shift operation is similar to multiplication by powers of two, thus, the process is repetitive and can be done recursively.
Sample calculation using the left shift operator (<<):
_________
10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
_________

Write a recursive function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.


[Examples]

_________
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944
_________



[Notes]

_________
*) There will be no negative values for the second parameter y.
*) This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
*) You are expected to solve this challenge via recursion.
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges in recursion can be found via this link.
_________



[bit_operations] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Recursion and Stack
https://javascript.info/recursion
Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can …
___________________________
___________________________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
___________________________
___________________________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
___________________________

*/
//Your code should go here:

