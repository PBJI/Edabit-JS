/*Last Digit Ultimate

Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.


[Examples]

_________
lastDig(25, 21, 125) ➞ true
// The last digit of 25 is 5, the last digit of 21 is 1, and the last
// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// to the last digit of 125(5).

lastDig(55, 226, 5190) ➞ true
// The last digit of 55 is 5, the last digit of 226 is 6, and the last
// digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// equal to the last digit of 5190(0).

lastDig(12, 215, 2142) ➞ false
// The last digit of 12 is 2, the last digit of 215 is 5, and the last
// digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// not equal to the last digit of 2142(2).
_________



[Notes]

Numbers can be negative.


[algebra] [logic] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Find First and Last Digits of a Number
https://www.geeksforgeeks.org/find-first-last-digits-number/
To find last digit of a number, we use modulo operator %. When modulo divided by 10 returns its last digit. Suppose if n = 1234 then last Digit = n % 10 => 4 To finding …
___________________________
___________________________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtract …
___________________________
___________________________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
___________________________
___________________________
How to Find the Unit Digit of a Number
https://wordpandit.com/how-to-find-the-unit-digit-of-a-number/
For the concept of identifying the unit digit, we have to first familiarize with the concept of cyclicity. Cyclicity of any number is about the last digit and how they …
___________________________
___________________________
String.prototype.substr()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
___________________________
___________________________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
___________________________
*/ 
// Your code should go here:

