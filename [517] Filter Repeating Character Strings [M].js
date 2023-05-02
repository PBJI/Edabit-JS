/*Filter Repeating Character Strings

Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).


[Examples]

_________
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []
_________



[Notes]

_________
*) A string with a single character is trivially counted as a string with repeating identical characters.
*) If there are no strings with repeating identical characters, return an empty array (see example #3).
_________



[arrays] [language_fundamentals] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
How to check if all characters in a string are equal?
https://stackoverflow.com/questions/41192854/function-that-checks-whether-all-characters-in-a-string-are-equal-javascript-h?rq=1
I found a solution to this homework question, but I dont feel its the most efficient way to tackle the problem. Interested in other solutions I should explore. Questio …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
*/ 
// Your code should go here:

