/*Seven Segment Display

Create a function that takes a single Hexadecimal number as an argument and returns the equivalent six-digit binary number to light the display. Consider the six-digit binary number as an incoming input from a serial port. The segment display is a common cathode segment display that means you need to give a logical 1 to light up each segment.



[Examples]

_________
toDisplay(0x1) ➞ 0x06
// [dp, g, f, e, d, c, b, a] = [0, 0, 0, 0, 0, 1, 1, 0]

toDisplay(0x8) ➞ 0x7F
// [dp, g, f, e, d, c, b, a] = [0, 1, 1, 1, 1, 1, 1, 1]

toDisplay(0x0) ➞ 0x3F
// [dp, g, f, e, d, c, b, a] = [0, 0, 1, 1, 1, 1, 1, 1]
_________



[Notes]

_________
*) Bit order is as follows MSB [dp, g, f, e, d, c, b, a] LSB.
*) This is something that comes up in FPGA work a lot, where you have to make some kind of conversion between numerical values and bits controlling hardware. These conversions often have no simple algorithm and require hard coding.
*) If you do hard code this challenge you can try to determine the correct values by yourself but in industry if you can just look up a reference, you do. In this case the code tests have all the required values.
_________



[functional_programming] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Working with Seven Segment LED Displays
https://www.jameco.com/Jameco/workshop/techtip/working-with-seven-segment-displays.html
This is s a quick introduction to the basics of using seven segment LED displays with microcontrollers. Be sure to refer to the manufacturer's data sheets for more info …
___________________________
___________________________
How to convert binary string to decimal?
https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal
I want to convert binary string in to digit. How is it possible?
___________________________
*/ 
// Your code should go here:

