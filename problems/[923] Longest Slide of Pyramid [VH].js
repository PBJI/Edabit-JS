/*
####  Longest Slide of Pyramid  ####

Create a function that takes a 2D array of pyramid numbers and returns the maximum sum of consecutive numbers from the top to the bottom of the pyramid.
_________
                        /3/
                        \7\ 4 
                       2 \4\ 6 
                      8 5 \9\ 3

// Longest slide down sum is 3 + 7 + 4 + 9 = 23
_________



[Examples]

_________
longestSlide([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) ➞ 23

longestSlide([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]) ➞ 20

longestSlide([[2], [9, 4], [1, 8, 7], [6, 4, 7, 2]]) ➞ 26
_________



[Notes]

N/A


[algorithms] [functional_programming] [numbers] 



-------------------------------------------------------------------
[Resources]
___________________________
Maximum Path Sum in a Triangle
https://www.geeksforgeeks.org/maximum-path-sum-triangle/
We have given numbers in form of triangle, by starting at the top of the triangle and moving to adjacent numbers on the row below, find the maximum total from top to bo …
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
___________________________
___________________________
Array.prototype.reduceRight()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
___________________________

*/
//Your code should go here:

