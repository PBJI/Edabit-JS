/*Minimal IV: if-else if-else Inferno

Check the principles of minimalist code in the intro to the first challenge.
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.


[Tips]

Executing a return will effectively end your function.
For example, the code:
_________
function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}
_________

Can be simplified to:
_________
function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
}
_________

_________
*) If x is greater than 100, JavaScript will not execute the code past the first return.
*) If x is smaller than 100, JavaScript will not execute the code inside the first if statement or past the second return.
*) If x is equal to 100, JavaScript will not execute the code inside the two if statements.
*) This can only be used if you have a return inside your if statement.
_________



[Notes]

_________
*) This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
*) Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
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
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
___________________________
How to Check if a Number is Positive or Negative in JavaScript
https://www.samanthaming.com/tidbits/29-check-if-number-is-positive-or-negative/
Determining the sign of a number is super easy now with ES6's Math.sign! It will indicate whether the number is positive, negative or zero...
___________________________
*/ 
// Your code should go here:

