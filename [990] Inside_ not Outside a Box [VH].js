/*
####  Inside, not Outside a Box  ####

Write a function that returns the number of distinct items inside a box. Do not count items outside the box.
There are four boundaries for a box and those boundaries start with a "#" and end with a "#". Look for horizontal and vertical consecutive hashes.


[Examples]

_________
count([
  "??????",
  "?####?",
  "?#&!#?",
  "@#^Z#?",
  "$####?"
]) ➞ 4

count([
  "??????",
  "?####?",
  "?#ZZ#?",
  "@#ZZ#?",
  "$####?",
  "AAAAAA"
]) ➞ 1

count([
  "AAAAA",
  "AAA##",
  "AAA##",
  "AAAAA",
  "AAAAA"
]) ➞ 0
_________



[Notes]

Return 0 if the box is empty or too small to fit anything.


[formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
___________________________
___________________________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
The size accessor property returns the number of (unique) elements in a Set object.
___________________________

*/
//Your code should go here:

