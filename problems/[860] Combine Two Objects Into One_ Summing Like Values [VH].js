/*
####  Combine Two Objects Into One, Summing Like Values  ####

Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.
There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.
_________
const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
_________



[Arguments]

_________
*) user1Income (Object) ⁠— an income object for user1
*) user2Income (Object) ⁠— an income object for user2
*) returns: A new object with like values combined
_________



[Challenges]




[objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.assign()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Browser_compatibility
Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
___________________________

*/
//Your code should go here:

