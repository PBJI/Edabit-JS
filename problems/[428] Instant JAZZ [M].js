/*Instant JAZZ

Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.


[Examples]

_________
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) ➞ []
_________



[Notes]

_________
*) Return an empty array if the given array is empty.
*) You can expect all the tests to have valid chords.
_________



[arrays] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
Adding a Conditional Statement to the Map Function
https://stackoverflow.com/questions/41554604/conditional-statement-in-a-map-function-with-es6/41555235
Shows examples of adding a conditional statement to the map function.
___________________________
___________________________
endsWith() Method
https://www.w3schools.com/jsref/jsref_endswith.asp
Determines whether a string ends with the characters of a specified string.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
Anchors: string start ^ and end $
https://javascript.info/regexp-anchors
In these particular cases we could use string methods startsWith/endsWith instead. Regular expressions should be used for more complex tests.
___________________________
*/ 
// Your code should go here:

