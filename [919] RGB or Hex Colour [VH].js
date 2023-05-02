/*
####  RGB or Hex Colour  ####

RGB is a color model that defines color by the combination of Red, Green, and Blue. An RGB tuple is composed of three numbers that specify the intensity of each color. Because it uses 8 bits (0s or 1s) for each color, each intensity can be transformed into a hexadecimal number with two digits at most.
There are 256 possible shades for each color, since "11111111" (or hex "ff") corresponds to decimal 255, plus the number 000. The combination of all 256 possible shades for the three primary colors gives 256 cubed, or over 16 million possible colors.
Write a function that takes a color in RGB or hex and returns the opposite. If it takes in the three integers in an RGB, it should return a string with the equivalent hexadecimal notation, plus a hash sign (#) at the front. If it takes in a string in hex, it should return an array with the three integers corresponding to RGB.


[Examples]

_________
rgbHex(150, 50, 76) ➞ "#96324c"
// 150 is hex 96, 50 is hex 32 and 76 is hex 4c.

rgbHex("#303749") ➞ (48, 55, 73)
// 30 is dec 48, 37 is dec 55 and 49 is dec 73.

rgbHex(170, 14, 0) ➞ "#aa0e00"
// 170 is hex aa, 14 is hex e and 0 is hex 0.
_________



[Notes]

Remember that all three colors should be two-digit hex numbers, so for Green value 14, the hex value should be 0e rather than just e.


[Trivia]

Black is defined as the absence of color, or RGB(0,0,0), while white is defined as all colors at full intensity, or RGB(255,255,255). When all colors are at the same intensity and some value between 0 and 255, the resulting color is a darker or lighter grey.


[formatting] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
The arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
___________________________
___________________________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
___________________________

*/
//Your code should go here:

