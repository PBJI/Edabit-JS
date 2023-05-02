/*Learn Lodash: _.drop, Drop the First Elements of an Array

According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
Your challenge is to write your own version using vanilla JavaScript.


[Examples]

_________
drop([1, 2, 3], 1) ➞ [2, 3]

drop([1, 2, 3], 2) ➞ [3]

drop([1, 2, 3], 5) ➞ []

drop([1, 2, 3], 0) ➞ [1, 2, 3]
_________



[Notes]

_________
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
_________



[arrays] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
The While Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
___________________________
___________________________
loads _.drop Vs Array.shift, splice, and slice
https://dustinpfister.github.io/2017/09/25/lodash_drop/
It looks like lodash is a bit of a mixed bag of methods some of which do not exist in javaScripts built in Array prototype, and other methods that appear to be redundan …
___________________________
___________________________
_.drop(array, [n=1])
https://lodash.com/docs/4.17.15#drop
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
___________________________
___________________________
Lodash _.drop() Method
https://www.geeksforgeeks.org/lodash-_-drop-method/
Used to drop the elements in a given array.
___________________________
*/ 
// Your code should go here:

