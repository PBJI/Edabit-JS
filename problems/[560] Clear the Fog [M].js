/*Clear the Fog

Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".


[Examples]

_________
clearFog("sky") ➞ "It's a clear day!"

clearFog("fogfogFFfoooofftogffreogffesGgfOogfog") ➞ "trees"

clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog") ➞ "birdsandthebees"
_________



[Notes]

_________
*) Hidden words won't include the letters f, o or g.
*) Hidden words are always in lowercase.
_________



[formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
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
A Practical Guide to Regular Expressions
https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
When you first encounter Regular Expressions, they may seem a bit weird, like a random string of gibberish. While they might look awkward (with a somewhat confusing syn …
___________________________
*/ 
// Your code should go here:

