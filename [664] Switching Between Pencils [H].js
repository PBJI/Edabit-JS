/*Switching Between Pencils

When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.
Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
_________
*) It takes 1 second to switch between pencils.
*) It takes 2 seconds to color a square.
_________

See the example below for clarification.
_________
color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
_________



[Examples]

_________
colorPatternTimes(["Blue"]) ➞ 2

colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
_________



[Notes]

_________
*) Only change coloring pencils if the next color is different to the color before it.
*) Return a number in seconds.
_________



[algorithms] [arrays] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Remove Repeated Entries From an Array While Preserving Non-Consecutive Duplicates
https://stackoverflow.com/questions/30716829/how-to-remove-repeated-entries-from-an-array-while-preserving-non-consecutive-du
I have an array like var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4, 5, 5, 5]; I really want the output to be [5,2,9,4,5]. My logic for this was...
___________________________
*/ 
// Your code should go here:

