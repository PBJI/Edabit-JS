/*Is the Word Singular or Plural?

Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".


[Examples]

_________
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false
_________



[Notes]

_________
*) Don't forget to return the result.
*) Remember that return true (boolean) is not the same as return "true" (string).
*) This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
_________



[conditions] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
___________________________
___________________________
How to get the last character in a string?
https://stackoverflow.com/questions/7447927/in-javascript-how-can-i-get-the-last-character-in-a-string/7447956
If I have the following variable in javascript var myString = "Test3"; what is the fastest way to parse out the "3" from this string that works in all browsers (back …
___________________________
___________________________
String.prototype.substring()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
string.length
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object indicates the length of a string, in UTF-16 code units.
___________________________
___________________________
String.prototype.charAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
___________________________
*/ 
// Your code should go here:

