/*
####  Text Editor Part 1  ####

We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.
We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:
_________
*) An insert operation contains the text to be inserted and the position to insert it at.
*) A delete operation contains the position to delete from and the length of the text to delete.
_________

Write a function that takes a list of operations, either insert or delete, and returns the combined text.


[Examples]

_________
[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"

[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"
_________



[Notes]

Keep in mind that each operation will have data that assumes the previous operations were already processed.


[objects] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________

*/
//Your code should go here:

