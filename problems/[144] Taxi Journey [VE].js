/*Taxi Journey

A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.


[Examples]

_________
journeyDistance(3) ➞ 1
// The first kilometer costs $3

journeyDistance(9) ➞ 4
// The first kilometer costs $3 plus the other three kilometers (costing $2 each)

journeyDistance(5) ➞ 2
_________



[Notes]

_________
*) The input tests are integers >= 0.
*) Remember that you are calculating the distance from the cost, not the other way around!
_________



[conditions] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
___________________________
ceil() Method
https://www.w3schools.com/jsref/jsref_ceil.asp
Rounds a number upwards to the nearest integer, and returns the result.
___________________________
___________________________
What is the "double tilde" (~~) operator?
https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript
It is used as a faster substitute for Math.floor() for positive numbers. It does not return the same result as Math.floor() for negative numbers, as it just chops off t …
___________________________
___________________________
Multiple Ternary Operators
https://stackoverflow.com/questions/7757549/multiple-ternary-operators
For anyone that's confused about the multiple ternary syntax (like I was).
___________________________
*/ 
// Your code should go here:

