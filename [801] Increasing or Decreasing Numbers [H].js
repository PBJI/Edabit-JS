/*
####  Increasing or Decreasing Numbers  ####

Mubashir needs your help to find out Increasing and Decreasing numbers for a given range.


[Increasing Numbers]

Numbers whose digits, when read from left to right, are never less than the previous digit. See below some examples of increasing numbers:
_________
1111
123456
125788999
_________



[Decreasing Numbers]

Numbers whose digits, when read from left to right, are never greater than the previous digit. See below some examples of decreasing numbers:
_________
1111
654321
999887521
_________

Create a function that takes a number n and returns total occurrences of all the increasing or decreasing numbers in the range 1 - 10^n.


[Examples]

_________
incDec(0) ➞ 1
// 10^0 = 1
// 1 is both increasing and decreasing.

incDec(1) ➞ 10
// 10^1 = 10
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are both increasing and decreasing numbers.

incDec(3) ➞ 475
_________



[Notes]

To make it even clearer, the increasing or decreasing numbers in range 101-200 are:
110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 126, 127, 128, 129, 133, 134, 135, 136, 137, 138, 139, 144, 145, 146, 147, 148, 149, 155, 156, 157, 158, 159, 166, 167, 168, 169, 177, 178, 179, 188, 189, 199, 200
The total will be 47 in this case.
It might it clearer to give examples of numbers in the range which are not included:
_________
*) 121 would not be included because it starts off increasing and then starts decreasing.
*) 5433342 would not be included because it starts off decreasing, temporarily increases from the 5th to the 6th digit, then changes again form the 6th to the 7th digits.
*) 7777 would be included because, according to the rules, it can be considered both increasing AND decreasing.
_________



[algorithms] [logic] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
forEach() Method
https://www.w3schools.com/jsref/jsref_foreach.asp
Calls a function once for each element in an array, in order.
___________________________

*/
//Your code should go here:

