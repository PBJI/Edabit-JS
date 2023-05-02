/*Calculate the Total Price of Groceries

Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
_________
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
_________



[Examples]

_________
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3
_________



[Notes]

There might be a floating point precision problem in here...


[arrays] [logic] [math] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Number.parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
Parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
___________________________
___________________________
Unary plus (+)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
Precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
___________________________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
___________________________
___________________________
Converting Strings to Numbers with Vanilla JavaScript
https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
In JavaScript, you can represent a number is an actual number (ex. 42), or as a string (ex. '42'). If you were to use a strict comparison to compare the two, it would …
___________________________
___________________________
Rounding in JavaScript
https://www.jacklmoore.com/notes/rounding-in-javascript/
Interesting article where the problem of the .toFixed() method is explained.
___________________________
___________________________
Floating Point Math
https://0.30000000000000004.com/
Your language isn't broken, it's doing floating point math. Computers can only natively store integers, so they need some way of representing decimal numbers. This repr …
___________________________
*/ 
// Your code should go here:

