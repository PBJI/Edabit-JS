/*Number of Squares in an N * N Grid

Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.


[Examples]

_________
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55
_________



[Explanation]

_________
*) If n = 0 then the number of squares is 0
*) If n = 1 then the number of squares is 1 + 0 = 1
*) If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
*) If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
_________

As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.


[Notes]

_________
*) Input is a positive integer.
*) Square pyramidal number.
_________



[math] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Square Pyramidal Number
https://en.wikipedia.org/wiki/Square_pyramidal_number
A figurate number that represents the number of stacked spheres in a pyramid with a square base. Square pyramidal numbers also solve the problem of counting the number …
___________________________
___________________________
Square Pyramidal Number Formula
https://math.wikia.org/wiki/Square_pyramidal_number
Uses pictures and descriptions to explain how a square pyramidal number works. (represents a pyramid with a base and four sides.)
___________________________
___________________________
Recursive Function Calls Itself until Condition Met
https://developer.mozilla.org/en-US/docs/Glossary/Recursion
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (e …
___________________________
___________________________
A Look at Recursion
https://medium.com/better-programming/a-look-at-recursion-in-javascript-with-examples-e5d27ebacf1e
With the widespread support of ECMA6 Script and ES2020 already coming over the horizon, Recursion, once often seen in JavaScript as a reference or a coding interview ex …
___________________________
___________________________
Exponentiation ** (power) operator
https://levelup.gitconnected.com/exponentiation-operator-in-javascript-e38e8255062c
Returns the result of the first variable to the power of the second variable. That is, Math.pow(a,b).
___________________________
___________________________
Unique Squares in N * N Square Grid
http://coweb.cc.gatech.edu/ice-gt/1363#:~:text=The%20total%20for%20any%20nxn,to%201%20when%20n%3D1.
Ask the students how many squares are there in a 4x4 grid of squares. Many will answer 16. Tell them that there are more than that. After they have had a chance to thi …
___________________________
*/ 
// Your code should go here:

