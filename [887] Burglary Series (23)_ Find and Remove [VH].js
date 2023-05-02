/*
####  Burglary Series (23): Find and Remove  ####

The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.
You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.


[Examples]

_________
findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  }) ➞ {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  }
_________

_________
 findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }) ➞ {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 550,
    },
    cellar: {
      bottle: 750,
    },
  }
_________



[Notes]

_________
*) The type of NaN is actually number.
*) If you have suggestions on how to present or further test this challenge please leave a comment.
*) This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
_________



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
JavaScript Convert String to Number
https://stackabuse.com/javascript-convert-string-to-number/
Managing data is one of the fundamental concepts of programming. Converting a Number to a String is a common and simple operation. The same goes for the other way aroun …
___________________________
___________________________
Number.isNaN() Method
https://www.w3schools.com/jsref/jsref_isnan_number.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false.
Number.isNaN() is different from the global isNaN()  function. The global isNaN()  function converts the tested value to a Number, then tests it.
___________________________
___________________________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
___________________________

*/
//Your code should go here:

