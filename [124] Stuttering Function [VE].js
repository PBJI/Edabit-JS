/*Stuttering Function

Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.


[Examples]

_________
stutter("incredible") ➞ "in... in... incredible?"

stutter("enthusiastic") ➞ "en... en... enthusiastic?"

stutter("outstanding") ➞ "ou... ou... outstanding?"
_________



[Notes]

Assume all input is in lower case and at least two characters long.


[algorithms] [formatting] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.substr()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
Returns a given number of characters starting at an given index
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#:~:text=The%20slice()%20method%20returns,array%20will%20not%20be%20modified.
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#:~:text=The%20repeat()%20method%20constructs,it%20was%20called%2C%20concatenated%20together.
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
___________________________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
___________________________
___________________________
substr() Method
https://www.w3schools.com/jsref/jsref_substr.asp
Extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
___________________________
*/ 
// Your code should go here:

