/*
####  Headline Hash Tags  ####

Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.


[Examples]

_________
getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]
_________



[Notes]

_________
*) If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
*) Punctuation does not count towards a word's length.
_________



[regex] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
___________________________
___________________________
How to remove all special characters except space from a string?
https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
I want to remove all special characters except space from a string using JavaScript. For example, abc's test#s should output as abcs tests.
___________________________
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
Is there a short way to find the longest string in a string array?
https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
Probably more efficient, but only available since Javascript 1.8/ECMAScript 5 and not available by default in older browsers.
___________________________
___________________________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
___________________________
___________________________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a …
___________________________
___________________________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
___________________________

*/
//Your code should go here:

