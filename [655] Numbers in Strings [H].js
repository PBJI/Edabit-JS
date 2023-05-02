/*Numbers in Strings

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.


[Examples]

_________
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
_________



[Notes]

_________
*) The strings can contain white spaces or any type of characters.
*) Bonus: Try solving this without RegEx.
_________



[arrays] [loops] [numbers] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
some() Method
https://www.w3schools.com/jsref/jsref_some.asp
Checks if any of the elements in an array pass a test.
___________________________
___________________________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
___________________________
___________________________
Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
___________________________
___________________________
Regex Check Contain at Least 1 Digit
https://stackoverflow.com/questions/3180354/regex-check-if-string-contains-at-least-one-digit
This will match any digit. If your regular expression engine is Unicode-aware, this means it will match anything that's defined as a digit in any language, not just the …
___________________________
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
.
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
test() Method
https://www.w3schools.com/jsref/jsref_regexp_test.asp
Tests for a match in a string. This method returns true if it finds a match, otherwise it returns false.
___________________________
*/ 
// Your code should go here:

