/*Fix the Code: Un-Mutating an Array

Your friend is trying to write a function to accomplish the following transformations:
_________
let x = [3, 3, 3, 3, 3, 3, 3]

// Each time x is called, the following results are shown:

change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]
_________

Note: The change() function should not mutate the original array. After each call to the function, the original x should still equal [3, 3, 3, 3, 3, 3, 3].
He comes up with the following code:
_________
function change(x, times) {
  for(let i = 0; i < x.length; i++) {
    let j = 1; 
    while (j <= times) {
      if (i >= j && i < x.length-j) {
        x[i]--; 
      }
      j++; 
    }
  }
  return x; 
}
_________

Oops! The code appears to mutate the original array. Fix this incorrect code so that the function no longer mutates the original array.
See below:


[Examples]

_________
let x = [3, 3, 3, 3, 3, 3, 3]

// What we want:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

// What we get:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]  // Good so far...

change(x, 2) => [3, 1, -1, -1, -1, 1, 3] // Array is mutated :(
_________



[Notes]

_________
*) If this is confusing, copy and paste the incorrect code in a REPL environment and play around with the code to understand what the function is doing.
*) Hint: Try to make a copy of the input array.
*) If this looks familiar, it is part of a solution for the Concentric Rug problem.
_________



[bugs] [loops] [scope] 



-------------------------------------------------------------------
[Resources]
___________________________
Array​.prototype​.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
___________________________
___________________________
How to Clone an Array in Javascript
https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
Learn how to clone an array in JavaScript with this resource.
___________________________
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
*/ 
// Your code should go here:

