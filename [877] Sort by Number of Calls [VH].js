/*
####  Sort by Number of Calls  ####

Create a function that takes a list of functions and sorts them in ascending order based on how many calls are needed for them to return a non-function.


[Examples]

_________
f1 = _ => "hello"
// f1() ➞ "hello"

f2 = _ => _ => "edabit"
// f2()() ➞ "edabit"

f3 = _ => _ => _ => "user"
// f3()()() ➞ "user"

funcSort([f2, f3, f1]) ➞ [f1, f2, f3]
// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f1, f2, f3]) ➞ [f1, f2, f3]
// [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f2, "func"]) ➞ ["func", f2]
// [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]
_________



[Notes]

_________
*) Treat non-functions as needing zero calls.
*) Every function will be called with empty parameters.
*) Every function will need to be called at least once.
*) The potentially returned values include Numbers, Booleans, and Strings, among others.
_________



[closures] [functional_programming] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
___________________________
___________________________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
Arrow Function Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
A syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow fun …
___________________________

*/
//Your code should go here:

