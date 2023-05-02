/*RegEx XIV: Group Ranges x|y

Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
_________
const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
_________

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.


[Examples]

_________
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
_________



[Notes]

Check the Resources tab if you get stuck.


[formatting] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
Groups and Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Indicate groups and ranges of expression characters.
___________________________
___________________________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
___________________________
___________________________
Alternation with The Vertical Bar or Pipe Symbol
https://www.regular-expressions.info/alternation.html
I already explained how you can use character classes to match a single character out of several possible characters. Alternation is similar. You can use alternation to …
___________________________
*/ 
// Your code should go here:

