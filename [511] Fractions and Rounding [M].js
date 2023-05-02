/*Fractions and Rounding

Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:
"{fraction} rounded to {n} decimal places is {answer}"


[Examples]

_________
fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
_________



[Notes]

_________
*) Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
*) Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
*) n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.
_________



[formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
___________________________
___________________________
Template literals (Template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
___________________________
*/ 
// Your code should go here:

