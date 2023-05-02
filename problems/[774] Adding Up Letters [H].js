/*
####  Adding Up Letters  ####

Create a function addLetters that takes a list/array of letters a, and returns the "sum" of them.
To add two letters, take their number value, add them together, and convert it back together. For example, a would be 1, b would be 2, etc. So to add b and c, take 2 + 3 = 5, and then get the fifth letter of the alphabet (e).
So then d + e + f would be 4 + 5 + 6 = 15, and the fifteenth letter is o, so that's what you return.
Letters can also wrap. Like with y + c, that's 25 + 3 = 28, which doesn't exist. Consider that the 27th letter just wraps around and ends back up at a. With this logic, y + c = b. Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.


[Examples]

_________
addLetters(["a"]) ➞ "a"
addLetters(["a", "b"]) ➞ "c"
addLetters(["a", "b", "c"]) ➞ "f"
addLetters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
addLetters(["y", "a"]) ➞ "z"
addLetters(["y", "c"]) ➞ "b"
addLetters(["z", "a"]) ➞ "a"
addLetters(["x", "y", "z"]) ➞ "w"
addLetters([]) ➞ "z"
_________



[Notes]

_________
*) Don't forget to return the result.
*) An empty array should return z. The logic behind this is that if you get a sum of 0, then wrap it all the way around backwards (since the 0th letter doesn't exist), giving you 26 which = z.
*) All letters given will be lowercase.
_________



[arrays] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
reduce() Method
https://www.w3schools.com/jsref/jsref_reduce.asp
Reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the functi …
___________________________
___________________________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
___________________________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
___________________________
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________

*/
//Your code should go here:

