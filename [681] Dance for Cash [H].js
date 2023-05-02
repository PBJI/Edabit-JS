/*Dance for Cash

Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.
Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.


[Examples]

_________
danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

danceConvert("32a1") ➞ "Invalid input."
_________



[Notes]

_________
*) Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
*) Valid input will always be a string of four digits. Output will be a string array.
*) If the input is not four valid numbers, return the string, "Invalid input."
_________



[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
___________________________
___________________________
TypedArray.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map
Creates a new typed array with the results of calling a provided function on every element in this typed array. This method has the same algorithm as Array.prototype.ma …
___________________________
___________________________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
___________________________
*/ 
// Your code should go here:

