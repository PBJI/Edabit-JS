/*
####  Lemonade Stand  ####

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
Return true if and only if you can provide every customer with correct change.


[Examples]

_________
lemonade([5, 5, 5, 10, 20]) ➞ true

lemonade([5, 5, 10, 10, 20]) ➞ false

lemonade([10, 10]) ➞ false

lemonade([5, 5, 10]) ➞ true
_________



[Notes]

_________
*) You don't have any change in hand at first.
*) bills is an integer array.
*) bills[i] will be either 5, 10, or 20.
_________



[conditions] [logic] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.length
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________

*/
//Your code should go here:

