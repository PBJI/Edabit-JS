/*
####  No Good Numbers  ####

A positive number's population is the sum of 1's in its binary representation.
_________
*) An evil number has an even numbered population.
*) An odious number has an odd numbered population.
*) A number is pernicious if its population is a prime number.
_________

Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").


[Examples]

_________
howBad(7) ➞ ["Odious", "Pernicious"]
// 7 in binary is "111".
// 1 + 1 + 1 = 3 in "111" means "Odious" should be added to the array answer.
// 3 is a prime number, meaning "Pernicious" should also be added.

howBad(17) ➞ ["Evil", "Pernicious"]
// 17 in binary is "10001".
// 1 + 1 = 2 in "10001" means "Evil" should be added to the array answer.
// 2 is a prime number, meaning "Pernicious" should also be added.

howBad(23) ➞ ["Evil"]
// 23 in binary is "10111".
// Four 1's in "10111" means "Evil" should be added to the array answer.
// 4 is not a prime number, meaning "Pernicious" should not be added.
_________



[Notes]

N/A


[conditions] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Number Prime Test in JavaScript
https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
I'm trying to complete the codewars challenge that asks you to check if a number is a prime number. For whatever reason, my solution doesn't seem to work for the square …
___________________________
___________________________
How do I convert an integer to binary in JavaScript?
https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
This answer attempts to address integers with absolute values between Number.MAX_SAFE_INTEGER (or 2**53-1) and 2**31. The current solutions only ...
___________________________

*/
//Your code should go here:

