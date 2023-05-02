/*
####  Dead End Number Sequence  ####

This number sequence can start with any positive integer n. s is the sum of the individual digits in n. If s divides into n evenly then the next term of the series is n//s. Otherwise the next term is n*s. Eventually the series will reach a dead end with two numbers alternating: 58, 754, 12064, 928, 17632, 928, 17632. This series has a length of 5 with 17632 as the last term.
Compose a function that takes a positive integer and returns its series length and its last term.


[Examples]

_________
deadEnd(5) ➞ [2, 1]

deadEnd(11) ➞ [7, 11440]

deadEnd(123456789) ➞ [2, 5555555505]

deadEnd(35161) ➞ [39, 154838313273413215779502672965210112000]

deadEnd(101) ➞ [9, 136804096]
_________



[Notes]

N/A


[loops] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________

*/
//Your code should go here:

