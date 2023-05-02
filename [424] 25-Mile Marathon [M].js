/*25-Mile Marathon

Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
Return true if the marathon is 25 miles long, otherwise, return false.


[Examples]

_________
marathonDistance([1, 2, 3, 4]) ➞ false

marathonDistance([1, 9, 5, 8, 2]) ➞ true

marathonDistance([-6, 15, 4]) ➞ true
_________



[Notes]

_________
*) Items in the array will always be integers.
*) Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
*) Return false if the arguments are empty or not provided.
_________



[algebra] [arrays] [math] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Empty array, evaluates to true in conditional structures. Why is this?
https://stackoverflow.com/questions/19146176/javascript-empty-array-evaluates-to-true-in-conditional-structures-why-is
Also, Is this behavior consistent in all browsers? Or are there any gotchas there too? I observed this behavior in Goolgle Chrome by the way.
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
*/ 
// Your code should go here:

