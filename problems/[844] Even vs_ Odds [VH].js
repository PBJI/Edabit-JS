/*
####  Even vs. Odds  ####

Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.
A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.
For instance:
_________
[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
_________

After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.
For instance:
_________
[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
_________

Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).
Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).
Given an array, calculate the number of liked spots.


[Examples]

_________
availableSpots([0, 4, 6, 8], 9) ➞ 0
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.

availableSpots([0, 4, 6, 8], 12) ➞ 3
// 12 likes ALL of the spots.

availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
// 7 dislikes every spot except the last one at: [4, __, 5].

availableSpots([4, 4], 8) ➞ 1
_________



[Notes]

N/A


[arrays] [higher_order_functions] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

