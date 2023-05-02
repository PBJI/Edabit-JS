/*Metaprogramming: Making a Test Case

You are given two values a and b of identical type: numbers, strings or arrays. The result will be:
_________
*) The sum of a and b if the parameters are numbers.
a = 1 | b = 1 ➞ Result = 2
*) The join in a single string of a and b if the parameters are strings.
a = "1" | b = "1" ➞ Result = "11"
*) The concatenation of the values of a and b in a single array if the parameters are arrays.
a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]
_________

In any case, you don't have to simply return the result. This challenge will be a little different from usual because your function is going to return the same Test Case that verifies the correctness of your function!
When you try to solve a challenge your function is passed to a Test function, that accepts three parameters: your function with its related parameters, the expected result, and an optional comment (not used in this exercise).
There are two different types for a Test function:
_________
Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)
_________

This is used when the value type of the expected result is primitive (numbers, strings, booleans or special values like undefined, null and NaN).
_________
Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)
_________

This is used when the value type of the expected result is an object (arrays or object literals).
You must return a string containing the Test function that verifies the correctness of the result that you got. See the examples below for a better explanation.


[Examples]

_________
createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
// Parameters are numbers, so result will be their sum: Test function verifies equality.

createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")'
// Parameters are strings, so result will be their join: Test function verifies equality.

createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
// Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity.
_________



[Notes]

_________
*) When parameters, results or values inside arrays are strings, they need the double quotation marks " around them in the returned string.
*) Look at Tests tab if you need help!
_________



[higher_order_functions] [scope] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
___________________________
___________________________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
___________________________
___________________________
Template literals (Template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "templ …
___________________________
___________________________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
___________________________
*/ 
// Your code should go here:

