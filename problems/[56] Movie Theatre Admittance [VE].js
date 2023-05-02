/*Movie Theatre Admittance

Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
_________
*) The person is at least 15 years old.
*) They have parental supervision.
_________

The function accepts two parameters, age and isSupervised. Return a boolean.


[Examples]

_________
acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true
_________



[Notes]

_________
*) age is a decimal.
*) isSupervised is a boolean.
_________



[algorithms] [conditions] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Logical Operators
https://javascript.info/logical-operators#:~:text=The%20%E2%80%9COR%E2%80%9D%20operator%20is%20represented,true%20%2C%20otherwise%20it%20returns%20false%20.
Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.
___________________________
___________________________
Logical Operators
http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators.html
Are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the s …
___________________________
___________________________
Comparison and Logical Operators
https://www.w3schools.com/js/js_comparisons.asp
If the variable age is a value below 18, the value of the variable voteable  will be "Too young", otherwise the value of voteable will be "Old enough".
___________________________
___________________________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
___________________________
___________________________
If / Else Statements
https://www.tutorialspoint.com/javascript/javascript_ifelse.htm
While writing a program, there may be a situation when you need to adopt one out of a given set of paths. In such cases, you need to use conditional statements that all …
___________________________
*/ 
// Your code should go here:

