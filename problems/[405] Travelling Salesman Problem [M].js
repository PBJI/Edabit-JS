/*Travelling Salesman Problem

A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
If we have cities A, B and C, possible paths would be:
_________
A -> B -> C
A -> C -> B
B -> A -> C
B -> C -> A
C -> B -> A
C -> A -> B
_________

... which gives us 6 as the possible number of paths.


[Examples]

_________
paths(4) ➞ 24

paths(1) ➞ 1

paths(9) ➞ 362880
_________



[Notes]

_________
*) Inspired by a video from Dr. Peter Uelkes.
*) This challenge is describing a factorial.
_________



[algorithms] [logic] [math] [recursion] 



-------------------------------------------------------------------
[Resources]
___________________________
Three Ways to Factorialize a Number
https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
The factorial of a non-negative integer n can be a tricky algorithm. In this article, I’m going to explain three approaches, first with the recursive function, second u …
___________________________
___________________________
Direct Sampling vs Simulated Annealing
https://www.youtube.com/watch?v=2iBR8v2i0pM&index=5&list=PLlnnSiqU0W2SuojKlqQ0yxowK9VqeQKmF
Demo of interactive simulation of two different algorithms solving the Travelling Salesman Problem.
___________________________
___________________________
Recursion in JavaScript
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
___________________________
___________________________
Traveling Salesman Number of Possible Routes
https://math.stackexchange.com/questions/1726052/traveling-salesman-number-of-possible-routes
The traveling salesman problem with 𝑛 cities has (𝑛−1)!/2 routes. It is (𝑛−1)! instead of 𝑛! because it does not matter in which city you start.
___________________________
___________________________
Factorialize a Number
https://stackoverflow.com/a/32148163
I'm taking the freecodecamp course one of the exercises it's to create a Factorialize function, I know there are several ways to do it just not sure what this one keeps …
___________________________
*/ 
// Your code should go here:

