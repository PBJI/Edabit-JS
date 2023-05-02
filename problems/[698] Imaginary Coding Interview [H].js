/*Imaginary Coding Interview

Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.
The criteria for a candidate to be qualified in the coding interview is:

If all the above conditions are satisfied, return "qualified", else return "disqualified".
You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.
Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].
The maximum time to complete the interview includes a buffer time of 20 minutes.


[Examples]

_________
interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
// Did not complete all the questions.

interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
_________



[Notes]

Try to solve the problem using only array methods.


[arrays] [conditions] [interview] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.every()
https://devdocs.io/javascript/global_objects/array/every
Tests whether all elements in the array pass the test implemented by the provided function.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
___________________________
*/ 
// Your code should go here:

