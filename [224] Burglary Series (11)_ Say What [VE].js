/*Burglary Series (11): Say What

The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.
Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.


[Examples]

_________
{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
_________



[Notes]

_________
*) The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
*) I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
*) Check the Resources for tips if needed.
_________



[arrays] [loops] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
___________________________
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
___________________________
___________________________
Access Object Properties
https://dmitripavlutin.com/access-object-properties-javascript/
You can access the properties of an object in JavaScript in 3 ways: Dot property accessor: object.property Square brackets property access: object['property'] Object de …
___________________________
___________________________
Template literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
___________________________
*/ 
// Your code should go here:

