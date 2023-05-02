/*RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}

Quantifiers indicate numbers of characters or expressions to match.
_________
x{n}
_________

Where n is a positive integer, matches exactly n occurrences of the preceding item x.
_________
"candy".match(/a{2}/) ➞ null
"caandy".match(/a{2}/) ➞ "aa"
_________

_________
x{n,}
_________

Where n is a positive integer, matches at least n occurrences of the preceding item x.
_________
"candy".match(/a{2,}/) ➞ null
"caandy".match(/a{2,}/) ➞ "aa"
"caaaaaandy".match(/a{2,}/) ➞ "aaaaaa"
_________

_________
x{n,m}
_________

Where n is 0 or a positive integer, m is a positive integer, and m > n, matches at least n and at most m occurrences of the preceding item x.
_________
"cndy".match(/a{1,3}/) ➞ null
"candy".match(/a{1,3}/) ➞ "a"
"caandy".match(/a{1,3}/) ➞ "aa"
"caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"
_________

Create a RegExp to find ellipsis: 3 (or more?) dots in a row. Use one of the 3 quantifiers above in your solution.
_________
"Hello!... Wait. How goes?..... GoodBye!..".match(/REGEXP/g) ➞ "..., ....."
_________



[Notes]

Check out the Resources tab if you get stuck.


[regex] 



-------------------------------------------------------------------
[Resources]
___________________________
Quantifiers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
Quantifiers indicate numbers of characters or expressions to match.
___________________________
___________________________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
___________________________
___________________________
Quantifiers
https://javascript.info/regexp-quantifiers
Let’s say we have a string like +7(903)-123-45-67 and want to find all numbers in it. But unlike before, we are interested not in single digits, but full numbers: 7, 90 …
___________________________
___________________________
Ellipsis
https://www.grammarly.com/blog/ellipsis/
Are three periods in row that show that something has been left out. Learn how to properly use to impove your writing today.
___________________________
*/ 
// Your code should go here:

