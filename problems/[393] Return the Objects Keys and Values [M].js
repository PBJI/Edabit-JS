/*Return the Objects Keys and Values

Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.


[Examples]

_________
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
_________



[Notes]

Remember to sort the keys.


[formatting] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.keys()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerate …
___________________________
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enum …
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Object.entries()
https://developer.mozilla.org/en_us/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a …
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
___________________________
How to Get All Values from a JavaScript Object
https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key
Suppose, it has more than 50 properties, without knowing the property names (that's without knowing the 'keys') how to get each property value in a loop?
___________________________
___________________________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all non-Symbol, enumerable properties of an object.
___________________________
*/ 
// Your code should go here:

