/*A Day at the Market

Backpack Bill and Wallet Will set off for the annual festival. As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.
_________
*) Backpack Bill has an infinite inventory space, but a limited number of coins.
*) Wallet Will has an infinite number of coins, but a limited inventory space.
_________

Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:



[Worked Example]

_________
whoWinsTonight(40, 95, 5, 10) ➞ "Will"

// The item costs 5 coins and takes up 10 inventory spaces.
// Bill can only buy a maximum of 8 items (40 coins DIV 5 = 8).
// Will can only bring home a maximum of 9 items. (95 inventory spaces DIV 10 = 9).
// Will is the winner.
_________



[Examples]

_________
whoWinsTonight(20, 20, 5, 10) ➞ "Bill"

whoWinsTonight(10, 2, 20, 1) ➞ "Will"

whoWinsTonight(3, 7, 2, 5) ➞ "Tie"
_________



[Notes]

_________
*) DIV means a floored division. That means you round down after dividing.
*) Return "Tie" if both men can afford the same amount of stuff.
*) All numbers will be positive integers.
_________



[conditions] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
___________________________
___________________________
Conditional (Ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is …
___________________________
*/ 
// Your code should go here:

