/*What's Hiding Amongst the Crowd?

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
_________
*) The wanted word is in lowercase.
*) The crowd of letters is all in uppercase.
*) Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
_________



[Examples]

_________
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
_________



[Notes]

N/A


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
How can I test if a letter in a string is uppercase or lowercase using JavaScript?
https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
The answer by josh and maleki will return true on both upper and lower case if the character or the whole string is numeric. making the result a false result.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
___________________________
___________________________
Regex
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
Is an object that describes a pattern of characters. Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
___________________________
___________________________
String.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
Determines whether one string may be found within another string, returning true or false as appropriate.
___________________________
___________________________
The Extended ASCII Table
https://www.ascii-code.com/
Stands for American Standard Code for Information Interchange. It's a 7-bit character code where every single bit represents a unique character. On this webpage you wil …
___________________________
*/ 
// Your code should go here:

