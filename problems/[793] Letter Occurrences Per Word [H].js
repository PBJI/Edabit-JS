/*
####  Letter Occurrences Per Word  ####

Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.


[Examples]

_________
findOccurrences("Hello World", "o") ➞ {
  "hello" : 1,
  "world" : 1
}

findOccurrences("Create a nice JUICY function", "c") ➞  {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
}

findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}
_________



[Notes]

_________
*) The function shouldn't be case sensitive.
*) Words in the dictionary should be in lowercase.
*) You may be required to find punctuation.
*) Duplicate words should be ignored (see example #3 for the word "an").
_________



[algorithms] [arrays] [data_structures] 



-------------------------------------------------------------------
[Resources]
___________________________
How to create an object from an array?
https://stackoverflow.com/questions/42974735/create-object-from-array
I want to create object from list of array. I have an array which is dynamic which suppose to be look like this: var dynamicArray = ["2007", "2008", "2009", "2010"]; an …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
___________________________

*/
//Your code should go here:

