/*
####  Abbreviations Unique?  ####

You are given two inputs:

Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.


[Examples]

_________
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true
_________



[Notes]

Abbreviations will be a substring from [0, n] from the original string.


[higher_order_functions] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.startsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which th …
___________________________
___________________________
Map Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys.
___________________________

*/
//Your code should go here:

