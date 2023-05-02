/*Burglary Series (12): Get Vodka Bottle

The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.


[Examples]

_________
{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70
_________



[Notes]

_________
*) There will always be a corresponding Rammstein bottle for the number given.
*) There will never be 2 Rammstein bottles with the same number.
*) You always return one Rammstein bottle.
_________



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#:~:text=entries()%20returns%20an%20array,values%20of%20the%20object%20manually.
Returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object. The ordering of the prop …
___________________________
___________________________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
___________________________
___________________________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
String.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
Performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
___________________________
*/ 
// Your code should go here:

