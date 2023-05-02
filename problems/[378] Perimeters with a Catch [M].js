/*Perimeters with a Catch

Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
Use the following formulas:
_________
Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
_________

The catch is you can only use arithmetic or comparison operators, which means:
_________
*) No if... else statements.
*) No objects.
*) No arrays.
*) No formatting methods, etc.
_________

The goal is to write a short, branch-free piece of code.


[Examples]

_________
perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52
_________



[Notes]

No rounding is needed.


[conditions] [geometry] [logic] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
An Alternative Ternary
https://dev.to/samholmes/an-alternative-to-ternary-5cei#:~:text=The%20alternative%20to%20the%20ternary,the%20%26%26%20(AND)%20operation.&text=Because%20the%20AND%20operator%20will,part%20of%20the%20ternary%20operator.&text=This%20means%20that%20we%20can,conditional%20concern%20to%20two%20concerns.
What's wonderful about this operator is that it can be nested in expressions and it returns a value. This is a good thing for functional programming and composability. …
___________________________
___________________________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
___________________________
___________________________
Why "If" is Slow
https://www.youtube.com/watch?time_continue=252&v=bVJ-mWWL7cE&feature=emb_logo&ab_channel=What%27saCreel%3F
In this video we look at branchless programming. This is a technique to gain speed in our high and low level programming by avoiding branching code as much a...
___________________________
*/ 
// Your code should go here:

