/*Minimal IX: This or That

Check the principles of minimalist code in the intro to the first challenge.
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
Write a function that returns the first truthy argument passed to the function. If all arguments are falsy, return the string "not found". The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.


[Tips]

The logical OR operator || can be used to assign or return the first truthy value among two or more elements. If no truthy value is found, the last element will be returned.
For example, the code:
_________
function oneOfThese(a, b, c) {
    if (a) return a;
    else if (b) return b;
    else return c;
}       
_________

Can be simplified to:
_________
const oneOfThese = (a, b, c) => a || b || c;
_________



[Bonus]

Once a truthy value is found, the rest of the elements will not be checked. This can be used to define a sort of default value that will be returned if all of the previous elements happen to be false or empty:


[Notes]

This challenge is translated from Alessandro Manicone's "Minimal Series". The following are his comments and link to the series:
_________
*) This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
*) Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
*) You can find all the exercises in this series over here.
_________



[conditions] [language_fundamentals] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
Logical OR (||)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
For a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean v …
___________________________
___________________________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
___________________________
*/ 
// Your code should go here:

