/*Largest Swap

Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
To illustrate:
_________
largestSwap(27) ➞ false

largestSwap(43) ➞ true
_________

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.


[Examples]

_________
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
_________



[Notes]

Numbers with two identical digits (third example) should yield true (you can't do better).


[logic] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.trunc()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
Returns the integer part of a number by removing any fractional digits.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Array.prototype.reverse()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
___________________________
___________________________
3 Ways to Reverse a String in JavaScript
https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
Reversing a string is one of the most frequently asked JavaScript question in the technical round of interview. Interviewers may ask you to write different ways to reve …
___________________________
___________________________
Object.prototype.toString()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
___________________________
___________________________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Number Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
A wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type object number is created using …
___________________________
___________________________
parseInt() Method
https://www.w3schools.com/jsref/jsref_parseint.asp
Older browsers will return 8 for parseInt("010"). Older versions of ECMAScript used octal (radix 8) for values beginning with "0". From ECMAScript 5 (2009) default is …
___________________________
*/ 
// Your code should go here:

