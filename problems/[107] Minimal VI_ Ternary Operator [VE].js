/*Minimal VI: Ternary Operator

In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
Write a function that returns the strings:
_________
*) "both" if both given booleans a and b are true.
*) "first" if only a is true.
*) "second" if only b is true .
*) "neither" if both a and b are false.
_________



[Tips]

If-else statements can be written as a oneliner using Javascript's ternary operator.
For example, the code:
_________
function startswith(name) {
  if ("AEIOU".includes(name[0])) {
    return "vowel"
  } else {
    return "consonant"
  }
}
_________

Can be simplified to:
_________
function startswith(name) {
  return "AEIOU".includes(name[0]) ? "vowel" : "consonant"
}
_________



[Bonus]

You can concatenate as many ternary operators as you want. However, concatenating too many can diminish the readability of your code.
_________
x > 50 ? "majority" : x < 50 ? "minority" : "draw"
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
How to Read Nested Ternary Operators
http://twistedoakstudios.com/blog/Post5273_how-to-read-nested-ternary-operators
Explains how to convert the nested (inner) if statements into a ternary.
___________________________
___________________________
Make Your Code Cleaner with JavaScript Ternary Operator
https://www.javascripttutorial.net/javascript-ternary-operator/
This tutorial shows you how to use the JavaScript ternary operator as the shortcut of the if-else statement to make your code cleaner.
___________________________
*/ 
// Your code should go here:

