/*
####  Promises VI: Catch  ####

We handle resolve callbacks with then, but what about reject callbacks? We have a catch function that we can use to handle errors or rejected promises. It is generally a good idea to have an error handler at the end of your promises.


[Challenge]

_________
*) Write an error handler for the provided promise. Re-assign errorLog to the error inside your error handler.
*) The error handler must be added to the original promise. So you can't do promise.catch(/error handling/). See the Comments for more details.
_________



[Notes]

Check the Resources tab for more info on promises.


[functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
An object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
___________________________
___________________________
Promise.prototype.catch()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
Returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) ...
___________________________
___________________________
JS Promise (Part 1 - Basics)
https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53
One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operation …
___________________________
___________________________
Error() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
Creates an error object.
___________________________

*/
//Your code should go here:

