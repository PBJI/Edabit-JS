/*
####  You Sunk My Battleship!  ####

Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them.
Create a function that takes an array of arrays (matrix) and a coordinate as a string. If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".
Instruction text contains two blank spaces between quotation marks; the code/test does not. See examples below.


[Examples]

_________
[
  [".", ".", ".", "*", "*"],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", ".", "*", "*", "."],
]

fire(matrix, "A1") ➞ "splash"

fire(matrix, "A4") ➞ "BOOM"

fire(matrix, "D2") ➞ "BOOM"
_________



[Notes]

_________
*) The provided matrix is always a square.
*) The provided matrix will not be larger than 5 * 5 ( A1 * E5).
_________



[arrays] [games] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
___________________________
___________________________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
___________________________
___________________________
Multidimensional Array
https://www.javascripttutorial.net/javascript-multidimensional-array/
JavaScript doesn't provide the multidimensional array. This tutorial shows you how to create a JavaScript multidimensional array by using an array of arrays.
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Objects
https://www.w3schools.com/js/js_object_definition.asp
The two examples above do exactly the same. There is no need to use new Object(). For simplicity, readability and execution speed, use the first one (the object litera …
___________________________
___________________________
Battleship
https://en.wikipedia.org/wiki/Battleship_(game)
Is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of ships (including battleships) are marked …
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________

*/
//Your code should go here:

