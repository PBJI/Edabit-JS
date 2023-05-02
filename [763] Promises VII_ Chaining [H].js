/*
####  Promises VII: Chaining  ####

then() functions return a new promise, different from the original. Since catch functions are actually then() functions behind the scenes, they also return new promises. So if that's true then you could do something like this:
_________
new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
})
.then(() => {
    throw new Error("Something failed");
    console.log("Do this");
})
.catch(() => {
    console.error("Do that");
})
.then(() => {
    console.log("Do this, no matter what happened before");
});

// logs
Initial
Do that
Do this, no matter what happened before
_________

The text "Do this" is not displayed because the "Something failed" error caused a rejection.
The last then() call in the function doSomething() should log in my main call something but logs undefined instead. Find out what's wrong with the code and fix it. You will see two logs in my function something, this is not an error. This is from the test. Do not remove any then() or catch() functions


[Notes]

_________
*) Do not overthink this!
*) Check the Resources tab if you get stuck.
_________



[functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
Spoiler Alert: Challenge solved here!
https://stackoverflow.com/questions/43570333/promise-chaining-with-functions
I am trying to use promises for a small new project. But I have some problems with understanding how I could organize my code better, with functions. Problem is, I want …
___________________________
___________________________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
An object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
___________________________

*/
//Your code should go here:

