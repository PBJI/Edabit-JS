/*Burglary Series (20): Sign Your Name

The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...
This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.


[Examples]

_________
const obj = { yourSignature: "" };

signYourName( obj ) {
  // write your code here


  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} ➞ { yourSignature: "Whatever" }
_________



[Notes]

_________
*) If you have suggestions on how to present or further test this challenge please leave a comment.
*) This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
_________



[objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.freeze() vs Object.seal() vs Object. preventExtensions()
https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
ECMAScript 5 introduced new Object methods to Javascript. Among them Object.freeze(), Object.seal(), Object.preventExtensions() methods will be discussed in comparison …
___________________________
___________________________
Object.seal()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be cha …
___________________________
___________________________
Object.preventExtensions()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
Prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).
___________________________
___________________________
Object Constructor
https://medium.com/better-programming/javascripts-object-constructor-preventing-changes-and-getting-entries-1d27882c19f3
Lets us create an object wrapper with the given values. It will create an empty object if null or undefined is passed into the Object constructor. The Object…
___________________________
*/ 
// Your code should go here:

