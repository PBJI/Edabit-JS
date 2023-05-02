/*
####  Fauna in Chitwan National Park  ####

Create a function that takes a string containing both the name and number of animals and plants that may or may not be found in Chitwan National Park. The function should return an array of tuples where the first element in the tuple is the animal name and the second element in the tuple is a number of that particular animal that is found in Chitwan National Park.


[Animals Present in Chitwan National Park]

_________
animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"]
_________



[Examples]

_________
faunaNumber("There are 24 one-hornedrhino, 50 python and 20000 mango.") ➞ [{"one-hornedrhino": 24}, {"python": 50}]
// Mango not present in animal array.

faunaNumber("There are 244 bengaltiger, 200 monitorlizard and 5000 apples.") ➞ [{"bengaltiger": 244}, {"monitorlizard": 200}]
// Apples not present in animal array.
_________



[Notes]

_________
*) Input contains name and number of both animals and plants.
*) If there is no match, return an empty array.
_________



[language_fundamentals] [logic] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Is used for matching text with a pattern.
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________

*/
//Your code should go here:

