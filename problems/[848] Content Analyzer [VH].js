/*
####  Content Analyzer  ####

Create a function that takes a string and returns an object. The returned object will have a common property for all detected type content named contentType the possible values for this property are "HTML", "CSS", "TEXT".
_________
*) Your function should be able to detect HTML and CSS else it's just TEXT.
*) If you detect HTML the returned object will have a special property named "tags". "tags" is an object with all content tags name and how many times these tags were called in content (see example #3).
*) If you detect CSS, your returned object will have a special property named cssTargets. cssTargets is an object with all content targets name and how many times these tags were called in content (see example #2).
*) If you don't detect HTML or CSS, the content is detected as TEXT and object will have a special property named lineNumber (see example #1).
_________



[Examples]

_________
analyzeContent("this is a test\nSeems to work")
➞ { contentType: "TEXT", lineNumber: 2 }

analyzeContent("body{blabla} a{color:#fff} a{ padding:0}")
➞ { contentType: "CSS", cssTargets: { body: 1, a: 2 } }

analyzeContent("<html><div></div><div></div></html>")
➞ { contentType: "HTML", tags: { html: 1, div: 2 } }
_________



[Notes]

_________
*) If HTML content has been detected the returned object couldn't have cssTargets property and lineNumber property and that's same for type of detection. Only the common proprety contentType stay inside the returned object.
*) <!DOCTYPE html> and comments shoudn't be detected.
*) The content can be minified or not as needed.
_________



[conditions] [objects] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.search()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Executes a search for a match between a regular expression and this String object.
___________________________
___________________________
Object Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Ty …
___________________________
___________________________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
___________________________

*/
//Your code should go here:

