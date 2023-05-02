/*
####  A Simple Check  ####

Mubashir needs your help in a simple task. Create a function which takes two positive integers a and b. These numbers are simultaneously decreased by 1 until the smaller one reaches 0.
During this process, the greater number can be divisible by the smaller one. Your task is to count how many times it will happen.


[Example 1]

_________
a = 3, b = 5  // 5 is not divisible by 3
a = 2, b = 4  // decreased by 1, 4 is divisible by 2
a = 1, b = 3  // decreased by 1, 3 is divisible by 1
a = 0, b = 2  // decreased by 1, the smaller number is 0, End

The result should be 2
_________



[Example 2]

_________
a = 8, b = 4  // 8 is divisible by 4
a = 7, b = 3  // decreased by 1, 7 is not divisible by 3
a = 6, b = 2  // decreased by 1, 6 is divisible by 2
a = 5, b = 1  // decreased by 1, 5 is divisible by 1
a = 4, b = 0  // decreased by 1, the smaller number is 0, End

The result should be 3
_________



[Examples]

_________
simpleCheck(3, 5) ➞ 2

simpleCheck(8, 4) ➞ 3

simpleCheck(54, 17) ➞ 1
_________



[Notes]

N/A


[algorithms] [interview] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) …
___________________________

*/
//Your code should go here:

