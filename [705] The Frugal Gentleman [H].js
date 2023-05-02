/*The Frugal Gentleman

Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.


[Examples]

_________
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null
_________



[Notes]

All wines will be different prices, so there is no confusion in the ordering.


[arrays] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences …
___________________________
___________________________
Array.length
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that  …
___________________________
___________________________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
___________________________
___________________________
Sorting an Array of Objects
http://www.javascriptkit.com/javatutors/arraysort2.shtml
An introductory tutorial on sorting an array of objects in JavaScript.
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Function.prototype.name
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
A Function object's read-only name property indicates the function's name as specified when it was created, or "anonymous" for functions created anonymously.
___________________________
___________________________
Second Lowest and Second Greatest Numbers From an Array
https://www.w3resource.com/javascript-exercises/javascript-function-exercise-11.php
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
___________________________
___________________________
How to Sort an Array of Objects by a Property Value in JavaScript
https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
Find out how to sort an array of objects by a property value in JavaScript.
___________________________
*/ 
// Your code should go here:

