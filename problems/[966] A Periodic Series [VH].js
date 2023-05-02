/*
####  A Periodic Series  ####

This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.
Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.
Example:
_________
"124", "247", "713", "311", "115", "157", "713", "311" ...
_________

This series becomes periodic at a length of 6 before "713" reappears.
Create a function whose argument is a digit string (the first term) and returns the length of the series when it first becomes periodic.


[Examples]

_________
periodic("1") ➞ 1

periodic("3061") ➞ 7

periodic("02468") ➞ 178

periodic("314159265") ➞ 12210
_________



[Notes]

N/A


[loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
while loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________

*/
//Your code should go here:

