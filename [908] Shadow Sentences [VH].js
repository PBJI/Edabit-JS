/*
####  Shadow Sentences  ####

Given two sentences, return whether they are shadows of each other. This means that all of the word lengths are the same, but the corresponding words don't share any common letters.


[Examples]

_________
shadowSentence("they are round", "fold two times") ➞ true

shadowSentence("own a boat", "buy my wine") ➞ false
// No words share common letters, but "a" and "my" have different lengths.

shadowSentence("his friends", "our company") ➞ false
// Word lengths are the same but "friends" and "company" share the letter "n".

shadowSentence("salmonella supper", "birthright") ➞ false
// Setences with different numbers of words.
_________



[Notes]

_________
*) All sentences will be given in lowercase, and will have no punctuation.
*) Return false if the sentences have different numbers of words.
_________



[loops] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
___________________________
___________________________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) …
___________________________

*/
//Your code should go here:

