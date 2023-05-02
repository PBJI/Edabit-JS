/*Bitwise Operations

A decimal number can be represented as a sequence of bits. To illustrate:
_________
6 = 00000110
23 = 00010111
_________

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
_________
bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
_________

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.


[Examples]

_________
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
_________



[Notes]

JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.


[bit_operations] [language_fundamentals] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
Bitwise Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal numbe …
___________________________
___________________________
Bitwise Operators
https://www.youtube.com/watch?v=mesu75PTDC8
This video will explain Bitwise Operators in a clear and concise way.
___________________________
___________________________
String.prototype.padStart()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of th …
___________________________
___________________________
Bitwise
https://www.w3schools.com/js/js_bitwise.asp
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise  operations are performed on 32 bits binary numbers.
___________________________
___________________________
Bitwise Operators
https://www.w3schools.com/java/java_operators.asp
Are used to perform binary logic with the bits of an integer or long integer.
___________________________
___________________________
Bitwise Operators
https://www.youtube.com/watch?v=mesu75PTDC8
An overview of the Javascript bitwise operators.
___________________________
___________________________
Bitwise Operation
https://en.wikipedia.org/wiki/Bitwise_operation
In digital computer programming, a bitwise operation operates on one or more bit patterns or binary numerals at the level of their individual bits. It is a fast and sim …
___________________________
___________________________
Number​.prototype​.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
___________________________
___________________________
toString() Method
https://www.geeksforgeeks.org/javascript-tostring-function/
Is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
___________________________
___________________________
Bitwise Operators Video
https://www.youtube.com/watch?v=x7guiscwu0U
Explained incrementally; bitwise operators: and, or , exclusive or ( xor ), until 11:54 min. Also (not mandatory) : not, zero fill left shift, signed right shift, z …
___________________________
*/ 
// Your code should go here:

