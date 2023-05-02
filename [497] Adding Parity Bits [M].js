/*Adding Parity Bits

Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:
_________
*) If a binary string has an odd number of 1's, the parity bit is a 1.
*) If a binary string has an even number of 1's, the parity bit is a 0.
*) The parity bit is appended to the end of the binary string.
_________

Create a function that adds the correct parity bit to a binary string.


[Examples]

_________
addParityBit("1011011") ➞ "10110111"
// There are five 1's.
// Since five is odd, the parity bit should be a 1.
// Add the parity bit to the end of the string.
// Return the result.

addParityBit("0110000") ➞ "01100000"

addParityBit("0101101") ➞ "01011010"

addParityBit("1111111") ➞ "11111111"
_________



[Notes]

All inputs will be 7-bits long (so that the parity bit makes it a full byte).


[logic] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
___________________________
___________________________
Array push() Method
https://www.w3schools.com/jsref/jsref_push.asp
Adds new items to the end of an array, and returns the new length.
___________________________
___________________________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
___________________________
___________________________
String.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
___________________________
*/ 
// Your code should go here:

