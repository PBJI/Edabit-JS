/*Pronouncing the Xs

Create a function which replaces all the x's in the string in the following ways:
Replace all x's with "cks" UNLESS:
_________
*) The word begins with "x", therefore replace it with "z".
*) The word is just the letter "x", therefore replace it with "ecks".
_________



[Examples]

_________
xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"
_________



[Notes]

_________
*) All x's are lowercase.
*) I know that not all words with x's follow this rule, but there are too many edge cases to count!
_________



[conditions] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

