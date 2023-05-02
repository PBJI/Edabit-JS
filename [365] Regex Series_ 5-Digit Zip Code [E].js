/*Regex Series: 5-Digit Zip Code

Write a regular expression that matches a string if and only if it is a valid zip code.


[Examples]

_________
"32554" ➞ true

"92 342" ➞ false
// Invalid: contains a whitespace

"9@342" ➞ false
// Invalid: contains a non-numeric character

"923444" ➞ false
// Invalid: length is not 5
_________



[Notes]

_________
*) Zipcodes must be 5 digits long exactly and only contain numbers.
*) Not allowed: non-numeric characters or whitespaces.
*) This challenge is designed to use Regex only.
_________



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
A Practical Guide to Regular Expressions (RegEx) In JavaScript
https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
When you first encounter Regular Expressions, they may seem a bit weird, like a random string of gibberish. While they might look awkward (with a somewhat confusing syn …
___________________________
___________________________
Validate ZIP Codes
https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
You need to validate a ZIP code (U.S. postal code), allowing both the five-digit and nine-digit (called ZIP+4) formats. The regex should match 12345 and 12345-6789, but …
___________________________
___________________________
RegExp [0-9] Expression
https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp
The [^0-9] expression is used to find any character that is NOT a digit. The digits inside the brackets can be any numbers or span of numbers from 0 to 9.
___________________________
___________________________
ZIP Code (US Postal Code) Validation
https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
I thought people would be working on little code projects together, but I don't see them, so here's an easy one: Code that validates a valid US Zip Code. I know there …
___________________________
___________________________
Regular Expression to Match Exactly 5 Digits
https://stackoverflow.com/questions/4975644/regular-expression-to-match-exactly-5-digits
I'm reading a full html into variable. From the variable, want to grab out all numbers with the pattern of exactly 5 digits. No need to care of whether before/after thi …
___________________________
___________________________
JavaScript RegExp [0-9] Expression
https://www.w3schools.com/jsref/jsref_regexp_0-9.asp
The [0-9] expression is used to find any character between the brackets. The digits inside the brackets can be any numbers or span of numbers from 0 to 9.
___________________________
___________________________
Learn Regular Expressions with Simple, Interactive Exercises
https://regexone.com/
Regular expressions are extremely useful in extracting information from text such as code, log files, spreadsheets, or even documents. And while there is a lot of theor …
___________________________
___________________________
Check Whether a Given Value Is Us Zip Code or Not
https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-12.php
JavaScript validation with regular expression (exercise-12 with solution). Write a JavaScript function to check whether a given value is US zip code or not.
___________________________
*/ 
// Your code should go here:

