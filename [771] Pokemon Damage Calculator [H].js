/*
####  Pokemon Damage Calculator  ####

It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):
_________
damage = 50 * (attack / defense) * effectiveness
_________

_________
*) attack = your attack power
*) defense = the opponent's defense
*) effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
_________

Effectiveness:
Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.
_________
*) Super effective: 2x damage
*) Neutral: 1x damage
*) Not very effective: 0.5x damage
_________

To prevent this challenge from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:
_________
*) fire > grass
*) fire < water
*) fire = electric
*) water < grass
*) water < electric
*) grass = electric
_________

The function you must implement takes in:
_________
*) your type
*) the opponent's type
*) your attack power
*) the opponent's defense
_________



[Examples]

_________
calculateDamage("fire", "water", 100, 100) ➞ 25

calculateDamage("grass", "fire", 35, 5) ➞ 175

calculateDamage("electric", "fire", 100, 100) ➞ 50
_________



[Notes]

Any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).


[conditions] [games] [logic] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
Switch Statement
https://www.w3schools.com/js/js_switch.asp
Used to perform different actions based on different conditions.
___________________________
___________________________
Best way to store a key=>value array in JavaScript?
https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript/1144737
What's the best way to store a key=>value array in javascript, and how can that be looped through? The key of each element should be a tag, such as {id} or just id and …
___________________________
___________________________
JavaScript if/else Statement
https://www.w3schools.com/jsref/jsref_if.asp
Executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
___________________________

*/
//Your code should go here:

