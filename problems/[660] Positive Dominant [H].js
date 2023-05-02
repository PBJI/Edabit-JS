/*Positive Dominant

An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.


[Examples]

_________
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false
_________



[Notes]

0 counts as neither a positive nor a negative value.


[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
JavaScript Array Distinct()
https://codeburst.io/javascript-array-distinct-5edc93501dc4
Ever wanted to get distinct elements from an array? Or wanted to get distinct objects from an array by a property? This blog post is for you.
___________________________
___________________________
Math.sign()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
Returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
___________________________
___________________________
Negative Number
https://stackoverflow.com/questions/3571717/javascript-negative-number
I want to check if a number is negative. I'm searching for the easiest way, so a predefined javascript function would be the best but I didn't found yet anything, here …
___________________________
*/ 
// Your code should go here:

