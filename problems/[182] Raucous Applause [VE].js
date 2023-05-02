/*Raucous Applause

After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
Given a string of what the overlapping claps sounded like, return how many claps were made in total.


[Examples]

_________
countClaps("ClaClaClaClap!") ➞ 4

countClaps("ClClClaClaClaClap!") ➞ 6

countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
_________



[Notes]

Each clap starts with a capital "C".


[language_fundamentals] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
___________________________
___________________________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
How to count string occurrence in string using JavaScript?
https://www.geeksforgeeks.org/how-to-count-string-occurrence-in-string-using-javascript/
In JavaScript, we can count the string occurrence in a string by counting the number of times the string present in the string. JavaScript provides a function match(), …
___________________________
___________________________
Build, Test, and Debug Regex
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java. Features a regex quiz & library.
___________________________
*/ 
// Your code should go here:

