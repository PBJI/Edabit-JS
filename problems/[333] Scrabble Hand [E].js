/*Scrabble Hand

Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
Here's an example hand:
_________
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
_________

The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.


[Examples]

_________
maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]) ➞ 28

maximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
]) ➞ 15
_________



[Notes]

Here, each tile is represented as an object with two keys: tile and score.


[games] [loops] [math] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________
___________________________
JavaScript Array reduce() Method
https://www.w3schools.com/jsref/jsref_reduce.asp#:~:text=The%20reduce()%20method%20reduces,for%20array%20elements%20without%20values.
The reduce() method reduces the array to a single value.
___________________________
___________________________
Finally Understand the JavaScript Reduce Method
https://alligator.io/js/finally-understand-reduce/
Reduce is a method that can be difficult to understand especially with all the vague explanations that can be found on the web. There are a lot of benefits to understan …
___________________________
___________________________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Arrow functions allow us to write shorter function syntax:
___________________________
___________________________
How to Use Object Destructuring
https://dmitripavlutin.com/javascript-object-destructuring/
Is a useful JS feature for extracting properties from objects and binding them to variables. Destructuring can extract multiple properties in one statement, can access …
___________________________
___________________________
Map.prototype.forEach()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/foreach
Executes a provided function once per each key/value pair in the Map object, in insertion order.
___________________________
___________________________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Simplify your JavaScript – Use .map(), .reduce(), and .filter()
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
If you’re starting in JavaScript, maybe you haven’t heard of .map(), .reduce(), and .filter(). For me, it took a while as I had to support Internet Explorer 8 until a c …
___________________________
___________________________
When (and why) you should use ES6 arrow functions — and when you shouldn’t
https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/
Arrow functions (also called “fat arrow functions”) are undoubtedly one of the more popular features of ES6. They introduced a new way of writing concise functions.
___________________________
*/ 
// Your code should go here:

