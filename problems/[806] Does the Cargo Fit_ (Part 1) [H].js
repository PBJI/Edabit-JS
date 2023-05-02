/*
####  Does the Cargo Fit? (Part 1)  ####

A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if all the cargo can fit on the ship, and false if it can't.
_________
*) "S" means 50 cargo space.
*) "M" means 100 cargo space.
*) "L" means 200 cargo space.
_________



[Examples]

_________
willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]) ➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true
_________



[Notes]

Calculate the cargo as a whole, and not for each separate cargo hold (see example #2).


[logic] [math] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final …
___________________________

*/
//Your code should go here:

