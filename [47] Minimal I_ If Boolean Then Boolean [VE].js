/*Minimal I: If Boolean Then Boolean

In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.
In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:
_________
*) Keep your code clean and readable.
*) While not violating the first principle: get rid of everything superfluous.
_________

In order to achieve this you should:
_________
*) Deepen your knowledge of logics.
*) Deepen your understanding of the particular language you're coding with.
_________

I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.


[Goal]

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.
Write a function that returns true if the given integer is even, and false if it's odd.


[Tips]

Using an if statement in order to return boolean or to set a variable to a boolean is redundant.
A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:
_________
function legalAge(age) {
  if(age >= 18) {
    return true
  }
  else {
    return false
  }
}
_________

Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:
_________
function legalAge(age) {
  return age >= 18
}
_________



[Notes]

_________
*) This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
*) Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.
_________



[conditions] [language_fundamentals] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
___________________________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can …
___________________________
___________________________
Arrow Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
Is a compact alternative to a traditional function expression.
___________________________
___________________________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
___________________________
___________________________
How to determine if a number is odd in JavaScript?
https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
Can anyone point me to some code to determine if a number in JavaScript is even or odd?
___________________________
*/ 
// Your code should go here:

