/*
####  Guitar Tuner  ####

Create a function that takes guitar strings as an array of frequencies, starting at the first string (High E) and ending in the sixth string (Low E).
The function must return the display of a tuner for each string, in the same order, as an array.
You can find the frequencies of the strings on the Wikipedia page (check the Resources tab).
_________
*) The guitar strings are played 1st to 6th, High E to Low E.
*) If the guitar string matches or is less than 1 percent off, return "OK" for that guitar string.
*) If it's too low, return ">•" for 1 or 2 percent off (the arrow means, tune up).
*) Return ">>•" if it's way off. For more than 3 percent.
*) If it's too high, return "•<" for 1 or 2 percent, and "•<<" for more, (tune down).
*) Check the rounded percentages.
*) If 0 is given, the guitar string isn't played, return " - ".
_________



[Examples]

_________
tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]
_________



[Notes]

Items in the array will always be numbers.


[algorithms] [arrays] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Guitar Tunings
https://en.wikipedia.org/wiki/Guitar_tunings
Guitar tunings assign pitches to the open strings of guitars, including acoustic guitars, electric guitars, and classical guitars. Tunings are described by the particul …
___________________________
___________________________
How to Calculate Percentage Error
https://www.wikihow.com/Calculate-Percentage-Error
The percentage error is, formally, the magnitude of the difference between an exact and an approximate value divided by the magnitude of the exact value per 100 cases ( …
___________________________

*/
//Your code should go here:

