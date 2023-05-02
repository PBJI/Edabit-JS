/*Temperature Conversion

Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.
The formula to calculate the temperature in Fahrenheit from Celsius is:
_________
F = C*9/5 +32
_________

The formula to calculate the temperature in Kelvin from Celsius is:
_________
K = C + 273.15
_________



[Examples]

_________
tempConversion(0) ➞ [32, 273.15]
// 0°C is equal to 32°F and 273.15 K.

tempConversion(100) ➞ [212, 373.15]

tempConversion(-10) ➞ [14, 263.15]

tempConversion(300.4) ➞ [572.72, 573.55]
_________



[Notes]

_________
*) Return calculated temperatures up to two decimal places.
*) Return "Invalid" if K is less than 0.
_________



[math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Rounding Numbers After the Comma
https://stackoverflow.com/questions/4098685/rounding-numbers-to-2-digits-after-comma
Rounding numbers to two digits after comma.
___________________________
___________________________
number() Function
https://www.w3schools.com/jsref/jsref_number.asp
If the parameter is a Date object, the Number() function returns the number of milliseconds since midnight January 1, 1970 UTC.
___________________________
___________________________
Temperature Conversion Table - Kelvin, Celsius, Fahrenheit
https://www.thoughtco.com/chemistry-temperature-conversion-table-4012466
Look up temperature conversions with this simple table.
___________________________
___________________________
Arrow Functions
https://javascript.info/arrow-functions-basics
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”. This creates a fun …
___________________________
___________________________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
___________________________
___________________________
if else else if
https://www.w3schools.com/js/js_if_else.asp
Conditional statements are used to perform different actions based on different conditions.
___________________________
*/ 
// Your code should go here:

