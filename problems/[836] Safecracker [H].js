/*
####  Safecracker  ####

Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:

Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.


[Step-By-Step Example]

_________
safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]

Starting dial position of 0 (same as the diagram above).

First turn (rightward) of 3 increments:
0 -> 99, 98, 97
First number of combination = 97

Second turn (leftward) of 10 increments:
97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
Second number of combination = 7

Third turn (rightward) of 5 increments:
7 -> 6, 5, 4, 3, 2
Third number of combination = 2

The final combination is [97, 7, 2]
_________



[Other Examples]

_________
safecracker(96, [54, 48, 77]) ➞ [42, 90, 13]

safecracker(43, [51, 38, 46]) ➞ [92, 30, 84]

safecracker(4, [69, 88, 55]) ➞ [35, 23, 68]
_________



[Notes]

Each of the three combination numbers will be different.


[arrays] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
___________________________
___________________________
The JavaScript Modulo Bug
https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
Does not return the correct value for negative numbers.
___________________________
___________________________
A Neat Trick to Compute Modulo of Negative Numbers
https://maurobringolf.ch/2017/12/a-neat-trick-to-compute-modulo-of-negative-numbers/
Most arithmetical operations in code are different from their mathematical counterparts. They do not behave exactly the same way. Some differences can be subtle like fl …
___________________________
___________________________
A Neat Trick to Compute Modulo of Negative Numbers
https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e
In JavaScript, the specification says that a negative number modulo a positive one yields a negative remainder. That means we cannot directly use % to create the wrap-a …
___________________________

*/
//Your code should go here:

