/*Promises III: Native Promise, Introducing the Executor

Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.
The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:
_________
let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})
_________

setTimeout is a browser API that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.
Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.


[Notes]

Check the Resources tab for more info on promises.


[functional_programming] [interview] 



-------------------------------------------------------------------
[Resources]
___________________________
JS Promise (Part 1 - Basics)
https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53
One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operation …
___________________________
___________________________
Promise Basics
https://javascript.info/promise-basics
To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes …
___________________________
___________________________
Promise Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Constructor
Represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
___________________________
___________________________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
___________________________
___________________________
setTimeout() Method
https://www.w3schools.com/jsref/met_win_settimeout.asp
Calls a function or evaluates an expression after a specified number of milliseconds
___________________________
___________________________
Understanding JavaScript Promises in Simple English
https://www.youtube.com/watch?v=YiYtwbnPfkY
Understanding JavaScript promises in simple english.
___________________________
*/ 
// Your code should go here:

