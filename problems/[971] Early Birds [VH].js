/*
####  Early Birds  ####

A Natural Number String Sequence is a string containing all numbers, starting from 0, joined without spaces or other delimitators between them.
_________
"01234567891011121314151617181920..."
_________

If you think of the sequence as an array, any number has a natural position index it occupies within a string long enough to contain it based on the real position in the numeric sequence. Looking at the example above, numbers from 0 to 9 are equals to their index position in the string; starting from 10, every number has a string natural index position different from itself (number 10 has a position of 10|11 because it has two digits, number 11 has a position of 12|13, and so on).
When a number appears in the sequence before its natural position is an Early Bird. Suppose that we want to know if number 12 is an Early Bird in the above example sequence:
_________
01234567891011121314151617181920
_!!___________!!________________
_________

Natural position index of 12 is |14, 15| (after 11 and before 13 in the numeric sequence), but, if we look closely at the sequence, it appears before its natural position, at index |1, 2| (after 0 and before 3): 12 is then an Early Bird number (and the first to appear, also).
You are given two integers as parameters: range is the ending number of the string sequence to generate, and n is the number to analyze. You must implement a function that returns an array that contains the position indexes of n (with every position index being an array in turn), and the string "Early Bird!" as the last element of the array only if n is an Early Bird. If n it's not an Early Bird and the returned array has to contain just the array with its natural position index.


[Examples]

_________
isEarlyBird(20, 14) ➞ [[18, 19]]

isEarlyBird(20, 12) ➞ [[1, 2], [14, 15], "Early Bird!"]

isEarlyBird(101, 101) ➞ [[10, 11, 12], [193, 194, 195], "Early Bird!"]
_________



[Notes]

_________
*) In every given case, the range will be high enough to obtain the natural position of the number, don't worry about exceptions handling.
*) The given number n will be greater than 9 for every case, as trivially every single-digit number appears at the same index in the numeric sequence and in the string sequence.
*) The position indexes have to be in the order they appear in the string sequence.
*) The string at the end of the array has to be present only if n is an Early Bird.
*) Check the Resources tab for more info on this sequence.
_________



[arrays] [numbers] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
The 0123456789101112... sequence
http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/EarlyBirds/natseq.html#section4
Write the numbers in order as a single string of digits: 012345678910111213... . Where does a given number appear first? For instance 12 is right at the beginning as w …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
RegExp() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
Creates a regular expression object for matching text with a pattern.
___________________________
___________________________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastindexof
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
___________________________

*/
//Your code should go here:

