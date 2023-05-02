/*
####  Balanced Words  ####

We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
Write a function that returns true if the word is balanced, and false if it's not.


[Examples]

_________
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
_________



[Notes]

_________
*) All words will be lowercase, and have a minimum of 2 characters.
*) Palindromic words will always be balanced.
_________



[strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
indexOf() Method
https://www.w3schools.com/jsref/jsref_indexof_array.asp
The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
___________________________
___________________________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays...
___________________________
___________________________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see …
___________________________

*/
//Your code should go here:

