/*Is it an Object?

Create a function to check whether the given parameter is an Object or not.


[Examples]

_________
isObject(function add(x,y) {return x + y}) ➞ true

isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
_________



[Notes]

Inputs may be null, primitive wrapper types, dates.


[conditions] [logic] [objects] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
instanceof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
Tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
___________________________
___________________________
How do you check if a value is an Object in JavaScript?
https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
Try using typeof(var) and/or var instanceof something.
___________________________
___________________________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Why is null considered an object in JavaScript?
https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
null is not an object, it is a primitive value. For example, you cannot add properties to it. Sometimes people wrongly assume that it is an object, because typeof null …
___________________________
___________________________
Comparing the JavaScript typeof and instanceof Operators
https://levelup.gitconnected.com/comparing-the-javascript-typeof-and-instanceof-operators-8844f23633a
In JavaScript, there are the typeof and instanceof operators. They look similar but they do different things. In this article, we’ll look at the difference between them …
___________________________
*/ 
// Your code should go here:

