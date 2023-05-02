/*
####  Alphabet Clash (Battle of the ASCII Values)  ####

In this challenge, you have to establish the points scored by two players (called Player A and Player Z) after an ASCII game session.
The two players place randomly the 26 letters of the English alphabet in a string and ten integers (ranged from 0 up to 25) in an array. Each integer represents the index of a letter to eliminate from the opponent's string so that the two players will afford the battle with two reduced strings of 16 letters.

_________
str_A = "MZNHUVIOEPTWFJCBXKALSDQGYR"
// The 26 letters of Player A ...

str_Z = "YFTUCSQOMGKPXNDWHIVJRABZEL"
// ... and the 26 letters of Player Z

ind_A = [1, 3, 2, 8, 10, 12, 9, 7, 4, 22]
// The indices to eliminate into str_Z:
// str_Z[1] is "F", delete it
// str_Z[3] is "U", delete it
// and so on ...

ind_Z = [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
// ... and the indices to eliminate into str_A:
// str_A[21] is "D", delete it!
// str_A[24] is "Y", delete it!
// and so on ...

str_A = "MNVIOWFJCBXALSQG"
// Player A now has 16 letters
// The relative order is the same as before the elimination ...

str_Z = "YSQPNDWHIVJRAZEL"
// ... and so is for Player Z
_________

Now, you have to compare the letters of the players' strings progressively from the left, obtaining their ASCII values: during this series of clashes, the highest letter (meaning the greater ASCII value) gives to his possessor a number of points equal to its value less the one of its opponent. If the letters are equal for both players, they don't gain any points.

_________
str_A = "MNVIOWFJCBXALSQG"

str_Z = "YSQPNDWHIVJRAZEL"

// Each letter has an ASCII value...
// Starting from left:

Player A = 77, 78, 86, 73, 79, 87, 70, 74, 67, 66, 88, 65, 76, 83, 81, 71
Player Z = 89, 83, 81, 80, 78, 68, 87, 72, 73, 86, 74, 82, 65, 90, 69, 76

// Each ASCII value is compared with its corresponding among the players

// notation: Player A vs. Player Z

// Clash 1: 77 vs. 89
// Player Z wins and he obtains 89 - 77 = 12 points

// Clash 2: 78 vs. 83
// Player Z wins and he obtains 83 - 78 = 5 points

// Clash 3: 86 vs. 81
// Player A wins and he obtains 86 - 81 = 5 points

// Clash 4: 73 vs, 80
// Player Z wins and he obtains 80 - 73 = 7 points

// Clash 5: 79 vs. 78
// Player A wins and he obtains 79 - 78 = 1 point

// and so on...
_________

You are given four parameters:
_________
*) str_A is a string containing the 26 letters placed by Player A (only unique uppercase letters).
*) ind_A is an array containing the 10 indices (as integers ranged from 0 up to 25) submitted by Player A.
*) str_Z is the string of Player Z.
*) ind_Z is the array of Player Z.
_________

You have to implement a function that returns the score of the players as an object with two entries named "A" and "Z" (in the given order):
_________
// Result of the step-by-step example game:

{ A: 64, Z: 96 }
_________



[Examples]

_________
alphaClash(
  "MZNHUVIOEPTWFJCBXKALSDQGYR",
  [1, 3, 2, 8, 10, 12, 9, 7, 4, 22],
  "YFTUCSQOMGKPXNDWHIVJRABZEL",
  [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
) ➞ { A: 64, Z: 96 }

alphaClash(
  "OZLICHFRKYBVUDSPWXJNGTQAEM",
  [8, 6, 4, 2, 0, 10, 12, 14, 16, 18],
  "WKJVUNXHRFDIOBTCSLZMPYGQAE",
  [7, 5, 3, 1, 9, 11, 13, 15, 17, 19]
) ➞ { A: 77, Z: 63 }

alphaClash(
  "IBXOWMUSGYPADJCLVKETQRZHFN",
  [23, 19, 21, 22, 2, 4, 6, 1, 0, 12],
  "TOLFIYHGKWAXRBDQMVNJSPCUZE",
  [15, 8, 2, 1, 0, 25, 12, 13, 16, 14]
) ➞ { A: 75, Z: 50 }
_________



[Notes]

_________
*) Remember: ind_A are the indices choose by Player A, and they eliminate the letters of str_Z and vice-versa for ind_Z.
*) Points are gained by the possessor of the highest letter in every single clash, equal to the ASCII value of the higher letter less than the ASCII value of the lower letter. If two letters are the same it's a draw, and nothing happens.
*) The given data will be valid: only 26 different uppercased letters into strings, only 10 different integers into arrays. There aren't exceptions to handle.
_________



[control_flow] [data_structures] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach
Executes a provided function once for each array element.
___________________________
___________________________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/charcodeat
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

