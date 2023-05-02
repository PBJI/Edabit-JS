/*Calculate an Earned Run Average

Create a function that returns an Earned Run Average (ERA). An ERA is calculated by multiplying 9 by the quotient of Earned Runs Allowed er divided by ip Innings Pitched.
In baseball statistics, innings are represented with a fractional part of .1 (1/3) or .2 (2/3) to represent the number of outs in an inning. A whole number or a number with a fractional part of .0 represents a full inning with three outs. Check the Resources tab for a deeper explanation.


[Examples]

_________
era(22, 99) ➞ 2.00

era(23, 99.1) ➞ 2.08

era(24, 99.2) ➞ 2.17
_________



[Notes]

_________
*) ERA is represented with a scale of 2: 2.08
*) For 1/3 and 2/3, use a scale of 2.
_________



[math] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
ERA Calculator (Earned Run Average)
https://captaincalculator.com/sports/baseball/era-calculator/
In Baseball, earned run average is calculated as follows. Each out that is pitched counts as 1/3 of an inning. Most professional level games are nine innings. Softball …
___________________________
___________________________
Earned Run Average
https://en.wikipedia.org/wiki/Earned_run_average
The average of earned runs given up by a pitcher per nine innings pitched (i.e. the traditional length of a game). It is determined by dividing the number of earned run …
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Innings Pitched
https://en.wikipedia.org/wiki/Innings_pitched
The number of innings a pitcher has completed, measured by the number of batters and baserunners that are put out while the pitcher is on the pitching mound in a game. …
___________________________
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
*/ 
// Your code should go here:

