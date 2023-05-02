/*Video Length in Seconds

You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.


[Examples]

_________
minutesToSeconds("01:00") ➞ 60

minutesToSeconds("13:56") ➞ 836

minutesToSeconds("10:60") ➞ false
_________



[Notes]

_________
*) The video length is given as a string.
*) If the number of seconds is 60 or over, return false (see example #3).
*) You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).
_________



[language_fundamentals] [math] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Convert HH:MM:SS String to Seconds Only in JavaScript
https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
I am having similar requirement as this: Convert time in HH:MM:SS format to seconds only But in JavaScript. I have seen many examples of converting seconds into differe …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
___________________________
*/ 
// Your code should go here:

