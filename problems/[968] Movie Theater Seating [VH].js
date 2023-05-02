/*
####  Movie Theater Seating  ####

A group of n friends are going to see a movie. They would like to find a spot where they can sit next to each other in the same row. A movie theater's seat layout can be represented as a 2-D matrix, where 0s represent empty seats and 1s represent taken seats.
_________
[[1, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 1, 0, 0, 0]]
_________

Create a function that, given a seat layout and the number of friends n, returns the number of available spots for all n friends to sit together. In the above example, if n = 3, there would be 2 spots (the first row and last row).


[Examples]

_________
groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2) ➞ 3

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4) ➞ 2
_________



[Notes]

Multiple free arrangements that overlap still count as distinct arrangements (see example #2).


[arrays] [higher_order_functions] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Array​.prototype​.for​Each()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
___________________________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
___________________________

*/
//Your code should go here:

