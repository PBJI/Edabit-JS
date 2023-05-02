/*Burglary Series (19): Prevent Changes

The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.
This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.


[Examples]

_________
const obj = { noChanges: true }

preventChanges(obj) {
  // Write your code here, don't use a return statement

  obj.noChanges = false;
  obj.signature = "whatever"
  return obj;

}  ➞ { noChanges: true }
_________



[Notes]

_________
*) If you have suggestions on how to present or further test this challenge please leave me a comment. Thanks!
*) This series is part of a collection that focuses on objects. If you are interested in following the breathtaking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
_________



[logic] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.freeze()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
Freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, …
___________________________
___________________________
Object.freeze() Method
https://appdividend.com/2019/03/15/javascript-object-freeze-example-object-freeze-tutorial/
Freezes an object. A frozen object can no longer be changed.
___________________________
*/ 
// Your code should go here:

