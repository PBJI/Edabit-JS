/*
####  Tic Tac Toe  ####

Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.


[Examples]

_________
ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"
_________



[Notes]

Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.


[arrays] [games] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Transposing a 2D-array in JavaScript
https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
An array of arrays, something like: [ [1,2,3], [1,2,3], [1,2,3], ] I would like to transpose it to get the following array: [ [1,1,1], [2,2,2], …
___________________________
___________________________
Tic-Tac-Toe
https://en.wikipedia.org/wiki/Tic-tac-toe
A paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizont …
___________________________
___________________________
TypedArray.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map
Creates a new typed array with the results of calling a provided function on every element in this typed array. This method has the same algorithm as Array.prototype.ma …
___________________________
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Play Tic-Tac-Toe Online
https://playtictactoe.org/
Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.
___________________________

*/
//Your code should go here:

