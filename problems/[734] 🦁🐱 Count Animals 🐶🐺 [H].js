/*
####  🦁🐱 Count Animals 🐶🐺  ####

Mubashir needs your help to find out number of animals hidden in a given string txt.
You are provided with an array of animals given below:
_________
animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]
_________

Rule: Return the maximum number of animal names. See the below example:
_________
txt = "goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog"
// Remaining string = "atcoe",
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code",
// no animal will be found during next time.
// count = 1 (wrong)
_________



[Examples]

_________
countAnimals("goatcode") ➞ 2
// "dog", "cat"

countAnimals("cockdogwdufrbir") ➞ 4
// "cow", "duck", "frog", "bird"

countAnimals("dogdogdogdogdog") ➞ 5
_________



[Notes]

N/A


[language_fundamentals] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
___________________________
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
___________________________
___________________________
Regex
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java. Features a regex quiz & library.
___________________________
___________________________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
___________________________
___________________________
Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you acc …
___________________________
___________________________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
___________________________

*/
//Your code should go here:

