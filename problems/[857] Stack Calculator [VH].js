/*
####  Stack Calculator  ####

A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.
The argument passed to run(instructions) will always be a string containing a series of instructions.The instruction set of the calculator will be this:
_________
*) +: Pop the last 2 values from the stack, add them, and push the result onto the stack.
*) -: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
*) *: Pop the last 2 values, multiply, and push the result.
*) /: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
*) DUP: Duplicate (not double) the top value on the stack.
*) POP: Pop the last value from the stack and discard it.
*) PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
*) Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"
_________



[Examples]

_________
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x
_________



[Notes]

_________
*) If there are no instructions, the value should remain 0.
*) The return value of get value() should be the topmost value on the stack.
_________



[algorithms] [classes] [data_structures] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
JavaScript if else else if
https://www.w3schools.com/js/js_if_else.asp
If time is less than 10:00, create a "Good  morning"  greeting, if not, but time is less than 20:00, create a "Good day" greeting,  otherwise a "Good evening":
___________________________
___________________________
JavaScript Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaS …
___________________________
___________________________
Switch Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
___________________________

*/
//Your code should go here:

