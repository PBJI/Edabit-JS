/*Promises I: What Is a Closure?

Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
_________
function parent(x) {
  return function closure() {    // Closure is declared here.
    return x
  }
}

const remember = parent("remembers me")
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure()
// Returns "remembers me" because the inner
// function remembers x.
_________

_________
*) Fix the greetingMaker() function so that it works with the greeting() function.
*) The greeting() function has already been created (check the Tests tab).
_________



[Example]

_________
const greeting = greetingMaker("Hello")
greeting("James") ➞ "Hello, James"
_________



[Notes]

Check the Resources tab for more info on closures.


[closures] [functional_programming] 



-------------------------------------------------------------------
[Resources]
___________________________
A Beginner’s Guide to Understanding JavaScript Closures
https://itnext.io/a-beginners-guide-to-understanding-javascript-closures-b5eb57fdbeb4
Closures are one of those topics that will pop up in most JavaScript interviews. Developers who are just starting out are usually scared of them (I know I was), but the …
___________________________
___________________________
I Never Understood Javascript Closures
https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
JavaScript closures have always been a bit of a mystery to me. I have read multiple articles, I have used closures in my work, sometimes I even used a closure without r …
___________________________
___________________________
Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
The combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access …
___________________________
___________________________
Understanding Closures
https://dev.to/hamzanadeem1996/understanding-closures-in-javascript-1d24
JavaScript closures were always hard to understand because of the way they are explained. The closure is one of the most important core concepts of JavaScript.
___________________________
*/ 
// Your code should go here:

