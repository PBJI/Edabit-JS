/*
####  Seasons on Earth  ####

In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.
You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.


[Examples]

_________
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"
_________



[Notes]

During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.


[conditions] [data_structures] [dates] 



-------------------------------------------------------------------
[Resources]
___________________________
Date.prototype.getMonth()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
Returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Season Definition: When Do They Start?
https://www.timeanddate.com/calendar/aboutseasons.html
Seasons are periods in a year marked by specific weather conditions, temperatures and length of day. Most modern day calendars divide the year in 4 seasons: spring, sum …
___________________________

*/
//Your code should go here:

