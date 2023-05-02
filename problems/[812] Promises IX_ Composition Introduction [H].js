/*
####  Promises IX: Composition Introduction  ####

The built-in javascript Promise object has several methods you can use to compose your asynchronous operations. The Promise.resolve() function takes either a value or a promise.
_________
var original = Promise.resolve(33)
var cast = Promise.resolve(original)
cast.then(function(value) {
  console.log('value: ' + value)
})
_________

So what is going on here?

One other thing Promise.resolve() does is that it will cast anything that might be a promise(ie. thenables) to a native Javascript Promise. This is generally the use case for it.
Use a Promise method to turn the thenable object into a native promise and assign it to the promise variable. Assign the fulfilled value to the result variable.


[Notes]

Check out the Resources tab if you get stuck.


[functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
Promise.resolve()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
Returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method) …
___________________________
___________________________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
___________________________

*/
//Your code should go here:

