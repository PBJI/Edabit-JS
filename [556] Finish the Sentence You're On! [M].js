/*Finish the Sentence You're On!

POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.
For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.


[Worked Example]

_________
timeToFinish(
  "And so brings my conclusion to its conclusion.",
  "And so brings my conclusion to"
) ➞ 7

// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
_________



[Examples]

_________
timeToFinish(
  "And so brings my conclusion to its conclusion.",
  "And so brings my conclusion to its conclus"
) ➞ 2

timeToFinish(
  "As a result, my point is still valid.",
  "As a result, my"
) ➞ 9

timeToFinish(
  "Thank you for reading my essay.",
  "T"
) ➞ 12.5
_________



[Notes]

The unfinished sentence is always found at the start of a complete sentence.


[loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Remove Spaces From a String
https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
Removing spaces from a given string in Javascript.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
String Length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
___________________________
*/ 
// Your code should go here:

