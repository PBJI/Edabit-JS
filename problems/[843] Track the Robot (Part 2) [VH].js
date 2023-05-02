/*
####  Track the Robot (Part 2)  ####

This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
_________
*) 20 steps North, now at (0, 20)
*) 30 steps East, now at (30, 20)
*) 10 steps South. now at (30, 10)
*) 40 steps West, now at (-10, 10)
_________

...and will end up at coordinates (-10, 10).


[Examples]

_________
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.
_________



[Notes]

Each movement is an integer (whole number).


[conditions] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
___________________________
How to remove all the odd indexes (eg: a[1],a[3]..) value from the array
https://stackoverflow.com/questions/38827966/how-to-remove-all-the-odd-indexes-eg-a1-a3-value-from-the-array
I have an array like var aa = ["a","b","c","d","e","f","g","h","i","j","k","l"]; I wanted to remove element which is place on even index. so ouput will be line aa = ["a …
___________________________
___________________________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
___________________________
___________________________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows us to represent an indefinite number of arguments as an array.
___________________________

*/
//Your code should go here:

