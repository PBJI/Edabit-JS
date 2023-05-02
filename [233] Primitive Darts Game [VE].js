/*Primitive Darts Game

Darts is a target game played by throwing feathered darts at a circular board with numbered spaces. Our darts game is the simplest of all games. The score of a single turn is calculated based on the distance from the middle. You need to create a function that takes the dart location as two cartesian coordinates (x, y) and returns a score based on the distance from the middle, aka Bullseye (x=0, y=0).
_________
*) Bullseye and inner circle scores = 10 points
*) Middle ring scores = 5 points
*) Outer ring scores = 1 point
*) Outside the target = 0 points
_________

We play it simple so a dart in the double or treble ring counts as usual and does not affect the segment score.
Board and circle radius is as follows:
_________
*) Board radius and outer circle radius = 10 units
*) Middle circle radius = 5 units
*) Inner circle radius = 1 unit
_________



[Short Description]

Convert cartesian coordinates (x, y) to polar coordinates (R, phi) and return score based on the R value. R > 10 gives 0 points, 10 >= R > 5 gives 1 point, 5 >= R > 1 gives 5 points, R <= 1 gives 10 points.


[Examples]

_________
dartsScoring(0, 0) ➞ 10

dartsScoring(3, 2) ➞ 5

dartsScoring(0, -0.8) ➞ 10
_________



[Notes]

_________
*) X, Y values can be both positive and negative.
*) X, Y values can be int and float.
*) No wrong type values will be given.
_________



[conditions] [control_flow] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Distance Between 2 Points
https://www.mathsisfun.com/algebra/distance-2-points.html
When we know the horizontal and vertical distances between two points we can calculate the straight line distance like this ... Imagine you know the location of two poi …
___________________________
___________________________
Math.hypot()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
Returns the square root of the sum of squares of its arguments.
___________________________
___________________________
Converting Cartesian Coordinates to Polar
https://brilliant.org/wiki/convert-cartesian-coordinates-to-polar/
We can place a point in a plane by the Cartesian coordinates (x, \ y),(x, y), a pair of distances from two perpendicular lines: the vertical line (yy-axis) and the hori …
___________________________
___________________________
Polar and Cartesian Coordinates
https://www.mathsisfun.com/polar-cartesian-coordinates.html
In a hurry? Read the Summary. But please read why first. To pinpoint where we are on a map or graph there are two main systems. Using Cartesian Coordinates we mark a po …
___________________________
___________________________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
___________________________
___________________________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
___________________________
*/ 
// Your code should go here:

