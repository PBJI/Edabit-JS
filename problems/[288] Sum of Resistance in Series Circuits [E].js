/*Sum of Resistance in Series Circuits

When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:
_________
RT = R1 + R2 + R3 ...
_________

Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).


[Examples]

_________
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
_________



[Notes]

_________
*) All inputs will be valid.
*) Notice the singular ohm for values <= 1.
*) This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.
_________



[arrays] [loops] [math] [physics] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
___________________________
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
*/ 
// Your code should go here:

