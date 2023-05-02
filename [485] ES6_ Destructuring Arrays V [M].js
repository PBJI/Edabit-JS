/*ES6: Destructuring Arrays V

ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.
_________
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)

parseURL("https://developer.mozilla.org/en-US/Web/JavaScript")
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
_________

From the parsedURL result you could assign these segments using ES6 array destructuring.


[Challenge]

_________
*) Assign the variables protocol, host, path inside the brackets of the given string.
*) Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.
_________



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
___________________________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
___________________________
___________________________
ES6 In Depth: Destructuring
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the ECMAScript standard, ES6 for short. Editor’s note: …
___________________________
*/ 
// Your code should go here:

