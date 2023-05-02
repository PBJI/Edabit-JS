/*Convert a Number to Base-2

Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).


[Examples]

_________
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10
_________



[Notes]

_________
*) Numbers will always be below 1024 (not including 1024).
*) The && operator could be useful.
*) The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
*) If a binary conversion for 0 is attempted, return "0".
_________



[bit_operations] [logic] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
___________________________
___________________________
Decimal to Binary Converter
https://www.rapidtables.com/convert/number/decimal-to-binary.html
Decimal to binary number converter and how to convert.
___________________________
___________________________
Convert a Decimal Number to Binary, Hexadecimal or Octal
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-3.php
This is how to write a JavaScript function that converts a decimal number to binary, hexadecimal or octal number.
___________________________
___________________________
Writing Binary Numbers
https://wild.maths.org/writing-binary-numbers
Before writing numbers in binary, let's remind ourselves of how we usually write numbers using decimal notation. Let's take the number 4302 as an example. The digit 4 i …
___________________________
___________________________
Convert to Binary
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-3.php
How to convert to Binary in JavaScript.
___________________________
___________________________
How To Convert Decimal to Binary
https://www.youtube.com/watch?v=rsxT4FfRBaM&t=27s
Explains how to convert decimal to binary numbers.Decimal to Binary Using Excel.
___________________________
*/ 
// Your code should go here:

