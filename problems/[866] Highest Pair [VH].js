/*
####  Highest Pair  ####

You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.


[Examples]

_________
highestPair(["A", "A", "Q", "Q", "6" ]) ➞ [true, "A"]

highestPair(["J", "6", "3", "10", "8"]) ➞ false

highestPair(["K", "7", "3", "9", "3"]) ➞ [true, "3"]

highestPair(["K", "9", "10", "J", "Q"]) ➞ false

highestPair(["3", "5", "5", "5", "5"]) ➞ [true, "5"]
_________



[Notes]

Hands with three or more of the same card still count as containing a pair (see the last example).


[arrays] [conditions] [games] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.indexOf()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

