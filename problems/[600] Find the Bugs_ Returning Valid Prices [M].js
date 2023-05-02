/*Find the Bugs: Returning Valid Prices

There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.
The return value should be a Boolean.


[Examples]

_________
hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true

hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false

hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true

hasValidPrice({ "product": "Cereals", price: "3.0" }) ➞ false

hasValidPrice() ➞ false
_________



[Notes]

Run the tests first to see the results before making changes and understand why eggs is returning 0 and flour is returning undefined.
Why is eggs 0?
.denruter si 0 erofereht os ,ecirp.tcudorp ta eulav yslaf a si 0 .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehW (https://www.textreverse.com)
Why is flour undefined?
.denruter si denifednu erofereht os ,denifednu si ecirp.tcudorp .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehw ,ereh emaS (https://www.textreverse.com)


[bugs] [conditions] [control_flow] [logic] 



-------------------------------------------------------------------
[Resources]
___________________________
typeof Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
___________________________
___________________________
&& and || logical operators
https://blog.usejournal.com/mastering-javascripts-and-logical-operators-fd619b905c8f
It is a common misconception that, by themselves, using the AND && or the OR || operators should always return true or false. This is NOT the case, and in this short po …
___________________________
___________________________
Text Reverse
https://www.textreverse.com
Type some text and let us reverse it for you. The perfect site for bored people.
___________________________
*/ 
// Your code should go here:

