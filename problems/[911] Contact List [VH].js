/*
####  Contact List  ####

Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).


[Examples]

_________
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Erdos (ER) > Euler (EU)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []
_________



[Notes]

_________
*) An array with a single name should be trivially returned.
*) An empty array, or an input of null or undefined should return an empty array.
_________



[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.localeCompare()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences …
___________________________

*/
//Your code should go here:

