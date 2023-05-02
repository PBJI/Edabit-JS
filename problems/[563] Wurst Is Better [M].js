/*Wurst Is Better

Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.



[Rules]

_________
*) Append sausages from the "Convert to Wurst" column with "wurst".
*) Do not replace any German sausage with the word "Wurst".
*) The word "Wurst" must be title case.
_________



[Examples]

_________
wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"

wurstIsBetter("sich die Wurst vom Brot nehmen lassen") ➞ "sich die Wurst vom Brot nehmen lassen"

wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"
_________



[Notes]

All German sausage names contain the word "wurst".


[regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
___________________________
___________________________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
___________________________
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in this array.
___________________________
___________________________
Variable in Regular Expression
https://stackoverflow.com/questions/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression
This will tell you how to put variables in a Regular Expression.
___________________________
___________________________
Build, Test, and Debug Regex
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java, C#/.NET.
___________________________
___________________________
Convert Your Text List to Array
https://arraythis.com/
Instantly convert your text list to array using arrayThis online tool; valid arrays for JS, PHP, PERL, Python and much more.
___________________________
*/ 
// Your code should go here:

