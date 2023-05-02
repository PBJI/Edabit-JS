/*Burglary Series (03): Is It Gone?

Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!
Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:
_________
*) "Rambo is gone..." if the name is on the list.
*) "Rambo is here!" if the name is not on the list.
_________

Note that the first letter of the name in the return statement is capitalized.


[Examples]

_________
const obj = {
  tv: 30,
  timmy: 20,
  stereo: 50,
} ➞ "Timmy is gone..."
// Timmy is in the object.


const obj = {
  tv: 30,
  stereo: 50,
} ➞ "Timmy is here!"
// Timmy is not in the stolen list object.


const obj = { } ➞ "Timmy is here!"
// Timmy is not in the object.
_________



[Notes]

N/A


[objects] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
___________________________
___________________________
How to Capitalize the First Letter of a String
https://dzone.com/articles/capitalize-first-letter-string-javascript
A quick tutorial on how to work with basic vanilla JavaScript code to programmatically capitalize the first letter in a string.
___________________________
___________________________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
___________________________
___________________________
How to capitalize the first letter of a string?
https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
How do I make the first letter of a string uppercase, but not change the case of any of the other letters?
___________________________
___________________________
Ternary Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
___________________________
___________________________
JS Search in Object Values
https://stackoverflow.com/questions/8517089/js-search-in-object-values
I'd like to search these objects' values (not keys) with a keyword, and return an array of objects that contain the keyword in any of the values.
___________________________
___________________________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
*/ 
// Your code should go here:

