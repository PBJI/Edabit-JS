/*Assign Person to Occupation

You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.



[Example]

_________
const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

assignPersonToJob(names, jobs) ➞ {
  Dennis: "Butcher",
  Vera: "Programmer",
  Mabel: "Doctor",
  Annette: "Teacher",
  Sussan: "Lecturer"
}
_________



[Notes]

_________
*) The two arrays have the same length.
*) The index of a name in the names array is the same as the index of the person's job in the jobs array, as shown in the table above.
*) Check Resources for some useful information that can help with this challenge.
_________



[data_structures] 



-------------------------------------------------------------------
[Resources]
___________________________
Creating an Object From Two Arrays
https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
A few different approaches to creating an object from two arrays.
___________________________
___________________________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
Working With Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. …
___________________________
___________________________
How to Combine 2 Arrays Into 1 Object
https://www.tutorialspoint.com/how-to-combine-2-arrays-into-1-object-in-javascript
Let’s say, we have two arrays of equal lengths and are required to write a function that maps the two arrays into an object. The corresponding elements of the first arr …
___________________________
___________________________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
___________________________
*/ 
// Your code should go here:

