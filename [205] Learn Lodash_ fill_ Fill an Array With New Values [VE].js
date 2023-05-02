/*Learn Lodash: _.fill, Fill an Array With New Values

According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.
This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.


[Arguments]

_________
*) array (Array): The array to fill.
*) value (*): The value to fill array with.
*) [start=0] (number): The start position.
*) [end=array.length] (number): The end position.
_________



[Returns]

_________
*) (Array): Returns array.
_________



[Examples]

_________
var array = [1, 2, 3]

fill(array, "a") ➞ ["a", "a", "a"]

fill(Array(3), 2) ➞ [2, 2, 2]

fill([4, 6, 8, 10], "*", 1, 3) ➞ [4, "*", "*", 10]
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
Array.prototype.fill()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
___________________________
___________________________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
___________________________
___________________________
Lodash Fill
https://lodash.com/docs/4.17.15#fill
Fills elements of array with value from start up to, but not including, end.
___________________________
___________________________
You Might Not Need Lodash
https://youmightnotneed.com/lodash/
Just to be clear: you should probably use Lodash – just make sure you import the bits you need, not the whole library to use one method. Lodash is a great library, wel …
___________________________
*/ 
// Your code should go here:

