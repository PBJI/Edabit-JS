/*Is it Time for Milk and Cookies?

Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.


[Examples]

_________
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
_________



[Notes]

_________
*) Dates are zero based (see resources).
*) All test cases contain valid dates.
_________



[dates] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Date.prototype.getDate()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
Returns the day of the month for the specified date according to local time.
___________________________
___________________________
Date.prototype.getMonth()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
Returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
___________________________
___________________________
Checking Date Equality in JavaScript
http://adripofjavascript.com/blog/drips/checking-date-equality-in-javascript.html
When working with dates, one of a programmer's most common needs is to check whether one date matches another. And if you're like most programmers, the first way that y …
___________________________
___________________________
Why is there zero-based month numbering in JavaScript?
https://stackoverflow.com/questions/1453043/zero-based-month-numbering?answertab=votes#tab-top
Some popular programming languages use month numbering which is off by 1 -- JavaScript comes to mind, as does Java, and if memory serves, C is another. I have some ques …
___________________________
___________________________
Date Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January 19 …
___________________________
___________________________
Date.prototype.toJSON()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
Returns a string representation of the Date object.
___________________________
___________________________
RegExr: Learn, Build, & Test RegEx
https://regexr.com/
An online tool to learn, build, & test Regular Expressions (RegEx / RegExp).
___________________________
___________________________
Everything You Need to Know About Date in JavaScript
https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
Date can actually be quite simple if you know what to watch out for. In this article, I'll walk you through everything you need to know about the Date object.
___________________________
___________________________
Dates
https://www.youtube.com/watch?v=7QaZ4lehCfk&t=383s
Full guide of the date function in Javascript.
___________________________
*/ 
// Your code should go here:

