/*Minimal II: Boolean Redundancy

Check the principles of minimalist code in the intro to the first challenge.
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.
Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.


[Tips]

Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.
For example, the code:
_________
let bool = Boolean(x < 4)
return bool === true
_________

Is equivalent to simply:
_________
return x < 4
_________

_________
*) A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
*) bool === true is redundant, as it will always return bool.
*) To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.
*) While preserving readability, avoid declaring unnecessary variables.
_________



[Notes]

_________
*) This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in Comments.
*) Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in Comments.
_________



[conditions] [language_fundamentals] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
___________________________
___________________________
How to Determine If a Number Is Odd
https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
Can anyone point me to some code to determine if a number in JavaScript is even or odd?
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
*/ 
// Your code should go here:

