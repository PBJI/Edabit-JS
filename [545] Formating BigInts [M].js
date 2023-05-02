/*Formating BigInts

Cryptocurrencies often have a lot of decimals. For example, the popular cryptocurrency Ethereum has 18 decimals.
When dealing with money, precision is important, you don't want to lose money because a number is losing precision. However, with JavaScript, normal numbers only can go up to 9007199254740991. To deal with this, Javascript now has BigInt for integers bigger than that.
However, in order to get back to a decimal number, the number needs to be formatted from a BigInt to a string with the right number of decimals.
Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.


[Examples]

_________
formatBigInt(1938908490185852058934n, 18) ➞ "1938.908490185852058934"

formatBigInt(987654321987654321n, 6 ) ➞ "987654321987.654321"

formatBigInt(13902183984901849081284n, 12) ➞ "13902183984.901849081284"
_________



[Notes]

N/A


[algebra] [formatting] [language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
___________________________
___________________________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
Is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number p …
___________________________
___________________________
BigInt.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString
Returns a string representing the specified BigInt object. The trailing "n" is not part of the string.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs cal …
___________________________
*/ 
// Your code should go here:

