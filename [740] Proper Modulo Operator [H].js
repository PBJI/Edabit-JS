/*
####  Proper Modulo Operator  ####

While useful, the modulo operator in JavaScript is not infallible when negative numbers are thrown into the mix. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.


[Examples]

_________
mod(-13, 64) ➞ 51

mod(50, 25) ➞ 0

mod(-6, 3) ➞ 0
_________



[Notes]

All test cases contain valid numbers.


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
% (Modulo) Gives a Negative Result for Negative Numbers
https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
JavaScript's modulo give a negative result for negative numbers. According to Google Calculator (-13) % 64 is 51 while according to JavaScript, it's -13. How do I fix t …
___________________________
___________________________
The JS Modulo Bug
https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
The problem is that JavaScript doesn't process modulo values correctly when you start with a negative number.
___________________________

*/
//Your code should go here:

