/*
####  A Simple Comparison  ####

Mubashir needs your help to compare two arrays.
First array arr1 contains some numbers and second array arr2 contains squared values of numbers given in the first array.
Create a function which takes these two arrays and returns true if all square values are available, false otherwise.
_________
arr1 = [121, 144, 19, 161, 19, 144, 19, 11]  
arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
_________

Returns true because 121 is square of 11, 14641 is square of 121, 20736 is square of 144, 361 is square of 19, 25921 the square of 161, and so on...
_________
arr1 = [121, 144, 19, 161, 19, 144, 19, 11] 
arr2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
_________



[Examples]

_________
simpleComp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) ➞ true

simpleComp([4, 4], [1, 31]) ➞ false

simpleComp([2, 2, 3], [4, 4, 9]) ➞ true
_________



[Notes]

Numbers can be in any order.


[arrays] [interview] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
___________________________

*/
//Your code should go here:

