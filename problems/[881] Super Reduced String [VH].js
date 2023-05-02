/*
####  Super Reduced String  ####

Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.
Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".


[Case]

_________
superReducedString("aaabccddd") ➞ "abd"
_________

Explanation:
_________
"aaabccddd" -> "abccddd" -> "abddd" -> "abd"
_________



[Examples]

_________
superReducedString("cccxllyyy") ➞ "cxy"

superReducedString("aa") ➞ "Empty String"

superReducedString("baab") ➞ "Empty String"

superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"

superReducedString("chklssstt") ➞ "chkls"
_________



[Notes]

N/A


[algorithms] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
___________________________
___________________________
while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
___________________________
___________________________
Loops and iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() …
___________________________
___________________________
How to Replace All Occurrences of a String
https://attacomsian.com/blog/string-replace-javascript#:~:text='Java')%3B-,Using%20Split%20and%20Join,sensitive)%20and%20returns%20the%20array.
Two ways to replace a string in JavaScript.
___________________________

*/
//Your code should go here:

