/*
####  Apocalyptic Numbers  ####

A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s (666 being the presumptive "number of the beast").
Create a function that takes a number n as input. If the number is apocalyptic, find the index of 666 in 2^n, and return "Repent! X days until the Apocalypse!" (X being the index). If not, return "Crisis averted. Resume sinning.".


[Examples]

_________
apocalyptic(109) ➞ "Crisis averted. Resume sinning."

apocalyptic(157) ➞ "Repent! 9 days until the Apocalypse!"
// 2^157 -> 182687704666362864775460604089535377456991567872
// 666 at 10th position (index 9)

apocalyptic(175) ➞ "Crisis averted. Resume sinning."

apocalyptic(220) ➞ "Repent! 6 days until the Apocalypse!"
_________



[Notes]

N/A


[math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
A built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number prim …
___________________________
___________________________
Array.prototype.indexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
___________________________
___________________________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
___________________________

*/
//Your code should go here:

