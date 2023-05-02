/*
####  RegEx XX : Group Ranges ⁠— Named Capturing Groups (?<Name>x)  ####

Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets, < and >, are required for group name.
To extract the United States area code from a phone number, we could use:
_________
let match = "(214) 987-6482".match(/\((?<area>\d\d\d)\)/)
console.log(match.groups.area) ➞ 214
_________

Grab the year, month and day from a string of dates. Name your groups with year, month, and day and in that order in your expression. You only have to come up with the regular expression. The replace() function is already implemented in the test.
_________
let REGEXP = your solution
let str = "2019-10-30, 2020-01-01"

str.replace(REGEXP, "$<day>.$<month>.$<year>") ➞ "30.10.2019, 01.01.2020"
_________



[Notes]

_________
*) Dates do not go back before 1900.
*) Dates always come in year-month-day format.
*) Check the Resources tab if you get stuck.
_________



[formatting] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
New JS Features That Will Change How You Write RegEx
https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/#named-capture-groups
You can group a part of a regular expression by encapsulating the characters in parentheses. This allows you to restrict alternation to a part of the pattern or apply a …
___________________________
___________________________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
___________________________
___________________________
RegEx Tester and Debugger
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
With highlighting for PHP, Python, Golang and JavaScript.
___________________________
___________________________
Capturing Groups
https://javascript.info/regexp-groups
A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”. That has two effects: It allows to get a part of the match as a separate …
___________________________
___________________________
Groups and Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
Indicate groups and ranges of expression characters.
___________________________

*/
//Your code should go here:

