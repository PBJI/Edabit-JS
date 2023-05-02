/*
####  Get Students with Names and Top Notes  ####

Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.
If student has no notes (an empty array) then let's assume topNote: 0.


[Examples]

_________
getStudentsWithNamesAndTopNotes([
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
])
➞ [
  { "name": "John", "topNote": 5 },
  { "name": "Max", "topNote": 6 },
  { "name": "Zygmund", "topNote": 3 }
]
_________



[Notes]

Try solving this challenge with an arrow function.


[arrays] [functional_programming] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.map()
https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
___________________________
___________________________
Math.max(…[]) is equal to -Infinity?
https://stackoverflow.com/questions/42719786/why-math-max-is-equal-to-infinity-in-es2015
Why Math.max(…[]) is equal to -Infinity in ES2015?
___________________________

*/
//Your code should go here:

