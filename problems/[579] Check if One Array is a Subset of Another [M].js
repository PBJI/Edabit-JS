/*Check if One Array is a Subset of Another

Array A is contained inside array B if each element in A also exists in B.
The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.
_________
A = [3, 3, 9, 9, 9, 5]
B = [1, 3, 9, 5, 8, 44, 44]

A_Set = [3, 9, 5]
B_Set = [1, 3, 9, 5, 8, 44]

// A_Set is a subset of B_Set
_________

Create a function that determines if the first array is a subset of the second.


[Examples]

_________
subset([1, 3], [1, 3, 3, 5]) ➞ true

subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true

subset([1, 3], [1, 33]) ➞ false

subset([1, 3, 10], [10, 8, 8, 8]) ➞ false
_________



[Notes]

_________
*) Each input array will have at least one element.
*) Check the resources tab for a hint.
_________



[arrays] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.every()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
___________________________
___________________________
Array.prototype.includes()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
___________________________
___________________________
Check if an array is subset of another array?
https://stackoverflow.com/questions/38811421/check-if-an-array-is-subset-of-another-array
Let's say I have two arrays, var PlayerOne = ['B', 'C', 'A', 'D']; var PlayerTwo = ['D', 'C']; What is the best way to check if arrayTwo is subset of arrayOne using ja …
___________________________
___________________________
How to convert Set to Array?
https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array
Set seems like a nice way to create Arrays with guaranteed unique elements, but it does not expose any good way to get properties, except for generator [Set].values, wh …
___________________________
*/ 
// Your code should go here:

