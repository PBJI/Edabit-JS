/*
####  How Many Unique Styles?  ####

There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.


[Examples]

_________
uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
]) ➞ 7
_________



[Notes]

N/A


[arrays] [functional_programming] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
The size accessor property returns the number of (unique) elements in a Set object.
___________________________
___________________________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
___________________________
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
___________________________
___________________________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
___________________________
___________________________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
String.prototype.trim()
https://medium.com/@ugwuraphael/javascript-properties-and-methods-string-prototype-trim-7806d765188#:~:text=The%20trim()%20method%20is,and%20line%20feed%20(LF).
Used to remove white space and from both ends of a string (white space meaning characters like space, tab, no-break space and so on). It also removes line terminator ch …
___________________________
___________________________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
___________________________

*/
//Your code should go here:

