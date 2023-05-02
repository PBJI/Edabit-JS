/*Virtual DAC

In electronics, a digital-to-analog converter (DAC, D/A, or D-to-A) is a system that converts a binary representation of that signal into an analog output. An 8 bit converter can represent a maximum of 2^8 different values, with each successive value differing by 1/256 of the full scale value, this becomes the system resolution and would be approximately 0.25% of the full range.
Create a function that takes a binary output reading and returns the analog voltage level that would create that DAC reading.
While value range is 0-1023, reference range is 0-5.00 volts. Value and reference is directly proportional.
This DAC has 10 bits of resolution and the DAC reference is at 5.00 volts.


[Examples]

_________
adc(0) ➞ 0

adc(1023) ➞ 5

adc(500) ➞ 2.44

adc(400) ➞ 1.96
_________



[Notes]

You should return your value rounded to two decimal places.


[functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
Analog to Digital Conversion
https://learn.sparkfun.com/tutorials/analog-to-digital-conversion/relating-adc-value-to-voltage
The ADC reports a ratiometric value. This means that the ADC assumes 5V is 1023 and anything less than 5V will be a ratio between 5V and 1023.
___________________________
___________________________
10 Bit DAC Calculator Formula
https://www.rfwireless-world.com/calculators/8-bit-and-10-bit-DAC-calculator.html
The DAC calculator takes digital input and provides analog output. The DAC conversion formula/equations are also mentioned. Simple R-2R binary weighted DAC is used for …
___________________________
___________________________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
___________________________
___________________________
.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Converts a number to a string.
___________________________
*/ 
// Your code should go here:

