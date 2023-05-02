/*Sum of Resistance in Parallel Circuits

If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.


[Worked Example]

_________
parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
_________



[Examples]

_________
parallelResistance([6, 3]) ➞ 2

parallelResistance([10, 20, 10]) ➞ 4

parallelResistance([500, 500, 500]) ➞ 166.6
// Round to the nearest decimal place
_________



[Notes]

_________
*) Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
*) Round to the nearest decimal place.
*) All inputs will be valid.
_________



[arrays] [loops] [math] [physics] 



-------------------------------------------------------------------
[Resources]
___________________________
Resistors in Parallel
https://www.electronics-tutorials.ws/resistor/res_4.html
Resistors are said to be connected together in parallel when both of their terminals are respectively connected to each terminal of the other resistor or resistors.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Number Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
Contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
___________________________
*/ 
// Your code should go here:

