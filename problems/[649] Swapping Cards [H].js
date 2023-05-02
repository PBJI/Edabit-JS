/*Swapping Cards

Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.
However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.

Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.
_________
*) n1 is Paul's number
*) n2 is his opponent's number
_________



[Worked Example]

_________
swap_cards(41, 79) ➞ true
// Paul's lowest number is 1
// The opponent's ten's digit is 7
// After the swap: 47 > 19
// Paul wins the round
_________



[Examples]

_________
swapCards(41, 98) ➞ true

swapCards(12, 28) ➞ true

swapCards(67, 53) ➞ false

swapCards(77, 54) ➞ false
_________



[Notes]

_________
*) If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
*) The cards don't include the number 0.
_________



[algorithms] [games] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toString()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
*/ 
// Your code should go here:

