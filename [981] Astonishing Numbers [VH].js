/*
####  Astonishing Numbers  ####

In this challenge, you have to establish if a given integer is an Astonishing number. An Astonishing number is an integer that, when partitioned into two parts a (left) and b (right), is equal to the sum of the consecutive numbers from a up to b (if a is lower than b), or from b up to a (if a is greater than b).
Given a positive integer num, implement a function that returns:
_________
*) The string "AB-Astonishing" if num is an Astonishing number and the partition a is lower than b.
*) The string "BA-Astonishing" if num is an Astonishing number and the partition a is greater than b.
*) false if num is not an Astonishing number.
_________



[Examples]

_________
isAstonishing(15) ➞ "AB-Astonishing"
// There is only one possible partition: a = 1 and b = 5
// Sum from a up to b: 1 + 2 + 3 + 4 + 5 = 15
// It's Astonishing and partition a is lower than partition b

isAstonishing(4020) ➞ false
// There are three possible partitions
// Partition 1: a = 4 and b = 020 = 20 (leading zeros are not considered)
// Sum from a up to b: 4 + 5 + 6 + ... + 20 = 204
// Partition 2: a = 40 and b = 20
// Sum from b up to a: 20 + 21 + 22 + ... + 40 = 630
//Partition 3: a = 402 and b = 0
// Sum from b to a: 0 + 1 + 2 + ... + 402 = 81003
// It's not Astonishing

isAstonishing(2002077) ➞ "BA-Astonishing"
// There are six possible partitions
// Partition 1: a = 2 and b = 002077 = 2077 (leading zeros are not considered)
// Sum from a up to b: 2 + 3 + 4 + ... + 2077 = 2158002
// Partition 2: a = 20 and b = 02077 = 2077
// Sum from a up to b: 20 + 21 + 22 + ... + 2077 = 2157813
// Partition 3: a = 200 and b = 2077
// Sum from a up to b: 200 + 201 + 202 + ... + 2077 = 2138103
// Partition 4: a = 2002 and b = 077 = 77
// Sum from b up to a: 77 + 78 + 79 + ... + 2002 = 2002077
// It's Astonishing and partition a is greater than partition b
_________



[Notes]

_________
*) Leading zeros in the b partition are not considered (see examples #2 and #3).
*) A valid partition has at least a number into it, and this number can be also 0 (see example #2).
*) You can expect positive integers greater than 9 as input (a single-digit number can't be partitioned).
_________



[loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Finding the Sum of Consecutive Numbers
https://study.com/academy/lesson/finding-the-sum-of-consecutive-numbers.html
How long would it take you to add the numbers 1-100? Without the quick thinking of Carl Gauss, it might take you a long time. In this lesson, we'll learn the formula Ga …
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
___________________________
___________________________
Sum of All Natural Numbers in Range L to R
https://www.geeksforgeeks.org/sum-of-all-natural-numbers-in-range-l-to-r/
Given a range L and R, the task is to find the sum of all natural numbers in range L to R.
___________________________

*/
//Your code should go here:

