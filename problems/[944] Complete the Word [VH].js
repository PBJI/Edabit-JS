/*
####  Complete the Word  ####

An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.
Create a function that, given an input string, determines if the word can be completed.


[Examples]

_________
canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete("butlz", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

canComplete("tulb", "beautiful") ➞ false
// Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

canComplete("bbutl", "beautiful") ➞ false
// Too many "b"s, beautiful has only 1.
_________



[Notes]

Both string input and word will be lowercased.


[loops] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Insert a String at a Specific Index
https://stackoverflow.com/questions/4313841/insert-a-string-at-a-specific-index
Insert a string at a specific index.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________

*/
//Your code should go here:

