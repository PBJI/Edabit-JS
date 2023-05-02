/*Explosion Intensity

Given a number, return a string of the word "Boom", which varies in the following ways:
_________
*) The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
*) If n is evenly divisible by 2, add an exclamation mark to the end.
*) If n is evenly divisible by 5, return the string in ALL CAPS.
*) If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
_________

The example below should help clarify these instructions.


[Examples]

_________
boomIntensity(4) ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

boomIntensity(1) ➞ "boom"
// 1 is lower than 2, so we return "boom"

boomIntensity(5) ➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
_________



[Notes]

_________
*) A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
*) "Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".
_________



[algorithms] [conditions] [formatting] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
___________________________
*/ 
// Your code should go here:

