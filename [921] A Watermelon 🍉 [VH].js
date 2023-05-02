/*
####  A Watermelon 🍉  ####

Mubashir is eating a watermelon.
_________
*) He spits out all watermelon seeds if seeds are more than five.
*) He can swallow all watermelon seeds if seeds are less than or equal to five.
*) He can eat 1/4 of a watermelon each time.
_________

Given a 2D array of watermelon where 0 is representing juicy watermelon while 1 is representing seed, return total number of seeds spit-out. See below example for detailed explanation :
Given a watermelon:
_________
1, 0, 0, 1, 1, 1, 0, 1
1, 0, 1, 0, 1, 1, 0, 0
1, 1, 1, 1, 0, 0, 0, 0
0, 1, 0, 1, 1, 1, 1, 0
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 0
total seeds = 0
_________

Mubashir eats 1/4 piece (4x4 matrix) of watermelon :
_________
x, x, x, x, 1, 1, 0, 1
x, x, x, x, 1, 1, 0, 0
x, x, x, x, 0, 0, 0, 0
x, x, x, x, 1, 1, 1, 0
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 10
total seeds = 10 (All seeds were spit-out)
_________

Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :
_________
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 8
total seeds = 10+8 = 18 (All seeds were spit-out)
_________

Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :
_________
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, 0, 1, 0, 0
x, x, x, x, 0, 0, 1, 1
x, x, x, x, 0, 0, 0, 0
x, x, x, x, 0, 0, 0, 0

seeds = 7
total seeds = 18+7 = 25 (All seeds were spit-out)
_________

Mubashir eats last 1/4 piece (4x4 matrix) of watermelon :
_________
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x

seeds = 3
total seeds = 25+0 = 25
_________



[Examples]

_________
totalSeeds(watermelon) ➞ 25
_________



[arrays] [loops] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
___________________________
___________________________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) …
___________________________
___________________________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________

*/
//Your code should go here:

