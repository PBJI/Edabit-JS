/*Volume of a Pizza

Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!
You are given the two parameters that Tom measured:
_________
*) radius
*) height
_________

He tells you that if you multiply the height by the square of the radius and multiply the result for the mathematical constant π (Pi), you will obtain the total volume of the pizza. Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer (and rounding up for numbers with .5 as decimal part).


[Examples]

_________
volPizza(1, 1) ➞ 3
// (radius² x height x π) = 3.14159... rounded to the nearest integer.

volPizza(7, 2) ➞ 308

volPizza(10, 2.5) ➞ 785
_________



[Notes]

_________
*) This challenge requires knowledge of some language fundamentals related to math: the Math object methods. Find help in the Resources tab if you don't know them or if you still aren't confident with these concepts.
*) If you're really stuck, unlock solutions in the Solutions tab.
*) For experienced users: try to be creative!
_________



[geometry] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.PI
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
Represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
___________________________
___________________________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
___________________________
___________________________
JavaScript Number Methods
https://www.w3schools.com/js/js_number_methods.asp
Number methods help you work with numbers.
___________________________
___________________________
Exponents
https://www.mathsisfun.com/exponent.html
The exponent of a number says how many times to use the number in a multiplication.
___________________________
___________________________
Volume of a Cylinder
https://www.google.co.uk/search?source=hp&ei=KJbPX9H0B62IjLsPzc6SmA4&q=volume+of+a+cylinder&oq=Volume+of&gs_lcp=CgZwc3ktYWIQAxgAMgUIABDJAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoLCAAQsQMQgwEQyQM6DgguELEDEIMBEMcBEKMCOgsILhCxAxDHARCjAjoICC4QsQMQgwE6CAgAELEDEIMBOggILhDHARCjAjoOCC4QsQMQxwEQowIQkwJQjQFYxQtglBFoAHAAeACAAa8BiAGCCJIBAzMuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab
How to work out the volume of a cylinder.
___________________________
___________________________
toFixed() Method
https://www.w3schools.com/jsref/jsref_tofixed.asp
Converts a number into a string, rounding to a specified number of decimals. Note: if the desired number of decimals are higher than the actual number, zeros are added …
___________________________
___________________________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtract …
___________________________
*/ 
// Your code should go here:

