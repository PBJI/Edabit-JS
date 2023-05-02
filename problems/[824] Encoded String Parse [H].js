/*
####  Encoded String Parse  ####

Create a function which takes in an encoded string and returns an object according to the following example:


[Examples]

_________
parseCode("John000Doe000123") ➞ {
  firstName: "John",
  lastName: "Doe",
  id: "123"
}

parseCode("michael0smith004331") ➞ {
  firstName: "michael",
  lastName: "smith",
  id: "4331"
}

parseCode("Thomas00LEE0000043") ➞ {
  firstName: "Thomas",
  lastName: "LEE",
  id: "43"
}
_________



[Notes]

_________
*) The string will always be in the same format, first name, last name and id with zeros between them.
*) id numbers will not contain any zeros.
*) Bonus: Try solving this without RegEx.
_________



[formatting] [objects] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
___________________________
___________________________
Working with Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. …
___________________________

*/
//Your code should go here:

