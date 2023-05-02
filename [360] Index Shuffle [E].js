/*Index Shuffle

Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
To illustrate:
_________
indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
_________



[Examples]

_________
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"
_________



[Notes]

0 should be treated as an even number.


[loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
for...in
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
___________________________
___________________________
How to Find Odd or Even Numbers
http://www.tutorialsmade.com/javascript-find-odd-even-number/
To find an entered number is Odd or Even is very simple, all you have to do is divide the number by 2 and if you get the remainder 0 (zero) then it is an Even number ot …
___________________________
*/ 
// Your code should go here:

