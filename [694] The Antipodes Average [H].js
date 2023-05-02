/*The Antipodes Average

In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:
_________
*) Split the array into two parts of equal length. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
*) Sum each number of the first part with each number of the reversed second part, obtaining a new single array having the same length of the previous two.
*) Divide by two each number in the final array.
_________

Given an array of integers arr, implement a function that returns a new array applying the above algorithm.


[Examples]

_________
antipodesAverage([1, 2, 3, 4]) ➞ [2.5, 2.5]
// Left part = [1, 2]
// Reversed right part = [4, 3]
// Array resulting from the sum of each pair = [5, 5]
// Each number is divided by two = [2.5, 2.5]

antipodesAverage([1, 2, 3, 4, 5]) ➞ [3, 3]
// The length of array is odd, number 3 (in the middle) is eliminated
// Left = [1, 2]
// Reversed right = [5, 4]
// Sum = [6, 6]
// Division by two = [3, 3]

antipodesAverage([-1, -2]) ➞ [-1.5]
//  (-1 + -2) / 2 = [-1.5]
_________



[Notes]

_________
*) Every given arr will contain at least two numbers.
*) Into the given arr, numbers will always be whole (either positives or negatives), but the numbers into the returned final array can also be a float (either positives or negatives, see the examples #1 and #3).
*) You can do three separated steps, or thinking about how the algorithm can be synthesized for obtaining the result.
_________



[algorithms] [arrays] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
___________________________
___________________________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Math.ceil() Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer.
___________________________
___________________________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
___________________________
*/ 
// Your code should go here:

