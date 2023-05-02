/*
####  Pagination Class with OOP  ####

Your task is to create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

The pagination class will accept 2 parameters:

So for example we could initialize our pagination like this:
_________
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const p = new Pagination(alphabetArray, 4);
_________

And then use the method getVisibleItems to show the contents of the paginated array.
_________
console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
_________

You will have to implement various methods to go through the pages such as:
_________
*) prevPage
*) nextPage
*) firstPage
*) lastPage
*) goToPage
_________

Here's a continuation of the example above using nextPage and lastPage:
_________
p.nextPage();

console.log(p.getVisibleItems());
// ["e", "f", "g", "h"]

p.lastPage();

console.log(p.getVisibleItems());
// ["y", "z"]
_________



[Notes]

_________
*) You don't have to use ES6 class if you don't want to
*) The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
*) The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage();
*) Please remove the comments I provided before publishing your solution.
_________



[classes] [math] [numbers] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
JavaScript Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object- …
___________________________
___________________________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
___________________________

*/
//Your code should go here:

