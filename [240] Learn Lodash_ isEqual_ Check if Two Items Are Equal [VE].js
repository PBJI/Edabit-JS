/*Learn Lodash: isEqual, Check if Two Items Are Equal

Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.
This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.


[Arguments]

_________
*) value (can be anything): The first value to compare.
*) other (can be anything): The other value to compare against.
*) returns: (boolean): Returns true if they are the same, otherwise false.
_________



[Examples]

_________
const objects =
var object = { "a": 1 }
var other = { "a": 1 }
isEqual(object, other)
returns true
object === other
returns false
_________



[Notes]

_________
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
_________



[objects] 



-------------------------------------------------------------------
[Resources]
___________________________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts an object or value to a JSON string.
___________________________
___________________________
Equality Comparisons and Sameness
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
JavaScript provides three different value-comparison operations: === - Strict Equality Comparison ("strict equality", "identity", "triple equals") == - Abstract Equali …
___________________________
___________________________
Lodash _.isEqual() Method
https://www.geeksforgeeks.org/lodash-_-isequal-method/
Performs a deep comparison between two values to determine if they are equivalent. This method supports comparing arrays, array buffers, boolean, date objects, maps, nu …
___________________________
___________________________
How to use lodash to find a matching value if it exists?
https://stackoverflow.com/questions/31386798/use-lodash-to-find-a-matching-value-if-it-exists
You can use lodash's find() method mixed with a regular conditional (if) statement to do this.
___________________________
*/ 
// Your code should go here:

