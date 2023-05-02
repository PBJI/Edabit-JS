/*
####  Word Nests (Part 2)  ####

A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.
Nesting 3 times with the word "incredible":
_________
start  = incredible
first  = incre(incredible)dible
second = increin(incredible)credibledible
third  = increinincr(incredible)ediblecredibledible
_________

The final nest is increinincrincredibleediblecredibledible (depth = 3)
Valid word nests can always be collapsed to show the starting word, by reversing the process above:
_________
word = "incredible"
nest = "increinincrincredibleediblecredibledible"

Steps:
=> "increinincrincredibleediblecredibledible"   # starting nest
=> "increinincr(incredible)ediblecredibledible" # find word in nest
=> "increinincr            ediblecredibledible" # remove word
=> "increinincrediblecredibledible"             # join remaining halves
=> "increin(incredible)credibledible"           # find word in nest...

... repeat steps until single word remains

=> "incredible" (return true as "incredible" = word)
_________

When invalid word nests are collapsed, the starting word isn't found:
_________
word = "spring"
nest = "sprspspspringringringg"

Steps:
=> "sprspspspringringringg"   # starting nest
=> "sprspsp(spring)ringringg" # find word in nest
=> "sprspsp        ringringg" # remove word
=> "sprspspringringg"         # join remaining halves
=> "sprsp(spring)ringg"       # find word in nest...

... repeat steps until single word remains

=> "sprg" (return false as "sprig" != "spring")
_________

Given a starting word and a final word nest, return true if the word nest is valid. Return false otherwise.


[Examples]

_________
validWordNest("deep", "deep") ➞ true

validWordNest("novel", "nonnonovnovnovelelelvelovelvel") ➞ true

validWordNest("painter", "ppaintppapaipainterinternteraintererainter") ➞ false
// Doesn't show starting word after being collapsed.

validWordNest("shape", "sssshapeshapehahapehpeape") ➞ false
// Word placed outside, not inside itself.
_________



[Notes]

Valid word nests can only be created by repeatedly placing the word inside itself, so at any point when collapsing the nest, there should only be one instance of the word to be found.


[conditions] [language_fundamentals] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
RegExp() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
Creates a regular expression object for matching text with a pattern.
___________________________

*/
//Your code should go here:

