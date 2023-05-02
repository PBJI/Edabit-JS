/*Limit a Number's Value

Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
_________
*) If the number falls within the range, the number should be returned.
*) If the number is less than the lower limit of the range, the lower limit should be returned.
*) If the number is greater than the upper limit of the range, the upper limit should be returned.
_________



[Examples]

_________
limitNumber(5, 1, 10) ➞ 5

limitNumber(-3, 1, 10) ➞ 1

limitNumber(14, 1, 10) ➞ 10

limitNumber(4.6, 1, 10) ➞ 4.6
_________



[Notes]

_________
*) All test inputs will be valid numbers.
*) All test inputs' range parameters will be in the correct order (i.e. the lower range will be less than or equal to the upper range).
_________



[conditions] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
This operator is frequently used as a shortcut for the if statement.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
sort() Method
https://www.w3schools.com/jsref/jsref_sort.asp
Sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the sort() method sorts t …
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
___________________________
*/ 
// Your code should go here:

