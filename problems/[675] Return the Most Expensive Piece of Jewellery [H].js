/*Return the Most Expensive Piece of Jewellery

You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".


[Examples]

_________
mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}) ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"
_________



[Notes]

_________
*) There will always be at least one item in the object.
*) There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).
_________



[objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
___________________________
___________________________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Object.entries() Method
https://www.geeksforgeeks.org/object-entries-javascript/
Is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter. The ordering of the properties is the s …
___________________________
*/ 
// Your code should go here:

