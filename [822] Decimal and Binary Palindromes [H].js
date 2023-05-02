/*
####  Decimal and Binary Palindromes  ####

A number/string is a palindrome if the digits/characters are the same when read both forward and backward. Examples include "racecar" and 12321. Given a positive number n, check if n or the binary representation of n is palindromic. Return the following:
_________
*) "Decimal only." if only n is a palindrome.
*) "Binary only." if only the binary representation of n is a palindrome.
*) "Decimal and binary." if both are palindromes.
*) "Neither!" if neither are palindromes.
_________



[Examples]

_________
palindromeType(1306031) ➞ "Decimal only."
// decimal = 1306031
// binary  = "100111110110110101111"

palindromeType(427787) ➞ "Binary only."
// decimal = 427787
// binary  = "1101000011100001011"

palindromeType(313) ➞ "Decimal and binary."
// decimal = 313
// binary  = 100111001

palindromeType(934) ➞ "Neither!"
// decimal = 934
// binary  = "1110100110"
_________



[Notes]

Check the Resources tab for ways to convert to binary.


[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/tostring
Returns a string representing the specified object.
___________________________
___________________________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
___________________________

*/
//Your code should go here:

