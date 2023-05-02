/*First and Last Index

Given a word, write a function that returns the first index and the last index of a character.


[Examples]

_________
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

charIndex("happy", "h") ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

charIndex("happy", "e") ➞ undefined
// "e" does not exist in "happy", so we return undefined.
_________



[Notes]

_________
*) If the character does not exist in the word, return undefined.
*) If only one instance of the character exists, the first and last index will be the same.
*) Check the Resources tab for hints.
_________



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.indexOf()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
___________________________
___________________________
String.prototype.lastIndexOf()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Difference between string.indexOf() and string.lastIndexOf()?
https://stackoverflow.com/questions/25356825/difference-between-string-indexof-and-string-lastindexof
What's the difference between string.indexOf() and string.lastIndexOf() in JavaScript? var temp = state.indexOf("tmp"); var temp = state.lastIndexOf("tmp");
___________________________
*/ 
// Your code should go here:

