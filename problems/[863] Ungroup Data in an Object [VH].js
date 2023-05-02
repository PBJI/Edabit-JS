/*
####  Ungroup Data in an Object  ####

You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.


[Example]

_________
ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
_________



[Notes]

N/A


[arrays] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() f …
___________________________
___________________________
for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and use …
___________________________

*/
//Your code should go here:

