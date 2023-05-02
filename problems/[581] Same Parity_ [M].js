/*Same Parity?

Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.


[Examples]

_________
parityAnalysis(243) ➞ true
// 243 is odd and so is 9 (2 + 4 + 3)

parityAnalysis(12) ➞ false
// 12 is even but 3 is odd (1 + 2)

parityAnalysis(3) ➞ true
// 3 is odd and 3 is odd and 3 is odd (3)
_________



[Notes]

_________
*) Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.
*) Single digits will obviously have the same parities (see example #3).
_________



[conditions] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Boolean
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
An object wrapper for a boolean value.
___________________________
___________________________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
___________________________
___________________________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
___________________________
___________________________
Digit Sum
https://en.wikipedia.org/wiki/Digit_sum
The digit sum of a natural number in a given number base is the sum of all its digits. For example, the digit sum of 9045 would be 18.
___________________________
*/ 
// Your code should go here:

