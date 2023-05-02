/*
####  Digital Cipher  ####

In Digital Cipher, encoding is done by the simple addition of numbers in the key and the corresponding characters on a string input.
Create a function that takes two arguments; a positive integer and a string and returns an encoded array of integers as message.
Assign a unique number to each letter of the alphabet.
_________
 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9  10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
 14 15 16 17 18 19 20 21 22 23 24 25 26
_________

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
_________
message = "scout"
key = 1939

digitalCipher(message, key) ➞ [20, 12, 18, 30, 21]
_________

Write the corresponding number against each character:
_________
 s  c  o  u  t
19  3 15 21 20
_________

Add to each obtained digit consecutive digits from the key:
_________
   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
_________

See the below example for a better understanding:
_________
message = "masterpiece"
key = 1939

digitalCipher(message, key) ➞ [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
_________



[Examples]

_________
digitalCipher("scout", 1939) ➞ [20, 12, 18, 30, 21]

digitalCipher("mubashir", 1990) ➞ [14, 30, 11, 1, 20, 17, 18, 18]

digitalCipher("edabit", 100) ➞ [6, 4, 1, 3, 9, 20]
_________



[Notes]

Liked this challenge ? Let's decode your encrypted version here!!!


[algorithms] [cryptography] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
parseInt() Function
https://www.w3schools.com/jsref/jsref_parseint.asp
Parses a string and returns an integer. The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that …
___________________________
___________________________
Number.parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
Parses a string argument and returns an integer of the specified radix or base.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________
___________________________
String.prototype.padEnd()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the curren …
___________________________
___________________________
String.fromCharCode() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
___________________________

*/
//Your code should go here:

