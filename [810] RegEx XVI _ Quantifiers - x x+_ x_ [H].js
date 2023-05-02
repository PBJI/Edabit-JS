/*
####  RegEx XVI : Quantifiers - x*, x+, x?  ####

Quantifiers indicate numbers of characters or expressions to match.
x* matches the preceding item "x" 0 or more times.
_________
"A ghost booooed".match(/bo*/) ➞ "boooo"
_________

x+ matches the preceding item "x" 1 or more times. Equivalent to {1,}.
_________
"caaaaaaandy".match(/a+/) ➞ "aaaaaa"
_________

x? matches the preceding item "x" 0 or 1 times. If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).
_________
"angle.".match(/e?le?/) ➞ "le"
"angel.".match(/e?le?/) ➞ "el"
_________

_________
*) Write the regex to match only the street.
*) Use a quantifier in your expression.
_________



[Example]

_________
let address = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
address.match(REGEXP) ➞ "4 Privet Drive"
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
Quantifiers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
Quantifiers indicate numbers of characters or expressions to match.
___________________________
___________________________
Regular Expressions Reference: Quantifiers
https://www.regular-expressions.info/refrepeat.html
JGsoft .NET Java Perl PCRE PCRE2 PHP Delphi R JavaScript VBScript XRegExp Python Ruby std::regex Boost Tcl ARE POSIX BRE POSIX ERE GNU BRE GNU ERE …
___________________________
___________________________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
___________________________

*/
//Your code should go here:

