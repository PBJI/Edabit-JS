/*RegEx XIV: Group Ranges - Character Sets

Groups and ranges indicate groups and ranges of expression characters. Character Sets match any characters inside of brackets [ ]. You can specify a range of characters by using a hyphen.
_________
/[abcd]/ === /[a-d]/
_________

If the hyphen appears as the first or last character then it is considered a literal hyphen.
_________
"non-profit".match(/[abc-]/g)  // "-"
"non-profit".match(/[-abc]/g)  // "-"
_________

You can also use character classes in a character set. So instead of this:
_________
/[A-Za-z0-9_-]/
_________

You can do this:
_________
/[\w]/
_________

Create a regex to match the letter "x" followed by two characters, each of which may be any digit or any character from A to F. Case sensitive.


[Examples]

_________
"Exception 0xAF".match(REGEXP) ➞ "xAF"

"Exception 0xD3".match(REGEXP) ➞ "xD3"

"Exception 0xd3".match(REGEXP) ➞ null

"Exception 0xZZ".match(REGEXP) ➞ null
_________



[Notes]

Check the Resources tab if you get stuck.


[regex] 



-------------------------------------------------------------------
[Resources]
___________________________
Sets and Ranges [...]
https://javascript.info/regexp-character-sets-and-ranges
Several characters or character classes inside square brackets […] mean to “search for any character among given”.
___________________________
___________________________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
___________________________
___________________________
Groups and Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Indicate groups and ranges of expression characters.
___________________________
*/ 
// Your code should go here:

