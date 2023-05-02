/*ES6: Destructuring Objects VIII

Using basic object destructuring you can assign variables name and email:
_________
let { name, email } = { name: "John", email: "john@example.com" }

console.log(name)  // "John"
console.log(email)  // "john@example.com"
_________

What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
_________
let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}

rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
_________

There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.
Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignment { name, email, rest }. Ignore the .toString() function (used for validation).


[Notes]

If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.


[formatting] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
ES6 In Depth: Destructuring
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the ECMAScript standard, ES6 for short. Editor’s note: …
___________________________
___________________________
ES6: Array Destructuring
https://medium.com/infancyit/es6-array-destructuring-53d674a0aa1f
In this time, when we want to access the array properties, destructuring is essential for us. Destructuring assignment is a cool feature that came along with ES6. The g …
___________________________
___________________________
Object Destructuring Assignment in JavaScript
https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/
A JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested …
___________________________
*/ 
// Your code should go here:

