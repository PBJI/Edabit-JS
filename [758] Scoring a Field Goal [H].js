/*
####  Scoring a Field Goal  ####

In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).
Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.


[Examples]

_________
isGoalScored([
  ["  #     #  "],
  ["  #  0  #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #0    #  "],
  ["  #     #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #     #  "],
  ["  #     #  "],
  ["  #     # 0"],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ false
_________



[Notes]

_________
*) All goals will be of the same size.
*) All arrays will be of equal length (11).
*) A team can never score if it hits the crossbar or goes underneath it.
_________



[arrays] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
The Map object holds key-value pairs and remembers the original insertion order of the keys.
___________________________

*/
//Your code should go here:

