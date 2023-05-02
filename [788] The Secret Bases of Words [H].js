/*
####  The Secret Bases of Words  ####

In this challenge, you have to find the numeric value of a given word. Instead of the usual sum of Unicode values, you have to convert the whole word into a decimal number from a base equal to ten plus the position in the alphabet of the "highest" letter of the word (counting from a = 1 to z = 26).
Given a word, implement a function that returns an integer being the decimal value obtained after the conversion from the word specific base, accordingly to the instructions above.


[Examples]

_________
wordToDecimal("Edabit") ➞ 351010469
// The highest letter of "Edabit" in the alphabet is "T"
// "T" is the 20th letter of the alphabet: adding 10 the result is 30
// "Edabit" in base-30 is equal to 351010469 in base-10

wordToDecimal("JavaScript") ➞ 680575028284221
// The highest letter of "JavaScript" in the alphabet is "v"
// "v" is the 22nd letter of the alphabet: adding 10 the result is 32
// "JavaScript" in base-32 is equal to 680575028284221 in base-10

wordToDecimal("ZERO") ➞ 1652100
// The highest letter of "ZERO" in the alphabet is "Z"
// "Z" is the 26th letter of the alphabet: adding 10 the result is 36
// "ZERO" in base-36 is equal to 1652100 in base-10
_________



[Notes]

_________
*) The bases that accept letters in their representation are those starting from 11 (using 10 digits and 1 letter) up to 36 (using 10 digits and 26 letters).
*) JS Note: This challenge is thinked and designed to avoid results bigger than the max safe integer representable in JS, so that the BigInt() method will be not necessary to pass it.
*) Every given word will be a valid one made of just letters, either lowercased or uppercased.
_________



[formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
parseInt()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
___________________________
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________

*/
//Your code should go here:

