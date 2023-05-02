/*
####  Longest Word in a 7 Segment Display  ####

Given an array of words, return the longest word which can fit on a 7 segment display.

_________
*) Letters which do not fit on a 7 segment display are k, m, v, w and x.
*) Therefore, do not count words which include these letters.
_________



[Examples]

_________
longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""
_________



[Notes]

_________
*) All words will be given in lowercase.
*) Return an empty string if no words are eligible (see example #3).
*) If multiple valid words have the same length, return the first word that appears.
_________



[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________

*/
//Your code should go here:

