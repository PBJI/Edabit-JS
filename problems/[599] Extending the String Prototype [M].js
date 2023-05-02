/*Extending the String Prototype

Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:



[Examples]

_________
"hello".consonants() ➞ 3
"hello".vowels() ➞ 2

"greatly".consonants() ➞ 5
"greatly".vowels() ➞ 2

"Smithsonian".consonants() ➞ 7
"Smithsonian".vowels() ➞ 4
_________



[Notes]

_________
*) Treat y as a consonant, not a vowel.
*) Upper vs. lower case does not matter.
*) Hint: See comments for another example if you get stuck.
_________

It is not mandatory for this exercise, but in general it is a good idea to double-check if there exists methods with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).


[language_fundamentals] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
this keyword
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
The JavaScript "this" keyword refers to the object it belongs to. It has different values depending on where it is used: In a method, this refers to the owner object.
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
JavaScript Object Prototype
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
The Object.prototype is a property of the Object constructor. And it is also the end of a prototype chain.
___________________________
___________________________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the …
___________________________
___________________________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
*/ 
// Your code should go here:

