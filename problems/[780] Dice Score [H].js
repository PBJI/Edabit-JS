/*
####  Dice Score  ####

Greed is a dice game played with five six-sided dice. Your mission is to score a throw according to these rules:
_________
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
_________

See the below examples for a better understanding:
_________
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
_________

Create a function that takes an array of five six-sided throw values and returns the final calculated dice score.


[Examples]

_________
diceScore([2, 3, 4, 6, 2]) ➞ 0

diceScore([4, 4, 4, 3, 3]) ➞ 400

diceScore([2, 4, 4, 5, 4]) ➞ 450
_________



[Notes]

A single dice can only be counted once in each roll. For example, a given "5" can only be counted as a part of the triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.


[games] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Switch/Case Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
___________________________

*/
//Your code should go here:

