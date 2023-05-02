/*One Button Messaging Device

Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.
Write a function that takes a string (the message) and returns the total number of times the button is pressed.


[Examples]

_________
howManyTimes("abde") ➞ 12

howManyTimes("azy") ➞ 52

howManyTimes("qudusayo") ➞ 123
_________



[Notes]

_________
*) Ignore spaces.
*) The given string argument will be in lower case.
_________



[logic] [loops] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
How to convert letters to numbers with JavaScript?
https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
11 How could I convert a letter to its corresponding number in JavaScript? For example: a = 0 b = 1 c = 2 d = 3 I found this question on converting numbers to letters …
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
*/ 
// Your code should go here:

