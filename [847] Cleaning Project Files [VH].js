/*
####  Cleaning Project Files  ####

You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is located in the same folder.
To clean it up, you've decided that you will use one of two organization methods.

Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). A folder is a grouping of files in the same array.


[Examples]

_________
// Sorting by project name (ex1 and ex2)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") ➞ [
  ["ex1.html", "ex1.js"],
  ["ex2.html", "ex2.js"]
]

// Sorting by extension (.html and .js)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") ➞ [
  ["ex1.html", "ex2.html"],
  ["ex1.js", "ex2.js"]
]

cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") ➞ [
  ["music_app.js", "music_app.png", "music_app.wav"],
  ["tetris.png", "tetris.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
  ["_1.rb"], ["_2.rb"],
  ["_3.rb"], ["_4.rb"]
]
_________



[Notes]

Keep elements in the same relative order.


[regex] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
___________________________

*/
//Your code should go here:

