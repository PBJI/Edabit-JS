/*Radioactive Decay

A half life is the amount of time for half of a radioactive substance to decay.
_________
*) After 1 half life, 50% of a substance will be left.
*) After 2 half lives, 25% of a substance will be left.
*) After 3 half lives, 12.5% of a substance will be left, etc...
_________

Create a function which calculates the remaining mass and the number of years that it took for the substance to decay. You will be given:
_________
*) The mass of the substance.
*) The time in years for a halflife to elapse.
*) The number of half lives.
_________



[Worked Example]

_________
halflifeCalculator(1000, 5730, 2) ➞ [250, 11460]

// There are 2 half lives, so the mass decays from 1000 to 500, then from 500 to 250.
// Each halflife is 5730 years, and since there were 2, it took 11460 years in total.
_________



[Examples]

_________
halflifeCalculator(1600, 6, 3) ➞ [200, 18]

halflifeCalculator(13, 500, 1) ➞ [6.5, 500]

halflifeCalculator(100, 35, 5) ➞ [3.125, 175]
_________



[Notes]

_________
*) Round the final mass to three decimal places.
*) All inputs are positive numbers.
*) Return the final mass first, then the number of years.
_________



[math] [physics] 



-------------------------------------------------------------------
[Resources]
___________________________
Half-Lives and Radioactive Decay Kinetics
https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics
The half-life of a first-order reaction under a given set of reaction conditions is a constant. This is not true for zeroth- and second-order reactions. The half-life o …
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
While Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
___________________________
___________________________
Assignment Operators
https://www.w3schools.com/js/js_assignment.asp
Assign values to JavaScript variables.
___________________________
___________________________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
___________________________
___________________________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
___________________________
*/ 
// Your code should go here:

