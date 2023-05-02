/*Convenience Store

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.


[Examples]

_________
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
_________



[Notes]

_________
*) quarter: 25 cents / $0.25
*) dime: 10 cents / $0.10
*) nickel: 5 cents / $0.05
*) penny: 1 cent / $0.01
_________



[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
What is a quarter, dime, nickel, and a penny?
https://www.quora.com/What-is-a-quarter-dime-nickel-and-a-penny-What-are-their-differences
For those like me, that don't know the subunits of a dollar.
___________________________
___________________________
U.S. Currency Value
https://www.immihelp.com/usa-currency-coins/
This web page gives basic information about U.S. currency and various coins in circulation. U.S. currency is produced at U.S. Treasury locations in Washington, D.C., an …
___________________________
___________________________
Convert Nickel to Dollar Bill
https://www.convertunits.com/from/nickel/to/dollar
How many nickel in 1 dollar? The answer is 20. We assume you are converting between nickel and dollar bill. You can view more details on each measurement unit: nickel o …
___________________________
___________________________
if... else
https://www.w3schools.com/js/js_if_else.asp
Conditional statements are used to perform different actions based on different conditions.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

