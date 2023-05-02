/*Moving Partition

Create a function to partition an array from left to right.


[Examples]

_________
movingPartition([-1, -1, -1, -1])
➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

movingPartition([1, 2, 3, 4, 5])
➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

movingPartition([]) ➞ []
_________



[Notes]

_________
*) With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
*) An empty array should return an empty array: []
_________



[arrays] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
___________________________
___________________________
Array.prototype.slice()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
___________________________
*/ 
// Your code should go here:

