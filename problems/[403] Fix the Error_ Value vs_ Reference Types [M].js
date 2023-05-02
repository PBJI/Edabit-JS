/*Fix the Error: Value vs. Reference Types

Create a function that returns true if two arrays contain identical values, and false otherwise.
To solve this question, your friend writes the following code:
_________
function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
_________

But testing the code, you see that something is not quite right. Running the code yields the following results:
_________
checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
_________

Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:


[Examples]

_________
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([4, 7, 6], [4, 6, 7]) ➞ false
_________



[Notes]

Hint: This has to do with value vs. reference types.


[bugs] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.toString()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
___________________________
___________________________
Explaining Value vs. Reference in JavaScript
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
JavaScript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types. JavaScript has 3 data types that a …
___________________________
___________________________
JSON.stringify()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
___________________________
___________________________
Array.prototype.join()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
Check If Two Arrays or Objects Are Equal with JavaScript
https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
Yesterday, we looked at a way to tell if two arrays are equal with JavaScript. The approach is fast and simple, but falls apart pretty quickly for all but the most basi …
___________________________
___________________________
Explaining Value vs. Reference
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
Understand the concept of value vs. reference in JavaScript through a simple yet complete walkthrough. Learn about objects, arrays, functions, and primitives.
___________________________
___________________________
Array​.prototype​.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
JavaScript.com
https://www.javascript.com/
JavaScript.com is a resource for the JavaScript community. You will find resources and examples for JavaScript beginners as well as support for JavaScript experts. Lear …
___________________________
*/ 
// Your code should go here:

