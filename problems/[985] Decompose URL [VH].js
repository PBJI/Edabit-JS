/*
####  Decompose URL  ####

Create a function named that takes a string (URL) as input. Decompose the string and return an object with the following properties:
_________
*) protocol: This is the url protocol (e.g. "http").
*) ipAdress: Should contain IP address (if valid) of URL or null.
*) subDomain: Should contain subDomain of URL (e.g. "www" or null).
*) domainName: Should contain domain without subDomain (e.g. "google.com" or null).
*) folderTree: Should contain an array of folders (e.g. "www.google.com/test/image/index.html" ➞ ["test", "image"] or null)
*) targetFile: Should return targeted file.
e.g. 1. "www.google.com/test/image" ➞ "image"
e.g. 2. "www.google.com/test/index.html" ➞ "index.html" or null
*) argumentsFile: Should return arguments of targetedFile.
e.g. "www.google.com/test/image?search=ok" ➞ "?search=ok" or null
_________



[Examples]

_________
decomposeUrl("https://www.google.com/search/test.js?ok=1") ➞ {
  protocol: "https",
  ipAdress: null,
  subDomain: "www",
  domainName: "google.com",
  folderTree: (1) […],
  targetFile: "test.js",
  argumentsFile: "?ok=1"
}

decomposeUrl("https://edabit.com/new/challenge") ➞ {
  protocol: "https",
  ipAdress: null,
  subDomain: null,
  domainName: "edabit.com",
  folderTree: (1) […],
  targetFile: "challenge",
  argumentsFile: null
}

decomposeUrl("https://edabit.com/new/challenge/test.html") ➞ {
  protocol: "https",
  ipAdress: null,
  subDomain: null,
  domainName: "edabit.com",
  folderTree: (2) […],
  targetFile: "test.html",
  argumentsFile: null
}
_________



[Notes]

N/A


[conditions] [loops] [objects] [regex] 



-------------------------------------------------------------------
[Resources]
___________________________
Regexp Tester
https://regex101.com/
Match your regular expressions.
___________________________

*/
//Your code should go here:

