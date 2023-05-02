/*
####  WordRank Scoring System  ####

Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.


[Examples]

_________
wordRank("The quick brown fox.") ➞ "brown"

wordRank("Nancy is very pretty.") ➞ "pretty"

wordRank("Check back tomorrow, man!") ➞ "tomorrow"

wordRank("Wednesday is hump day.") ➞ "Wednesday"
_________



[Notes]

_________
*) If two words score the same, return the word that appears first in the original string.
*) The returned string should only contain alphabetic characters (a-z).
*) Preserve case in the returned string (see 4th example above).
_________



[algorithms] [arrays] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________

*/
//Your code should go here:

