/*XOR Swap Algorithm

This is more informational than a challenge. You can actually switch 2 variables with the XOR operation ^. XOR works with two arguments. It turns both arguments into their binary representations, and for each bit, returns 1 if they are different, 0 otherwise.
The return value is the decimal representation of the new binary string. So, if you don't know how to do it, go play around with it! After some time on paper, you will understand what is going on, and how it works.
Your job is to switch 2 variables using the XOR operator, which means your return statement should be return[a, b], but the values stored in the variables need to be switched.


[Examples]

_________
xor(10, 41) ➞ (41, 10)

xor(69, 420) ➞ (420, 69)

xor(12345, 890412) ➞ (890412, 12345)
_________



[For this challenge, avoid doing the following:]

_________
function xor(a, b) {
  return [b, a]
}
_________

_________
function xor(a, b) {
  const [b, a] = [a,b]
  return [a, b]
}
_________



[Notes]

N/A


[bit_operations] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
4 Ways to Swap Variables
https://dmitripavlutin.com/swap-variables-javascript/
There are 4 good ways to swap variables in JavaScript: using a destructuring assignment, a temporary variable, addition & difference or XOR operator.
___________________________
___________________________
XOR Swap Algorithm
https://en.wikipedia.org/wiki/XOR_swap_algorithm
Is an algorithm that uses the XOR bitwise operation to swap values of distinct variables having the same data type without using a temporary variable. "Distinct" means …
___________________________
*/ 
// Your code should go here:

