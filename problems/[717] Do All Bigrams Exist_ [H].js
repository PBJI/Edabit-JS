/*Do All Bigrams Exist?

You are given an input array of bigrams, and an array of words.
Write a function that returns true if every single bigram from this array can be found at least once in an array of words.


[Examples]

_________
canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
_________



[Notes]

_________
*) A bigram is string of two consecutive characters in the same word.
*) If the array of words is empty, return false.
_________



[higher_order_functions] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
What is bigram?
https://stackoverflow.com/questions/43463792/what-is-the-difference-between-bigram-and-unigram-text-features-extraction
n-gram is basically a set of occurring words within a given window so when n=1 it is Unigram. n=2 it is bigram. n=3 it is trigram, and so on. Now suppose a machine trie …
___________________________
___________________________
String.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
Determines whether one string may be found within another string, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
String.prototype.search()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Executes a search for a match between a regular expression and this String object.
___________________________
*/ 
// Your code should go here:

