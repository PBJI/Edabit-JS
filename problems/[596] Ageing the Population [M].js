/*Ageing the Population...

Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.


[Examples]

_________
afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) ➞ {
  "Genie" : 1005,
  "Joe" : 45
}
_________



[Notes]

_________
*) Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
*) n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
_________



[numbers] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
___________________________
___________________________
Math.abs()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
___________________________
___________________________
Best way to get the key of a key/value object?
https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object
If I have a JS object like: var foo = { 'bar' : 'baz' } If I know that foo has that basic key/value structure, but don't know the name of the key, what's the easiest w …
___________________________
___________________________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
___________________________
*/ 
// Your code should go here:

