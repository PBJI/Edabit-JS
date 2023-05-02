/*Basic Arithmetic Operations on a String Number

Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").
Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.
eval() is not allowed. In case of division, whenever the second number equals "0" return -1.
For example:
_________
"15 / 0"  ➞ -1
_________



[Examples]

_________
arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24

arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0

arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144

arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1
_________



[Notes]

_________
*) All the inputs are only integers.
*) The operators are * - + and /.
*) Hint: Think about the single space that appears before and after the arithmetic operator.
_________



[arrays] [control_flow] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Converting Strings to Numbers with Vanilla JavaScript
https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
In JavaScript, you can represent a number is an actual number (ex. 42), or as a string (ex. '42'). If you were to use a strict comparison to compare the two, it would …
___________________________
___________________________
split() Method
https://www.w3schools.com/jsref/jsref_split.asp
Used to split a string into an array of substrings, and returns the new array.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
How can I convert a string into a math operator in JavaScript?
https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript
If I've got a string that is a mathematic equation and I want to split it and then calculate it. I know I can use the eval() function to do this, but I'm interested if …
___________________________
___________________________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
___________________________
*/ 
// Your code should go here:

