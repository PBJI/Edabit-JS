/*
####  Happy Numbers  ####

Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
_________
203 -> 13 -> 10 -> 1 -> 1
_________

Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
Not all numbers are happy. If we started with 11, the sequence would be:
_________
11 -> 2 -> 4 -> 16 -> ...
_________

This sequence will never reach 1, and so the number 11 is called unhappy.
Given a positive whole number, you have to determine whether that number is happy or unhappy.


[Examples]

_________
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false
_________



[Notes]

_________
*) You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
*) The only numbers passed to your function will be positive whole numbers.
_________



[loops] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Happy Number
https://en.wikipedia.org/wiki/Happy_number
A happy number by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the pro …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
___________________________

*/
//Your code should go here:

