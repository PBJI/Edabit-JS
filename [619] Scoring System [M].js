/*Scoring System

Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.
For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.


[Examples]

_________
calculateScores("A") ➞ [1, 0, 0]

calculateScores("ABC") ➞ [1, 1, 1]

calculateScores("ABCBACC") ➞ [2, 2, 3]
_________



[Notes]

If given an empty string as an input, return [0, 0, 0].


[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Counting the Occurrences / Frequency of Array Elements
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
In Javascript, I'm trying to take an initial array of number values and count the elements inside it. Ideally, the result would be two new arrays, the first specifying …
___________________________
___________________________
Array​.prototype​.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
String​.prototype​.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
Array​.prototype​.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
String​.prototype​.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Array​.prototype​.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
*/ 
// Your code should go here:

