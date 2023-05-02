/*Burglary Series (01): Calculate Total Losses

You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".


[Examples]

_________
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"
_________



[Notes]

_________
*) The item value is always positive.
*) This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
*) This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.
_________



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
___________________________
___________________________
Array.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
___________________________
___________________________
How do I test for an empty JavaScript object?
https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
After an AJAX request, sometimes my application may return an empty object, like: var a = {}; How can I check whether that's the case?
___________________________
___________________________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
___________________________
___________________________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
*/ 
// Your code should go here:

